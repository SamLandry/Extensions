[{"Owner":"RelaX","Date":"2015-07-29T12:59:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_I think I found a bug_co_ OnPointerOverTrigger and OnPointerOutTrigger aren_t_t triggered when you zoom in or out with mousewheel with your ArcRotateCamera._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can see what I mean in this playground scene_lt_/p_gt__lt_p_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?17_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?17_lt_/a_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_brgds_lt_/p_gt__lt_p_gt_RelaX_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-31T13:32:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_works for me quite well_co_ I tried zooming in and out and in and out and in again_co_ while moving the mouse - all triggers worked._lt_/p_gt__lt_p_gt_What browser are you using? I tested on both chrome and IE11._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-31T13:58:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think he means if you _lt_strong_gt_don_t_t_lt_/strong_gt_ move the mouse. Like pointing on something the zooming until the cursor is not on the object anymore and then it should stop the hover effect (but it doesn_t_t)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RelaX","Date":"2015-07-31T15:21:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_91211_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16050_qt_ data-ipsquote-username_eq__qt_iiceman_qt_ data-cite_eq__qt_iiceman_qt_ data-ipsquote-timestamp_eq__qt_1438351102_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I think he means if you _lt_strong_gt_don_t_t_lt_/strong_gt_ move the mouse._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ that_t_s what I mean. Is that wanted _lt_span_gt__lt_span_gt_behavior_co_ or a bug? If it_t_s wanted_co_ could someone tell me where I can change it?_lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-31T18:04:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry_co_ I get it now._lt_/p_gt__lt_p_gt_I doubt this is wanted _dd_-) it has something to do with the fact that there is no mouse movement and therefore no pointer event. _lt_/p_gt__lt_p_gt_But I guess it would be possible to trigger the pointer move event at the same pointer position right after zooming. Let me pay with it a bit and see._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-08-01T20:22:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So - line 6 is the solution_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KKEEV_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KKEEV_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@DK - is there any reason not to add it to the scene_t_s attachControl function? I don_t_t see any problem_co_ but maybe you see something._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RelaX","Date":"2015-08-02T10:47:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_91346_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16050_qt_ data-ipsquote-username_eq__qt_RaananW_qt_ data-cite_eq__qt_RaananW_qt_ data-ipsquote-timestamp_eq__qt_1438460563_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_So - line 6 is the solution_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KKEEV_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KKEEV_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt__lt_strike_gt_Hm_co_ I might be wrong_co_ but it seems like it doesn_t_t trigger OnPointerOverTrigger and it looks like it triggers OnPointerOutTrigger exactly one time._lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Firefox uses DOMMouseScroll instead of mousewheel. Is it possible to add the event to the scene instead of implementing my own mousewheel detection_co_ which could vary from babylons implementation._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-08-02T19:04:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ both should be added. I will wait for DK a little more and add this in a day or two. will be integrated in 2.2 probably._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-03T19:21:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m PRETTY sure it was supported Oo.. No reason to not have it in the scene itself...I_t_ll fix it right now!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RelaX","Date":"2015-08-14T08:40:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@DK just tested it in v2.2.0-alpha_co_ seems like you are checking before you scroll_co_ with old positions._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UG5B0_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UG5B0_lt_/a_gt__lt_/p_gt__lt_p_gt_I changed the wheelPrecision to make it clearer_co_ trigger the pointerOver Event and make _qt_one tick_qt_ with your mousewheel_co_ you_t_ll see what I mean_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-14T16:18:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yes this is unfortunate. But the camera keeps moving due to inertia. The event is no more raised by the mouse so the actionmanager is not aware of this _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RelaX","Date":"2015-08-18T07:36:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hm_co_ is there an event I could listen to? If not my best Idea would be something like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_\tfunction mouseEvent(evt) {\t\tsetTimeout(function () {\t\t\tscene._onPointerMove(evt)_sm_\t\t}_co_ 300)_sm_\t}\tcanvas.addEventListener(_t_DOMMouseScroll_t__co_ mouseEvent_co_ false)_sm__lt_/pre_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KKEEV%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KKEEV#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s _qt_working_qt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-18T17:46:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sounds good _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]