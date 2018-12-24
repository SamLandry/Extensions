[{"Owner":"babbleon","Date":"2018-10-15T13:57:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis PG works fine on Android Chrome when viewed as a PG_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#5Q0MBS%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#5Q0MBS#10_lt_/a_gt_ but not when  I download as a ZIP and then stick it on my server. I do not get any output from the devices camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tChrome gives me this error_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_babylon.js_dd_1 BJS - [15_dd_09_dd_01]_dd_ NotSupportedError\n_._ErrorEnabled @ babylon.js_dd_1\n(anonymous) @ babylon.js_dd_1\nPromise.catch (async)\no.CreateFromWebCam @ babylon.js_dd_1\n(anonymous) @ (index)_dd_122\n(anonymous) @ (index)_dd_120\nPromise.then (async)\ncreateScene @ (index)_dd_116\n(anonymous) @ (index)_dd_137\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tDoes anyone have any ideas as to why it might not work and what the error message may relate to please?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScreenshots below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_20530_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/1137725752_Capture_2018-10-15-14-51-25.png.e1ce528df466092acec3ae0495d832b3.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_1676257326_Capture_2018-10-15-14-51-25.thumb.png.cb7795ce2a444cb8fc25995b720bd7b4.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20530_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/1676257326_Capture_2018-10-15-14-51-25.thumb.png.cb7795ce2a444cb8fc25995b720bd7b4.png_qt_ style_eq__qt_width_dd_300px_sm_height_dd_auto_sm__qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_20531_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/75170492_Capture_2018-10-15-14-51-48.png.6f39c5ca3d816fd8cf434f30ac778a26.png_qt_ rel_eq__qt__qt_ style_eq__qt_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_img alt_eq__qt_1277479776_Capture_2018-10-15-14-51-48.thumb.png.a9b2f6d703df08b3b144f6e687f24518.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20531_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/1277479776_Capture_2018-10-15-14-51-48.thumb.png.a9b2f6d703df08b3b144f6e687f24518.png_qt_ style_eq__qt_width_dd_300px_sm__qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-10-15T14:23:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\toh...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs my problem due to this?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_getUserMedia() no longer works on insecure origins. To use this feature_co_ you should consider switching your application to a secure origin_co_ such as HTTPS. See https_dd_//goo.gl/rStTGz for more details._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThat_t_s a pain if it is. Do we have a workaround?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-15T16:32:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell this is not on us unfortunately. You have to be on a full https context to make it work _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-10-16T08:59:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_a href_eq__qt_https_dd_//letsencrypt.org/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//letsencrypt.org/_lt_/a_gt_ saved the day and was much easier than I had imagined.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-16T16:57:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh yeah these guys rock!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]