[{"Owner":"hit2501","Date":"2015-02-18T19:33:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How can I play a BABYLON.sound with a ActionManager.RegisterAction?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For animations I use_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_                var obj1 _eq_ scene.getMeshByName(_qt_Solid_qt_)_sm_                var obj2 _eq_ scene.getMeshByName(_qt_Curtains_qt_)_sm_                var obj3 _eq_ scene.getMeshByName(_qt_Fire_qt_)_sm_                obj3.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_                obj3.actionManager.registerAction(                    new BABYLON.CombineAction(BABYLON.ActionManager.OnPickTrigger_co_                     [                        new BABYLON.PlayAnimationAction(BABYLON.ActionManager.NothingTrigger_co_ obj1_co_ 0_co_ 100_co_ 0)_co_                        new BABYLON.PlayAnimationAction(BABYLON.ActionManager.NothingTrigger_co_ obj2_co_ 0_co_ 100_co_ 0)                    ])                )_sm__lt_/pre_gt__lt_p_gt_And for sound_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var audio _eq_ new BABYLON.Sound(_qt_Fire_qt__co_ _qt_Fire.wav_qt__co_ scene_co_ null_co_ { loop_dd_ true_co_ autoplay_dd_ true })_sm__lt_/pre_gt__lt_p_gt_But I dont know how to play the sound at the same time with animations. Can anybody help me please?._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-02-18T19:51:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do not know_co_ but try instancing sound (turn off loop and auto play) on line 4.  Put a .play() an ExecuteCodeAction as the first element of the array.  Would not put the instancing of sound in ExecuteCodeAction_co_ since it needs time to load._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2015-02-18T20:24:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks JC._lt_/p_gt__lt_p_gt_I tried_co_ dont load and the console gives me_dd_ Uncaught SyntaxError_dd_ Unexpected token new_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-02-18T21:40:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Might a execute code action be the right choice here to combine animation and sound?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_ul_gt__lt_li_gt_BABYLON.ExecuteCodeAction_dd_ Execute your own code when the trigger is raised and the condition is true_dd__lt_/li_gt__lt_/ul_gt__lt_p style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Segoe UI_t__co_ Helvetica_co_ arial_co_ freesans_co_ clean_co_ sans-serif_sm_font-size_dd_13px_sm__qt__gt_ExecuteCodeAction(trigger_co_ func_co_ condition)_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_22531_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_22531_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-02-19T09:34:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hey_co__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_The PlaySoundAction is undocumented_co_ this is my fault.I_t_m going to !_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_To play a sound using Action Manager_co_ you can use _dd__lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_obj3.actionManager.registerAction(new BABYLON.PlaySoundAction(BABYLON.ActionManager.OnPickTrigger_co_ soundReference_co_ condition))_sm__lt_/pre_gt__lt_p_gt_The soundReference parameter is the sound you already loaded using_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var audio _eq_ new BABYLON.Sound(_qt_Fire_qt__co_ _qt_Fire.wav_qt__co_ scene_co_ null_co_ { loop_dd_ true_co_ autoplay_dd_ false })_sm__lt_/pre_gt__lt_p_gt_To combine animation and play sound_co_ just do_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_myMesh.actionManager.registerAction(    new BABYLON.CombineAction(BABYLON.ActionManager.OnPickTrigger_co_     [        new BABYLON.PlayAnimationAction(BABYLON.ActionManager.NothingTrigger_co_ obj1_co_ 0_co_ 100_co_ 0)_co_        new BABYLON.PlaySoundAction(BABYLON.ActionManager.NothingTrigger_co_ mySoundReference)    ]))_sm__lt_/pre_gt__lt_p_gt_Hope it helps you !_lt_/p_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2015-02-20T13:58:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you very much Luaacro thats what Ive been looking for._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Perhaps I was using this (JC sorry if I dont understood before)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_obj3.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_                obj3.actionManager.registerAction(                    //do many actions on Pick trigger (for instance)                    new BABYLON.CombineAction(BABYLON.ActionManager.OnPickTrigger_co_                     [                        new BABYLON.PlayAnimationAction(BABYLON.ActionManager.NothingTrigger_co_ obj1_co_ 0_co_ 100_co_ 0)_co_                        new BABYLON.PlayAnimationAction(BABYLON.ActionManager.NothingTrigger_co_ obj2_co_ 0_co_ 100_co_ 0)_co_                        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger_co_ function () { \t\t\t\t\t\t\tvar audio _eq_ new BABYLON.Sound(_qt_Fire_qt__co_ _qt_Fire.wav_qt__co_ scene_co_ null_co_ { loop_dd_ true_co_ autoplay_dd_ true })_sm_ \t\t\t\t\t\t\tBABYLON.Engine.audioEngine.setGlobalVolume(1)_sm_\t\t\t\t\t\t\taudio.play()_sm_\t\t\t\t\t\t})                    ])                )_sm_   \t\t\t\tobj1.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_                obj1.actionManager.registerAction(                    //do many actions on Pick trigger (for instance)                    new BABYLON.CombineAction(BABYLON.ActionManager.OnPickTrigger_co_                     [                        new BABYLON.PlayAnimationAction(BABYLON.ActionManager.NothingTrigger_co_ obj1_co_ 100_co_ 200_co_ 0)_co_                        new BABYLON.PlayAnimationAction(BABYLON.ActionManager.NothingTrigger_co_ obj2_co_ 100_co_ 200_co_ 0)_co_                        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger_co_ function () { \t\t\t\t\t\t\tvar audio _eq_ new BABYLON.Sound(_qt_Fire_qt__co_ _qt_Fire.wav_qt__co_ scene_co_ null_co_ { loop_dd_ false_co_ autoplay_dd_ false })_sm_ \t\t\t\t\t\t\tBABYLON.Engine.audioEngine.setGlobalVolume(0)_sm_\t\t\t\t\t\t})                    ])                )_sm_ _lt_/pre_gt__lt_p_gt_obj3 to start the animations and audio and obj1 to stop the audio_co_ but to stop the audio _qt_audio.stop()_sm__qt_  dont work at all_co_ thats the reason I was changing the volume with _qt_BABYLON.Engine.audioEngine.setGlobalVolume_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there anyway I can stop the audio using _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Action Manager?_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once more thank you Luaacro._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-02-20T15:31:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Of course you can _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_There is the StopSoundAction that takes the same parameters as PlaySoundAction _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var stopSoundAction _eq_ new BABYLON.StopSoundAction(BABYLON.ActionManager.OnPickTrigger_co_ soundReference_co_ condition)_sm__lt_/pre_gt__lt_p_gt_I_t_m happy to help you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]