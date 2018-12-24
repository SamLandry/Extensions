[{"Owner":"RetekEger","Date":"2018-06-19T10:49:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m pretty new to Babylon.js_co_ only started using it a few days ago_co_ but really enjoy it_co_ great work! _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI encountered some odd behavior with using deterministic lockstep on my setup_co_ when running the example from the Animation page (_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#DU4FPJ%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#DU4FPJ#3_lt_/a_gt_) on my laptop_t_s display (120Hz) the animation is twice as fast as on my connected monitor (60Hz) - tried with both Latest and Stable version_co_ with both Cannon and Oimo plugins. My first guess would be that the algorithm is only prepared to handle low FPS_co_ and does not take into account possible higher values. Also tried to dig in to the project on GitHub_co_ but since I_t_m not that familiar with the structure_co_ sadly I did not find the sources responsible for the behavior. Could some expert please verify my finding?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you_co_ keep up the good work_co_ cheers!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-06-19T16:12:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdding _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ to help on Physix _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-06-20T09:55:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31902-retekeger/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31902_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31902-retekeger/_qt_ rel_eq__qt__qt__gt_@RetekEger_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyour guess is right. The default values are set for 60fps. You can see the get and setTimeStep functionis of both engines. You can set the timestep to be different and fit your needs_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_physicsEngine.setTimeStep(1/120)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI hope this gets you further!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RetekEger","Date":"2018-06-20T12:13:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__co__lt_br /_gt_\n\tThanks for the fast answer! Actually in the before mentioned example_co_ the timestep is explicitly set to 1/60_co_ and for my scenario I find 120 FPS a bit of overkill for this edge case_co_ although I_t_d need to be sure_co_ that animation speed is independent of the user_t_s FPS. Is there a best practice_co_ to limit the physics engines_t_ FPS to 60_co_ even if running on a 120Hz monitor? I_t_d expect all animations to play the same speed if I use deterministicLockstep_co_ regardless the environment (except for lockstepMaxSteps)_co_ but might be_co_ that I_t_m misunderstanding the whole concept - that is why I asked for confirmation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-06-20T13:22:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ you are totally right - it should still run at 60FPS even on a 120FPS monitor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust for me to be sure - when you say animations_co_ you mean the physical movement of objects_co_ right? Babylon also have an animations API_co_ both are implemented in the deterministic step.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tmaybe would be better to have a playground for this_co_ I will try to emulate this on my poor 60fps screen _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RetekEger","Date":"2018-06-21T07:54:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just went and confirmed_co_ that the issue only exists with the physics engines_t_ time-step_co_ not with programmatic or loaded skeletal animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground tutorial where the issue can be seen_co_ also can change to Oimo on line 11 with same output_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DU4FPJ%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DU4FPJ#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tConfirmation control animation that I checked_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IQN716%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IQN716#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I can help with anything to move the solution further just ping me! _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Thx!_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]