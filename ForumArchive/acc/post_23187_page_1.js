[{"Owner":"gamefan","Date":"2016-06-15T08:58:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again forum_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom the many great features I have learned_co_ I think that render target texture is the best thing I have come across yet. The ability to produce dynamic live reflections is really awesome. But there is one thing that bugs me. And yes_co_ I have a playground too _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NP9BY_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou will see I have added a cube to the reflection and refraction playground. While the reflection in the sphere looks realistic_co_ in the cube it doesn_t_t. As you will move the camera away from cube_co_ the size of the clouds don_t_t change. It always renders the same amount of texture(the sizes of the meshes in the renderList don_t_t change) regardless of where the camera is from the mesh. Compare that to a mirrorTexture _co_ once you have the mirrorPlane defined_co_ the reflection is lifelike. Moving away and close to mirror gives accurate results. Is there some setting to have the cube texture behave like that on a cube?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-15T12:04:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ve noticed this too_co_ but I thought it was just a limitation that we have to live with.  It would be great if there was a fix for this.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-15T15:55:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe cubemap you are using is centered to origin and not dynamic. For more realistic results_co_ you_t_ll need to either use mirrors (better suited for plane surfaces) or use dynamic cube map.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-15T17:27:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIsn_t_t this a dynamic cube map?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%2384_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#84_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-15T21:27:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis one is not the one linked by the op.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis will only fix the accuracy and not the plane distance issue (where mirror is better suited)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-15T21:54:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_132565_qt_ data-ipsquote-contentid_eq__qt_23187_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1466026053_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t26 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis one is not the one linked by the op.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI know.  I just thought that you said that the issue could be fixed by using a dynamic cube map.  So the only fix is to use mirrors.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2016-06-16T06:35:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  Dynamic cube maps are those generated by reflection probes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using them but the distance issue is there on them too. Using mirrors is alright for planes but for complex geometry it becomes really difficult. If the cube maps some how gave mirror like results it would be the NEXT LEVEL. _lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-16T15:49:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBut to be honest I do not see waht can be done differently..Can you better explain what you would like to achieve?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-17T04:42:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\ti start fixing this problem i see exactly what you need not good result but after fixed i correct defaultpixelShader\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2016-06-17T08:29:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ May be I will better be able to explain with another playground. Allow me some time to make one. Currently caught up in work. What I want is that complex geometries(like cube) and not just planes have real time true to size reflections with probes(cubeTexture). I am not sure if this is even theoretically possible_co_ but any result close enough would also do. Currently cubeTexture is the best thing I can see for doing this_co_ but it doesn_t_t scale based on mesh_t_s distance from camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ Great. I am eager to see the results.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-18T06:20:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_132764_qt_ data-ipsquote-contentid_eq__qt_23187_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1466152156_qt_ data-ipsquote-userid_eq__qt_18203_qt_ data-ipsquote-username_eq__qt_gamefan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t22 hours ago_co_ gamefan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI am eager to see the results.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18203-gamefan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18203_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18203-gamefan/_qt_ rel_eq__qt__qt__gt_@gamefan_lt_/a_gt_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NP9BY#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee this and say is that your wanted result or not\n_lt_/p_gt_\n\n_lt_p_gt_\n\t** this is not final answer\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NP9BY#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tdescription _dd_ new Reflect Shader  _dd_ i comment with [new changes] all i change\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_vec3 direction _eq_ normalize(\n     wpos /*world position*/ \n     * 3.141592  /* [new changes] PI */\n     *length(camera-wpos) /*  [new changes]  append this part for control zoom in reflect */\n     *0.01 /* [new changes] i dont know why this is 0.01 _dd_) i try some number and find this  */\n     -camera)_sm_\n\nvec3 coords _eq_ reflect(direction_co_nrm) _sm_\nvec3 cubeUV _eq_ vec3(refMat*vec4(coords_co_0.))_sm_\nresult _eq_ textureCube(cubeRef_0_co_cubeUV_co_0.)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tabout _qt_0.01_qt_  this is very lovely parameter it work same as perspective of reflect i think if we can find any relation between camera fav and this it can be make a reality result\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2016-06-18T13:48:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ I have a playground_dd__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY%2312_qt_ rel_eq__qt_external nofollow_qt__gt_ _lt_/a_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NP9BY#13_lt_/a_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY%2312_qt_ rel_eq__qt_external nofollow_qt__gt_ _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are two large cubes one with reflection probe and one with mirror Textures. Its difficult to explain in words. The reflection (or at least perceived) in cube with probe reflection_co_ gets bigger and bigger as the camera moves away from the mesh. I think whatever cubeTexture is doing here _co_it should be doing the inverse. Try to see the reflection of small cubes on both the large ones.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ I think this is close. Still not exactly like mirror but convincing. I have created a plane mirror beside the mesh you made for compare. Can I use this with cubeTexture made from probes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd by the way your playground is so Disco. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-18T14:00:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti think this post is solved just need approved by some BJS leaders  to move the defaultShader  anyway maybe i am wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers Nasimi asl \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-18T15:06:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ will your solution reflect meshes in the renderList?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-20T14:18:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\ti think this task need correct DefaultPixelShader ( _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ most be look it before  ) after that we can talk about mirror all depended for reflection \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-20T15:36:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ can you provide a PR with fixes for default shader?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-20T15:50:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tok wait for me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ 2 or 3 hours\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-20T15:56:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExcellent!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-20T16:22:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_   \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee The Result _dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\ta_dd_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NP9BY#15_lt_/a_gt_  when you zoom with mouse reflect don_t_t be changed \n_lt_/p_gt_\n\n_lt_p_gt_\n\tb_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NP9BY#16_lt_/a_gt_  this is Old Version of Reflection zoom and look the Box reflect \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy changset _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.Effect.ShadersStore[_qt_defaultPixelShader_qt_] _eq__lt_br /_gt_\n\tBABYLON.Effect.ShadersStore[_qt_defaultPixelShader_qt_].replace(_qt_vReflectionUVW_eq_computeReflectionCoords(vec4(vPositionW_co_1.0)_co_normalW)_qt__co__lt_br /_gt_\n\t    _qt_vReflectionUVW_eq_computeReflectionCoords(vec4(vPositionW*3.141592653589793*length(vEyePosition - vPositionW)*0.01_co_1.0)_co_normalW)_qt_)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think this fix Mirror Wrong size Problem \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-20T16:31:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twait i need test more _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%23150_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#150_lt_/a_gt_    _dd_ mirror sample \n_lt_/p_gt_\n\n_lt_p_gt_\n\tvReflectionUVW_eq_ vec3(mat4(-1._co_0._co_0._co_0._co_0._co_-1._co_0._co_0._co_0._co_0._co_-1._co_0._co_0._co_0._co_0._co_-1.)*vec4( reflect(normalize(vPositionW.xyz*3.141592*length(vPositionW-vEyePosition)*0.13  -vEyePosition.xyz)_co_normalW.xyz ) _co_0.))\n_lt_/p_gt_\n\n_lt_p_gt_\n\t** where  are computeReflectMatrix Uniform in DefaultPixelShader? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t**  and i don_t_t know about last parameter yet it is close to  0.13 for mirror in this sample why\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t    \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-20T17:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWe can_t_t use arbitrary values like 0.13 _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ We need to understand why you need it\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-20T18:06:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_s_gt_I_t_m having a hard time telling difference between .13 and nothing (1)._lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%23151_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#151_lt_/a_gt__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess I needed to reload the page.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-20T18:12:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere it is set to .75_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%23154_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#154_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.5_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%23152_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#152_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.1_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%23153_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#153_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.05\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%23167_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#167_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tzoom level?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-20T18:17:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt seems to have issues if you move the cube away from the center.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%23155_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#155_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-20T19:10:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes We Need Know About That .That is like Perspective parameters\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]