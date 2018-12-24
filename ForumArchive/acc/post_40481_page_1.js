[{"Owner":"joshcamas","Date":"2018-10-06T20:46:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello friends _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tFor some reason_co_ I cannot for the life of me figure out how to get the _qt_pad button_qt_ detection for my GearVR.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried _lt_strong_gt_onPadStateChangedObservable_lt_/strong_gt__co_ _lt_strong_gt_onSecondaryButtonStateChangedObservable_lt_/strong_gt__co_ and _lt_strong_gt_onMainButtonStateChangedObservable._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNone of these seem to ever trigger _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s strange since onTriggerStateChangedObservable works for me - the trigger button does its thing\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this a bug? Or am I crazy? XD\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJosh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2018-10-06T21:36:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlrighty_co_ I believe I found the bug _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn gearVRController.ts_co_ the button map is_dd_\n_lt_/p_gt_\n\n_lt_table_gt_\n\t_lt_tbody_gt_\n\t\t_lt_tr_gt_\n\t\t\t_lt_td_gt_\n\t\t\t\t_lt_em_gt__lt_span_gt_private_lt_/span_gt_ _lt_span_gt_readonly_lt_/span_gt_ _buttonIndexToObservableNameMap _lt_span_gt__eq__lt_/span_gt_ [_lt_/em_gt_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt_\n\t_lt_/tbody_gt_\n_lt_/table_gt_\n\n_lt_table_gt_\n\t_lt_tbody_gt_\n\t\t_lt_tr_gt_\n\t\t\t_lt_td_gt_\n\t\t\t\t_lt_em_gt__lt_span_gt__lt_span_gt__t__lt_/span_gt_onTrackpadChangedObservable_lt_span_gt__t__lt_/span_gt__lt_/span_gt__co_ _lt_span_gt__lt_span_gt_//_lt_/span_gt_ Trackpad_lt_/span_gt__lt_/em_gt_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt_\n\t_lt_/tbody_gt_\n_lt_/table_gt_\n\n_lt_table_gt_\n\t_lt_tbody_gt_\n\t\t_lt_tr_gt_\n\t\t\t_lt_td_gt_\n\t\t\t\t_lt_em_gt__lt_span_gt__lt_span_gt__t__lt_/span_gt_onTriggerStateChangedObservable_lt_span_gt__t__lt_/span_gt__lt_/span_gt_ _lt_span_gt__lt_span_gt_//_lt_/span_gt_ Trigger_lt_/span_gt__lt_/em_gt_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt_\n\t_lt_/tbody_gt_\n_lt_/table_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_]_sm_ _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ the observable _qt_onTrackpadChangedObservable_qt_ doesn_t_t exist_co_ it should be _qt_onPadStateChangedObservable_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tChanging the mapping to this seems to fix the issue _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-08T17:38:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFancy doing a PR? _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-08T17:38:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tpinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ FYI_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]