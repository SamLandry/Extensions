[{"Owner":"Dad72","Date":"2016-03-22T18:14:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow can we stop collisions? I would only use gravity physics and prevent collisions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsetCollision(true || false) for exemple. true by default. it_t_s possible ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-22T18:37:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tdo you mean physics collisions? If you just want gravity_co_ I guess it will be easier to just move every object by a given vector on every frame\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-22T20:02:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes for the phisics collisions. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem is that I use physics so that when I add an object on the stage with my editor_co_ it is positioned on the ground_co_ but if I move an object with the transform gizmo and it hits another object it found that eject as a bowling pin. I therefore wish to disable the collision of physics that is useful to me as an object does not receive the physical collisions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe soil itself should continue to receive collisions. So what I need is to disable physical collision objects.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I need a video can do in soirer or tomorrow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-22T22:38:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can turn off physics for the object you want to manipulate by settings its impostor to null and then restore it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr other idea_dd_ keep physics on and let the user move the objects around with physics constraints _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-22T23:01:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi dad_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere is a way to disable objects from colliding into one another using cannon js_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#A2WGF%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#A2WGF#1_lt_/a_gt_ _co_ notice line 30 which disables collisions. Contact will be created_co_ but will be ignored. This way only gravity (and other forces like impulses and velocity) will be taken into account. You can choose which body has collisions and which doesn_t_t.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is also a way to filter which bodies collide with the others_co_ but this is a native cannon thing_co_ I might write about it in the future.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh_co_ and don_t_t forget_co_ this is a cannon feature. changing the engine to Oimo won_t_t work anymore (one of the functionalities I still haven_t_t united between the two)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-22T23:39:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you for ideas. it seems to me good solution that I will try to see the best.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy cons I am not sure I understood your second solution DK with physics constraints. A small example would help me understand better.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T00:32:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis does not work as expected I think. I would like on the ground collision is enabled and the collision is off 2 spheres collide for example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn this PR_co_ I activate the collision as you Raanan and offers on the sphere I disable. But the sphere having no collision happens when even through the ground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this case_co_ I think the solution of 2 Deltakosh could be interesting_co_ but I did not really understand. It should I prevents two object to be ejected into contact with each other.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#A2WGF%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#A2WGF#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-23T08:38:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi dad72_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tto do that you will have to use cannon_t_s collision groups and masks_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#A2WGF%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#A2WGF#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust a note_co_ the collision group and mask are not indices_co_ they are binary operations. 1 in binary _eq_ 0001_co_ 2 in binary - 0010 _co_ so it works. but with 3 i(0011 in binary) it might not work as expected. Not a lot of time to explain_co_ but I hope this will get you further. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-23T15:52:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ it_t_s perfect Raanan. Thank you for you help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]