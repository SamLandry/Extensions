[{"Owner":"timetocode","Date":"2018-11-24T10:33:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have several animations which are a single key frame. I guess we could say they_t_re just a pose. Is there a way to transition to that pose smoothly? I_t_m imagining something like whatever the current animation code does to go from one frame to another_co_ except it would go from bones in *any state* to moving those bones towards anything saved in a certain keyframe. Unless that stuff is baked_co_ which I guess would be an issue. In any case_co_ something like graduallyToPose(skeleton_co_ someFrame_co_ deltaToApply) is what I have in mind. Does something like that exist? Or are there some recommended building blocks from which I could make it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see an easy way to make (fake?) an equivalent behavior with animation blending. If I turn all my poses into 2 keyframes then I can make each of them an ever-looping 2 frame animation. Then I can blend between them endlessly_co_ smoothly moving my character from any pose to any pose_co_ and even being able to interrupt any transition and go to yet another pose. I just wasn_t_t sure how performance heavy that would be given that I don_t_t actually have real animations_co_ and I would be putting a dozen of these on 50+ meshes each.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe animation blending demo _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IQN716%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IQN716#9_lt_/a_gt_ actually does have an _t_idle_t_ state which is 89 frames of no change and is essentially what I_t_m trying to get at with poses.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-24T12:41:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is all here_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/animations#animation-blending_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/animations#animation-blending_lt_/a_gt_ and basically the same code as the pg in example  in your question.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]