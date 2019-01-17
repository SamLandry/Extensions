[{"Owner":"ian","Date":"2016-04-21T15:09:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have problem with physics and mesh impostor with sphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI create some componets in blender. And add each component texture.  I create pathMesh from components. (pathMesh have multi materials and textures because each component has its own material and texture)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I load babylon with sandbox it load OK (but sandbox doesn_t_t have _lt_strong_gt_pathMesh.bakeCurrentTransformIntoVertices()_sm_ _lt_/strong_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I have _lt_strong_gt_pathMesh.bakeCurrentTransformIntoVertices()_sm_ _lt_/strong_gt_in loop then pathMesh is loaded without textures and physics works OK.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I remove _lt_strong_gt_pathMesh.bakeCurrentTransformIntoVertices()_sm__lt_/strong_gt_ then pathMesh is loaded correctly with textures_co_ but physics doesn_t_t work as it should.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var pathMesh_sm_\n\nmeshTask.onSuccess _eq_ function (task) {                       \n        for (var i_eq_0_sm_ i&lt_sm_task.loadedMeshes.length_sm_ i++ ){\n            var newMesheI _eq_ task.loadedMeshes[i]_sm_\n            if ( newMesheI.id _eq__eq_ _qt_Path_qt_ ) {                        \n                pathMesh _eq_ newMesheI_sm_                                \n       \n              pathMesh.checkCollisions _eq_ true_sm_\n              pathMesh.bakeCurrentTransformIntoVertices()_sm_ // this line works ok with physics but pathMesh doesn load correcly with textures\n               pathMesh.pBody_eq_ perplexus.setPhysicsState(BABYLON.PhysicsEngine.MeshImpostor _co_ { mass_dd_ 0_co_ friction_dd_ 0.4_co_ restitution_dd_ 0 })_sm_                         \n            }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need _lt_strong_gt_pathMesh.bakeCurrentTransformIntoVertices()_sm_ _lt_/strong_gt_ and correcly inported pathMesh with its textures?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anybody help me solve this problem? Any advice? What should I do? Am I missing anything?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-22T17:29:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you try to reproduce the issue in the playground?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-04-25T08:53:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know how to upload .babylon file and textures on playgroudn.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTherefore I upload this examples on my server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis link _lt_a href_eq__qt_http_dd_//ajna4taiga.no-ip.org_dd_8080/TestBabylonjs/TextureIssueWithBake.html_qt_ style_eq__qt_color_dd_rgb(17_co_85_co_204)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ajna4taiga.no-ip.org_dd_8080/TestBabylonjs/TextureIssueWithBake.html_lt_/a_gt_ shows example what happens if I use _lt_strong style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_bakeCurrentTransformIntoVertices._lt_/strong_gt__lt_br /_gt_\n\t This example show that textures are not loading OK. But physics works ok. Ball fall on model. Everything work OK except texutres.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tThis _lt_a href_eq__qt_http_dd_//ajna4taiga.no-ip.org_dd_8080/TestBabylonjs/TextureIssueWithoutBake.html_qt_ style_eq__qt_color_dd_rgb(17_co_85_co_204)_sm__qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ajna4taiga.no-ip.org_dd_8080/TestBabylonjs/TextureIssueWithoutBake.html_lt_/a_gt_ link show how textures loads OK_co_ But ball is not fall on model it stops on air. Physics/collision here doesn_t_t work OK._lt_br /_gt_\n\tThis code is same except it doesn have _lt_strong style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_bakeCurrentTransformIntoVertices._lt_/strong_gt_\n_lt_/div_gt_\n\n_lt_div style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n_lt_div style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tEverything can be viewed if you press F12. The source code is there and texutes and .babylon (model is same for both examples.)\n_lt_/div_gt_\n\n_lt_div style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n_lt_div style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tI don_t_t know to reproduce the issue with playground._lt_br /_gt__lt_br /_gt_\n\tGreetings\n_lt_/div_gt_\n\n_lt_div style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-04-25T10:35:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#19BQOY%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#19BQOY#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere it is_co_ guys.  Activate line 19_co_ and the texture changes.  Weird.  *scratch scratch*  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/_qt_ rel_eq__qt__qt__gt_@ian_lt_/a_gt_ - I hosted your .babylon file and three textures... at my _lt_u_gt_free_lt_/u_gt_ github site.  You should go get one_co_ too.  You can simply drag - drop files onto your github webpage_co_ then _qt_commit_qt_ them (hit a button at the website bottom)_co_ and then they can be used in the playground... just like I did. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave a try_co_ if you wish.  Create a github account_co_ put your 4 files in a folder there_co_ change the .babylon url in the playground demo (to point at your github repository)_co_ and then run/save the new playground.  Then you will be ready for future playground tests... forever.  _lt_strong_gt_And..._lt_/strong_gt_ _lt_u_gt_free online storage_lt_/u_gt_ with no CORS hassles!   That_t_s a good good good thing_co_ yes?   I think so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see your 4 files (and other files) at _lt_a href_eq__qt_https_dd_//github.com/Wingnutt/misc_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Wingnutt/misc_lt_/a_gt_ . \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-25T15:34:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOuch! Bug found and fixed for next commit!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you guys _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-04-26T05:19:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have good and bad news.  Deltakosh_co_ textures are loadaing OK.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBad news is that rotation model and use cannon mesh impolster on model and sphere mesh impostor on sphere. Physics doesn_t_t work as is should.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that there should make some test with physics cannon (mesh impostor and sphere impostor).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPrevious version works better then now. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-26T17:31:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSummoning our Physics god ( _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_) _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-26T18:19:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi ho!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ a quick word about the mesh impostor - At the moment_co_ the direct position vertex data and indices are taken into account. So if you scaled your mesh (which you have. The scaling value of the mesh is 1_co_ 0.25_co_ 1) it won_t_t work correctly. This is why baking the current transformation works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know how to solve this (simply scaling all of the position vertex data * scaling vector)_co_ but I actually was trying to avoid this_co_ as this might create different unexpected problems.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me check how I can solve this in the nicest way. Until them_co_ baking is better than st(r)eaming.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-05-06T17:48:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not understand exactly you RaananW. _lt_br /_gt__lt_br /_gt_\n\tYou suggest. If we use mesh impostor and mesh sphere impostor together. It will be the best not to scale any of this two mesh? _lt_br /_gt_\n\tI would realy like to know how mesh impostor and sphere impostor works the best together?_lt_br /_gt_\n\tWhat mesh.updatePhysicsBody() realy do and where it do the best if we rotate mesh?_lt_br /_gt_\n\tI create new models and sphere imostor sometimes on same position in mesh impostor falls through._lt_br /_gt_\n\tI check model and normals and it looks fine_co_ but may be I do not know something should when modeling mesh for mesh impostor in blender?_lt_br /_gt_\n\tI realy don_t_t know if there is problem in my mesh(mesh impostor) model or there are porblems with mesh impostor physics?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you think there could be problems with physics_co_ on what you should I be careful or (pay attention) when I_t_m modeling sphere and mesh(for mesh impostor)? _lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-05-08T19:44:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRaananW you are telling me to use ctrl+A in blender tor transformation baking. That should work physich better and faster?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m I right?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]