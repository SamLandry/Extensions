[{"Owner":"kevzettler","Date":"2017-02-17T06:01:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have an ArcCamera with a root object as it_t_s target. I_t_m going for a 3rd person or _qt_over the shoulder camera_qt_. I want the root to rotate on the y axis when the ArcCamera moves on the alpha axis. I_t_m currently doing something like_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\troot.rotation.y _eq_  -1 * camera.alpha_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt seems like the alpha is at a lower magnitude than what the rotation vector expects. I can rotate the camera like 3 times around the root before it rotates completely \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-02-17T07:26:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure if I can help_co_ but did you take a look at ArcFollowCamera ? _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/arcfollowcamera_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.5/arcfollowcamera_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kevzettler","Date":"2017-02-21T17:12:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI have looked at ArcFollowCamera it dosen_t_t seem to be working for though. Once attached to a target to follow I cannot control it. I setup a playground here _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#4FC2X%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#4FC2X#0_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tAlso to get the desired effect I want_co_ I would still have to rotate the target mesh based on the ArcFollowCameras alpha.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-21T17:28:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello using the ArcRotateCamera should work but as you already found out_co_ the camera.alpha is an angular rotation (based on a radius). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo help you _co_ can you provide a PG with your initial setup? (With the arcrotatecamera and the mesh)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kevzettler","Date":"2017-02-21T23:01:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ I_t_m having a hard time reproducing my setup in the playground environment. Playground is using v2.6-alpha I_t_m not on the same version. Actually I_t_m not sure what version I_t_m using is there a value I can check? Even so seems like coordinates are different between the two environments._lt_br /_gt__lt_br /_gt_\n\tHere_t_s my best attempt at reproducing _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#GVPCK%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#GVPCK#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a better example on my production environment _lt_a href_eq__qt_http_dd_//localhost_dd_8000/robotbones/attempts/babylon/babylon-bones-qubicle-CEWBS/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost_dd_8000/robotbones/attempts/babylon/babylon-bones-qubicle-CEWBS/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEssentially I want the character to face the direction the camera is facing on rotate. I thought I could maybe use the alpha from the rotateCamera but maybe I can take the a direction vector from the character to traget and apply that to the character instead._lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-21T23:12:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ you can check engine.Version to get your version\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also think about using some code from camera.getFrontPosition_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.targetCamera.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.targetCamera.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kevzettler","Date":"2017-02-24T21:48:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI was able to get the effect I want by doing\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_focus _eq_ arcCamera.getFrontPosition(100)_sm_\nfocus.y _eq_ 0_sm_\nfocus.multiplyInPlace(negativeVector)_sm_\nmesh.lookAt(focus)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHow do I move the camera towards that direction? I_t_m currently moving the mesh with mesh.translate when keys are down. I want to do the same movement with the camera. Seeing the camera dosen_t_t have a translate method\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-24T22:05:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou have to just call arcCamera.setPosition(newPosition)_sm_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]