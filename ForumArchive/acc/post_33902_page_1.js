[{"Owner":"Arte","Date":"2017-11-09T15:45:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have issue with _lt_font color_eq__qt_#000000_qt__gt_clone mesh_lt_/font_gt_ and _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_cloned mesh _lt_/span_gt_attach to _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_parent_lt_/span_gt_. After attached to parent cloned mesh position behaving strangely.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HWQ2QH_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HWQ2QH_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 22-23-24 _lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_//behaving strangely_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I_t_ve been scratching my head for a while_co_ any suggestion?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-09T16:18:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello I_t_m not sure to get what is wrong in your scene _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo I added a sphere to visualize center and axes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HWQ2QH%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HWQ2QH#2_lt_/a_gt_ (You can see that box is correctly positioned at -1_co_ -1_co_ -1)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow let_t_s add the clone_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HWQ2QH%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HWQ2QH#3_lt_/a_gt_ (the newBox is also correctly positioned at -1_co_-1_co_-1 from his father so -2_co_-2_co_-2 from the global world. Indeed the clone function also cloned the parent position)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then we can move the parent box_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HWQ2QH%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HWQ2QH#4_lt_/a_gt_ (the parent box is now at -1_co_1_co_-1 and the child box remains at -1_co_-1_co_-1 from his parent which means -2_co_0_co_-2 from the world)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-11-09T17:35:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAHHHHHHHH... UHHHHH....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tForgot to reset child position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnewBox.position _eq_ new BABYLON.Vector3(0_co_0_co_0)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNext time I_t_ll take smaller shovel so that I do not go too deep. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Thank you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]