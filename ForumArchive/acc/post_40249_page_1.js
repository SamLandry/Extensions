[{"Owner":"Zephos","Date":"2018-09-26T06:21:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo after hours of research and finally posting here (thanks Delkatosh)_co_ I was able to get this little demo working where I switch between cameras with different control systems when selecting a sphere_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ however_co_ I would like to animate that switch when the sphere moves to the center of the screen. I tries to animate the rotation using some code from this playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WG9OY%2328_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WG9OY#28_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd came up with this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it clearly doesn_t_t quite work the way it should. All my previous attempts to animate the target property have failed as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I got some moderate success animating the lockedTarget property like this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...but that breaks the universal camera so it can_t_t freely fly around again after you deselect the sphere. So I am wondering if there is a way to unlock the universal cam (I tried setting it to null_co_ but to no avail) or some other way to make this work? Animating the target or _currentTarget property didn_t_t work either. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs a side note_co_ what is the difference between target_co_ lockedTarget_co_ and _currentTarget? I am so confused by all this and the API gives very little descriptions of any properties. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank very much. I will certainly return the favor and answer people_t_s questions when I become an expert haha.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ So I don_t_t know what happened but setting lockedTarget to null seems to be helping now_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ under certain circumstances the switch from universal to arcRotate after moving the camera a lot causes the camera_t_s view to twist so the view doesn_t_t stay the same as you select and deselect the sphers. More importantly_co_ however_co_ the animation only takes the right amount of time when selecting between the two spheres because when nothing is selected_co_ there isn_t_t a starting position for lockedTarget. I tried setting to _currentTarget but that didn_t_t seem to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I am very grateful for any help I can get on this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-09-26T15:17:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Z!  I did a little experimenting (and heavy mods)...  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGot some smooth animating upon selecting... but...  if you nav the universal cam (chosen by having nothing selected as blue) to some strange position_co_ and then select a mesh... it jumps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is because universal camera really has no target.  If there IS a target_co_ it is probably 1 meter forward-of the camera_t_s position. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ ya can_t_t set a universalCam.lockedTarget_co_ or else it loses its abilities to nav-around.  hmm.  (unless you move the lockedTarget position the same amount as all camera moves).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ a little note_dd_  This thread is sort-of a continuation of _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/40227-smooth-transition-between-camera-control-systems/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/40227-smooth-transition-between-camera-control-systems/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(in case anyone cares).  Yep_co_ this is a difficult challenge.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a bad idea.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Let_t_s say you NEVER change to universal camera.  Instead_co_ you wire-up the cursor keys or WASD keys... to move-around an invisible mesh (like a box).  This box IS the arcCamera_t_s .target... all the time.  SO... user THINKS they are driving-around a universal/free cam when no mesh is selected (nothing turned blue).  But really... they are moving around an invisible box... the arc-Cam_t_s .target.  This would give the arcCam SOME free-navigation power... yet when a mesh is selected_co_ arcCam.target could be easily animated/moved to match selectedMesh.position. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t*shrug*.  Yeah_co_ an arcCam that let_t_s you nav-around it_t_s .target with cursor keys... will not act the same as a universal/free cam... but it will give SOME freedom of navigation.  Unfortunately_co_ it might also _qt_look odd_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will keep thinking.  This is tough_co_ though.  The switch from universal... to orbit/arc cam... is trouble.  Hopefully_co_ others will have better ideas... but... hmm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-26T16:25:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- target is a free target (ie. it will move when you move the camera)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- lockTarget is a locked target_dd_ you can_t_t move the camera anymore (at least the target_co_ the camera can still move on its position but its target will remain readonly)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- _currentTarget like any _property MUST NOT be used_co_ touched_co_ considered_co_ seen _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ They are internal properties_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_So to your question_co_let me first set up some context_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_- arcRotateCamera uses 4 properties_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_ - alpha_dd_ rotation on X axis_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_ - beta_dd_ rotation on Y axis_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_ - radius_dd_ distance from target_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_ - target_dd_ vector3 defining the position of the camera_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_- FreeCamera uses 2 properties_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_  - position_dd_ Vector3 defining the position_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  - rotation_dd_ euler angles defining the rotation\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo when moving from one type to another_co_ you can always read the target and the position (as read only values) to get the current state. Then if you want to update the new camera based on the previous one you can call setTarget() and set the position (writing to position property for FreeCamera or calling setPosition for ArcRotateCamera (as this camera has no writeable position based on the list of properties I mentioned earlier))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor animation_co_ this is a different beast_dd_ for instance if you want to animate the rotation of the ArcRotateCamera you have to animate alpha and beta properties. This is feasible (you can store the current values_co_ call setTarget to where you want it to look at_co_ get the new values and then create an animation  (2 actually _dd_)) for alpha and beta.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zephos","Date":"2018-09-26T17:46:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_229553_qt_ data-ipsquote-contentid_eq__qt_40249_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537979149_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSo when moving from one type to another_co_ you can always read the target and _lt_span_gt_﻿_lt_/span_gt_the position (as read only value_lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt_s) to get the cu_lt_span_gt_﻿_lt_/span_gt_rrent state.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks_co_ that helps a lot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan I get a target property from a Universal camera? I never actually see that property on the object when I log it_co_ so what value will it provide?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think what you are suggesting is that I move the ArcCamera to the position of the UniversalCamera_co_ switch cameras and then animate the ArcCamera camera to the new position. My current approach was to animate the current camera_co_ THEN switch. Either way makes sense. The problem is getting the two camera rotations to match up. Your suggestion seems like a work around that could work_co_ where we force the arc camera to a position just to get the starting alpha and beta to animate from_co_ but I am unsure if it would produce good results. I will try it tonight though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ isn_t_t there a way I can take the new alpha and beta values that we want to end up with and translate those into a rotation for the Universal Camera to animate to_co_ or better yet_co_ to set the rotation on the arc rotate camera to match the universal camera so the view subject stays in the same orientation to the camera? This last part is what I am ultimately trying to achieve. When you click on a sphere_co_ it should just move to the center without any orientation changes_co_ and when you deselect it_co_ the orientation should not change. Currently this doesn_t_t happen because the cameras have different rotation paradigms and I don_t_t know how to resolve this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-26T18:22:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry I may have been unclear. Let me try to rephrase. Based on the properties I gave you earlier_co_ if you want to animate the rotation_co_ you need to get the target (for FreeCamera) or the alpha/beta (for ArcRotatecamera). That_t_s it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPseudo code when switching to ArcRotate_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- get current target (scene.activeCamera.getTarget())\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- store orBitCamera.alpha/beta\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- call orbitCamera.setTarget(currentTarget)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- get alpha/beta and store them (targetAlpha_co_ targetBeta)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- restore orbitCamera.alpha/beta\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- create two animations (one from currentAlpha-&gt_sm_ targetAlpha_co_ one from beta-&gt_sm_targetBeta)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Enjoy\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPseudo code when switching to FreeCamera_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- get current target (scene.activeCamera.getTarget())\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- store freeCamera.rotation vector\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- call freeCamera.setTarget(currentTarget)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- get rotation and store it into targetRotation\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- restore freeCamera.rotation vector\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- create animation from freeCamera.rotation to targetRotation\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- enjoy\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-26T18:23:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents ipsClearfix_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_When you click on a sphere_co_ it should just move to the center without any orientation changes_co_ and when you deselect it_co_ the orientation should not change_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis is what happens here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#3_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zephos","Date":"2018-09-26T18:53:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try to get it working tonight when I am home.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_229584_qt_ data-ipsquote-contentid_eq__qt_40249_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537986238_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis is what happens here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#3_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tActually_co_ if you play around with that one_co_ I think something strange is happening. If you select and deselect a sphere_co_ the mouse controls start to rotate the view around a center point instead of just pivoting from the camera. That leads to the orientation twisting when you change cameras. You have to keep playing with it and rotating and selecting things to get it to happen_co_ but it happens enough to be a problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo know why the controls would do that? Could it be doing that because of the rotation restriction? I am at work but I will try to play around with it more later. Thanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-26T20:25:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not repro this problem _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt_ Can you precisely tell me how you do it? (video perhaps?)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zephos","Date":"2018-09-26T20:32:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_229597_qt_ data-ipsquote-contentid_eq__qt_40249_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537993506_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI do not repro this problem _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ Can you precisely tell me how you do it? (video per_lt_span_gt_﻿_lt_/span_gt_haps?)_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHere are some simple steps to reproduce it_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoad the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tZoom out a little with down arrow key.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tselect the left sphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\trotate the camera with mouse to make the red sphere go above the blue one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tclick the blue sphere to  deselect\n_lt_/p_gt_\n\n_lt_p_gt_\n\tclick and drag mouse to the right (notice how the spheres travel in an arch_co_ not straight). This changes the spheres orientation to the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow select one of the spheres again. The sphere gets centered_co_ as it should_co_ but the orientation changes. Both spheres should just slide over in the orientation they are already in.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope that helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks. I can do a video later if needed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-26T20:35:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo need for a video. I reproed it!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-26T20:43:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk this is interesting! This is because of that_dd_ _qt_rotate the camera with mouse to make the red sphere go above the blue one._qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this situation the FreeCamera is perpendicular to the target (ie_dd_ the target and the position are on the same x and z values). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is not supported by the FreeCamera and it will end up with messed up data _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_So you have to add a check to make sure that we are not in this situation_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zephos","Date":"2018-09-26T23:10:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_229603_qt_ data-ipsquote-contentid_eq__qt_40249_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537994592_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOk this is interesting! This is because of that_dd_ _qt_rotate the camera with mouse to make the red sphere go above the blue one._qt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIn this situation the FreeCam_lt_span_gt_﻿_lt_/span_gt_era is perpendicular t_lt_span_gt_﻿_lt_/span_gt_o the target (ie_dd_ the target and the position are on the same x and z values). \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis is not supported by the FreeCamera and it will end up with messed up data _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_So you have to add a check to make sure that we are not in this situation_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t _lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOh okay... so why is that not supported? I bet the answer is complicated so if it is you can just say so. I just don_t_t understand how the z value would be the same_co_ though _co_ as the rotation occurs around the z axis I believe_co_ so the z isn_t_t changing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I can easily start the camera in a different position_co_ but how do I avoid this from happening naturally as the camera moves around? Where do you suggest I put a check? When the target is set_co_ perhaps?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUPDATE_dd_ I just tried changing the starting position of both cameras and that did not fix the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-27T16:36:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe problem is not Z but Y. FreeCamera cannot be perpendicular on Y axis (which is the up vector) because of how the maths are done internally. It is a bit like your head. There is no way your head can look to your feet in a perfectly aligned way _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I_t_ll do it for you (but this is exceptional_co_ do not get use to it _lt_span_gt__dd_))_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#9_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#9_lt_/a_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_Check line #35_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_Doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.arcrotatecamera#lowerbetalimit_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.arcrotatecamera#lowerbetalimit_lt_/a_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zephos","Date":"2018-09-27T18:29:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_229717_qt_ data-ipsquote-contentid_eq__qt_40249_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1538066198_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe problem is not Z but Y. FreeCamera cannot be perpendicular on Y axis (which is the up vector) because of how the maths are done internally. It is a bit like your head. There is no way your head can look to your feet in a perfectly aligned way _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_I_t_ll do it for you (but this is exceptional_co_ do not get use to it _lt_span_gt__dd_))_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#9_lt_/a_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_Check line #35_lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_Doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.arcrotatecamera#lowerbetalimit_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.arcrotatecamera#lowerbetalimit_lt_/a_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt is still broken. If you follow the steps I posted earlier_co_ then try to move the free camera with your mouse_co_ it doesn_t_t behave properly (the view rotates instead of pans with the mouse). Something is getting screwed up when you attach controls for the orbitCamera... something global I think. I have tried noRotationConstraint_co_ I have tried cloning the free camera before changing it and then switching back to the unchanged version (which then starts behaving incorrectly)... I think I am at a loss.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tZephos\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-27T20:11:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe view always rotate when you use the mouse with the FreeCamera. Not sure to get your point here.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zephos","Date":"2018-09-27T23:42:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_229755_qt_ data-ipsquote-contentid_eq__qt_40249_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1538079100_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe view always rotate when you use the mouse with the FreeCamera. Not sure to get your point here.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI suppose it could be the intended behavior_co_ but could you help me understand why_co_ as soon as you load the scene_co_ using your mouse to drag the view just drags the view in linear fashion. The view does not travel in an arc if you drag the mouse straight across horizontally_co_ but it does as soon as you select and rotate the spheres around and then deselect. Once you do that and return to the free camera_co_ the mouse starts rotating the scene. That_t_s fine I guess... but why does it not do it at the very beginning?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Deltakosh. I know I am probably being frustrating so I apologize for that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-09-28T00:55:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tZeph_co_ when you load the scene... then drag left/right... the camera is rotating around its Y axis.  It is NOT side-sliding (slewing/strafing).  But I think you CAN side-slide a universal/free cam... by holding down the control button while dragging.  Not sure.  It works on non-lockedTarget arcCams_co_ anyway.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd after you de-select a sphere and return to universal cam_co_ dragging left and right does the same thing... rotates the camera around it_t_s Y-axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou MIGHT be getting an _qt_optical illusion_qt_ when you drag the mouse just after loading.  You THINK it is side-sliding_co_ but it isn_t_t.  It is _qt_panning_qt_ (turning around Y)... which IS a type of arc/orbit_co_ but it is a rotational orbit around itself_co_ and not a rotational and translational orbit around an external target (like an arcCam would do).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis STARTS with the arcCam instead of the universal cam.  It is initially set to orbit around external target 0_co_0_co_0.  The camera_t_s position is 12 units away from 0_co_0_co_0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I don_t_t think you WANT to start with an arc.  I think you are getting fooled.  In _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VDZ7IF%239_qt_ rel_eq__qt_external nofollow_qt__gt_PG #9_lt_/a_gt__co_  the initial camera is doing exactly the same thing... as when you have selected and then deselected a sphere (return to universal cam after a switch to arcCam).  I think both are behaving the same... both spinning around their Y-axis (panning).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm I wrong?  I could be.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-28T16:14:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_ I had the feeling that I cannot explain what I wanted correctly. This is probably my english _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-09-28T17:31:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  Thanks... but... I_t_m not sure I understand problem.   The scene needs more mesh... to keep from confusing pan and strafe.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Two spheres leave view - difficult to determine if panned-out-of-view_co_ or side-slide out-of-view.  Fun with 3D.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I think Zephos was thinking that default cam was side-sliding on drag._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_We will listen for Zephos... see if he has more words... and keep working/trying.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zephos","Date":"2018-09-29T05:08:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_229900_qt_ data-ipsquote-contentid_eq__qt_40249_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1538155892_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  Thanks... but... I_t_m not sur_lt_span_gt_﻿_lt_/span_gt_e I understand problem.   The scene needs_lt_span_gt_﻿_lt_/span_gt_ more mesh... to keep from confusing pan and strafe.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_Two spheres leave view - difficult to determine if panned-out-of-view_co_ or side-slide out-of-vie_lt_span_gt_﻿_lt_/span_gt_w.  Fun with 3D.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I think Zephos wa_lt_span_gt_﻿_lt_/span_gt_s thinking that default cam was side-sliding on drag._lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_We will listen for Zephos.._lt_span_gt_﻿_lt_/span_gt_._lt_span_gt_﻿_lt_/span_gt_ see if he has more words... and keep working/trying.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey guys thanks again for all your help. I think I was just being thick headed more than anything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHonestly I think I was just confused about the rotation. I knew the drag was rotating the camera around the Y axis_co_ but the fact that Y rotations are applied first before the other rotations was throwing me off I think. I was expecting the rotation around Y to be relative to the camera_t_s orientation_co_ but it was the first one applied so the orientation it was relative to was always the same. I have started implementing my own control system following the documentation where I will apply the rotations in local space in a different order. I think I have come up with a better idea for my controls too_co_ which doesn_t_t involve switching cameras. After thinking about it_co_ the only feature of the arc rotate camera I really needed was the ability to center on object in the view_co_ and I can do that with any target camera. Orbiting was a nice touch_co_ but one I can do without and probably isn_t_t worth the trouble.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]