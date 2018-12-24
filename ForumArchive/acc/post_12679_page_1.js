[{"Owner":"ramshreyas","Date":"2015-02-22T19:55:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have an array of 3 meshes. I_t_m trying to add a fade animation on all three._lt_/p_gt__lt_p_gt_When I loop over them beginning at index 0 and begin the animation on each_co_ the first doesn_t_t animate but the latter two do._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Curious_co_ I changed the loop from index _eq_ 2 down to 0. Now a different mesh (i _eq_ 2) doesn_t_t animate_co_ but 0 and 1 do._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is the animation_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_      var anim _eq_ new BABYLON.Animation(_qt_fade_qt__co_ _qt_visibility_qt__co_ 60_co_  BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_    var keys _eq_ []_sm_    keys.push({              frame_dd_ 0_co_              value_dd_ 1.0              })_sm_    keys.push({              frame_dd_ 60_co_              value_dd_ 0.0              })_sm_    anim.setKeys(keys)_sm_        mesh.animations.push(anim)_sm_    scene.beginAnimation(mesh_co_ 0_co_ 60_co_ false_co_ 1)_sm__lt_/pre_gt__lt_p_gt_If instead of applying this animation_co_ I just do_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_mesh.isVisible _eq_ false_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_then all 3 meshes disappear._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_Is there a limit on the # of simultaneous animations somewhere?_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_Thanks!_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-02-23T08:15:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you mean like that_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#E6LF7_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#E6LF7_lt_/a_gt_ ? Seems to work for me. I used exactly your code in a for loop over all the meshes. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-02-24T03:29:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My advice - check your hardware.  I_t_ve found gpu and framerate has a huge impact.  Also_co_ always press your refresh button._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]