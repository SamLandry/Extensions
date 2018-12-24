[{"Owner":"fenomas","Date":"2015-03-27T05:28:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does BJS do any kind of batching when it draws?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For example_co_ if a scene has 1000 meshes that all use material/texture A_co_ and another 1000 meshes that use material/texture B_co_ does it attempt to batch together meshes with a common material? Or just render them in arbitrary order_co_ rebinding textures for every mesh?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_dd_ does scene composition affect this? (e.g. would it depend on whether the meshes had a common parent_co_ or whether they are in the same part of the octree_co_ etc.)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-03-27T09:44:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_AFAIK_co_ no batching is done automatically. Each time the engine renders a mesh_co_ the corresponding material is bound. So if you have 10 different meshes with the same material_co_ you_t_ll have 10 draw calls._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#23QH6N_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#23QH6N_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The SpriteManager class does batch all its sprites into one buffer though._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-27T10:14:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah_co_ I know there are always separate draw calls for each mesh_co_ but I was wondering if BJS tries to (for example) avoid re-binding textures unnecessarily._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-03-27T10:44:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well the StandardMaterial does that here_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Materials/babylon.standardMaterial.ts#L440_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Materials/babylon.standardMaterial.ts#L440_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And the ShaderMaterial here_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Materials/babylon.shaderMaterial.ts#L174_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Materials/babylon.shaderMaterial.ts#L174_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for the order of rendering regarding composition of scene etc._co_ I have no idea._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-27T14:46:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ from doing a simple test it looks like meshes get rendered in the order they were added_co_ regardless of material_co_ parent_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So if I understand correctly_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ * Binding the material is skipped if consecutive meshes _lt_em_gt_happen_lt_/em_gt_ to share a material_lt_/p_gt__lt_p_gt_ * Nothing happens if consecutive meshes use the same texture_co_ it gets re-bound if the material changes_lt_/p_gt__lt_p_gt_ * This info isn_t_t useful for optimization unless perhaps you manually reorder _t_scene.meshes_t__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If that doesn_t_t sound right please let me know_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically I was looking into whether it would be beneficial to pack small textures into an atlas_co_ but it looks like it_t_s not - that would just mean re-binding a large texture every call_co_ rather than a small one._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-03-27T15:26:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wonder if you can effect the order meshes are drawn from outside the frame work by parenting meshes?  If so_co_ an application could parent meshes of similar material.  Not every app could do this._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_At the frame work level_co_ perhaps there might be an optimization you could call to _qt_sort_qt_ meshes by material.  This could be called occasionally by an application thinking they might benefit_co_ but not put any more cpu pressure on_co_ since not attempting to do this in order in the render process._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe put in a enhancement request_co_ _lt_a href_eq__qt_http_dd_//babylonjs.uservoice.com/forums/267546-general_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.uservoice.com/forums/267546-general_lt_/a_gt__co_ or do it yourself &amp_sm_ PR._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-27T15:48:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_76834_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13427_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt_ data-cite_eq__qt_JCPalmer_qt_ data-ipsquote-timestamp_eq__qt_1427469992_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Wonder if you can effect the order meshes are drawn from outside the frame work by parenting meshes? _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nope_co_ like I said they appear to be drawn in the order they appear in scenes.meshes. I didn_t_t test things like submeshes_co_ but parenting doesn_t_t affect this._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Either way_co_ unless I_t_m missing something draw order doesn_t_t affect the case I was hoping to improve (texture atlases)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-27T19:20:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If 100 meshes has the same material you could think about merging them_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Batching is done through the cache has the material will be bind just once thanks to the cache_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But because you have 100 meshes. You need 100 drawcalls_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Options_dd__lt_/p_gt__lt_p_gt_- Merging_lt_/p_gt__lt_p_gt_- Instances?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-28T01:42:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_76866_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13427_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1427484058_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_If 100 meshes has the same material you could think about merging them_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m asking about the case where the meshes can_t_t be joined_co_ of course._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The idea was_co_ if I have 100 meshes with 100 small textures_co_ could I gain performance by stitching the textures into an atlas (thus having 100 meshes that all use the same texture)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And it appears the answer is no - this can only hurt performance. If I_t_m missing anything please let me know..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-28T03:49:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The only gain will be that texture will remain in the cache_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-28T04:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BJS rebinds the texture every time the material changes_co_ doesn_t_t it?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or do you mean cache on the GPU_co_ or somesuch?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-28T14:55:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_if the texture is the same there is NO rebinding_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.engine.ts#L1961_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.engine.ts#L1961_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is cache EVERYWHERE in babylon.js _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-03-28T15:18:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So there might be some utility in sorting meshes_co_ on request_co_ by material.  Probably not a lot_co_ unless you have very many though._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-28T17:07:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_76950_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13427_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1427554545_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_if the texture is the same there is NO rebinding_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.engine.ts#L1961_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.engine.ts#L1961_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is cache EVERYWHERE in babylon.js _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ahhhh_co_ so basically everything is cached_co_ but nothing is batched. Got it!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-30T20:04:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nothing is batched because there is no good optimization as materials are note the same in your case_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-31T02:29:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_77182_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13427_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1427745856_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Nothing is batched because there is no good optimization as materials are note the same in your case_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wait_co_ so does that mean that avoiding texture bind calls isn_t_t worthwhile?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That is_co_ suppose I have a scene with 1000 meshes and two texture atlases. So every mesh has a different material_co_ but they all use one of the two textures. My assumption was that (due to the caching you described) it would be worthwhile for me to sort _qt_scene.meshes_qt_ so as to batch the atlases together. I know it_t_s still 1000 _lt_strong_gt_draw_lt_/strong_gt_ calls either way_co_ but batching would allow texture _lt_strong_gt_bind_lt_/strong_gt_ calls to be skipped (1000 binds in the worst case_co_ 2 in the best case)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is that not correct? Or are texture bind calls so inexpensive (compared to draws) that it doesn_t_t matter?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-31T18:14:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry I wasn_t_t clear _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I meant batching materials is not a good optimization if all meshes have differents materials. If they are sharing materials and textures_co_ the cache will do the batching for you by not setting up things that are already set up_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You are right about the sort.And this is easy to do by just changing objects order in the scene.meshes array _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-01T02:28:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_77367_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13427_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1427825685_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_..batching materials is not a good optimization if all meshes have differents materials. If they are sharing materials and textures_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__co_ the cache will do the batching for you_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_.._lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Err_co_ could be read both ways. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ alt_eq__qt__dd_unsure_dd__qt__gt_  I_t_m asking about the case for meshes which _lt_strong_gt_do not share_lt_/strong_gt_ materials but _lt_strong_gt_do share_lt_/strong_gt_ a single texture. Batching should also be beneficial in this case_co_ right?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-01T18:26:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yes sir!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-04-07T10:14:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m working on a class that will handle automatic batching of separate meshes into one big mesh with a multimaterial. If batched meshes are removed/added_co_ the buffers of the big mesh will be recomputed (meshes will be sorted by material). Something like this_dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// BATCHED MESH USAGEthis.batched_mesh _eq_ new BatchedMesh( _t_ground_static_mesh_t_ )_sm_var mesh _eq_ meshes_from_file[index]_sm_mesh.position.copyFrom(this.position)_sm_mesh.position.y +_eq_ 1.0_sm_this.batched_mesh.injectMesh(mesh)_sm_this.batched_mesh.injectMesh(meshes_from_file[index2])_sm__lt_/pre_gt__lt_p_gt_The main use will be to merge meshes that will not move every frame_co_ but will still be changed from time to time. It_t_s mainly a helper to avoid merging meshes manually when needed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you guys think this may be useful on this topic?_lt_/p_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-07T11:43:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yes !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-07T12:49:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_78088_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13427_qt_ data-ipsquote-username_eq__qt_jahow_qt_ data-cite_eq__qt_jahow_qt_ data-ipsquote-timestamp_eq__qt_1428401651_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The main use will be to merge meshes that will not move every frame_co_ but will still be changed from time to time. It_t_s mainly a helper to avoid merging meshes manually when needed._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is the benefit of merging separate meshes into a large mesh with a multimaterial?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-04-07T13:10:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In the case where all meshes have different materials I_t_m not sure there_t_s a real benefit_co_ at least according to this thread._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m doing it mainly because most of my meshes have the same material. At first I was using instances_co_ but it was still running very slow due to the fact that I had a very large mesh list. I also had thousands of draw calls._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But since it_t_s not very complicated_co_ I made it so the BatchedMesh class produces one mesh with a multimaterial and submeshes_co_ instead of several meshes with a unique material. I_t_m thinking it might be interesting to do a simple benchmarking test (case 1_dd_ one mesh &amp_sm_ multimaterial_co_ case 2_dd_ several meshes &amp_sm_ single material) _co_ and see what_t_s the best solution..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-07T13:53:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ yeah. I_t_ve been doing a lot of testing with that over the past week or two. I_t_m working on a minecraft-style scene full of terrain split up into chunks. For N discrete chunks_co_ each of which has M different parts that require different materials_co_ I_t_ve tried three setups_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. Naive way_dd_ N*M separate chunks and M materials_lt_/p_gt__lt_p_gt_2. Submeshes way_dd_ N meshes_co_ each with M submeshes_co_ the whole scene shares 1 multimaterial (with M submaterials)_lt_/p_gt__lt_p_gt_3. Octree way_dd_ Like the naive way_co_ but adding in a selection Octree with N octree blocks_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unfortunately I wasted about a week working on this because there was a bug in synchronization that greatly affected performance. Now that that_t_s fixed_co_ my profiling results are that 2&amp_sm_3 perform equally_co_ and 1 is significantly slower_co_ mainly due to Scene._evaluateActiveMeshes()._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Stuff I_t_ve learned_dd__lt_/p_gt__lt_p_gt_1. Unless you merge meshes that use the same material_co_ the number of draw calls stays the same no matter what - it doesn_t_t matter whether you use submeshes or multimaterials._lt_/p_gt__lt_p_gt_2. AFAIK the only benefit to using submeshes and multimaterials is that the merged mesh_t_s bounding information is used when determining which objects are visible_co_ very similarly to octrees. This is apparently why my methods 2 &amp_sm_ 3 perform the same._lt_/p_gt__lt_p_gt_3. Basically don_t_t trust the debug layer statistics_sm_ they_t_re pretty misleading unless you dig into the source and check how each one is calculated. For example_co_ _qt_Total meshes_qt_ and _qt_Total vertices_qt_ are not in general related. Total/Active vertices are counting different things as well. It_t_s really confusing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With all that said_co_ my _lt_em_gt_suspicion_lt_/em_gt_ based on this thread is that overall performance could be sped up by using N*M meshes and manipulating the mesh list to group similar materials together. The number of draw calls won_t_t change but material/texture bind could be skipped_co_ as DK described. My other _lt_em_gt_suspicion_lt_/em_gt_ is that using submeshes will kill this benefit - because submeshes that use the same material will in general never be rendered consecutively. I haven_t_t tested these suspicions yet_co_ and probably won_t_t until I do more with texture atlases._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-04-07T14:08:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ thanks for the insight _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ That_t_s impressive work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This probably explains why everytime my scene was killing the FPS_co_ the _t_meshes selection_t_ stat in the debug layer was always the highest..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]