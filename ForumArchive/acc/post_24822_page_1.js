[{"Owner":"ian","Date":"2016-08-28T21:54:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhen and why should we check _qt_Freez World Matrix_qt_ for selected object in blender (for babylon exporter) ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-08-28T22:34:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/_qt_ rel_eq__qt__qt__gt_@ian_lt_/a_gt_ -  If I understand correctly_co_ Great question. I always freeze all transforms on all objects prior to export - especially for any skeleton and/or bone objects. For characters_co_ the reason is that in building and setting up your skeleton for binding vertices to bones_co_ the transforms (especially scale and rotation) will/may generally not end up to hold values of 1.0_co_ and 0.0 respectively. And if your scale is anything other than 1.0 in any channel_co_ then your animation will be scaled to a value other than 1. And if your rotations are other than 0.0 and especially if they are already approaching values of -179 or +179 (or even half this)_co_ then you will often observe _qt_flipping_qt_ and/or gimble lock when you animate bones approaching and certainy beyond these values - depending upon your scene and any proceedural animation of course. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ such issues can also easily apply to parent/child relationships (especially scale)_sm_ so you have everything to gain by freezing transforms prior to animating in your application or in BJS. But even if you_t_re simply exporting objects in your scene_co_ always freeze transforms to avoid the issues above_co_ and far more issues than I listed. Again_co_ you have nothing to loose and will eventually have problems at some time - perhaps not with your current project_co_ but it will happen in time - guaranteed. So simply play it safe. And as an example_co_ while working on films at Weta in NZ_co_ I made one of the rules in the production pipeline to always freeze all transforms prior to animating and/or exporting from any application. Prior to this rule_co_ almost 30% of work produced by our animation and mocap teams were rejected for flipping of bones and/or gimble lock on objects - costing tons of hours and loads of money. But by the 3rd LOTR film_co_ this # was reduced to less than 2%. I know this isn_t_t a film animation production we_t_re working on here_co_ however_co_ the very same rules apply regardless of the application you are using or the framework used to animated and to render.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd BTW - we never had a single asset or animation returned to us by EA or UBISoft once this rule was embedded into all Artists brains and the technical team reviewed and followed it through our pipeline integration - prior to delivery of any game assets to the aforementioned developers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT - Actually_co_ I believe I did misunderstand what you were asking_co_ however_co_ I hope that someone got the message to freeze transforms prior to any export. As for your specific question_co_ there are several circumstances to _lt_strong_gt__lt_em style_eq__qt_margin_dd_0px_sm_font-weight_dd_bold_sm_font-style_dd_normal_sm_color_dd_rgb(106_co_106_co_106)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_small_sm_letter-spacing_dd_normal_sm_line-height_dd_18.2px_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_freezeWorldMatrix_lt_/em_gt__lt_span style_eq__qt_color_dd_rgb(84_co_84_co_84)_sm_font-family_dd_arial_co_ sans-serif_sm_font-size_dd_small_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_18.2px_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_()_sm__lt_/span_gt__lt_/strong_gt_ - including setting bounding boxes to resolve their transform values to maintain consistant physics and collisions - among other uses including texture mapping and vertex animation. Pleae check out the topic below_dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/20189-set-bounding-box-fixed-values/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-08-29T05:18:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs freezWorldMatrix() (or in blender exporter addon in blender - check box _qt_Freeze World Matrix_qt_ same as if I select object manually in Blender and press ctrl+a (_lt_span style_eq__qt_padding-top_dd_75px_sm__qt__gt_Apply Object transformations_lt_/span_gt_) and select _qt_Rotation &amp_sm_ Scale_qt_ (so that Rotation is set to (0_co_0_co_0) and Scale is (1_co_1_co_1)) ? (as I see is not same)_lt_br /_gt__lt_br /_gt_\n\tDoes _qt_Freeze World Matrix_qt_ do the same to object (so set Rotation (0_co_0_co_0) and Scale (1_co_1_co_1)) when we are exporting to .babylon file?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I scale Box object (2_co_2_co_2) and rotate (30_co_30_co_30) and check _qt_Freeze World Matrix_qt_ then if I export to .babylon (file still have scale 2.2.2 and rotation 30_co_30_co_30._lt_br /_gt_\n\tbut.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreetings\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2016-08-29T10:30:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/_qt_ rel_eq__qt__qt__gt_@ian_lt_/a_gt_ Wouldn_t_t Ctr+a in Blender screw up rotations? If an object_t_s position is at_co_ say_co_ 1_co_0_co_0 and you apply that transformation_co_ it_t_s pivot is still at 0_co_0_co_0._lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-08-29T10:44:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf origion is 1_co_0_co_0 and if we do ctrl+a (rotation). Object should still have origin 1_co_0_co_0 (object_t_s origion _eq_ _qt_pivot_qt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tctrl+a rotation or scale just reset transtomration matrix (rotation to 0_co_0_co_0 and scale 1_co_1_co_1)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]