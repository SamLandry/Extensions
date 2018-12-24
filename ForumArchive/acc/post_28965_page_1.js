[{"Owner":"Florent Glibert","Date":"2017-03-10T09:09:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everybody.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have recently encountered a problem in exporting an instance object with animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me explain.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ I created a basic cube (Boîte001) to which I link a skeleton of two bones. I created a simple animation that folds it down.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter_co_ I created 3 instances of the cube and I turn them each of 90°.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I _qt_export and run_qt__co_ there is no bug. The instances follow well the basic animation. (see bugInstAnim_ok.jpg)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy problem happens when I close 3ds max and I turn it back on. If I _qt_export and run_qt_ after re-opening_co_ my export changes the orientation of my animation (while it is still good in 3ds.) (see bugInstAnim_bug.jpg)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe only solution for my problem is to delete old instances and recreate them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you know where the problem might come from? Because_co_ if I create a complex scene with full animated instancs and I have to recreate them after each restart of 3ds max_co_ it might be very long...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your help._lt_br /_gt_\n\tBest regards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLetsbro team\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I joint my .babylon and .3ds files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/bugInstAnim_ok.jpg.c851b784df2c422e50508f801fa554d7.jpg_qt_ data-fileid_eq__qt_11944_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_bugInstAnim_ok.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11944_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/bugInstAnim_ok.thumb.jpg.cb984065aa4ab29b7343e1af7aa569ce.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/bugInstAnim_bug.jpg.7bf8032764302a92be659b4440571a04.jpg_qt_ data-fileid_eq__qt_11945_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_bugInstAnim_bug.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11945_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/bugInstAnim_bug.thumb.jpg.e2a78734b7ae603b5c3fe61021c80983.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_11946_qt_ data-fileid_eq__qt_11946_qt_ rel_eq__qt__qt__gt_bugInstAnim_OK.babylon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_11947_qt_ data-fileid_eq__qt_11947_qt_ rel_eq__qt__qt__gt_bugInstAnim_bug.babylon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_11952_qt__gt_bugInstAnim_00.max_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-10T16:19:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you send me a version of the 3dsmax file where no export was done yet?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it work if you don_t_t use instances?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-10T17:01:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did some testing with your max file. There is definitely something weird here. If I remove the original box and then one or two instances_co_ the original box reappears. Then I can undo and restore all meshes and exprotation works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo it seems more a bug in 3dsmax to me\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-03-10T17:19:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAlso_co_ what version of 3DSMax are you using ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Florent Glibert","Date":"2017-03-13T09:43:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have 3Ds max 2017 Fr (yes_co_ it_t_s so bad...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(33_co_33_co_33)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_Yes_co_ I also think it comes directly from 3ds max. I will test on the 2015 and 2016 to see if the bug depends on version._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(33_co_33_co_33)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_Do you think that the animations on the instances will not be possible (or difficult_co_ considering the additional steps to do as soon as the bug appears.) I also pass the scene before export (_lt_/span_gt__lt_span style_eq__qt_font-size_dd_16px_sm__qt__gt__lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_I had to start again. _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(33_co_33_co_33)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_I haven_t_t save it before manipulation) _lt_/span_gt__lt_span style_eq__qt_font-size_dd_16px_sm__qt__gt__lt_span style_eq__qt_color_dd_rgb(33_co_33_co_33)_sm_font-family_dd_arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_But I think it will not change anything._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_12004_qt__gt_bugInstAnim_first.max_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-13T18:44:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf we end up with a bug we cannot fix i think you still have the option to create the instances with JS after loading your scene. This is less convenient but still feasible _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]