[{"Owner":"Majeed Siddiqui","Date":"2016-08-17T12:02:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have few small boxes which I want to fit in big box. e.g I have 4x3_co_ 4x4_co_ 4x8 small boxes. And one big box of 4x(3 + 4 + 8 _eq_ 15) _eq_&gt_sm_ 4x15. I want all these small boxes to be aligned in one line. Which are covered by big box. This big box is not visible at very close distance from camera only small boxes are. But it hides all the small and displays it self only at large distance from camera. How do I achieve this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Edit 1_dd_ _lt_/strong_gt_I have drag and drop functionality thanks to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_ so doing drag and drop on big box should affect small boxes. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-08-17T12:56:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23043-majeed-siddiqui/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23043_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23043-majeed-siddiqui/_qt_ rel_eq__qt__qt__gt_@Majeed Siddiqui_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tI made a simple PG with a custom create box function for you to start experimenting_co_ you can create a new box by typing_sm__lt_br /_gt__lt_br /_gt_\n\tvar box1 _eq_ newBox(sizeX_co_ sizeY_co_ sizeZ_co_ scene)_sm__lt_br /_gt__lt_br /_gt_\n\tcheck it out_co_ and play around with it_co_ if you need further help_co_ don_t_t hesitate to ask _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\teverything needed to know_co_ should be commented in the code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KH9RY%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KH9RY#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Majeed Siddiqui","Date":"2016-08-17T13:06:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_! I know how to create basic boxes. How do I club all small boxes into big one?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Solution I tried_dd__lt_/strong_gt_ Creating small boxes and setting their parent as big box. This fails miserably! The big box acts as pivot instead of covering these small boxes. I know I can achieve the view of mesh through LOD.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want a simpler mechanism. Like big box acting as container for small boxes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-08-17T13:26:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23043-majeed-siddiqui/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23043_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23043-majeed-siddiqui/_qt_ rel_eq__qt__qt__gt_@Majeed Siddiqui_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tTake a look at what i did here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KH9RY%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KH9RY#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdepending on where i want the box_co_ I offset the little box by half it_t_s own scaling(size) either minus or plus_co_ aswell as the bigBox position_co_ and then half the bigbox_t_s scaling(size)_co_ again_co_ either plus or minus depending on where i want the box _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Note_lt_/em_gt_ that using scaling as a mesh_t_s size only works _qt_out of the box_qt_ when the mesh is created with a size of 1 and then scaled to the wanted size.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-17T23:07:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  There_t_s also a different kind of container... for boxes.  Physics-active.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#14ADCQ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#14ADCQ#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProbably not on-topic_co_ but what the heck.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-08-18T16:18:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23043-majeed-siddiqui/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23043_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23043-majeed-siddiqui/_qt_ rel_eq__qt__qt__gt_@Majeed Siddiqui_lt_/a_gt_ et al. First of all if you want to create boxes of specific sizes use MeshBuilder_co_ then there is no problem with scaling affecting  children. Also 4 x 3 is the dimensions of a rectangle not a box_co_ so what is the other dimension?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis PG may not be exactly what you want but it shows how MeshBuilder can be used to align boxes in a box.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KH9RY%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KH9RY#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-08-19T08_dd_56_dd_50Z_t_ title_eq__t_08/19/2016 08_dd_56  AM_t_ data-short_eq__t_2 yr_t__gt_August 19_co_ 2016_lt_/time_gt_ by JohnK_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_missing link added\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]