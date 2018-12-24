[{"Owner":"thrice","Date":"2017-08-28T01:31:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo_co_ I am having an issue with GUI controls / click through events when attaching to mesh. I_t_m not sure if this is technically a bug_co_ or if there is a built in way to accomplish what I am trying to do which I am missing_co_ so figured I_t_d ask here first before going to GH.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse case is_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a card plane. When you hover the card plane_co_ I have an actions plane (with advancedDynamicTexture) which appears above the card plane slightly_co_ which contains multiple action buttons (which do not fill the plane_co_ parts of the card are still visible) - Basically trying to make it so when the actions buttons are visible_co_ you can click the button_co_ without triggering the card planes action manager click actions_co_ but if you click inbetween the actions_co_ you are able to trigger the cards action manager. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample is here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6KVU7X_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#6KVU7X_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically_co_ if I set the actions plane to isPickable_co_ can_t_t click the plane behind it. If I set it to false_co_ can_t_t click the buttons.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there an easy way to achieve this and or is this a bug?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am thinking maybe it would make sense to have a property on the dynamic texture itself which would default to the parent mesh_co_ but then could be overwritten_co_ to allow us to have_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.isPickable _eq_ false\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttexture.isPickable _eq_ true\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand that distinction could allow click through on areas which are empty_co_ while still allowing the buttons to be clicked? (unless there is some easy property setting I am missing or whatever).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-08-28T12:54:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya thrice!  Interesting observation_co_ and you are correct.  If AdvanceDynamicTexture (ADT) is .CreateForMesh(mesh)_co_ and if _lt_em_gt_mesh.isPickable _eq_ false_lt_/em_gt_... then none of the GUI clicks will work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t think this is a good idea (design-wise)_co_ but there_t_s surely many things that I have not taken into consideration. (I don_t_t see _qt_the big picture_qt_ real well.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tButtons are set _lt_em_gt_._isPointerBlocker _eq_ true_lt_/em_gt_... by default.  I think they MIGHT be failing to block_co_ if I understand pointer blocking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6KVU7X%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#6KVU7X#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s a totally hacked-up mess if there ever was one.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Messy Wingnut.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI eliminated _qt_plane_qt_ and kept only bg_plane... and applied the ADT to bg_plane (temporarily_co_ for testing).  bg_plane will likely need to be a non-ADT texture... for project completion.  So _qt_plane_qt_ will likely return_co_ and plane.setEnabled(true/false) will likely be used to toggle actions menu.  We could probably rename _t_plane_t_ to _t_menu_plane_t__co_ or something similar.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created a GUI _qt_stackPanel_qt_ to replace _t_plane_t_ (line 60).  I put a ref to that stackPanel ... into bg_plane.gui (in line 62)_co_ just to keep it handy.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  ADT now has ONE control... the stackPanel.  The stackPanel has TWO controls... both buttons.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn lines 29-45_co_ which is bg_plane_t_s click handler_co_ I toggle the stackPanel_t_s visibility ON/OFF.  So each time the bg_plane is clicked_co_ its actionManager toggles the visibility of the stackPanel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo joy!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  We can still click _qt_thru_qt_ the 2 buttons_co_ and trigger the stackPanel visibility toggle.  The buttons are not blocking the picks from arriving at bg_plane.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I accomplished nothing.  I think there MIGHT be a bug in button._isPointerBlocker operations.  Not sure.  We need more eyes_co_ experts_co_ and time... to see if things are working as expected.  Thanks for the report_co_ Thrice.  Interesting find.  Stay tuned... more talking and playgrounding on the way_co_ I_t_m sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Extra_dd__lt_/strong_gt_  I think there is something wrong with GUI button ENTER and OUT events.  Activate lines 85-92 (highlight entire code block_co_ hit control /) re-RUN_co_ and then move mouse pointer slowly across either button.  Watch console.  It is an ENTER/OUT festival!  Not looking healthy_co_ but ENTER/OUT events are not a useful solve for the main issue.  We can_t_t set bg_plane.isPickable _eq_ false_co_ ever_co_ because that disables clicks on the mesh-based ADT (the buttons).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-08-29T05:52:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWithout ceating and destroying event listeners_co_ you_t_ll not accomplish your tasks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not back.....\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-29T22:51:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo you_t_re not _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-09-04T00:00:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the reply. I actually don_t_t disagree that in this case_co_ it_t_s a bit of a poor ui decision. Reason I did it that way was mainly simplicity. The better way would probably be to make the menu appear to the right or left of the mesh_co_ however that brings a number of complications_co_ i.e._dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. I am showing a list of keywords to the left of the card_co_ which leaves me showing it to the right of the card.If the board gets too full_co_ the menu will be stretching beyond the bounds of the window (which I haven_t_t solved yet)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. I have to now offset the actions plane to be slightly within the parent plane_co_ then when mouse enters the actions plane_co_ store a variable on the actions plane to indicate that mouse is over the actual actions plane (otherwise hovering out of the main card plane would cause the actions plane to close)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith all that said_dd_ I still think the behavior is surprising.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-04T01:28:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Thrice.  I think YOU have made good UI decisions_co_ here_co_ actually.  A stackPanel with a list of keywords on the left_co_ a menu on the right... and they would be on their own planes... so you could FLY them into view_co_ or pivot them into position like window shutters.  You have lots of power_co_ here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut... I think there is an (possible) issue with .isPointerBlocker on both stackPanels and simpleButtons.  Perhaps issue with broken _lt_em_gt_advancedTexture._shouldBlockPointer _eq_ true_lt_/em_gt__sm_   Not sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI DID put a click-observer on the stackPanel_co_ and clicking buttons does NOT trigger the observable on stackPanel. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ buttons .isPointerBlocker IS working for GUI things. The buttons did not pass their clicks to the stackPanel.  So perhaps... .isPointerBlocker ONLY pertains to Babylon.GUI things... and has NO AFFECT on mesh.isPickable or mesh.actionManager.   Perhaps all is normal with that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s just try a BIG BEG to _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_/span_gt__co_ and see if he will visit and comment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDeltakosh_co_ got a moment? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRe_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6KVU7X%232_qt_ rel_eq__qt_external nofollow_qt__gt_This playground_lt_/a_gt_ - Clicking plane -&gt_sm_ actionManager - toggles 2-button stackPanel ON/OFF\n_lt_/p_gt_\n\n_lt_p_gt_\n\tButtons and stackPanel are set .isPointerBlocker _eq_ true_sm_   (buttons are default _eq_ true.  stackPanel.isPointerBlocker set true in line 63)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* _lt_strong_gt_Is it normal for plane actionManager to trigger_co_ when buttons (or area between buttons) is clicked? _lt_/strong_gt_(considering there are 2 layers if isPointerBlocker_eq_true... atop)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Thrice_co_ I_t_ll start digging code tomorrow to see if I can discover an answer to this click-thru issue_co_ if nobody else has info_co_ soon.  Sorry it has taken so long to determine if we have a framework bug_co_ here.  I_t_m on it_co_ but will try to delegate the task_co_ first. I_t_m just _lt_em_gt_that_lt_/em_gt_ kind of lazy.)  heh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-04T02:32:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is expected as the isPointerBlocker only works for fullscreen UI and not for projected UI.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProjected UI uses the scene onPointerObservable and has no way to block pointer propagation unfortunately.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure to be really clear here _sm_(\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut TLDR_dd_ IT is the expected behavior\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-04T15:15:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlright_co_ there we go.  Deltakosh has rescued us!   We got the _qt_Expected Behavior_qt_ stamp from DK_co_ and that means... no bug.  YAY!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I learned a new term_dd_  _qt_projected UI_qt_.  (See why I LOVE hanging around this joint?)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _qt_projection_qt_.  yeah!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn _lt_a href_eq__qt_https_dd_//www.eternalcoding.com/?p_eq_113_qt_ rel_eq__qt_external nofollow_qt__gt_DK_t_s fine shaders tutorial_lt_/a_gt__co_ in a section called _qt_The voodoo behind matrices_qt_... there_t_s an illustration.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_worldViewProjection_lt_/em_gt_ _eq_ worldMatrix * viewMatrix * _lt_strong_gt_projection_lt_/strong_gt_Matrix.\n_lt_/p_gt_\n\n_lt_p_gt_\n\thmm.  Seems like there MIGHT BE a correlation_co_ here.  Materials...  textures... projected.  Yep_co_ Babylon.GUI has some _lt_em_gt_unique_lt_/em_gt_ characteristics... because it is a texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tANYWAY... moving right along... (thank goodness)... I think we have this issue... understood.   Agree_co_ Thrice? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour keywords-list and pop-open menu could be projected onto separate (possibly invisible) planes_co_ each with their own AdvancedDynamicTexture [ADT].  Set both those planes to .isPickable _eq_ false_sm_  Then you can overlap them atop the main _qt_card_qt_... and all clicks on keywords panel or menu panel... won_t_t pass-thru to the card_t_s actionManager.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is a 3-plane solution... card_co_ keywords_co_ menu.  Three ADT_t_s_co_ too.  (Does the card itself need an ADT?  Maybe not.)  We/You use the two extra planes_t_ .isPickable... as the pointer-blocker system.  Genius.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Thrice came to this conclusion a couple-of days ago.  Wingnut just-now catching up.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-05T12:02:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh wait... if we set isPickable to false on the two extra ADT planes... the GUI controls won_t_t click.  Crap.  hmm.  I forgot about that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need to build one of these.  I had one almost complete yesterday... and then I went to hit RUN in the playground_co_ and I moused too high and hit a bookmark on my bookmark toolbar.  The playground_t_s _qt_Are you sure you want to leave?_qt_-check... doesn_t_t work in this case_co_ and you_t_ll lose the unsaved playground.  That_t_s what I did... and then cried a little bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn another PG project_co_ I missed the F12 button and instead_co_ accidentally hit BACKspace button.  This will load the previously-used playground with no concern about having un-saved changes_co_ too.  I cried on that one_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLosing unsaved changes in the PG app... hurts.  I wish we could somehow prevent those two _qt_things_qt_ from happening.  Ok_co_ party on.  I_t_m going to code this two-menu-planes-overlapping-the-card test... in a little while (after some coffee).  I_t_ll be saving often.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-05T14:23:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6KVU7X%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#6KVU7X#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot complete yet.  Action manager on center cardPlane is not toggling .isVisible on the two stack panels (lines 43-65).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s ok... because 43-65 probably needs changing.  No need to toggle gui stackpanel .isVisible... because we should probably be toggling keysPlane and menuPlane .setEnabled(true/false).  Then the menuPlane and keysPlane will appear/disappear along with the gui they contain.  Wiser.  Next version.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood thing seen on console.  The parts of the green buttons... that are overlapping cardPlane_co_ are NOT passing their clicks _qt_thru_qt_ to the cardPlane_t_s actionManager.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this is on-objective.  By putting these two stackPanels on their own planes (keysPlane and menuPlane)_co_ we don_t_t NEED to set their .isPickable to false.  The clicks on the buttons (portions that overlap cardPlane) are _lt_strong_gt_not_lt_/strong_gt_ clicking-thru to cardPlane.actionManager.  Yay!  So far_co_ so good_co_ I guess.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI need to remove the verticalAlignment crap from createButton_co_ or do something different.  I want each added button to stack-from-center_co_ like _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%2311_qt_ rel_eq__qt_external nofollow_qt__gt_DK_t_s stackPanel demo_lt_/a_gt_ from the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/gui#stackpanel_qt_ rel_eq__qt_external nofollow_qt__gt_Babylon.GUI docs... stackPanel section_lt_/a_gt_.  In that demo_co_ no verticalAlignment is set... so the added controls center-stack automatically.  More versions coming soon.  Anyone is free to jump-in and do tests_co_ and make more PG saves. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate_dd_ [_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6KVU7X%236_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt_]  Click central cardPlane to toggle both stackPanel .isVisible... working well now.  But menuPlane and keysPlane remain visible_co_ so I will be changing to mesh.setEnabled method... next.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate2_dd_ [_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6KVU7X%238_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt_]  Click cardPlane now sets keysPlane and menuPlane disabled.  Works great.  But clicking cardPlane AGAIN.... should re-enable the two side-planes... and it doesn_t_t_co_ so far.  hmm.  SimpleButtons seem to have altered their verticalAlignment_co_ too.  Not sure why... I didn_t_t work-on that part yet.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate3_dd_ [_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6KVU7X%2310_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt_]  There we go.  I needed ._isEnabled  (in lines 50 and 58).  I forgot the underscore.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Next-up_co_ add 20 keywords and menu buttons_co_ and make overflow-handling and scrolling-arrows for each side-plane_co_ and and and... *sigh*  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-09-09T23:26:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNice! I think I need to familiarize myself with stack panel_co__co_ thought it was only part of the full screen api - that could simplify some of my code I think. however_dd_ the original objective I was trying to accomplish remains - Basically_co_ in your example_co_ it would be the equivalent of being able to click through to the plane_co_ in the small portion of the stack panels that overlaps the plane behind it_co_ that does not have a stack panel button in that space.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut ya_co_ I have it working the slightly more complicated way so not the end of the world_co_ and design wise probably not the best UI doing it that way_co_ but would have worked in this instance just because the buttons themselves aren_t_t very tall so it_t_s easy to click the plane behind it while hovered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tP.S. Overflow handling/scrollbar would be amazing btw! Just throwing that out there _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-10T07:31:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool.  Hey_co_ have you followed the last 4-5 posts in The Wingnut Chronicles?  I was trying text scrolling_co_ via my normal turn-every-knob-on-textBlock-object-until-something-works methodology_co_ and I ended-up using a total kludge to simulate Babylon.GUI vertical text scrolling  (related to overflow/scrollbar container_co_ right?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ suddenly genius _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ said _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/?do_eq_findComment&amp_sm_comment_eq_187325_qt_ rel_eq__qt__qt__gt_THIS_lt_/a_gt__co_ which _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ agreed-with.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo... ahem... a guy like you could sneak right in there_co_ and beat them to the punch.  Not only could you create a scrolling container control _lt_strong_gt_before_lt_/strong_gt_ Adam or Deltakosh even got an IDE fired-up_co_ but you could scribble-out a little tutorial on _qt_Making Custom Controls for Babylon GUI_qt_  (yay!)  Maybe a couple nice playgrounds to go with that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPart of the _qt_Thrice Krispees_qt_ series of _qt_Customizing Babylon GUI_qt_ documentation/demos.  I_t_d help you get it all started... if you wanted.  Maybe another tutorial... Canvas Commandos - Stroking and Filling (ick_co_ that sounds dirty_co_ somehow)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Context2d canvas painting expertise... is a VERY IMPORTANT part of creating custom controls.  ANIMATING context2d paintings... is a miserable bitch... often needing _qt_blit_qt_ animation... like animating a sprite.  (Does the world still use the term _t_blit_t_?  Maybe not_co_ eh?)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  So_co_ the _qt_Canvas Commandos_qt_ is a prestigious and honorable group... sprite-ish animators... who can wipe and redraw the needle on that old-style volt meter... quickly and nicely_co_ over and over again.  Almost all Babylon.GUI power-animating... will be done by paint_co_ overpaint_co_ paint_co_ overpaint_co_ over and over.  It is a fairly exhaustive task_co_ and only the most patient of artists... will be able to take the heat.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThink about a dial_co_ like a volume knob on a guitar amplifier. Its outer ring might be numbered 1 thru 10_co_ and to turn that knob from 1-10 smoothly... we will need some SERIOUS paint/wipe/paint/wipe/paint/wipe/paint_co_ etc etc.  We might be looking at 100 frames of sprite/blit... just to turn that dial smoothly from 1-10.  Erf.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut anyway_co_ ignoring all THAT drama... I think there is an avenue of opportunity available... to open-up _qt_custom controls_qt_ much wider... to us BJS experimenters.  It almost takes a _qt_jig_qt_... a custom control starter kit... part of Babylon.Tools_co_ perhaps.  Stroke assistant and fill assistant funcs.  _qt_Thrice shows us what we can do... with a blank GUI control_qt_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThoughts?  I think Deltakosh could use a little assistance... in fleshing-out Babylon GUI_co_ so if we could build a team of Babylon GUI experts/experimenters... then THAT would kind-of ROCK_co_ I think.  I think a crap-load of people would love to AT LEAST see some playgrounds of user-made custom controls_co_ containers_co_ stacks_co_ dials_co_ meters_co_ radial/linear fillers_co_ whatever we can imagine-up.  Someone would definitely get a _qt_woot_qt_ from Deltakosh... if they were to successfully spearhead that team/project.  Ready to get started?  GUI PARTY!!!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]