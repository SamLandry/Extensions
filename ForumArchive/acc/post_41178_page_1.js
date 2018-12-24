[{"Owner":"mind0n","Date":"2018-11-10T15:33:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRefer to the demo below_co_ a GUI line can connect a mesh &amp_sm_ a control at the same time by using_dd_ _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_line.linkWithMesh(sphere)_sm_  line.connectedControl _eq_ rect1_sm_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ what I want to achieve is that let GUI line link with 2 meshes_co_ each at the end of the line. (eg. _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_line.linkWithMesh(sphere1_co_ sphere2)_sm_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any way to achieve this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%2339_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#39_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-10T16:58:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya M!  Hey_co_ if the lines are NOT GUI... would that be okay? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1EBCJY%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1EBCJY#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGUI lines are not designed to connect mesh together_co_ but_co_ there still might be a way to do it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll think real hard_co_ and we_t_ll listen for other ideas/help.  (Unless non-GUI lines will work.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately I don_t_t think there is a thickness setting... for these non-GUI lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOthers have done some things with thin cylinders... placed between mesh (between the mesh.positions_co_ so cylinders can go INTO the mesh... to its origin/pivot-point).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo a _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/playground/?code_eq_vend_qt_ rel_eq__qt_external nofollow_qt__gt_playground search for _t_vend_t__lt_/a_gt_.  I remember all the _qt_cylinderBetweenPoints_qt_ experiments... used _t_vend_t_ as the name of the ending vec3 target.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#T7M9U%230_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#T7M9U#0_lt_/a_gt__lt_span_gt_   &lt_sm_- that is rather nice_co_ and small.  But_co_ as you can see_co_ something changed in the newer versions of BJS... that make the cylinder NOT connect to the spheres.  hmmm.  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I_t_ll see if I can fig why.  It might be due to some changes in setPivots.  Something about... changing pivots USE TO move the mesh_co_ but in newer BJS_co_ it doesn_t_t.  Or the opposite of that.  I can_t_t remember right now.  Help from others... welcome.  Stay tuned for more ideas._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mind0n","Date":"2018-11-11T01:35:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Thanks for the feedback_co_ your example looks great. _lt_br /_gt_\n\tHowever_co_ I have to use a GUI line to connect 2 meshes.  That_t_s because I need to keep all the lines at the background so the lines never display in front of any mesh no matter how user rotates the camera._lt_br /_gt_\n\tI really appreciate if GUI lines could support this feature (connect 2 meshes with a single line)._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234366_qt_ data-ipsquote-contentid_eq__qt_41178_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1541869135_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHiya M!  Hey_co_ if the lines are NOT GUI... would that be okay? \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1EBCJY%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1EBCJY#3_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tGUI lines are not designed to connect mesh together_co_ but_co_ there still might be a way to do it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI_t_ll think real hard_co_ and we_t_ll listen for other ideas/help.  (Unless non-GUI lines will work.)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUnfortunately I don_t_t think there is a thickness setting... for these non-GUI lines.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOthers have done some things with thin cylinders... placed between mesh (between the mesh.positions_co_ so cylinders can go INTO the mesh... to its origin/pivot-point).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tDo a _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/playground/?code_eq_vend_qt_ rel_eq__qt_external nofollow_qt__gt_playground search for _t_vend_t__lt_/a_gt_.  I remember all the _qt_cylinderBetweenPoints_qt_ experiments... used _t_vend_t_ as the name of the ending vec3 target.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#T7M9U%230_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#T7M9U#0_lt_/a_gt__lt_span_gt_   &lt_sm_- that is rather nice_co_ and small.  But_co_ as you can see_co_ something changed in the newer versions of BJS... that make the cylinder NOT connect to the spheres.  hmmm.  _lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_I_t_ll see if I can fig why.  It might be due to some changes in setPivots.  Something about... changing pivots USE TO move the mesh_co_ but in newer BJS_co_ it doesn_t_t.  Or the opposite of that.  I can_t_t remember right now.  Help from others... welcome.  Stay tuned for more ideas._lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-11T02:46:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe have the multiline for that_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#714_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#714_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoc_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/gui#multiline_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/gui#multiline_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]