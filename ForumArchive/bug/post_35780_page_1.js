[{"Owner":"Venerated1","Date":"2018-02-18T00:56:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1NE321%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1NE321#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe this isn_t_t even a bug but a setting that I_t_m too newb to figure out... but the shadow distorts pretty bad on smaller spheres.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you make the sphere bigger_co_ it look beautiful. Like this_dd_  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1NE321%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1NE321#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this indeed a bug? Or_co_ is this a setting that I can dynamically change? Or_co_ is it just a limitation that I should just be patient on?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-20T19:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is not a bug per se but more a settting issue _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease read this_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/shadows#troubleshooting_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/shadows#troubleshooting_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShadows are quite complex to set up but we are trying hard to provide all kind of tools to help\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your case you can try to bring the light closer by playing with light.position. The closer the better\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Venerated1","Date":"2018-02-22T22:08:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1NE321%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1NE321#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I held back my frustration with the fact that distance didn_t_t make any noticeable difference and dug through the troubleshooting guide.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSUCCESS!!!! But_co_ I would strongly recommend an edit to the troubleshooting guide. \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_h3 style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm__qt__gt_\n\t\t\tBias\n\t\t_lt_/h3_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\t\t\tYou may want to reduce shadow acne resulting from not precise enough shadow map. To do so_co_ you can define the bias (which is 0.00005 by default)._dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\n_lt_code style_eq__qt_border-left_dd_5px solid #00aeef_sm_color_dd_#444444_sm_font-size_dd_1em_sm_padding_dd_.5em_sm__qt__gt_shadowGenerator.bias _eq_ _lt_span style_eq__qt_color_dd_#880000_sm__qt__gt_0.01_lt_/span_gt__sm_\n_lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\t\t\tShadow generators compare the depth of every pixel with the depth of occluders (shadow casters) seen from the light point of view. As we are dealing with low precision textures (when supported Babylon.js will use float textures but low end devices only support int textures)_co_ you may want to boost the depth of occluders to facilitate self shadowing (An object casting shadows on itself).\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_h3 style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm__qt__gt_\n\tPossibly add this_dd_\n_lt_/h3_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_h3 style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm__qt__gt_\n\t\t\tBias can also sometimes shrink or distort a shadow. In these cases_co_ reducing the bias can occasionally produce a better effect.\n\t\t_lt_/h3_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_code style_eq__qt_border-left_dd_5px solid #00aeef_sm_color_dd_#444444_sm_font-size_dd_1em_sm_padding_dd_.5em_sm__qt__gt_shadowGenerator.bias _eq__lt_/code_gt__lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_0.000009_lt_/span_gt__lt_font color_eq__qt_#444444_qt_ face_eq__qt_monospace_co_ monospace_qt__gt__sm__lt_/font_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_h3 style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm__qt__gt_\n\tI don_t_t know why everything I_t_m writing is bold now... but you get the point. I_t_m just happy that I have a fix. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/h3_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-22T22:25:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis makes sense\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you want to edit it directly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Documentation/blob/master/content/babylon101/babylon101/Shadows.md_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Documentation/blob/master/content/babylon101/babylon101/Shadows.md_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Venerated1","Date":"2018-02-22T23:29:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tChange suggestion submitted_co_ thanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Venerated1","Date":"2018-02-27T01:20:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI guess that it didn_t_t really let me edit because I  _qt__lt_span style_eq__qt_background-color_dd_#dbedff_sm_color_dd_#032f62_sm_font-size_dd_14px_sm__qt__gt_don’t have write access to_lt_/span_gt_._qt_ So_co_ if you can give me access then I would gladly make that edit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-27T16:18:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe have a doc for the doc _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ class_eq__qt_ipsEmbed_finishedLoading_qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed8919181660_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/16365-contributing-to-documentation-101/?do_eq_embed_qt_ style_eq__qt_overflow_dd_ hidden_sm_ height_dd_ 329px_sm_ max-width_dd_ 502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]