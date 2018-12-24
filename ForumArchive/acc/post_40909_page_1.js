[{"Owner":"AlexMuir","Date":"2018-10-28T10:02:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m completely stumped by my inability to rotate an imported mesh which is then cloned.  It took me a long time to isolate the issue into a playground but I_t_ve finally done it and I_t_m sure one of you is going to tell me something obvious. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a library of meshes (imported from GLB files).  I clone a mesh and add it to the scene and I can set the rotation using \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_clone.rotation _eq_ BABYLON.Vector3.FromArray([1_co_0_co_0])_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe clone is successfully rotated_co_ but almost immediately (on the next rendering call_co_ I_t_m guessing) the rotation is lost on the clone.  Which means that when I later set_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_clone.rotation _eq_ BABYLON.Vector3.Zero()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tthe object does not return to its original rotation.  In other words_co_ setting the rotation on cloned meshes seems to be cumulative.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis behaviour differs from a built mesh which does exactly what I would expect.  I have shown both examples in the playground - hopefully it makes more sense there!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/indexStable.html#PN1NNI%2397_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/indexStable.html#PN1NNI#97_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2018-10-28T13:37:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/indexStable.html#PN1NNI%2398_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/indexStable.html#PN1NNI#98_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the exporter - at least the one for Max_co_ models are exported with the rotationQuaternion property set. When this is the case_co_ .rotation is not used.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEither null out the rotationQuaternion_co_ or rotate the model/clone using one of the methods that supports quaternion rotations.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexMuir","Date":"2018-10-28T15:00:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWonderful!  Thank you very much.  Such a responsive community around this project!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-29T17:52:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFlagging as solved (thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ _lt_span_gt__dd_))_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]