[{"Owner":"jiweigang1","Date":"2014-07-01T10:15:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_var animationBox _eq_ new BABYLON.Animation(_qt_tutoAnimation_qt__co_ _qt_position_qt__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_VECTOR3_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm__lt_/p_gt__lt_p_gt_i use it  to  do  a animation_lt_/p_gt__lt_p_gt_but  when the animation  is  end  i cant  change  the position any more_lt_/p_gt__lt_p_gt_box.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger_co_ function(){_lt_/p_gt__lt_p_gt_              box.position _eq_ new BABYLON.Vector3(box.position.x-10_co_box.position.y_co_box.position.z)_sm__lt_/p_gt__lt_p_gt_}))_lt_/p_gt__lt_p_gt_i change  position  this  way_lt_/p_gt__lt_p_gt_before   to do  the  animation  its work  well_lt_/p_gt__lt_p_gt_but  when the  animation is  end  it cant  work any more_lt_/p_gt__lt_p_gt_whats wrong with it?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-01T15:26:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think your animation is still running_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_could you use the beginAnimation with loop _eq_ false ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jiweigang1","Date":"2014-07-02T04:13:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you  are right  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_its ok  now  thank you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]