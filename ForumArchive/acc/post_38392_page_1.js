[{"Owner":"Pryme8","Date":"2018-06-21T22:44:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo if one was to extrude something that needs to make a 90 degree turn what would be the best method._lt_br /_gt_\n\t_lt_br /_gt_\n\twant it to be like two 45 degree miter cuts that are joined._lt_br /_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/image.png.e01b618b9d25238e91f32e69fcab8331.png_qt_ data-fileid_eq__qt_18830_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18830_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/image.thumb.png.f4117386211d28c52f938167f153960e.png_qt_ alt_eq__qt_image.thumb.png.f4117386211d28c52f938167f153960e.png_qt_ /_gt__lt_/a_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WGTQ6E%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WGTQ6E#1_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-06-22T16:25:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tQuite a difficult problem IMHO. Done something with mitering in 2D\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed1430219285_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/34970-creating-constant-width-2d-lines/?do_eq_embed&amp_sm_comment_eq_201080&amp_sm_embedComment_eq_201080&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_293px_sm_max-width_dd_500px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tand 3D with rectangular cross section\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed2508604529_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/17583-babylonjs-october-challenge-well-build-a-maze/?do_eq_embed&amp_sm_comment_eq_102320&amp_sm_embedComment_eq_102320&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_293px_sm_max-width_dd_500px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tand with wall building _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/snippets/house_use_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/snippets/house_use_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t think it will be possible with ExtrudeShape in its current form. With a lot of thought using CreateRibbon might give something. Give it a bit of thought tomorrow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe someone else will have more ideas.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-22T16:28:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ creative thought time!_lt_br /_gt_\n\t_lt_br /_gt_\n\tstay tuned.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-22T17:19:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WGTQ6E%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WGTQ6E#3_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI think this would be a valid method_co_ not done with it yet but might give you an idea._lt_br /_gt_\n\t_lt_br /_gt_\n\tI need to just make sure I am pulling the correct points and this will work I bet!_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WGTQ6E%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WGTQ6E#7_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tYup_co_ this will work_co_ just need to finish some logic._lt_br /_gt_\n\t_lt_br /_gt_\n\t**UPDATE**_lt_br /_gt_\n\tNeeds some changes_co_ to cover all basis... but here we go_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WGTQ6E%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WGTQ6E#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-22T18:54:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WGTQ6E%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WGTQ6E#9_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tSolved..._lt_br /_gt_\n\t_lt_br /_gt_\n\tNow I need to figure out how to fix the shading._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WGTQ6E%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WGTQ6E#11_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-26T19:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZDRAW1%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZDRAW1#1_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tSo I improved the miter function a little_co_ but now I want to really fix up some thing with it._lt_br /_gt_\n\t_lt_br /_gt_\n\tMainly dealing with the UV_co_  gonna write up a custom shader to debug it seeing how the custom Standard material refuses to display UV data..._lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]