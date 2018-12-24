[{"Owner":"UeliUeli","Date":"2018-11-05T07:10:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDear Forum\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am working on an Apple / Mac computer and i can_t_t get the apple trackpad on my Laptop to work with babylonjs (with pep.js) arc rotaing camera (or any other camera in that sense). Is there a documentation or examples on how to get input of apples trackpad?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Yazheirx","Date":"2018-11-05T11:30:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you tried using a normal mouse?  I exclusively use an  Apple Track Pad and an ArcRotate caméra for my current project. I had some trouble until I used the correct constructor. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could also check the Playgrounds for ArcRotate an see if any of them work with your track pad... then “borrow” their constructor. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UeliUeli","Date":"2018-11-05T13:40:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWith a normal mouse it_t_s working_co_ but just not with the Trackpad. Sadly so far i didn_t_t see any Playground working with my Trackpad. What_t_s the correct contructor? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Yazheirx","Date":"2018-11-05T13:53:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf the solution is working with a standard mouse and none of the playgrounds are working for you then it is not the constructor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would assume it is how the trackpad drivers are interacting with the browser.  I don_t_t think I can be of much help there.  Hopefully_co_ some of the more senior members of this forum will be able to assist in that direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ I have two more things that I would check_dd_\n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\tTry a different browser (if you are testing in Safari try in Chrome)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tHave a co-worker with a trackpad try to use the same application (this would be to check for company policies configuring the driver oddly)\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UeliUeli","Date":"2018-12-07T14:46:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDear Forum\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m still struggling with touch control over the ArcRotatingCamera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPinch Zoom_dd_ Works on the iphone_co_ as well as on the Trackpad (touchpad) of my computer_co_ but_dd_ It is very slow on the Trackpad . If i change the _qt_camera.pinchDeltaPercentage_qt_ value_co_ the pinch speed changes on the iphone_co_ but not on the computer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTouch panning_dd_ Is not working on the iphone_co_ not on the trackpad of my computer\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m sorry if i miss the obvious_co_ but I_t_m getting a little desperate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes somebody knows a playground example where panning with two fingers is working?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks &amp_sm_ all the best_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\t                        /// ARC ROTATE CAMERA\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                // Parameters_dd_ alpha_co_ beta_co_ radius_co_ target position_co_ scene_lt_br /_gt_\n\t\t\t                                var camera _eq_ new BABYLON.ArcRotateCamera(_qt_camera_qt__co_ 0_co_ 0_co_ 5_co_ new BABYLON.Vector3.Zero_co_ scene)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\t                                // Positions the camera overwriting alpha_co_ beta_co_ radius  (LeftOrRight_co_UpOrDown_co_ForwardOrBackward))_lt_br /_gt_\n\t\t\t                                camera.setPosition(new BABYLON.Vector3(-1300_co_0_co_2700))_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                //set target_lt_br /_gt_\n\t\t\t                                camera.setTarget(BABYLON.Vector3.Zero())_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                // This attaches the camera to the canvas_co_ prevent default and tels it what button is used for panning_lt_br /_gt_\n\t\t\t                                camera.attachControl(canvas_co_ false_co_ true_co_ 2)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                //limit angle_lt_br /_gt_\n\t\t\t                                camera.lowerBetaLimit _eq_ 0.1_sm__lt_br /_gt_\n\t\t\t                                camera.upperBetaLimit _eq_ (Math.PI / 2) * 1.1_sm__lt_br /_gt_\n\t\t\t                                camera.lowerRadiusLimit _eq_ 20_sm__lt_br /_gt_\n\t\t\t                                camera.upperRadiusLimit _eq_ 4500_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                //camera.inertia _eq_ 1_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                //sensitivity\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                camera.pinchDeltaPercentage _eq_ 0.001_sm__lt_br /_gt_\n\t\t\t                                //camera.inertialPanningX _eq_ 5_sm__lt_br /_gt_\n\t\t\t                                //camera.pinchToPanMaxDistance _eq_ 10_sm__lt_br /_gt_\n\t\t\t                                //camera.angularSensibilityX _eq_ 500_sm__lt_br /_gt_\n\t\t\t                                //camera.angularSensibilityY _eq_ 5500_sm__lt_br /_gt_\n\t\t\t                                //camera.panningSensibility _eq_ 10.0_sm__lt_br /_gt_\n\t\t\t                                //camera.wheelPrecision _eq_ 0.8_sm__lt_br /_gt_\n\t\t\t                                //camera.speed _eq_ 0.5_sm__lt_br /_gt_\n\t\t\t                                //camera.pinchPrecision _eq_ 4_sm__lt_br /_gt_\n\t\t\t                                //camera.pinchDeltaPercentage _eq_ 8.0_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                //camera.panningInertia _eq_ 2_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                                scene.activeCamera _eq_ camera_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-12-07T14:56:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33223-ueliueli/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33223_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33223-ueliueli/_qt_ rel_eq__qt__qt__gt_@UeliUeli_lt_/a_gt_ does this playground work for you? _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#12WBC%2369_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#12WBC#69_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just tested on my Apple trackpad.  I am using three fingers to pan and two fingers to zoom in.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UeliUeli","Date":"2018-12-07T15:03:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Kcoley\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe zooming works with two fingers up &amp_sm_ down + pinch. But no panning with touch\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-12-07T15:25:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33223-ueliueli/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33223_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33223-ueliueli/_qt_ rel_eq__qt__qt__gt_@UeliUeli_lt_/a_gt_ I just remembered that I had enabled three finger drag on my Mac_co_ which also enables three finger panning with the ArcRotateCamera.  You can enable this in System Preferences &gt_sm_ Accessibility &gt_sm_ Mouse &amp_sm_ Trackpad &gt_sm_ Trackpad Options.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_12/1110245655_ScreenShot2018-12-07at7_22_03AM.png.d5d8344aad61f08c9295d6d033ba824f.png_qt_ data-fileid_eq__qt_21404_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21404_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_12/970077890_ScreenShot2018-12-07at7_22_03AM.thumb.png.0f8a20cd5b4a7fbdc3882617f441c135.png_qt_ alt_eq__qt_970077890_ScreenShot2018-12-07at7_22_03AM.thumb.png.0f8a20cd5b4a7fbdc3882617f441c135.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSelect _qt_three finger drag_qt_ next to the _qt_Enable dragging_qt_ dropdown and select the checkbox.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_12/1658678233_ScreenShot2018-12-07at7_15_54AM.png.446afb16fd9c1cb0b5bd9367871f34ea.png_qt_ data-fileid_eq__qt_21403_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21403_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_12/1096577935_ScreenShot2018-12-07at7_15_54AM.thumb.png.3dd1384d24008d0ee62e69bdaccf7c06.png_qt_ alt_eq__qt_1096577935_ScreenShot2018-12-07at7_15_54AM.thumb.png.3dd1384d24008d0ee62e69bdaccf7c06.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfterwards_co_ panning should work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UeliUeli","Date":"2018-12-08T13:49:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthat_t_s a great tipp_co_ thank you!! Now i can rotate it with three fingers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut what i was looking for is a way to pan - on the arc rotating camera this would mean to move the target_co_ right? Sorry if my english was not clear enough..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith this playground i am able to pan with two fingers on my mobile phone (iphone)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#C2ZGCJ%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#C2ZGCJ#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSadly it is not working on the trackpad (touchpad) of my computer.. Maybe i should try to make a custom input to the target of the arc rotating camera - i hope to find time to do that next week.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UeliUeli","Date":"2018-12-08T14:06:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_h3 style_eq__qt_border-bottom_dd_none_sm_color_dd_#222222_sm_font-size_dd_1.17em_sm_padding_dd_0px 20px 10px_sm__qt__gt_\n\t \n_lt_/h3_gt_\n\n_lt_ul style_eq__qt_border-color_dd_#eeeeee_sm_border-style_dd_solid_sm_border-width_dd_1px 0px_sm_color_dd_#222222_sm_font-size_dd_16px_sm_padding_dd_0px_sm__qt__gt_\n\t_lt_li style_eq__qt_border_dd_0px solid #eeeeee_sm_font-size_dd_14px_sm_padding_dd_10px 10px 10px 40px_sm__qt__gt_\n\t\tattachControl_lt_span_gt_(_lt_/span_gt_element_lt_span_gt__dd__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span_gt_HTMLElement_lt_/span_gt__co_ noPreventDefault_lt_span_gt_?_dd__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span_gt_boolean_lt_/span_gt__co_ useCtrlForPanning_lt_span_gt_?_dd__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span_gt_boolean_lt_/span_gt__co_ panningMouseButton_lt_span_gt_?_dd__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span_gt_number_lt_/span_gt__lt_span_gt_)_lt_/span_gt__lt_span_gt__dd__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span_gt_void_lt_/span_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_ul style_eq__qt_color_dd_#222222_sm_font-size_dd_16px_sm_padding_dd_0px_sm__qt__gt_\n\t_lt_li_gt_\n\t\t\n\t\t\t_lt_p_gt_\n\t\t\t\tOverrides_lt_span_gt_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.camera_qt_ style_eq__qt_background-color_dd_transparent_sm__qt_ rel_eq__qt_external nofollow_qt__gt_Camera_lt_/a_gt_._lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.camera#attachcontrol_qt_ style_eq__qt_background-color_dd_transparent_sm__qt_ rel_eq__qt_external nofollow_qt__gt_attachControl_lt_/a_gt_\n\t\t\t_lt_/p_gt_\n\t\t\n\n\t\t_lt_div_gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tAttached controls to the current camera.\n\t\t\t\t_lt_/p_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\n\t\t_lt_h4 style_eq__qt_font-size_dd_16px_sm__qt__gt_\n\t\t\tParameters\n\t\t_lt_/h4_gt_\n\n\t\t_lt_ul style_eq__qt_padding_dd_0px 0px 0px 20px_sm__qt__gt_\n\t\t\t_lt_li_gt_\n\t\t\t\t_lt_h5 style_eq__qt_font-size_dd_16px_sm__qt__gt_\n\t\t\t\t\telement_dd__lt_span_gt_ _lt_/span_gt__lt_span_gt_HTMLElement_lt_/span_gt_\n\t\t\t\t_lt_/h5_gt_\n\n\t\t\t\t_lt_div_gt_\n\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\tDefines the element the controls should be listened from\n\t\t\t\t\t_lt_/p_gt_\n\t\t\t\t_lt_/div_gt_\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\t_lt_h5 style_eq__qt_font-size_dd_16px_sm__qt__gt_\n\t\t\t\t\t_lt_span style_eq__qt_color_dd_#ffffff_sm_font-size_dd_14px_sm_padding_dd_1px 5px_sm__qt__gt_Optional_lt_/span_gt__lt_span_gt_ _lt_/span_gt_noPreventDefault_dd__lt_span_gt_ _lt_/span_gt__lt_span_gt_boolean_lt_/span_gt_\n\t\t\t\t_lt_/h5_gt_\n\n\t\t\t\t_lt_div_gt_\n\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\tDefines whether event caught by the controls should call preventdefault() (_lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault_qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_#4da6ff_sm__qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault_lt_/a_gt_)\n\t\t\t\t\t_lt_/p_gt_\n\t\t\t\t_lt_/div_gt_\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\t_lt_h5 style_eq__qt_font-size_dd_16px_sm__qt__gt_\n\t\t\t\t\t_lt_span style_eq__qt_color_dd_#ffffff_sm_font-size_dd_14px_sm_padding_dd_1px 5px_sm__qt__gt_Optional_lt_/span_gt__lt_span_gt_ _lt_/span_gt_useCtrlForPanning_dd__lt_span_gt_ _lt_/span_gt__lt_span_gt_boolean_lt_/span_gt_\n\t\t\t\t_lt_/h5_gt_\n\n\t\t\t\t_lt_div_gt_\n\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\tDefines whether ctrl is used for paning within the controls\n\t\t\t\t\t_lt_/p_gt_\n\t\t\t\t_lt_/div_gt_\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\t_lt_h5 style_eq__qt_font-size_dd_16px_sm__qt__gt_\n\t\t\t\t\t_lt_span style_eq__qt_color_dd_#ffffff_sm_font-size_dd_14px_sm_padding_dd_1px 5px_sm__qt__gt_Optional_lt_/span_gt__lt_span_gt_ _lt_/span_gt_panningMouseButton_dd__lt_span_gt_ _lt_/span_gt__lt_span_gt_number_lt_/span_gt_\n\t\t\t\t_lt_/h5_gt_\n\n\t\t\t\t_lt_div_gt_\n\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\tDefines whether panning is allowed through mouse click button\n\t\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t---\n\t\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\tQuestion_dd_ what can i do with the last argument of camera.attachControl? Is there a number that defines two fingers swipes?\n\t\t\t\t\t_lt_/p_gt_\n\t\t\t\t_lt_/div_gt_\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ul_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UeliUeli","Date":"2018-12-08T17:22:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFound out_dd_ _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_0 - LMB_co_ 1 - MMB_co_ 2 - RMB._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_so_dd_ no options for touch panning..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-12-10T06:38:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33223-ueliueli/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33223_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33223-ueliueli/_qt_ rel_eq__qt__qt__gt_@UeliUeli_lt_/a_gt_ it looks like panning works by holding down the control key while left-dragging_co_ though this causes a context menu to pop up on Mac OS_co_ which interferes with the pan.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll see if it is possible to make an update to support left-dragging with the command key for Mac OS\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]