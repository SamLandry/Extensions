[{"Owner":"Pryme8","Date":"2016-04-03T15:42:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI might be mistaken_co_ but it seems like it the case that if I make a parent objects visibility false then the children stay visible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I am wondering is there a method of setting the parents visibility and having that also effect the children hopefully there is a method for that and not a loop through the children.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-04-03T15:45:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tuse setEnabled(false or true).  It is the most efficient way of mothballing meshes render cpu wise_co_ and it does the kids too.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-04-03T16:27:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthat is awesome thank you_co_ I was just setting the visibility of my widgets_co_ and in the back of my mind I was like ohh man thats a lot data...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-04-03T16:29:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_parent.poles.X.visibility _eq_ true_sm_\nparent.poles.Y.visibility _eq_ true_sm_\nparent.poles.Z.visibility _eq_ true_sm_\nparent.caps.X.visibility _eq_ true_sm_\nparent.caps.Y.visibility _eq_ true_sm_\nparent.caps.Z.visibility _eq_ true_sm_\nparent.dualAxis.XY.enableEdgesRendering(1-0.000000000000001)_sm_\t\nparent.dualAxis.YZ.enableEdgesRendering(1-0.000000000000001)_sm_\t\nparent.dualAxis.ZX.enableEdgesRendering(1-0.000000000000001)_sm_\n\nturned into_dd_\nparent.poles.parent.setEnabled(true)_sm_\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tMy god your a boss_co_ just say a HUGE increase in efficiency and was able to cut about 18 lines of script out._lt_br /_gt__lt_br /_gt_\n\tand every widget had its own stuff like that so yea huge help thank you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]