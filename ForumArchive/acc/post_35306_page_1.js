[{"Owner":"ozRocker","Date":"2018-01-27T01:43:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes anyone know how to fix the insensitive drag on Android devices?  Its fine on iPhone but on Android (and mobile emulator on Chrome) you have to swipe a lot to even move the camera slightly.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-27T03:37:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually_co_ its not the sensitivity.  It seems that the _qt_pointer leave_qt_ event fires instantly on Android (and Chrome mobile emulator).  So if you try and drag camera around it moves from the momentum only.  Hmm...trying to figure out why pointer leave event gets fired instantly.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-27T03:42:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhoops! My bad.  I needed to put _qt_touch-action_dd_ none_qt_ to the canvas.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]