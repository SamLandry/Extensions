[{"Owner":"KramSurfer","Date":"2018-07-12T21:26:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a need to know exactly how many times a user has rotated left or right_co_ ideally it would just be a positive or negative float that i can divide by 2*pi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve noticed a variance in browsers and even session as the Y rotation value of the BABYLON.FreeCamera_co_ sometimes it will go up into much higher _t_rotation_t_ values_co_ but more often it stays between -3.14 and 3.14\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tAny ideas welcome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeith R Morrison\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-07-12T22:22:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can try diffing the y rotation of the camera on each frame and adding the diff to a local variable that tracks how far the camera has rotated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee this playground _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#UQ5ZS8_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#UQ5ZS8_lt_/a_gt_ it prints how many rotations the camera is currently at every frame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KramSurfer","Date":"2018-07-12T22:28:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is exactly what I was looking for.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]