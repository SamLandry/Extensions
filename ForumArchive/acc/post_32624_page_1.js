[{"Owner":"MackeyK24","Date":"2017-08-29T05:30:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ .. Just cause I like to tag you into everything _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIn Unity Animator_co_ they have transition that they use to switch states and play other animation clips... in the the transition properties they have transition speed_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a4f83a322fa_ScreenShot2017-08-28at7_14_12PM.png.587ebbd6d57f803c4c571f23b8c7cea5.png_qt_ data-fileid_eq__qt_14629_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14629_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a4f83a78985_ScreenShot2017-08-28at7_14_12PM.thumb.png.4ae08ab73c0eb6ca9934685d713a7fa5.png_qt_ alt_eq__qt_59a4f83a78985_ScreenShot2017-08-28at7_14_12PM.thumb.png.4ae08ab73c0eb6ca9934685d713a7fa5.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_table style_eq__qt_border-collapse_dd_collapse_sm_border-spacing_dd_0px_sm_color_dd_#455463_sm_font-size_dd_16px_sm__qt__gt__lt_tbody_gt__lt_tr_gt__lt_td style_eq__qt_border_dd_1px solid #e6e6e6_sm_font-size_dd_.875em_sm_padding_dd_5px 10px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t_lt_strong_gt_Transition Duration_lt_/strong_gt_\n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_border_dd_1px solid #e6e6e6_sm_font-size_dd_.875em_sm_padding_dd_5px 10px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\tThe duration of the transition_co_ in normalized time_co_ relative to the current state’s duration. This is visualized in the transition graph as the portion between the two blue markers.\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_border_dd_1px solid #e6e6e6_sm_font-size_dd_.875em_sm_padding_dd_5px 10px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t_lt_strong_gt_Transition Offset_lt_/strong_gt_\n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_border_dd_1px solid #e6e6e6_sm_font-size_dd_.875em_sm_padding_dd_5px 10px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\tThe offset of the time to begin playing in the destination state which is transitioned to. For example_co_ a value of 0.5 means the target state begins playing at 50% of the way through its own timeline.\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\tNow would we use _t_animation.blendingSpeed_t_ to handle that ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI finally figured out how to get to ALL the UNITY Animation State Machine properties to serialize all the states_co_ events_co_ transitions and blend tree  metadata from ALL layers and including any nested sub-state machines... Now I can start to implement a state machine on the Babylon side... I already got gerbil animation clip and animation event working great... Nut would like to get transitions working next...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy logic is going be something like\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1... Get transition info (metadata) from the state about to be switched to (which has destinationState)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2... If transition.destinationState _eq__eq__eq_ self then playAnimationClip with LOOPING\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3... If transition.destinationState !_eq__eq_ _qt__qt_ playAnimationClip(onAnimationEnd---&gt_sm_switch To transition.destinationState) and start whole thing over...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4... Check  state parameters and conditions in update loop to switch state which also starts whole thing over...Of course taking into account _t_interruptions_t_ and what ever else comes up but that would be a simple to start to\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyways... I need to to control the _t_Transition Time_t_ like in Unity to Keep in spirit with and use the actual time from the the little GIZMO unity uses to setup transitions\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I will try and tackle _t_Blend Trees_t_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-29T22:53:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_animation.blendingSpeed seems to be the correct candidate here_lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]