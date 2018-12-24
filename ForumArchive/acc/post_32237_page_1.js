[{"Owner":"agmcleod","Date":"2017-08-08T16:01:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLift your arm high over your table if you_t_re inside_co_ and bring it down towards the surface. As you do this_co_ the shadow becomes more in focus_co_ and more crisp. I_t_m wondering if it_t_s possible to replicate this behaviour using the shadow maps or not. I have a setup fairly similar to the example here_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IIZ9UU_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IIZ9UU._lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut even when you toy with the Y position of the torus in that example_co_ the shadow keeps the same level of blur_co_ regardless of distance from light.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-08T16:30:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe blur is independent from the distance but we plan to add contact hardening shadows for 3.1\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the meantime you could think about increasing the blur manually based on distance?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-08-08T17:51:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhh good to know. Adjusting the blur would apply to whole shadow map eh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBtw thanks for replying to all my questions. You_t_re a champ on here.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-08T17:53:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyes it will apply to the whole map but it could be enough depending on the object\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-08-08T17:59:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\ti_t_ll try it to keep simple_co_ or maybe average it. I_t_m applying to two cubes moving independently.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-08-08T18:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat did the trick. The shadows dont look as good when the cubes are higher up as they did. But it works well enough for this purpose. I_t_ll check out 3.1 changes once they come. Thanks again.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-08T19:26:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou rock!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]