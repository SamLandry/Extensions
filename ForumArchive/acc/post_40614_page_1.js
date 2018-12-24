[{"Owner":"JonVarner","Date":"2018-10-13T01:09:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a use case where I have a mesh made up of a handful of sub meshes. But I do not need all of them to contribute to the self shadowing to get a convincing shadow. Plus on some of the smaller sub meshes the self shadowing does not look that great.  So I was wondering if anyone could point me in the direction of how to either exclude submeshes from self shadowing or to simply include the ones I do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am currently using this to achieve self shadowing on the entire object _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var shadowGenerator _eq_ new BABYLON.ShadowGenerator(2048_co_ light2_co_ true_co_true)_sm_\nshadowGenerator.getShadowMap().renderList.push(window.complete_model)_sm_\nshadowGenerator.usePoissonSampling _eq_ true_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"droggam","Date":"2018-10-13T17:06:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt_i tested a bit but fail to see any difference in shadows..._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_but to your problem_co_ try push only the meshes you want shadows on._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Like in your code u push the @whole model...._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_normally there can be about 5-10 meshes in one daddy mesh._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_only one of those represent the full object_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_If you iterate the scene.meshes you can find out what number belong to what meshname _lt_span class_eq__qt_ipsEmoji_qt__gt_😃_lt_/span_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_shadowGenerator.getShadowMap().renderList.push(scene.meshes[10])_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JonVarner","Date":"2018-10-14T03:54:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI played around with it quite a bit. @droggam I thought your approach was intriguing but the meshes you pointed to don_t_t correlate with the sub meshes. In the end I think it would be sufficient to simply not have the shadow map show up on some of my sub meshes. In other words is there a way to calculate the shadow map as normal with all the sub meshes in the mesh_co_ but not actually display the shadow map on some of the sub-meshes. My primary reason for this is that on some of the smaller objects the shadow map just does not look that great and I don_t_t need the shadows on those pieces anyway. So it would great if I could tell babylon which sub meshes the shadow map would show up on_co_ and simply not show the shadow results on the other submeshes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"droggam","Date":"2018-10-14T12:42:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_\nvar shadowGenerator _eq_ new BABYLON.ShadowGenerator(1024_co_ light)_sm_\nNext_co_ you have to define which shadows will be rendered. Here we want the shadow of our torus_co_ but you can “push” any meshes you want_dd_\n\nshadowGenerator.getShadowMap().renderList.push(torus)_sm_\nIntroduced with babylon.js v3.1_co_ there are two new helper functions to deal with shadow casters_dd_\n\naddShadowCaster(mesh_co_ includeDescendants)_dd_ Helper function to add a mesh and its descendants to the list of shadow casters\nremoveShadowCaster(mesh_co_ includeDescendants)_dd_ Helper function to remove a mesh and its descendants from the list of shadow casters\nAnd finally_co_ you will have to define where the shadows will be displayed... by setting a mesh parameter to true_dd_\n\nground.receiveShadows _eq_ true_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20619-jonvarner/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20619_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20619-jonvarner/_qt_ rel_eq__qt__qt__gt_@JonVarner_lt_/a_gt_ check this out!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIts as much as i can help you its from THE documentation...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have two helper fn to either add/remove meshes like u asked\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDescandents is same submesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JonVarner","Date":"2018-10-14T15:35:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@droggam_co_ thanks yes I have seen this. In fact this was why I posted as it seemed possible. However_co_ in the helper function_co_ _qt_includeDescendants_qt_ is actually a boolean as opposed to a list_co_ meaning that all descendants would be included. Second_co_ I don_t_t think submeshes are children. I could be wrong_co_ but if you run something like_dd_ _lt_span_gt__lt_span_gt__lt_span_gt_window.complete_model.getChildren() on a single mesh with many sub meshes you will actually get and empty array._lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ it seems that getting this to work is possible. I just have not discovered it yet. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"droggam","Date":"2018-10-14T17:21:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20619-jonvarner/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20619_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20619-jonvarner/_qt_ rel_eq__qt__qt__gt_@JonVarner_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheck this out ! i made it work_co_ with shadows myself my scene lag but loook much better.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0TG0TB_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0TG0TB_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JonVarner","Date":"2018-10-15T15:17:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm_co_ I have shadows working already. My question was about sub-meshes. If you look at your code you are still working with meshes_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ _qt_newMeshes[_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_]_qt_. What I was trying to do was something more along the lines of _qt_newMeshes[_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_][2]_qt_ for example. Anyway_co_ I have given up and decided to split those sub meshes out as separate meshes for now. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-15T16:25:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ this is what I would have recommended as well _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Splitting them up is the best option_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]