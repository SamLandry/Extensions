[{"Owner":"Ericky14","Date":"2018-02-14T21:32:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was not able to reproduce this in the playground. Does anyone have any idea what could be causing this darkening effect on the GUI text? The GUI text is drawn on planes and the GUI image below it is about 5 units away. Also_co_ the image is a svg_co_ but I also tried with png and the same thing happens. The scene also has fog... and a clear color of that blue on the background.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I rotate the camera_co_ the text will randomly lightup/darken on certain parts of the GUI image below it even though they are far apart on the Y plane. Could this be a bug?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/5a84aa8b5280a_ScreenShot2018-02-14at4_18_32PM.png.8577a04891a92f13a6d8bfbf5db3290f.png_qt_ data-fileid_eq__qt_17024_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screen Shot 2018-02-14 at 4.18.32 PM.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17024_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/5a84aa8b5280a_ScreenShot2018-02-14at4_18_32PM.png.8577a04891a92f13a6d8bfbf5db3290f.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ericky14","Date":"2018-02-14T22:18:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tManaged to fix it setting the background image_t_s alphaIndex to 0.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-15T01:26:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood job!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]