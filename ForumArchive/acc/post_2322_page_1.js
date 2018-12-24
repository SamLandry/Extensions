[{"Owner":"zincman320","Date":"2013-11-26T15:07:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have this camera_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var camera _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_ Math.PI / 2_co_ Math.PI / 3_co_ 410_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_camera.lowerRadiusLimit _eq_ 70_sm_camera.upperRadiusLimit _eq_ 500_sm__lt_/pre_gt__lt_p_gt_And I have this mesh_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var testing _eq_ BABYLON.Mesh.CreatePlane(_qt_testing_qt__co_ 100_co_ scene)_sm_testing.rotation _eq_ new BABYLON.Vector3(Math.PI / 2_co_ Math.PI_co_ 0)_sm_testing.position.y _eq_ -20_sm_testing.parent _eq_ camera_sm__lt_/pre_gt__lt_p_gt_And I want the mesh to move with the camera when I call the following code_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_$(_t_#topBorder_t_).on(_t_mouseenter_t__co_ function() {    this.iid _eq_ setInterval(function() {    scene.activeCamera.target.z -_eq_ speed_sm_    }_co_ interval)_sm_}).on(_t_mouseleave_t__co_ function(){    this.iid &amp_sm_&amp_sm_ clearInterval(this.iid)_sm_})_sm__lt_/pre_gt__lt_p_gt_I thought the mesh would move since I set its parent to camera but it stays in the same place. Any suggestions?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-26T16:03:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_this is because you move the target of the camera (and not its position)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zincman320","Date":"2013-11-26T19:43:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried changing _lt_span_gt_scene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_activeCamera_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_target_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_z _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_-_eq__lt_/span_gt__lt_span_gt_ speed_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__sm_ to _lt_/span_gt__lt_span_gt_scene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_activeCamera_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_position_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_z _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_-_eq__lt_/span_gt__lt_span_gt_ speed and now nothing moves._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-26T19:48:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Try_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_testing.position.z -_eq_ vitesse_sm__lt_/pre_gt__lt_p_gt_or _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_camera.position.z -_eq_ vitesse_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zincman320","Date":"2013-11-26T19:55:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I can do testing.position.z and it works when I try camera.position.z everything disappears. I would like to only set the camera position though because I_t_m trying to add in a UI made of several different components._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-26T20:05:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You give a speed too fast on the camera._lt_/p_gt__lt_p_gt__lt_span_gt_try _dd__lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_camera.position.z -_eq_ 0.1_sm__lt_/pre_gt__lt_p_gt_or_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_camera.position.z -_eq_ 0.05_sm__lt_/pre_gt__lt_p_gt_Test several speed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-26T21:28:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The camera is an ArcRotateCamera. Either you change alpha and beta values (to change the rotation) or either youuse cam.setPosition() to compute alpha and beta values for you_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zincman320","Date":"2013-11-27T00:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That worked_co_ thanks again Deltakosh!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]