[{"Owner":"Raggar","Date":"2016-07-11T14:54:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is something I_t_ve been giving some thought since trying the Pokemon Go game.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any way of integrating the WebGL Earth in a Babylon.js scene?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTaking a look at the Hello World example of the WebGL Earth_dd_ _lt_a href_eq__qt_http_dd_//examples.webglearth.com/#helloworld_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//examples.webglearth.com/#helloworld_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would be a decent suit for an augmented reality type game like Go. Try zooming in on the map_co_ the tiles are perfect for this type of game.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s just a matter of getting the GPS coordinates at a fixed interval(Using the geolocation API)_co_ and have an animated player model. That would be the basics_co_ and leaving all the real game designing and server handling to the individual coders.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI couldn_t_t get them to merge_co_ as it seems the globe project creates a scene and camera itself_co_ and therefore can_t_t easily be part of a Babylon scene. At least as far as I can tell.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone know if there is any existing example of anything similar for Babylon or maybe Three.js?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m fairly certain this could spawn a new wave of interesting _t_low-budget_t_ augmented reality games.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-15T20:36:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt__co_ welcome to the forum.  Good to have you with us.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo replies yet_co_ huh?  Sorry.  About the closest we_t_ve seen... is _lt_a href_eq__qt_http_dd_//makina-corpus.com/blog/metier/2014/how-to-use-multimaterials-with-a-tiled-ground-in-babylonjs_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//makina-corpus.com/blog/metier/2014/how-to-use-multimaterials-with-a-tiled-ground-in-babylonjs_lt_/a_gt_ .  Interesting topic/ideas_co_ for sure.  Sorry I don_t_t have more _qt_goods_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe use _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#29XKS3_qt_ rel_eq__qt_external nofollow_qt__gt_THIS playground_lt_/a_gt_ as a starter.  It is ALMOST the same as the playground demo from the above webpage_co_ except I remarked-out line 83_co_ an unnecessary line.  (bloat prevention). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps use our LOD system or shoot a distance-checking ray at the map plane... determine when it_t_s time to re-tile/re-draw the map? (zoom in/out feature) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOpen Street Map tiles... yum!  I like _t_em.  Got more thoughts?  Let_t_s hear _t_em.  We love mad scientist experiments like these.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-07-26T20:26:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi @_lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F23751-integrating-webgl-earth-in-babylonjs%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ title_eq__qt_Go to Wingnut_t_s profile_qt_ rel_eq__qt__qt__gt_Wingnut_lt_/a_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your reply_co_ as well as your welcome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis was mostly to get an idea of whther or not it is actually possible_co_ as I have 2 other projects eating up my focus right now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI looked at both links_co_ and it certainly looks like it might be possible with a little hacking around.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did this very quick and (ugly) test of the playground scene from your first link. I simply added a call to the geo API_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BMKOU_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BMKOU_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt requires Firefox_co_ though_co_ as Chrome won_t_t access location data without the connection enforcing security by TLS/SSL.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I get more time_co_ I_t_ll look ways of getting location data into actual points on the tiles.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-26T20:54:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat I have been looking for is an implementation of Virtual Textures. The code is above my head as it requires some shader coding to make it happen. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt would allow a google earth kind of zoom in to the world ability. Would be great for Geo as well as games with endless worlds. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am attaching the pdf. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_8772_qt__gt_VirtualTextureWebGL.pdf_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-07-27T13:50:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve already researched this_co_ you just need to get the hightmaps and then grab the satellite layer as the texture.  It_t_s pretty simple once you get your data converted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can also access topology layers that have height information.  The problem I ran into though was resolution_co_ and had to start going with LAR GS data.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-27T20:01:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry Pryme8 what did you research? If its virtual texturing then I have no idea on how _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_heightmaps_lt_/span_gt_ matter. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would think you could make use of OpenStreetMap data maps \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is what I think can be done with Virtual textures. \n_lt_/p_gt_\n\n_lt_p_gt_\n\twww.openstreetmap.org\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]