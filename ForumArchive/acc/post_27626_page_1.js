[{"Owner":"AB95","Date":"2017-01-12T08:07:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere might be a way of doing this but I must be missing something...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a scene which consists of different meshes having different animations_co_ all of the animation only run once.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically_co_ I would like to be able to _qt_reload_qt_ the scene without actually reloading it_co_ which I try to reset all the meshes_t_ animations by pausing all unfinished meshes_t_ animatable_co_ set their animation_t_s frame back to zero_co_ and restart each of the animatable again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis method work when all of the animatables in scene have not reached their last frame. It won_t_t work on those animatable who had reached its last frame_co_ which their frame will be set to zero_co_ but not able to be restarted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA simplified scene that showing my approach_co_ as you will see the restart button doesn_t_t work when the animation has reached its last frame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OQENJ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OQENJ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny help would be appreciated_co_ thank you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-01-12T08:24:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24256-ab95/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24256_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24256-ab95/_qt_ rel_eq__qt__qt__gt_@AB95_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tAccording to the documentation_co_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Animations_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Animations_lt_/a_gt_ (just above the _qt_controlling animations_qt_ section_co_ the basic functions are listed._lt_br /_gt__lt_br /_gt_\n\tthe correct use would be animation.reset()_sm__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OQENJ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OQENJ#2_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-01-12T08:26:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can begin the animation again\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OQENJ%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OQENJ#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AB95","Date":"2017-01-12T09:19:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for both of your quick response! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJohnK method works for me -- only if my issue is within the playground scene_co_ the thing is_co_ sry for the simplified scene_co_ I realise I should have pointed out some part that make me resist in using scene.beginAnimation_co_ the reason is that I had another animation within the callback of the first animatable_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OQENJ%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OQENJ#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhich using scene.beginAnimationI() will cause the animatable within the first animatable_t_s callback being called without the first animatable completes its animation (you should be able to observe the second animatable start before the first animatable finish_co_ by pressing the restart button before the box finish its animation).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t I try to I explain my problem as clear as possible_co_ thanks for the help!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AB95","Date":"2017-01-12T10:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok_co_ I think I solved the problem_co_ to prevent the callback being called_co_ I just set the first animatable_t_s callback to null every times I want to restart the entire scene animation_co_ reset the second animatables back to frame zero as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OQENJ%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OQENJ#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]