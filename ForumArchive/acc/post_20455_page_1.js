[{"Owner":"Arul","Date":"2016-02-11T12:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have attached the SSAO rendering output image SSAO.png_co_ i want to remove the _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_ _lt_strong_gt__qt_textile effect_qt__co_ _lt_/strong_gt_i dont know how to set the value for _lt_/span_gt_getBlurHPostProcess and _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_ _lt_/span_gt_getBlurVPostProcess blur width.Can you pls help me How to remove the textile effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is my SSAO Settings \n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar ssao _eq_ new BABYLON.SSAORenderingPipeline(_t_ssaopipeline_t__co_ scene_co_ { ssaoRatio_dd_ 1_co_ combineRatio_dd_ 1.0 })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tssao.fallOff _eq_ 0.000001_lt_br_gt_\n\tssao.area _eq_0.0075_lt_br_gt_\n\tssao.radius _eq_ 0.0001_lt_br_gt_\n\tssao.totalStrength _eq_ 1.0_lt_br_gt_\n\tssao.base _eq_ 0.5_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tssao.getBlurHPostProcess().blurWidth _eq_ 0.1_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tssao.getBlurVPostProcess().blurWidth _eq_ 0.1_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/SSAO.png.18287490ae757a9f54b950ea1d965f18.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_6336_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/SSAO.thumb.png.777d7e02fc133d42760fbb31912e6cc8.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_SSAO.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-02-11T17:10:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Arul !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo limit the _qt_textile_qt_ effect_co_ you should set the blur widths to 2.0 (not less_co_ not more)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ to limit more the textile effect_co_ you can play with the fallOff (that smoothes the effect) and set it higher_co_ like  _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_24.8889px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_0.0001_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_24.8889px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_Can you play with the fallOff ? Can you also create a playground to repro case ?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arul","Date":"2016-02-15T10:40:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHI \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWow its working. Thank you for your replay.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is my playground link\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1HCCT2%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1HCCT2#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti want more realistic depth and smooth_co_ can you pls tell me correct settings.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-02-16T10:00:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis looks good _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1HCCT2%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1HCCT2#17_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn update of the SSAO rendering pipeline is coming soon. I_t_ll be smoother where an additional internal pass will remove the textile effect\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arul","Date":"2016-02-17T06:11:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks you very much\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut i will expect with sharp edges_co_  see this link - _lt_a href_eq__qt_http_dd_//alteredqualia.com/three/examples/webgl_postprocessing_ssao.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//alteredqualia.com/three/examples/webgl_postprocessing_ssao.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/SSAO1.png.13e2c73b658f6b8310ecc8ee362319b4.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_6400_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/SSAO1.thumb.png.9dda48069e40086c3fb786110adae8e5.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_SSAO1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-17T08:23:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twhy those guys from ThreeJS always have the nicest cars in their demos ?!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]