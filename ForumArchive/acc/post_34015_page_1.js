[{"Owner":"Steffen","Date":"2017-11-15T09:49:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen using\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var hitInfo _eq_ scene.pickWithRay(ray_co_ null_co_ true)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI would expect that the ray only checks the boundingboxes and not the mesh. So if I import an _qt_open package_qt_ where the ray can go through the object without collision_co_ I want to check only if the ray hits the boundingbox_co_ but this doesn_t_t seem to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5PMLFP_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5PMLFP_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSteffen\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xav","Date":"2017-11-15T10:39:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co__lt_br /_gt_\n\tYou_t_ll need mesh.boundingBox.isPickable _eq_ false_co_ but I do not think it_t_s available._lt_br /_gt_\n\tYou can cheat by folding a box set it in wireframe and  you can deactivate the property box.isPickable _eq_ false?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do not know if that can help you?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood luck in your search.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2017-11-15T10:57:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t think I understand you correctly...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you set the _qt_isPickable_qt_ param to _qt_false_qt__co_ the ray will ignore the mesh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee line 50_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5PMLFP%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5PMLFP#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSolved. The comment in the doc for pick/pickWithRay is very irritating. Or it is just me and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ (do you have a workaround?).\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed9437555845_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/28777-picking-with-boundingbox-broken/?do_eq_embed_qt_ style_eq__qt_height_dd_205px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tQuote from _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_The fast check using bounding boxes to invalidate candidate. Not to validate them._lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2017-11-15T11_dd_06_dd_53Z_t_ title_eq__t_11/15/2017 11_dd_06  AM_t_ data-short_eq__t_1 yr_t__gt_November 15_co_ 2017_lt_/time_gt_ by Steffen_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_solved...\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-11-15T11:20:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21825-steffen/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21825_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21825-steffen/_qt_ rel_eq__qt__qt__gt_@Steffen_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe picking doesn_t_t pick by boundingboxes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI ended up doing a workaround thus far_co_ a prototype for abstractMesh which adds a _qt_picking Box_qt_ (just a BABYLON.Mesh.CreateBox) the size of the mesh_t_s bounding box_co_ parented to the mesh_co_ only pickingBox has isPickable and then a visibility of 0.001 or so. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd on picking it_t_s just pickedMesh.parent to get the actual mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope it makes sense.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2017-11-15T11:58:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes I thought of this approch too. Just hoped there is a _qt_more elegant_qt_ solution or a babylon method I have not in mind.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks anyway!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-15T14:01:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  In _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/33918-movewithcollisions/_qt_ rel_eq__qt__qt__gt_another thread_lt_/a_gt__co_ some folks are/were playing with picking... for drag/drop usage.  Here_t_s the latest PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WWCK0%2370_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WWCK0#70_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(For some reason_co_ this PG requires ONE MORE click of the RUN button_co_ before it is normal).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn lines 3-67_co_ we _qt_installed_qt_ (hijacked) the abstract mesh _lt_em_gt_intersects()_lt_/em_gt_ function (used for picking)... into the playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen we added many console.logs to it... to learn and test things.  Most important... line 53... which tells (at console) the name of mesh for each pickedPoint that happens during a single pointerDown pick.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOpen console_co_ then do a single pick on a _qt_barrel_qt_.  It looks like about 4-6 picks happen for one pointerDown. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEven the add-on _qt_elli_qt_ sphere (mesh.ellipsoidMesh) is sometimes picked (if you pick high enough on barrel)... even though it is set _lt_em_gt_isPickable _eq_ false_lt_/em_gt_ in line 86. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy so many pickedPoints for a single pick?  Perhaps... do _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_multipick&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_16_co_28_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_this forum search for _t_multi-picks_t__lt_/a_gt_.  I believe _lt_em_gt_multi-pick_lt_/em_gt_ returns an array of _lt_u_gt_all_lt_/u_gt_ the pickedPoints (including which mesh was hit for each pick-point).  It might be worth investigating.  Perhaps a predicate/conditional could be used.   Maybe multipick code could be modified to ONLY return pick-hits from a certain _qt_class_qt_ or _qt_tag-group_qt_.   (variable-criteria filtering). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could also use _lt_em_gt_mesh.metadata_lt_/em_gt_ as an _qt_Allow this mesh to be included in multi-pick returns?_qt_ -flag.  Then hijack (borrow from _lt_a href_eq__qt_https_dd_//raw.githubusercontent.com/BabylonJS/Babylon.js/master/dist/babylon.max.js_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_) the multi-pick code into your home project_co_ and modify it... to ONLY include mesh whose .metadata _eq_ true_co_ or whose .metadata _eq_ { allowReturnInMultiPicks_dd_ true_co_ whatever_dd_ whatever_co_ etc_dd_ etc }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust some goofy Wingnut ideas.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Be well_co_ guys.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-15T18:53:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot sure of the usage but we can also think about adding an optional parameter to pick and pickWithRay to specify we just want bounding box picking\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]