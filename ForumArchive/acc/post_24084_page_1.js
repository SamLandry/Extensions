[{"Owner":"Inflicta","Date":"2016-07-26T14:31:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tScenario_dd_ I want to move a mesh along the z axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOption 1_dd_ set up a Babylon Animation using keys etc to move the mesh to desired position\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOption 2_dd_ update the meshes position.z (+1 or -1) in the render loop until the desired position\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuestion_dd_ Which of these options would be the most CPU intensive? Is there something special about Babylon Animations that make them worth using over option 2?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Numa","Date":"2016-07-26T15:30:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think either way your CPU won_t_t feel a thing unless you have a million of them every frame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you_t_re only going to move along an axis linearly you might as well just use the render loop and increment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to execute more complex movements using tweens_co_ ease in/out_co_ trigger functions when an animation is over_co_ loop_co_ etc then it_t_ll probably be easier (and readable) to use the animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy Babylon newbie opinion _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]