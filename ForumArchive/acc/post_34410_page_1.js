[{"Owner":"PavolHejný","Date":"2017-12-06T14:47:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#222222_sm_font-size_dd_14px_sm_padding_dd_10px_sm_text-align_dd_left_sm__qt__gt_\nHi_co_\nCan I somehow (with physics plugin Oimo.js) set different gravity for different meshes?\nFor example I want to simulate environment in water and I want to have there buoyancy.\n\n_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2B84TV%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2B84TV#7_lt_/a_gt_\n\nThanks a lot for your advice.\n_lt_/pre_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-06T16:52:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_197715_qt_ data-ipsquote-contentid_eq__qt_34410_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512571630_qt_ data-ipsquote-userid_eq__qt_28780_qt_ data-ipsquote-username_eq__qt_PavolHejný_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ PavolHejný said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#222222_sm_font-size_dd_14px_sm_padding_dd_10px_sm_text-align_dd_left_sm__qt__gt_\n\nHi_co_\nCan I somehow (with physics plugin Oimo.js) set different gravity for different meshes?\nFor example I want to simulate environment in water and I want to have there buoyancy.\n\n_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2B84TV%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2B84TV#7_lt_/a_gt_\n\nThanks a lot for your advice.\n_lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m not guru on physics _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt might help you. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2B84TV%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2B84TV#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-12-06T17:14:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThats what mass is for (but I might be wrong)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you wanted to be fancy _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2B84TV%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2B84TV#12_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-12-06T17:37:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfor small objects (not counting ie_dd_ water/air resistance)_dd__lt_br /_gt_\n\tforce _eq_ mass X gravity.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made a small PG_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2B84TV%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2B84TV#10_lt_/a_gt__lt_br /_gt_\n\tIf the sphere mass and diameters are the same they bounce the same.  A bigger sphere with same mass does not bounce the same_co_ so something else is being taken into account!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thought then that if I made their density the same they would act more similar (in PG)_co_ so the physics engine must already do something_co_ as they don_t_t bounce the same from same start point.  There was a thread recently on physics friction with interesting comments.  Some engines have extra functionality - I tried the PG in Cannon.  I_t_m not aware of their being a way to explicitly set density for buoyancy. Maybe you can apply impulses with a vertical vector to influence the buoyancy.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PavolHejný","Date":"2017-12-06T22:16:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for every advice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27658_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/_qt_ rel_eq__qt__qt__gt_@Arte_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSetting inital velocity is good and easy hack for some cases.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that is exactly the problem of Oimo. Oimo is physics in vaccum - everythink is falling with same acceleration.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerfect hack!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]