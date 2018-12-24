[{"Owner":"rgalindox","Date":"2018-12-03T06:08:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe are creating some 3d apps for web and web mobile so Unity3D can_t_t do the job for mobile web. We need to have 3d text on top of some 3d objects_co_ the text needs to be created dynamically so we can_t_t import it from Blender or another 3d authoring tool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat library do you recommend to add to Babylon to have 3d text? I tested the 3d GUI but you need to have buttons and the requirements is 3d text similar to what UNity3D offers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny help will be appreciate it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-12-03T07:25:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know how 3D text library looks in Unity_co_ but you can use vectororize-text with PolygonMeshBuilder (note the webpage to demo is gone_co_ but vectorize-text is still on github).\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed201819209_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/32422-3d-text-in-babylonjs-using-vectorize-text/?tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_185875&amp_sm_embedComment_eq_185875&amp_sm_embedDo_eq_findComment#comment-185875_qt_ style_eq__qt_height_dd_296px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tedit_dd_ I didn_t_t know about MeshWriter - would go with that for sure _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-03T16:52:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI also recommend this one_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/extensions/mesh_writer_introduction_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/extensions/mesh_writer_introduction_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-03T17:31:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd maybe_co_ check out the demo-filled forum thread about meshWriter_co_ too.  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/37487-text-as-polygon-mesh/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/37487-text-as-polygon-mesh/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually_co_ stay on PAGES 3/4 of that forum thread.  Less broken playgrounds.  _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_  (usually broken due-to stale URL to meshWriter lib)_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI like this one.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XWVXN9%2363_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XWVXN9#63_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  ...and this physics-ish one... _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#1KPF49%2354_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#1KPF49#54_lt_/a_gt_  (might need extra click on RUN)  (also_co_ joint between _qt_o_qt_ and _qt_n_qt_ not working)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[Wingnut gives a little wink to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29406-the-leftover/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29406_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29406-the-leftover/_qt_ rel_eq__qt__qt__gt_@The Leftover_lt_/a_gt__co_ a swell guy and the author of meshWriter]\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rgalindox","Date":"2018-12-03T17:59:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you very much. I_t_ll check the links you kindly sent me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI appreciate your support to this forum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRafael\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]