[{"Owner":"krzysztof.s","Date":"2017-01-26T14:02:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-family_dd_Menlo_sm_font-size_dd_9pt_sm__qt__gt_\nPrimitivePointerInfo._lt_span style_eq__qt_color_dd_#660e7a_sm_font-style_dd_italic_sm__qt__gt_PointerEnter and _lt_/span_gt_PrimitivePointerInfo._lt_span style_eq__qt_color_dd_#660e7a_sm_font-style_dd_italic_sm__qt__gt_PointerLeave are not send to Sprite2D when Sprite2D is added to _lt_/span_gt_ScreenSpaceCanvas2D as child. \nOnly ScreenSpaceCanvas2D receive these events. ScreenSpaceCanvas2D has _t_enableInteractions _dd_ true_t_ and my Sprite2D has _t_isPickable _dd_ true_t_._lt_/pre_gt_\n\n_lt_pre_gt_\n_lt_code_gt_                background.pointerEventObservable.add( ( d_co_ s )_eq_&gt_sm_{\n                    console.log(_qt_background enter_qt_)\n                    background.opacity _eq_ 0.5_sm_\n                }_co_ BABYLON.PrimitivePointerInfo.PointerEnter )_sm_\n\n                background.pointerEventObservable.add( ( d_co_ s )_eq_&gt_sm_{\n                    console.log(_qt_background exit_qt_)\n                    background.opacity _eq_ 1.0_sm_\n                }_co_ BABYLON.PrimitivePointerInfo.PointerLeave )_sm_\n\n                background.pointerEventObservable.add(function (d_co_ s) {\n                    console.log(_qt_background CLICK_qt_)\n                }_co_ BABYLON.PrimitivePointerInfo.PointerUp)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOnly PointerUp event is handled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen i was figuring it out i found following comment in babylon.canvas2d.js_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_// NOTE TO MYSELF_co_ this is commented right now because it doesn_t_t seemed needed but I can_t_t figure out why I put this code in the first place_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-family_dd_Menlo_sm_font-size_dd_9pt_sm__qt__gt_\n\n_lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//// Trigger a PointerEnter corresponding to the PointerOver\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//if (mask _eq__eq__eq_ PrimitivePointerInfo.PointerOver) {\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//    this._debugExecObserver(cur_co_ PrimitivePointerInfo.PointerEnter)_sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//    cur._pointerEventObservable.notifyObservers(ppi_co_ PrimitivePointerInfo.PointerEnter)_sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//}\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//// Trigger a PointerLeave corresponding to the PointerOut\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//else if (mask _eq__eq__eq_ PrimitivePointerInfo.PointerOut) {\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//    this._debugExecObserver(cur_co_ PrimitivePointerInfo.PointerLeave)_sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//    cur._pointerEventObservable.notifyObservers(ppi_co_ PrimitivePointerInfo.PointerLeave)_sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//}\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_// Loop to the parent_lt_/span_gt__lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf i restore commended code_co_ events are coming_co_ but i am not sure it is properly way _sm_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using babylon 2.6.0\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-26T16:22:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-01-26T16:31:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ll have a check. if you can provide a Playground that demonstrates the issue it would help_co_ thanks!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"krzysztof.s","Date":"2017-01-27T10:22:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI made a playground _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1FK6IP%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1FK6IP#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInteresting_co_ in playground it is working _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tI got new canvas2d from_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/canvas2D/babylon.canvas2d.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/canvas2D/babylon.canvas2d.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand it seems to be fixed_co_ i was late with reporting_co_ thanks _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-01-27T10:27:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I was afraid it was a new bug due to the fix I made few days ago_co_ but apparently it was the opposite_co_ you found out the bug I fixed few days ago. Yep_co_ try to stick to the alpha version of 2.6 and also monitor this forum thread _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/22552-canvas2d-main-post/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/22552-canvas2d-main-post/_lt_/a_gt_ I post each time I had new feature of major bug fix.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]