[{"Owner":"hollow","Date":"2018-05-03T08:33:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello together_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin PG _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KUJ0A%23104_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#104_lt_/a_gt_ you can see an default scene with an additional sphere outside the view (sphere_boycott) with renderingGroupId_eq_1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUntil now all looks good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you focus the rendering window/side and press _t_cursor key down_t_ to get an larger distance with the actual camera position - or rotate the view to the right side - the added sphere will be shown and the tittled glow-effect fills up the whole sphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think_co_ this is not the expected behavior?! Are more information needed?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tregards and thank you all for the great work and help\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit 3 -- (start additional information)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere is anonther (for me) unexpected behavior_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin PG _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/indexstable#B73AIM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/indexstable#B73AIM (opacity on HighlightLayer)_lt_/a_gt_ are 2 more cases_co_ where the HL not correct works_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe 1st 2 spheres are from an material example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere_co_ the 2nd (middle) and over that the 3rd (right) added from me (example 1) has an opacityTexture (tree) over the grass diffuseTexture - both don_t_t show the HL\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe 4th sphere (front) is added like the sides of the cube with dog-puzzle-piece_co_ the tree.png with hasAlpha_eq_true and looks beautiful_co_ like expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-- (end additional information)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit (link string to link)_lt_br /_gt_\n\tEdit2 (2nd try)_lt_br /_gt_\n\tEdit3 (additional information about 8hrs after post)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... thanks for reading\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-03T20:31:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-05-03T21:16:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout the second playground it is all expected as the Highlight Layer does not support transparency_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/highlight_layer#default-use-case_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/highlight_layer#default-use-case_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout the first example I would say it is almost expected _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_ What happens is as you are using a separate rendering group you are erasing the required info for the highlight to work (this requires the stencil buffer) so you could prevent this like here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KUJ0A%23105_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#105_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr rely on separate cameras to achieve the same effect easily_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/highlight_layer#multi-camera_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/highlight_layer#multi-camera_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fact that it does not directly happen is the result of amazing optimization in the engine where out of focus meshes are not rendered making harder to understand.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hollow","Date":"2018-05-05T13:56:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and thanks for your reply_co_ but I_t_m still stuck on this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\there _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/transparency_and_how_meshes_are_rendered_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/resources/transparency_and_how_meshes_are_rendered_lt_/a_gt_ under _t_Opaque or Transparent?_t_ are 4 cases described_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDepth pre-pass meshes - I think that_t_s here not relevant_co_ right?_lt_br /_gt_\n\tOpaque Meshes - will be the _t_left_t_ sphere from my first PG?_lt_br /_gt_\n\tAlpha Tested Meshes - seems has the possibility to be highlighted (it could be the _t_front_t_ sphere) _co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut only _t_Alpha Blended Meshes_t_ are not possible to highlight?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd would it right to say_co_ all what is visible for the depthRenderer is highlightable?\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta little bit offTopic_dd__lt_br /_gt_\n\tin this doc is the screenshot of an greyscaled depthRenderer picture_co_ and the link to the PG here_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PHYB0%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PHYB0#6_lt_/a_gt_ there the view is broken by pressing F9 in 3.3.0-alpha and an error (fireProcMaterial) for 3.2.0 (stable) is thrown_lt_br /_gt_\n\t(i will understand how the greyscale image is produced_co_ I_t_m only able to create an BW-texture on a plane without Shaders)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks in advance\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-05-05T19:57:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou are exactly right_dd_ _qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_all what is visible for the depthRenderer is highlightable_qt_._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Basically_co_ the highlight layer relies internally on the depth buffer to  create the effect._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-05-10T18:14:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAbout the depth texture issue_co_ the code was trying to rely on private methods instead of the dedicated public ones.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can take a look at the fix version here_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PHYB0%2368_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PHYB0#68_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hollow","Date":"2018-05-10T18:32:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthank you verry much_co_ that helps me _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]