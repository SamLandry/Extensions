[{"Owner":"MrVR","Date":"2017-02-17T21:08:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Guys I was wondering if is posible to have two vew ports in the two sides of the VR camera. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ let me know if you know the answer please\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let myCamera_dd_ BABYLON.FreeCamera _eq_ new BABYLON.VRDeviceOrientationFreeCamera(_qt_FreeCamera_qt__co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ this.scene)_sm_\n            this.scene.activeCamera.position_co_ this.scene)_sm_\n            myCamera.attachControl(this.engine.getRenderingCanvas())_sm_       \n            this.scene.activeCameras.push(myCamera)_sm_\n            this.scene.activeCameras.push(this.scene.activeCamera)_sm_\n            this.scene.activeCamera.viewport _eq_ new BABYLON.Viewport(0_co_ 0_co_ 0.5_co_ 1.0)_sm_            \n            myCamera.viewport _eq_ new BABYLON.Viewport(0.2_co_ 0_co_ 0.2_co_0.5)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI only get this in one side of the left lens  _lt_img alt_eq__qt_viewport.JPG.2693a83ea2eb658f6a040c12844fa56a.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11685_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/viewport.JPG.2693a83ea2eb658f6a040c12844fa56a.JPG_qt_ /_gt_ do I have to create a third one _co_ I need to have a camera view port inside  my vr camera if any body knows how to do it it would be appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]