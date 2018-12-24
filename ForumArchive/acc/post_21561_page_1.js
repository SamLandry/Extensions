[{"Owner":"OMAR","Date":"2016-03-29T16:43:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering about which properties of particle systems are most resource-consuming and how we can optimize particle systems in general? Thanks...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-30T08:44:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthe fastest code is no code\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe fastest particles are no particle _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tGeneral question_co_ general answer _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut we_t_ll be happy to help you to optimize one of your real particle case if needed... each case has its own optimization\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"OMAR","Date":"2016-03-30T09:35:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ sorry it was too general _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell I was looking for some kind of an article or at least something like that regarding general optimization techniques which can be applied to particle systems. Something like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_span style_eq__qt_font-size_dd_16px_sm__qt__gt_Ok kids_co_ today we will learn how to optimize your particle systems and not go full mad scientist and put your CPU on fire!_lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_span style_eq__qt_font-size_dd_16px_sm__qt__gt_Number 1_dd_ Keep your number of particles as low as possible!_lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_span style_eq__qt_font-size_dd_16px_sm__qt__gt_Number 2_dd_ blah blah blah_lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_span style_eq__qt_font-size_dd_16px_sm__qt__gt_blah blah blah blah blah blah..._lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe something like this? This could be real helpful because some developers may also target mobile devices for their games and well_co_ those things don_t_t really have those _qt_fast_qt_ CPU_t_s compared to PCs. We also wouldn_t_t want a rise in sale of fire extinguishers because of the poorly implemented particles systems _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-30T09:47:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok_co_ I_t_m not aware of this kind of article existing for BJS particles_co_ but maybe it exists somewhere.... no idea_co_ sorry\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically_co_ animating particles is just iterating over a big array and setting the particle properties. So the perf is really related to the global number of particles. Just remember that having 8K particles instead of 12K or 20K will not make a real difference for a human eye_co_ but will make a real difference for the CPU handling twice less objects.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep also in mind that the iteration is done over all the particles to set their properties_co_ even if they aren_t_t currently in the fustrum. So it_t_s better to keep a decent visible amount of particles and make sure to manage only them (and not un-visible ones) _dd_ keep them in the fustrum_co_ recycle them quickly_co_ etc\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"OMAR","Date":"2016-03-30T10:29:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122769_qt_ data-ipsquote-contentid_eq__qt_21561_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459331250_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t35 minutes ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\titeration is done over all the particles to set their properties_co_ even if they aren_t_t currently in the fustrum\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWow_co_ now THAT_t_S some useful information! I actually implemented your idea quickly to my game (by reducing the life time of particles) and now the _qt_beauty of the scene_qt_ - I shall say_co_ didn_t_t change at all_co_ yet now the number of particles in the scene halved. I believe this should be put into the docs too...  I honestly didn_t_t know about the way CPU handles these particles and even more important_co_ it handles them even they are NOT in the _qt_view area_qt_ so thanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-03-30T11:02:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122767_qt_ data-ipsquote-contentid_eq__qt_21561_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459330517_qt_ data-ipsquote-userid_eq__qt_20291_qt_ data-ipsquote-username_eq__qt_OMAR_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ OMAR said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWe also wouldn_t_t want a rise in sale of fire extinguishers because of the poorly implemented particles systems\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOmar_co_ if you need particle optimization_co_ then perhaps... you are using an under-powered mobile device.  Let me show you what a MANLY mobile device looks like...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//cdn.satellitetoday.com/wp-content/uploads/2015/01/Sattruck.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//cdn.satellitetoday.com/wp-content/uploads/2015/01/Sattruck.jpg_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Particle optimization_qt_ then means _qt_How many godrays and special effects can we add to _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/demos/sh.html_qt_ rel_eq__qt_external nofollow_qt__gt_each particle_lt_/a_gt_?_qt_  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_  Good performance _eq_ _qt_putting-on a good show_qt__co_ right?  Yep_co_ with an ingenious _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#U0HVA%2314_qt_ rel_eq__qt_external nofollow_qt__gt_custom update function_lt_/a_gt_ and some _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#1ASENS_qt_ rel_eq__qt_external nofollow_qt__gt_particle effects_lt_/a_gt__co_ we can get _lt_u_gt_great_lt_/u_gt_ performances.  I suspect... we can add about 100 different particle effects onto a 10-sec particle lifetime.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBall-balancing trained seals... eat your hearts out.  Very few circus acts can match the _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WCDZS%232_qt_ rel_eq__qt_external nofollow_qt__gt_wonderful performances_lt_/a_gt_ of our particle systems.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]