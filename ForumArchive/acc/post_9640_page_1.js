[{"Owner":"altreality","Date":"2014-10-04T16:00:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am wondering how good is the physics support for designing a train simulator in Babylon 5. It would probably involve applying multiple wheel forces to stabilize a locomotive and make it follow a track._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also if I am trying to render outdoor scenes like a train running through a vast green valley with many trees and hills in the distance_co_ how can such scenes be handled in Babylon 5 ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are there some tricks possible to give a great visual experience without slowing the game by much ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-10-05T20:51:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not sure why you_t_d need to compute fancy physics to do such a thing!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Look at the train demo on babylonjs.com to see what I mean._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Distance trees wouldn_t_t need to be 3D - they could be sprites_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#2IPMDX_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#2IPMDX_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And to have hill meshes zooming past_co_ you wouldn_t_t need a millions meshes - you can have it so when one zooms by_co_ it teleports in front of you_co_ like a chain._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Other that that_co_ I can_t_t help you. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-10-18T11:43:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yay_co_ Microsoft Train Sim... I love it!  Welcome to the forum_co_ Altreality!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have you used the MS Train Sim route editor?  In there_co_ you can see that some _qt_far things_qt_ are actually flat planes with 2D pictures on them.  Generally_co_ in MSTS_co_ your _t_view_t_ is always from the location of the train (except for the old yard cam hack which let you fly a camera anywhere). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Having your view always being from the train... gives you an advantage when it comes to LOD tricks._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And yes_co_ if you want to try to honor all the fun physics found in MSTS_co_ you are in for a physics challenge.  But I am with you!!!  I would absolutely LOVE a version of MSTS in WebGL_co_ and would be a big fan of your project.  Track files and rolling stock files are all in ASCII text_co_ and could all be parsed with JS_co_ so all those files from the original MSTS would not need rewriting.  And_co_ the incremental loading and tiled landscape that MSTS does... is also available in BJS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ I am quite sure it can be done_co_ and Babylon.js would be a perfectly fine framework to do it.  That would be SO COOL!!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There are some Microsoft employees nearby here_co_ too_co_ and I bet you/we could get some help from _qt_the Gods_qt_... if you/we got stuck on something.  What a great project it would be.  Microsoft_co_ if they were smart_co_ would just plain write a Babylon.js webGL version of MSTS... FOR us.  I would gladly donate substantial $$$ to the cause... because MSTS rocks!  Sigh.  So cool._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll give the product development people at Microsoft... a phone call... and have them re-open MS Game Studios and have them get started on this.  I can_t_t wait! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But _qt_Babylon 5_qt_ was a TV show_co_ not a webGL framework.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"QuintusHegie","Date":"2018-08-11T18:33:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_56949_qt_ data-ipsquote-contentid_eq__qt_9640_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1412438418_qt_ data-ipsquote-userid_eq__qt_10968_qt_ data-ipsquote-username_eq__qt_altreality_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 10/4/2014 at 6_dd_00 PM_co_ altreality said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI am wondering how good is the physics support for designing a train simulator in Babylon 5. It would probably involve applying multiple wheel forces to stabilize a locomotive and make it follow a track.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAlso if I am trying to render outdoor scenes like a train running through a vast green valley with many trees and hills in the distance_co_ how can such scenes be handled in Babylon 5 ?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAre there some tricks possible to give a great visual experience without slowing the game by much ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAlthough an old post still good questions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Physics_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPhysics calculations for train simulators can become quite advanced quickly_co_ as many bodies will be connected to each other (the locomotive and each wagon) and the bogeys must be constrained to the rail path. Also the physics working on a train can become destructive very fast. That_t_s why I found a very expensive study book (300 euro) on railroad engineering that almost takes a master_t_s degree to understand how to place real world track that WOULDN_t_T derail the train in the first place. _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_ And that_t_s why most train simulators _t_cheat_t_ and create their own simplified physics and train operation / track following code. And most train games are simply tile-based or only allow 45 and 90 degree turns etc. But I guess you don_t_t want that much simplification _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you train simulator doesn_t_t need very strange things like _qt_up side down loops_qt__co_ then you can reduce the complexity by projecting your train and track on 2D plane (X0Z).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    Straight track is easy. Straight lines _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_br /_gt_\n\t    Use (partial) circles for curves._lt_br /_gt_\n\t    Connect straight tracks to curves using an Euler curve/spiral segment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSuper-elevation can be computed in some kind of post-process (after you placed the track) to counter any physics that would make the high speed train derail in a curve (e.g. go straight instead of take the curve).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe _qt_problem_qt_ with the standard bezier curves in train simulators is that they may look nice curves but are difficult to evenly interpolate (e.g. when your train needs to move equidistance).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Outdoor scenes_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhether for a browser based application or for desktop applications_co_ large outdoor scenes may not be your friend in 3D. Unless it_t_s a desert scene perhaps _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tFor large outdoor scenes you can indeed use sprites for trees.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tAnd you need instances (instead of clones).\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tFor non-sprites_co_ like buildings_co_ use LOD (Level of Detail) for your meshes.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tBe sure to _t_freeze_t_ the matrix for non-moving objects. That saves some computations.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tAnd then there_t_s other optimizations like Octrees. These break down your world into segments. Based on the camera position and view_co_ only parts of the world in front of your camera will be evaluated for rendering.\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tStill_co_ with those optimizations_co_ I_t_m still struggling to get a good frame rate on low- and mid-end devices. But I believe it can be done on the powerful computers. _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Demo_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been breaking my head on the train mathematics_co_ but your can see my results so far in my BabylonJS Model Train Simulator game here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//quintushegie.com/gardentrains/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//quintushegie.com/gardentrains/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy game is not the _t_realistic_t_ Microsoft Train Simulator type_co_ but you_t_ll get the point... most computations and challenges remain the same.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQ\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_[Added]_lt_/strong_gt_ B.T.W. Jerome has made an example of a rollercoaster demo_co_ which is also a nice starting point for objects following path. Check out his Roller Coaster demo on _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/demos/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/demos/_lt_/a_gt_  )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-08-12T13_dd_13_dd_04Z_t_ title_eq__t_08/12/2018 01_dd_13  PM_t_ data-short_eq__t_Aug 12_t__gt_August 12_lt_/time_gt_ by QuintusHegie_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Added rollercoaster demo from Jerome for inspiration\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-12T08:30:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tw00t I never about all those before reading your post. GG.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]