[{"Owner":"roman_44","Date":"2016-01-04T23:28:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Babylon citizens! _lt_/p_gt__lt_p_gt_Thanks for your help. This forum is really helpful!_lt_/p_gt__lt_p_gt_I_t_m getting text and dynamically drops it on the given plane with DynamicTexture._lt_/p_gt__lt_p_gt_But I feels like quality gets lower when I put background as transparent. And if it will be some color_co_ then it is better. Screenshots attached._lt_/p_gt__lt_p_gt_Is it possible to get text better with transparent background?_lt_/p_gt__lt_p_gt_My DynamicTexture size is 1024px_co_ so pixels should not be a problem._lt_/p_gt__lt_p_gt_Thank you!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2016/post-17269-0-13018700-1451948738.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2016/post-17269-0-13018700-1451948738.png_qt_ data-fileid_eq__qt_5955_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17269-0-13018700-1451948738.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2016/post-17269-0-23654000-1451948744.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2016/post-17269-0-23654000-1451948744.png_qt_ data-fileid_eq__qt_5956_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17269-0-23654000-1451948744.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-04T23:51:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_how do you do your transparency? Alpha testing or alpha blending?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"roman_44","Date":"2016-01-05T00:18:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi! _lt_/p_gt__lt_p_gt_As usually I_t_m not sure _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I found this way somewhere in the forum_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_myTexture.hasAlpha _eq_ true_sm__lt_/p_gt__lt_p_gt_var ctx _eq_ myTexture.getContext()_sm__lt_/p_gt__lt_p_gt_ctx.fillStyle _eq_ _t_transparent_t__sm__lt_/p_gt__lt_p_gt_and so on..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is it any other way to do transparency?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2016-01-05T06:24:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To have smoother transparency_co_ set _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_myTexture_lt_/span_gt_ as the _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_diffuseTexture_lt_/span_gt__lt_em_gt__lt_strong_gt_ _lt_/strong_gt_and_lt_/em_gt_ _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_opacityTexture_lt_/span_gt_ of your material._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You_t_re currently using _t_alpha testing_t_ transparency_co_ which gives off jagged edges._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"roman_44","Date":"2016-01-05T21:42:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_jahow_co_ that works with just awesome results!_lt_/p_gt__lt_p_gt_Thank you!!!!!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]