[{"Owner":"hcmetal","Date":"2018-11-08T00:46:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis might be a common question but I am having a bit trouble figuring it out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn mobile devices babylon scene content are rendered on relatively lower resolutions_co_ as the hardware has limited capabilities this is expected and acceptable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ I am wondering if it is possible to make the GUI layer render at a higher resolution_co_ similar to _qt_engine.setHardwareScalingLevel(number &lt_sm_ 1.0)_qt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObviously_co_ setting a lower scaling level on everything (GUI and 3D scene content) is not a viable option since mobile device cannot handle the rendering task.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo is it possible to make just the GUI render at a lower hardware scaling level and leave the other contents as they are?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr maybe there is some other way to make the GUI look _qt_sharper_qt_ (render at a higher resolution and utilize the high dpi display on mobile devices) and I am just not reading the docs carefully enough?_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope someone can point me to the right direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks alot!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ I am trying to use \n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#1e1e1e_sm_color_dd_#d4d4d4_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_advancedTexture_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_renderScale _eq_ 2.0_lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tBut it is not making the GUI appear sharper_co_ just smaller...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I might not be using this right.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-08T17:09:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe renderScale is the way to go. You must then scale all the sizes expressed in pixel as they will be smaller else.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hcmetal","Date":"2018-11-09T12:14:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ thanks for your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have experimented with some combinations of options and here are the results_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_20867_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/gui-resolution.jpg.40a97d25e291bfb583dfcb10a3046cb4.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_gui-resolution.thumb.jpg.8a31fe493f54b81b7c4cfd080b6c69a4.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20867_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/gui-resolution.thumb.jpg.8a31fe493f54b81b7c4cfd080b6c69a4.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince we are scrutinizing the pixel details it might not be easy to spot the difference from the image above because it is heavily optimized and downgraded by the forum automatically.Please check the attached file for a clearer image. And please notice we might be looking at these screenshots on a common HD monitor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is very obvious on a high dpi device (like retina screen) that lowering hardwareScalingLevel leads to the best quality_co_ as shown on the right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever the fps is terrible because mobile device cannot handle the rendering.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSetting the renderScale to a higher value actually results in poor antialiazing and reduce the quality of the GUI_co_ as shown in the middle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn all three cases the px sizes (including font size) of the icons and texts are adjusted accordingly to maintain the same proportional size on the screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to have the GUI rendering quality similar to the third (right) screenshot_co_ while keeping a lower resolution rendering of the 3D assets_co_ so both quality and performance can be achieved?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLink to the original screenshot_dd_ _lt_a href_eq__qt_https_dd_//github.com/hcmetal/misc/blob/master/gui-resolution.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/hcmetal/misc/blob/master/gui-resolution.jpg_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-09T16:33:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately all we have is then HTML canvas tools to render to a texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe best option could be to try to disable the texture sampling mode and try to render at bigger scale (To get crisper results) ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#713_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#713_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]