[{"Owner":"simon_bg","Date":"2016-02-18T21:14:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tHi guys!\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tI have this scene where I import different meshes with lots of polygons_co_ like here_dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1OI6LZ%2311_qt_ style_eq__qt_color_dd_rgb(17_co_85_co_204)_sm__qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1OI6LZ#11_lt_/a_gt__lt_span_gt_ _lt_/span_gt__lt_br_gt_\n\tYou_t_ll see that I_t_m importing the same mesh repeated times instead of using instances on purpose._lt_span_gt_ _lt_/span_gt__lt_br_gt__lt_br_gt_\n\tSo at some moment_co_ I_t_d like to remove some of these meshes._lt_span_gt_ _lt_/span_gt__lt_br_gt_\n\tIn the example above_co_ when you click on the skulls_co_ the mesh.dispose() is called.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_12.8px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tWhen I track the memory with the Chrome JS Heap timeline tool I can_t_t really see the memory released though when the dispose() function is called._lt_br_gt__lt_br_gt_\n\tHere the four skulls were loaded and then I clicked on every one of them_co_ so shouldn_t_t there be some drops visible?_dd__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/unnamed.png.a218ca22384b10922c2585493461d71c.png_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_6439_qt_ data-unique_eq__qt_5whcd0s91_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/unnamed.thumb.png.1a92fb2715b66cc00efec6529e1a6555.png_qt_ alt_eq__qt_unnamed.thumb.png.1a92fb2715b66cc00efec6_qt__gt__lt_/a_gt__lt_br_gt__lt_br_gt_\n\tIs there something I_t_m missing?_lt_span_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-19T16:52:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell done! It was a leak due to action managers. I_t_ll fix it for next commit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"simon_bg","Date":"2016-02-22T13:24:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks_co_ David!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br_gt_\n\tI made another test though_co_ and I haven_t_t used Action Managers at all this time_dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1OI6LZ%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1OI6LZ#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_co_ I_t_m loading four meshes into an array_co_ and when I rotate the camera and a mesh is not longer active_co_ I dispose it and also delete it from the array. _lt_br_gt_\n\tI get this graphic now_co_ and again_co_ I can_t_t see memory being released_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/arrayTest.PNG.7afa65065c36fe987a9e48775cdca57b.PNG_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_6498_qt_ data-unique_eq__qt_yj4mmnf6i_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/arrayTest.thumb.PNG.b4ee0b39f75a4dfbf35b0eb622e0e5ba.PNG_qt_ alt_eq__qt_arrayTest.thumb.PNG.b4ee0b39f75a4dfbf35b_qt__gt__lt_/a_gt__lt_br_gt__lt_br_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-22T18:33:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt works well for me\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(snapshot1 is on load and snapshot 2 is after disposing the 4 skulls)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/Capture.JPG.c3252730ee151387f44e33502191ea66.JPG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_6503_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/Capture.JPG.c3252730ee151387f44e33502191ea66.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Capture.JPG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"simon_bg","Date":"2016-02-22T19:23:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ you_t_re right_co_ it works for me too when making the snapshots_co_ I guess I thought it would be visible on the JS Heap tool also.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-23T02:46:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tChrome is perhaps keeping this memory for later use _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]