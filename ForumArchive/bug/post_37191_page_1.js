[{"Owner":"jonathanlurie","Date":"2018-04-23T16:19:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been playing a bit with quaternions to rotate meshes but I also need to use Euler angles. The quaternions are great for my internal cooking because (imo) they are easier to use and more versatile than Euler angles_co_ but Euler angles are good for UI_co_ it speaks to people (especially if we convert everything into degrees (the audience of the app is neuroscience researchers_co_ so they would probably think quaternions are black magic).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe BJS doc says _qt_once you have used a quaternion_co_ the rotation property of a mesh become null and basically no longer usable_qt_. Fortunately_co_ we can have user think they set the rotation with a Euler angle but internally convert in into a quaternion. Unfortunately_co_ I think I went into a bug. Here is what I have_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// this._planeSystem is a mesh composed of 3 orthogonal planes\n\nlet currentQuaternion _eq_ BABYLON.Quaternion.FromRotationMatrix( this._planeSystem.computeWorldMatrix(true) )\nlet eulerAngle _eq_ currentQuaternion.toEulerAngles()\nlet someQuaternion _eq_ eulerAngle.toQuaternion()\n\n/*\nI expected currentQuaternion to be the same as someQuaternion (with possibly some epsylon)\nbut instead_co_ here is what I have_dd_\n\n*/\n\ncurrentQuaternion\n{\n  w_dd_ 0.9987502633525326_co_\n  x_dd_ 0.04997916777685541_co_\n  y_dd_ 0_co_\n  z_dd_ -1.1097604563493715e-17\n}\n\neulerAngle\n{\n  x_dd_ 0.09999999729822372_co_\n  y_dd_ -1.1148677691588498e-18_co_\n  z_dd_ -2.2278771887960178e-17\n}\n\nsomeQuaternion\n{\n  w_dd_ 0.9987502604624825_co_\n  x_dd_ -5.56737237414314e-19_co_\n  y_dd_ -2.786008172251712e-20_co_\n  z_dd_ 0.04997916792147843\n}\n\n/*\nI am not sure if it_t_s toEulerAngles() or toEulerAngles() which is in fault but it looks like someQuaternion.z should have been someQuaternion.x\n*/_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI_t_m not sure_co_ but looking at _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/12202ff68bb404a5f90af6789375e6f7153d8ca3/src/Math/babylon.math.ts#L3528_qt_ rel_eq__qt_external nofollow_qt__gt_the source_lt_/a_gt__co_ it looks like you plan on giving the choice of the order.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you confirm it_t_s a bug?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJonathan.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-04-23T18:53:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI now know that it_t_s the method _t_Vector3.toQuaternion()_t_ that is guilty!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my project_co_ I just replaced it by a piece of code I borrowed from glMatrix that made more Babylony_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  function eulerAngleToQuaternion( eulerAngle_eq_{x_dd_0_co_ y_dd_0_co_ z_dd_0}) {\n    let toHalf _eq_ 0.5_sm_\n    let x _eq_ eulerAngle.x * toHalf_sm_\n    let y _eq_ eulerAngle.y * toHalf_sm_\n    let z _eq_ eulerAngle.z * toHalf_sm_\n    let sx _eq_ Math.sin(x)_sm_\n    let cx _eq_ Math.cos(x)_sm_\n    let sy _eq_ Math.sin(y)_sm_\n    let cy _eq_ Math.cos(y)_sm_\n    let sz _eq_ Math.sin(z)_sm_\n    let cz _eq_ Math.cos(z)_sm_\n    let quat _eq_ {\n      x_dd_ sx * cy * cz - cx * sy * sz_co_\n      y_dd_ cx * sy * cz + sx * cy * sz_co_\n      z_dd_ cx * cy * sz - sx * sy * cz_co_\n      w_dd_ cx * cy * cz + sx * sy * sz\n    }\n    return quat_sm_\n  }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt now gives the same quaternion back_co_ which is good enough for now. It also seems simpler than the one implemented in babylon.math.ts\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-23T18:57:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks a lot for the investigation I ll check with _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ on Wednesday as we are really close from the release _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground comparing both results_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SVKGHN%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SVKGHN#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-04-23T19:16:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ for the playground! It looks like both are still moving... Also_co_ you made me realize I forgot to normalize my quat!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-23T19:44:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnp We ll look into it ASAP.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-23T21:44:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tQuick update_co_ I completely forgot...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe method from yaw pitch roll to quat is on the quaternion class and is fully stable_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SVKGHN%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SVKGHN#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-23T22:47:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI swap the vector toQuaternion to work intuitively on the release version. So now all works as expected. Thanks for reporting_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SVKGHN%233_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#3d6594_sm_font-size_dd_14px_sm__qt__gt_https_dd_//www.babylonjs-playground.com/#SVKGHN#3_lt_/a_gt_ and _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SVKGHN%232_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#3d6594_sm_font-size_dd_14px_sm__qt__gt_https_dd_//www.babylonjs-playground.com/#SVKGHN#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-04-24T14:11:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ _co_ thanks for the fix! You_t_re right_co_ using BABYLON.Quaternion.RotationYawPitchRoll(y_co_ x_co_ z) is a solid alternative!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve just updated to v3.2.0-rc.2 and now I can get my user to think in Euler angles (read/write) but have all my internal logic in quaternions!! Thanks for your reactivity on the updates and on providing playground examples_co_ highly appreciated!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]