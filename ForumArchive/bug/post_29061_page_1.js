[{"Owner":"Hans","Date":"2017-03-14T17:26:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHi @all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I found a bug again. In this PG_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#249T6Y_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#249T6Y_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI change friction for _lt_strong_gt_a_lt_/strong_gt_ to zero but friction _lt_strong_gt_b_lt_/strong_gt_ becomes zero too _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_ (See console too)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf it is no bug_co_ please tell me how can I change the friction for just a.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-03-14T18:28:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt appears as though the plugin is setup to share materials between physics bodies if they have the same friction and restitution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.cannonJSPlugin.ts#L200_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.cannonJSPlugin.ts#L200_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now_co_ make sure your bodies don_t_t have the same friction and restitution when you create them_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#249T6Y%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#249T6Y#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hans","Date":"2017-03-14T21:43:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOkay_co_ thanks! Is there a ticket for this bug? So i can see when its solved.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]