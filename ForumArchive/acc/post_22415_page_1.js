[{"Owner":"ian","Date":"2016-05-07T09:48:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would like to si ArcCamera to have plugin for virtual joystick for rotation. Or optional feature to joystick for move forward backward (which could be enabled or disabled)_lt_br /_gt_\n\tBut joystick for rotation will be fine to see.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have some example how arccamera follow ball. I create my own joystick for rotation only (without forward and backward..... options!) (and posibility for forward/backward/left/right joystick which we could attach 3d calulation of object in center of arccamera)_lt_br /_gt__lt_br /_gt_\n\tCan anybody add feature for arcCamera rotation pick/touch joystick like VirtualJoysticksCamera have it on the right side?_lt_br /_gt_\n\tMaybe you should inharid arcCamera and create ArcVirutalJoystickCamera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave anybody any opinion. Maby babylon.js should add this feature in new release.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-12T11:36:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Ian.  I began some tests...  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OORFZ%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OORFZ#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_IF_lt_/strong_gt_ you don_t_t see cyan-colored VJ rings_co_ momentarily change the URL to #12_co_ browse that_co_ and then return to #14... you should see rings_co_ then.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(I_t_m still working on WHY it_t_s doing that.  Might be firefox only.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe VJ only remains ON for 15 secs right now... because testing virtual joysticks in the playground can cause a condition where you can_t_t edit in the editor anymore.  I believe it is caused by a missing ._lt_em_gt_setVjCanvasAtopRenderCanvas_lt_/em_gt_() feature.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI _qt_borrowed_qt_ part of the virtual joysticks (vj) system... the vj_lt_em_gt_._onPointerMove_lt_/em_gt_ function (line 37+).  In lines 71-73_co_ I apply the delta values from the joystick... to the arcRotateCam alpha and beta values (its orbit left/right/up/down properties). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorks ok_co_ huh?  Next_co_ we can try holding control while dragging... to make the arcCamera take other actions... like move its target in/out/left/right. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter a playground SAVE_co_ you might see a condition where the joystick rings are ON as soon as you hit RUN.  I see it often.  Completely reload the playground_co_ and it might start working correctly again.  I am still fighting with this issue_co_ and not sure why it happens.  MAYBE we need to destroy the old vjCanvas in a scene.onDispose function or something.  Not sure yet.  Talk soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]