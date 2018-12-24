[{"Owner":"max123","Date":"2016-08-19T15:11:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there a way to gracefully handle errors in BJS?_lt_br /_gt_\n\tFor example_co_ I_t_m building a SPA_co_ and when a user navigates to another screen too quickly (before the scene has finished loading)_co_ this very unsightly screen remains. It is impossible to get rid of without refresh_co_ even though the rest of the SPA is still working fine. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr is there a way to stop loading the scene? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9116_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/57b72184a5a0c_ScreenShot2016-08-19at16.05.40.png.0d68faf027c3623940a34a2a9fa15a6c.png_qt_ alt_eq__qt_Screen Shot 2016-08-19 at 16.05.40.png_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-23T02:40:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23143-max123/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23143_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23143-max123/_qt_ rel_eq__qt__qt__gt_@max123_lt_/a_gt__co_ good to see you again.  Sorry it has taken so long to get a response.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is a screen produced by the Babylon AssetsManager.  It has some tools to shut-off the screen and be graceful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can find its docs _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_AssetsManager_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt__co_ and if you want to see its source code_co_ check _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.assetsManager.js_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.  I don_t_t have much experience with it_co_ but at least this gives you an _lt_em_gt_onTaskError_lt_/em_gt_ callback-function to do some tests-with.  Good luck_co_ hope this helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2016-08-23T09:25:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_140960_qt_ data-ipsquote-contentid_eq__qt_24587_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1471920032_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23143-max123/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23143_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23143-max123/_qt_ rel_eq__qt__qt__gt_@max123_lt_/a_gt__co_ good to see you again.  Sorry it has taken so long to get a response.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThat is a screen produced by the Babylon AssetsManager.  It has some tools to shut-off the screen and be graceful.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou can find its docs _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_AssetsManager_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt__co_ and if you want to see its source code_co_ check _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.assetsManager.js_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.  I don_t_t have much experience with it_co_ but at least this gives you an _lt_em_gt_onTaskError_lt_/em_gt_ callback-function to do some tests-with.  Good luck_co_ hope this helps.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks_co_ Wingnut_co_ I will give it a go.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-25T16:09:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t(_lt_em_gt_limited to 10 likes a day!!_lt_/em_gt_ So thank you Wingnut!!)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]