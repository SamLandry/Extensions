[{"Owner":"legallon","Date":"2018-05-22T13:10:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody ! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m importing .obj files in my application_co_ and I want to change their color. However_co_ the color seems to be changed when the page is loading_co_ but when it_t_s finally loaded the mesh still has its basic grey material (so while the whole scene is loading we can see the mesh being pink for half a second and then takes back its basic color/texture/material).  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve seen something about UV maps etc.. but I checked it in Blender and it is activated when I import into obj. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a pg trying to reproduce my problem ( first you will need to help me importing my object into the pg because it doesn_t_t seem to be working_co_ I can_t_t see it on scene)_sm_ I added a skull.babylon to show that the code I provide is supposed to work _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#V9KE7I%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#V9KE7I#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your time ! _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Amarth2Estel","Date":"2018-05-22T13:43:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Legallon !_lt_br /_gt_\n\t_lt_br /_gt_\n\tConcerning the import from you git repo to the playground_co_ I think that is only a CORS problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tConcerning the wrong material_co_ I think the problem is that your .OBJ says which material to use (line 3 _lt_span_gt__dd_ mtllib camion.mtl). Just remove the link of .mtl when you export from Blender (or directly remove this line from your .OBJ) to make sure the material used will be the one you define with babylon. This should fix your problem._lt_br /_gt_\n\t_lt_br /_gt_\n\tHope it helps_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-05-22T13:44:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen data is on github_co_ you have to use the raw link. And I also use scene.append_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#V9KE7I%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#V9KE7I#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I was unable to get your already existing material_co_ don_t_t know why _lt_span class_eq__qt_ipsEmoji_qt__gt_😕_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-05-22T13:50:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215785_qt_ data-ipsquote-contentid_eq__qt_37810_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526996624_qt_ data-ipsquote-userid_eq__qt_29328_qt_ data-ipsquote-username_eq__qt_Amarth2Estel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 minutes ago_co_ Amarth2Estel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi Legallon !_lt_br /_gt_\n\t\t\t_lt_br /_gt_\n\t\t\tConcerning the import from you git repo to the playground_co_ I think that is only a CORS problem.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tConcerning the wrong material_co_ I think the problem is that your .OBJ says which material to use (line 3 _lt_span_gt__dd_ mtllib camion.mtl). Just remove the link of .mtl when you export from Blender (or directly remove this line from your .OBJ) to make sure the material used will be the one you define with babylon. This should fix your problem._lt_br /_gt_\n\t\t\t_lt_br /_gt_\n\t\t\tHope it helps_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey man _co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the suggestion concerning the material !  I comentend the line 3 and it works. I didn_t_t really think it was about the mtl file because I thought I was forced to import it with my object ( now I can see that I_t_m not).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again _co_ it helped a lot _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-05-22T14:10:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215786_qt_ data-ipsquote-contentid_eq__qt_37810_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526996691_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t33 minutes ago_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhen data is on github_co_ you have to use the raw link. And I also use scene.append_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#V9KE7I%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#V9KE7I#9_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut I was unable to get your already existing material_co_ don_t_t know why _lt_span class_eq__qt_ipsEmoji_qt__gt_😕_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your answer_co_ I didn_t_t know about the raw link !  No worries for the material_co_ _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29328-amarth2estel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29328_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29328-amarth2estel/_qt_ rel_eq__qt__qt__gt_@Amarth2Estel_lt_/a_gt__lt_/span_gt_ _lt_span_gt_ helped me for this._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Thanks for the help mate ! _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-05-22T14:32:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMontpellier_co_ France?  Cooool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.huffingtonpost.com/entry/destination-spotlight-montpellier-france_us_5a42adb5e4b0d86c803c73a3_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.huffingtonpost.com/entry/destination-spotlight-montpellier-france_us_5a42adb5e4b0d86c803c73a3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at that pretty sphere!  A _qt_3D - aware_qt_ city_co_ for sure.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Here in the USA_co_ we use high-tech plastics and monomers to create copies of that _qt_french curvy architecture_qt_._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_There_co_ you got the REAL stuff.  (drooooool)._lt_/span_gt_  C_t_mon_co_ who is rich and wants to send me on a free Tour-de-France?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust rent me a motor home and pack it with french toast_co_ and I_t_ll return it in a month.  I got a lot of forum friends in France... that I want to shake hands with.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll even make a _qt_BabylonJS Tour de Francais Polygons_qt_ - the movie!  I_t_ll sing and play guitar for the whole soundtrack... I_t_m pretty darned good at that stuff_co_ ya know.  Clint Black + Randy Travis + Jon Anderson_co_ and I can tear-up a guitar pretty thoroughly.  C_t_mon!  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suppose we would need a corporate sponsor_co_ and that_t_s where it all goes to hell_co_ eh?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh well_co_ I wish I could spend a week in Mont-p... it looks pretty cool.  Ok_co_ back on topic...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  - BJS .obj file loader... pulls .mtl files... if reffed within .obj file?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  - BJS .mtl file loader... pulls texture file(s)... if reffed within .mtl file?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  - Texture files... they just get loaded.  Been there.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-05-22T14:47:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_  Yes_co_ and I would even say a _qt_3D-aware _qt_ country _lt_span_gt__dd_ i_lt_/span_gt_f I_t_m not mistaking_co_ the great _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ himself is French !  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t What a nice idea ! I_t_m pretty sure that every French member of this forum would love to have you and your guitar  with us in France _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tComing back to the topic_co_ yes the problem was a mtl file call within the obj file_co_ sneaky peeky stuff ahah hard to find ! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-05-22T14:53:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215794_qt_ data-ipsquote-contentid_eq__qt_37810_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526999531_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t19 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tC_t_mon_co_ whose rich and wants to send me on a free Tour-de-_lt_span_gt_﻿_lt_/span_gt_France?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m not enough rich for that_co_ but surely have some money to offer a beer if you_t_ll go to Toulouse _lt_span class_eq__qt_ipsEmoji_qt__gt_🍻_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-05-22T14:56:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ I think you_t_re on the right way ! (btw you_t_d definitely want to see the Peyrou_co_ lovely place ! )_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-05-22T15:11:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215796_qt_ data-ipsquote-contentid_eq__qt_37810_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1527000440_qt_ data-ipsquote-userid_eq__qt_31075_qt_ data-ipsquote-username_eq__qt_legallon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t30 minutes ago_co_ legallon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_i_lt_/span_gt_f I_t_m not mistaken_co_ the great _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ himself is French !  \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeah he is... and a bunch of other BJS founding fathers and early trailblazers_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGenuine _qt_french fries_qt_... crispy on the outside_co_ tender on the inside.  We love _t_em!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I think the French... invented/mastered that pastry thing... where they smash the dough micro-thin_co_ then layer it MANY times into a stack_co_ with butter between each layer.  After baking... it_t_s _qt_mouth heaven._qt_  Professional dough-wranglers_co_ for sure.  Professional JS wranglers_co_ too... good coders... good artists.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut... I don_t_t know if France has anyone that can ramble-on aimlessly and hijack someone_t_s solved thread... as well as us constantly-talk-about-ourselves Americans.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKnow what the #1 most-discussed subject in America_co_ is?  The weather.  #2 - Where are we going to eat-out for the next meal. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe certainly are a nation of _qt_deep thinkers_qt__co_ eh?  heh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-05-22T15:22:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ aha I enjoyed this hijacking a lot_co_ allowed me to think of something else than my code for a few minutes !                                                                                                         At least there are people like you to enhance the _qt_deep thinking_qt_ level !_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-22T15:23:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo we have a flag in the Mesh importers for ignoring materials? If not we should add that.  I know you could just not include a mtl file with obj_t_s but there are other file types that it would be cool to be able to strip all mat_t_s quick and just apply default stuff on the import.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-05-22T15:28:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ It would be helpful ! _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]