[{"Owner":"faljse","Date":"2016-12-26T09:44:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co__lt_br /_gt_\n\tI noticed picking doesnt work correctly when using an orthographic camera._lt_br /_gt_\n\tI could reproduce the problem modifying your samples on playground_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XUDHE_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XUDHE_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tResult is always false_dd_ {hit_dd_ false_co_ distance_dd_ 0_co_ pickedPoint_dd_ null_co_ pickedMesh_dd_ null_co_ bu_dd_ 0…}_lt_br /_gt_\n\tIs this supposed to work_co_ or do i need to use a different method for ortho projection?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfaljse\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-26T18:40:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPicking works in ortho_co_ I_t_ve used it on production projects.  I_t_ll take a look once my girl is done with my pc (she is playing one of her Christmas presents)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jschwuch","Date":"2017-01-03T07:50:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m having problems with picking and orthographic cameras too. Because I have custom mouse handling in my Project I use scene.pick to get my picking results. Works like a charm with normal Cameras but doesn_t_t work at all with orthographic ones. Anyone got any tips what we could try to get it working? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-04T18:11:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo worry it was a bug with the new matrix projection code we did (for more depth precision)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is fixed now_dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]