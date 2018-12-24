[{"Owner":"FlashyGoblin","Date":"2016-03-09T14:35:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo when implementing the DeviceOrientationCamera on mobile_co_ and the device changes from portrait to landscape_co_ the camera controls don_t_t update to the new orientation. It remembers the original portrait orientation_co_ they don_t_t switch over to the landscape controls. Any idea on how to correct this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an example. On mobile_co_ start in portrait_co_ and then rotate to landscape. You_t_ll see the controls get all wonky.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#PNQPP%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#PNQPP#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-09T16:27:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t2 things_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1 You may need to tell the engine.  Resize for a browser is shown below. You might need to find the event for orientation switch\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_window.addEventListener(_qt_resize_qt__co_ function () {\n    engine.resize()_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t2. I am not sure resize() is going to work_co_ but would try that first\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FlashyGoblin","Date":"2016-03-09T17:12:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the reply!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ I have the resize listener implemented (just not in the playground example I posted)_co_ but the problem still exists. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-09T17:44:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou did not listen to #1.  I found this in 5 seconds\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//davidwalsh.name/orientation-change_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//davidwalsh.name/orientation-change_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FlashyGoblin","Date":"2016-03-09T19:22:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI know the orientationchange event_co_ but again_co_ that_t_s not the issue. I_t_m asking if there is a way to update the camera so it knows that the orientation has changed. Calling engine.resize() on either the window_t_s resize or orientationchange event doesn_t_t do the trick. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-03-09T22:05:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep we have orientation problems with this camera and had no time for now to fix it_co_ feel free to jump into if you wish to contribute\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12914-is-webvrcamera-for-cardboard-devices/?do_eq_reportComment&amp_sm_comment_eq_74397_qt__gt_related thread_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FlashyGoblin","Date":"2016-03-10T13:04:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the update_co_ Vousk-prod! I_t_ll take a look.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]