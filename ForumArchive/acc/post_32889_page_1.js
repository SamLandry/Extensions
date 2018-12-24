[{"Owner":"Juncheng","Date":"2017-09-12T19:49:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a question. How to touch pan the mesh in canvas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a setup with an arcRotateCamera and pep.js. On the desktop_co_ the panning with right click on mouse works fine. On the mobile_co_ one finger rotation and pinch zoom worked_co_ but two fingers panning is not working. I am not proficient with web developing_co_ hope I could get some ideas from you guys. Thanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code snippet for the camera_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// the camera\ncamera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 1.575_co_ 0.75_co_ 20_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\ncamera.setPosition(initCameraPostion)_sm_\ncamera.setTarget(BABYLON.Vector3.Zero())_sm_\ncamera.inertialRadiusOffset _eq_ 0_sm_\ncamera.allowUpsideDown _eq_ false_sm_\ncamera.pinchPrecision _eq_ 5_sm_\ncamera.wheelPrecision _eq_ 10_sm_\ncamera.fov _eq_ 0.01_sm_\n\t\ncamera.panningSensibility _eq_ 500_sm_\ncamera.panningInertia _eq_ 0.1_sm_\n\nscene.activeCamera _eq_ camera_sm_\nscene.activeCamera.attachControl(canvas_co_ false_co_ false)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe code snippet for canvas and pep_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!-- import pep.js --&gt_sm_\n&lt_sm_script src_eq__qt_https_dd_//code.jquery.com/pep/0.4.3/pep.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_!-- canvas --&gt_sm_\n&lt_sm_canvas class_eq__qt_myCanvas_qt_ style_eq__qt_user-select_dd_ none_sm__qt_ id_eq__qt_myCanvas-Modal_qt_ touch-action_eq__qt_none_qt_&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ViBe","Date":"2017-09-14T08:40:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRecently I read this topic _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/30781-how-to-enable-touch-panning-for-arcrotatecamera/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/30781-how-to-enable-touch-panning-for-arcrotatecamera/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28353-kjue/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28353_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28353-kjue/_qt_ rel_eq__qt__qt__gt_@Kjue_lt_/a_gt__lt_span_gt_ give a good solution for that. I don_t_t know if it could be added to the ArcRotateCamera code._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]