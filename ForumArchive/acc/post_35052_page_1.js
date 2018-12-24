[{"Owner":"pichou","Date":"2018-01-13T23:15:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi_co_ _lt_br /_gt__lt_br /_gt_\n\tI am using BABYLON.GUI in my project and sometimes the text is not really readable when displayed with no background._lt_br /_gt__lt_br /_gt_\n\tI want to add a text shadow or at least bold the text so that you can correctly read it. But I didn_t_t find a way to do that with BABYLON.GUI._lt_br /_gt__lt_br /_gt_\n\tDo you have an idea?_lt_br /_gt__lt_br /_gt_\n\tThanks_co_ Pichou\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-01-14T11:01:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is one way to add shadow by replicating the text and offsetting\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23407_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#407_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2018-01-14T12:28:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOf course! So simple I regret I haven_t_t thought to do that! Thanks @johnK_lt_br /_gt_\n\tI gave me the idea to just rise the fontsize of the replicated text to have a border everywhere _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23408_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#408_lt_/a_gt__lt_br /_gt_\n\t But there is a horizontal spacing between letters and I didn_t_t find any property to avoid that._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-01-14T14:25:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28433-pichou/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28433_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28433-pichou/_qt_ rel_eq__qt__qt__gt_@pichou_lt_/a_gt_ _lt_br /_gt_\n\tHere_t_s another method using context.strokeText_co_ it does however require overwriting the _drawText function._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23410_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#410_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.GUI.TextBlock.prototype._drawText _eq_ function (text_co_ textWidth_co_ y_co_ context) {\n        var width _eq_ this._currentMeasure.width_sm_\n        var x _eq_ 0_sm_\n        switch (this._textHorizontalAlignment) {\n            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT_dd_\n                x _eq_ 0_sm_\n                break_sm_\n            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT_dd_\n                x _eq_ width - textWidth_sm_\n                break_sm_\n            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER_dd_\n                x _eq_ (width - textWidth) / 2_sm_\n                break_sm_\n        }\n        if (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) {\n            context.shadowColor _eq_ this.shadowColor_sm_\n            context.shadowBlur _eq_ this.shadowBlur_sm_\n            context.shadowOffsetX _eq_ this.shadowOffsetX_sm_\n            context.shadowOffsetY _eq_ this.shadowOffsetY_sm_\n        }\n        if(this.drawOutline){\n            context.strokeStyle _eq_ (this.outlineColor ? this.outlineColor _dd_ _qt_black_qt_)_sm_\n            context.lineWidth _eq_ (this.outlineWidth ? this.outlineWidth _dd_ 5)_sm_\n            context.strokeText(text_co_ this._currentMeasure.left + x_co_ y)_sm_\n        }\n\t\t\n        context.fillText(text_co_ this._currentMeasure.left + x_co_ y)_sm_\n    }_sm_\n\n\nvar text1 _eq_ new BABYLON.GUI.TextBlock()_sm_\n    text1.text _eq_ _qt_Hello world_qt__sm_\n    text1.color _eq_ _qt_white_qt__sm_\n    text1.fontSize _eq_ 24_sm_\n\n    text1.drawOutline _eq_ true_sm_\n    text1.outlineColor _eq_ _qt_black_qt__sm_\n    text1.outlineWidth _eq_ 4_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-16T18:30:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWait guys _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ It is already supported\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/gui#controls_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/gui#controls_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDemo_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#411_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#411_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2018-02-05T20:29:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPerfect! Just adding a shadowBlur and a shadowColor give a border on the text. _lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]