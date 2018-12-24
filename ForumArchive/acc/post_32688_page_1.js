[{"Owner":"MackeyK24","Date":"2017-08-31T22:59:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys ... I am creating transitions and blend trees for BabylonJS toolkit... The very nature of the transition system in unity DOES NOT ALLOW traditional looping...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEVERYTHING is a transition condition check... if NO conditions are meet after ANY animation is play it is stopped... the have various of way they id to LOOP back on itself with ANOTHER transition set state.... So basically they ALWAYS play one iteration of an animation and check it transition condition (which may be itself) and plays that animation clip...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I am wonder what the performance impact of babylonJS of doing ANOTHER scene.beginAnimation in the OnAnimationEnd end event in the same frame as the on animationEnd Event (so its not choppy) VS playing it with a loop cycle... I won_t_t know if cam to loop back onto itself until AFTER the animation has been played and its conditions are check... So I gotta _t_Manually Loop Animations_t_ even small few frame animations_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ ... Pinging you in too _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an example of some of my state machine update logic_co_ tell me why you think the impact performance of manually looping animations this way will be_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private setCurrentMachineState(name_dd_string)_dd_void {\n    if (this._state _eq__eq_ null || this._state.name !_eq__eq_ name) {\n        this._state _eq_ this.getMachineStateInfo(name)_sm_\n    }\n    if (this._state !_eq_ null) {\n        this._state.interupted _eq_ false_sm_\n        this._state.sts _eq_ BABYLON.MachineStatus.None_sm_\n        if (this._state.motion !_eq_ null &amp_sm_&amp_sm_ this._state.motion !_eq__eq_ _qt__qt_ &amp_sm_&amp_sm_ this._state.type _eq__eq__eq_ BABYLON.MotionType.Clip) {\n            var local_dd_BABYLON.MachineState _eq_ this._state_sm_\n            var blend_dd_number _eq_ BABYLON.Constants.NoBlending_sm_\n            var speed_dd_number _eq_ local.speed_sm_\n            local.sts _eq_ BABYLON.MachineStatus.Playing_sm_\n            this._animataions _eq_ this.manager.playAnimationClip(local.motion_co_ this.owned_co_ false_co_ speed_co_ blend_co_ true_co_ ()_eq_&gt_sm_{ \n                local.sts _eq_ BABYLON.MachineStatus.Finished_sm_\n                this.updateStateMachine()_sm_\n            })_sm_\n        }\n    }\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNOTE_dd_ this.manager.playAnimationClip basically calls scene.beginAnimation on all required components as well... then on this.updateStateMachine will cause the\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcomponent to call this.setCurrentMachineState on WHATEVER the first transition CHECK says... including it might be itself again...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope I explained that good enough _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-01T01:29:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI see no problem _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tand basically the loop boolean of animations does something similar actually\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-09-01T07:14:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI extensively start animations in onAnimationEnd!  I_t_m using cps from redux-saga for my state machine_co_ but even manually with nearly zero issues.  i have had instances where i manually needed to clear the animations array_co_ but those were really nested and waiting on a series of animations to complete (in loops).  So_co_ I have some code that looks like this to work and is maybe a timing issue elsewhere in my code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_animationTarget.animations _eq_ []\nanimationTarget.animations.push(animationRotation)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_If_lt_/strong_gt_ I could create a PG it would take hours and not be easy to follow.  I would just say that if you run into something crazy that doesn_t_t make sense to just check/log the animations array before starting a new animation to make sure it only has what you want on it.  In my case I was expecting the animations array to be empty (as onAnimationEnd had fired) and it wasn_t_t empty _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  It_t_s easy to notice_co_ because a previous animation will start_co_ too! I am very impressed with the animations and how easy they are to work with.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-09-01T10:09:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_187429_qt_ data-ipsquote-contentid_eq__qt_32688_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1504250058_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI extensively start animations in onAnimationEnd!  I_t_m using cps from redux-saga for my state machine_co_ but even manually with nearly zero issues.  i have had instances where i manually needed to clear the animations array_co_ but those were really nested and waiting on a series of animations to complete (in loops).  So_co_ I have some code that looks like this to work and is maybe a timing issue elsewhere in my code_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_animationTarget.animations _eq_ []\nanimationTarget.animations._lt_span_gt_push_lt_/span_gt_(animationRotation)_lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_If_lt_/strong_gt_ I could create a PG it would take hours and not be easy to follow.  I would just say that if you run into something crazy that doesn_t_t make sense to just check/log the animations array before starting a new animation to make sure it only has what you want on it.  In my case I was expecting the animations array to be empty (as onAnimationEnd had fired) and it wasn_t_t empty _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  It_t_s easy to notice_co_ because a previous animation will start_co_ too! I am very impressed with the animations and how easy they are to work with.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI keep 1 long animation track with all the animation clips from the unity Animator Control baked into 1 single BabylonAnimation... I keep a TOC of all the animation clip ranges (kinda like _ranges for skeleton... but for much more the skeletons... I can use all animations from unity)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo basically I am call scene.beginAnimation on the SAME animation track with different start and end values...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIdle 0 - 20\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWalk 20 - 50\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRun 50 _eq_ 100\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand so on... So if I can FREELY jump around in that same animation OVER AND OVER with different ranges each time I_t_m Kool...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW ... _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ said this is something like the built-in cycle does anyways _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]