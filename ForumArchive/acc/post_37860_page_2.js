[{"Owner":"trevordev","Date":"2018-07-23T15:55:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29931-ravi/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29931_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29931-ravi/_qt_ rel_eq__qt__qt__gt_@Ravi_lt_/a_gt_ Sure_co_ I can try to do that_co_ would a flag on the rotation gizmo such as lockScale that when set to true and dragging occurs scales the mesh equally or are you looking for another gizmo type like the triangle in your video?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-07-23T16:59:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt__co_ I guess you missed my message._lt_/span_gt_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed5479065645_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/37860-sample-code-for-features-in-babyloneditor/?do_eq_embed&amp_sm_comment_eq_222123&amp_sm_embedComment_eq_222123&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_261px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ravi","Date":"2018-07-24T07:52:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ _co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTriangular representation is standard and is used widely in 3D softwares. If you could implement triangular representation as per video then that will be great. I have used 3DS Max for recording video. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ has also mentioned the full model scaling scenario which indicates its globally acceptable feature. Thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ for mentioning that here.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-07-27T20:55:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt__lt_/span_gt_ and _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29931-ravi/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29931_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29931-ravi/_qt_ rel_eq__qt__qt__gt_@Ravi_lt_/a_gt__lt_/span_gt_ for the feedback sorry for the delayed response (I was out for a week+)_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Snapping_dd_ this is possible today via_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var gizmoManager _eq_ new BABYLON.GizmoManager(scene)\ngizmoManager.positionGizmoEnabled_eq_true_sm_\ngizmoManager.gizmos.positionGizmo.xGizmo.snapDistance _eq_ 0.3\ngizmoManager.gizmos.positionGizmo.yGizmo.snapDistance _eq_ 0.3\ngizmoManager.gizmos.positionGizmo.zGizmo.snapDistance _eq_ 0.3_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t    but I will add a helper method for this\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_gizmoManager.gizmos.positionGizmo.snapDistance _eq_ 0.3_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Possibilities to define euler_lt_/strong_gt__dd_ _lt_br /_gt_\n\t    In Babylon_co_ I believe it is recommended to always use Quaternions instead of euler angles. _lt_br /_gt_\n\t    If you wish to continue using euler angles you can always use the methods to convert Quaternions to euler and vice verca.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.Quaternion.RotationYawPitchRollToRef\nquaternionObj.toEulerAnglesToRef_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Add layerMask to the gizmo_lt_/strong_gt__dd__lt_br /_gt_\n\t    One of the goals when creating the gizmos was to avoid modifying the existing scene. _lt_br /_gt_\n\t    To avoid this it uses the UtilityLayerRenderer which creates another scene that is overlayed on top of the original._lt_br /_gt_\n\t    Because of this_co_ unfortunately_co_ I don_t_t believe the layer mask would have any effect. _lt_br /_gt_\n\t    What you could do to work around this is to use another UtilityLayerRenderer for the minimap and place on the minimap contents in the UtilityLayerRenderer_t_s scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Triangular equal scaling gizmo_lt_/strong_gt__dd__lt_br /_gt_\n\t    @ravi Sure I will take a stab at creating a new gizmo type for this. _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4844_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4844_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHopefully these resolutions are acceptable._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-07-31T17:05:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdded the equal scaling gizmo to function similarly to the BabylonJS-EditControl Dad72 mentioned. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29931-ravi/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29931_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29931-ravi/_qt_ rel_eq__qt__qt__gt_@Ravi_lt_/a_gt_ Does this now work as desired? _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#8MGKWK%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#8MGKWK#16_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-07-31T17:22:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ it works. I will try to use it concretely on my project TerrainEditor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Varsha Kamble","Date":"2018-08-01T05:02:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is amazing _lt_span class_eq__qt_ipsEmoji_qt__gt_😀_lt_/span_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you please help me with npm version in which this feature is integrated. Currently i am using\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_qt_babylonjs_qt__dd_ _qt_3.3.0-alpha.13_qt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\twhich does not have this feature enabled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVarsha\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ravi","Date":"2018-08-01T05:14:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223432_qt_ data-ipsquote-contentid_eq__qt_37860_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532724928_qt_ data-ipsquote-userid_eq__qt_29361_qt_ data-ipsquote-username_eq__qt_trevordev_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 7/28/2018 at 2_dd_25 AM_co_ trevordev said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThanks _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt__lt_/span_gt_ and _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29931-ravi/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29931_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29931-ravi/_qt_ rel_eq__qt__qt__gt_@Ravi_lt_/a_gt__lt_/span_gt_ for the feedback sorry for the delayed response (I was out for a week+)_co_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_Snapping_dd_ this is possible today via_lt_/strong_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt_var_lt_/span_gt_ gizmoManager _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.GizmoManager(scene)\ngizmoManager.positionGizmoEnabled_eq__lt_span_gt_true_lt_/span_gt__sm_\ngizmoManager.gizmos.positionGizmo.xGizmo.snapDistance _eq_ _lt_span_gt_0.3_lt_/span_gt_\ngizmoManager.gizmos.positionGizmo.yGizmo.snapDistance _eq_ _lt_span_gt_0.3_lt_/span_gt_\ngizmoManager.gizmos.positionGizmo.zGizmo.snapDistance _eq_ _lt_span_gt_0.3_lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    but I will add a helper method for this\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_gizmoManager.gizmos.positionGizmo.snapDistance _eq_ 0.3_sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_Possibilities to define euler_lt_/strong_gt__dd_ _lt_br /_gt_\n\t\t\t    In Babylon_co_ I believe it is recommended to always use Quaternions instead of euler angles. _lt_br /_gt_\n\t\t\t    If you wish to continue using euler angles you can always use the methods to convert Quaternions to euler and vice verca.\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_BABYLON.Quaternion.RotationYawPitchRollToRef\nquaternionObj.toEulerAnglesToRef_lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_Add layerMask to the gizmo_lt_/strong_gt__dd__lt_br /_gt_\n\t\t\t    One of the goals when creating the gizmos was to avoid modifying the existing scene. _lt_br /_gt_\n\t\t\t    To avoid this it uses the UtilityLayerRenderer which creates another scene that is overlayed on top of the original._lt_br /_gt_\n\t\t\t    Because of this_co_ unfortunately_co_ I don_t_t believe the layer mask would have any effect. _lt_br /_gt_\n\t\t\t    What you could do to work around this is to use another UtilityLayerRenderer for the minimap and place on the minimap contents in the UtilityLayerRenderer_t_s scene.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_Triangular equal scaling gizmo_lt_/strong_gt__dd__lt_br /_gt_\n\t\t\t    @ravi Sure I will take a stab at creating a new gizmo type for this. _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4844_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4844_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHopefully these resolutions are acceptable._lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAwesome. This is working fine. Thanks for your help! Will check with larger models and let you know the results.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-01T15:33:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31620-varsha-kamble/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31620_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31620-varsha-kamble/_qt_ id_eq__qt_ips_uid_4717_6_qt_ rel_eq__qt__qt__gt_@Varsha Kamble_lt_/a_gt_ npm is updated once a week. alpha14 will be available this friday\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Varsha Kamble","Date":"2018-08-02T05:13:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the updates. _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😀_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill be waiting to get this feature merged.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVarsha\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]