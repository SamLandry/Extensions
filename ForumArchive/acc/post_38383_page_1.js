[{"Owner":"dsman","Date":"2018-06-21T12:51:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have some questions about videoTexture and 360.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Is there any off-the-shelf way to use cubemap video for 360? If not_co_ can we map a video containing 6 faces to Cube mesh with UV like we do in case of simple Image texture?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Does VideoTexture support HLS/Mpeg-DASH/MicrosoftSmoothStreaming and their adaptive bit rate features?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. Is it practical to stream 6 faces separately and apply them as videoTextures on six faces of a cube? And Sync them with VideoDOM element_t_s controls (and Streaming protocol_t_s manifests)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-21T13:56:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//rawgit.com/wpdildine/webCAMbabylon/master/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//rawgit.com/wpdildine/webCAMbabylon/master/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-21T16:29:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. We definitely have it _lt_span_gt__dd__lt_/span_gt_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/360videodome_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/360videodome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. It supports what the browser supports _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_3. Well the best option is equirectangular (like in the doc I linked)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-06-27T12:17:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_   I checked the 360VideoDome earlier. But it mentions video must be equirectangular. I think when you said _qt_we definitely have it_qt__co_ you mean one can use equirectangular video projection on a cube. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I am wondering is if a cubemap formatted video (6 faces arranged in a certain way) can be projected on a cube._lt_strong_gt_ If not off-the-shelf_co_ is UV mapping also supported for VideoTexture?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEquirectangular mapping is not the best option for live 360 videos because it may require 10Mbps download speed for reasonable quality video (4K). \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-27T16:01:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk gotcha..So yes if it is not an equirectangular then you have to play with UV\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand yes videoTexture supports UV mapping like any other texture _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll be interested to integrate your work if you are ok as I guess that other people could be interested by similar approach\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-06-27T21:15:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219652_qt_ data-ipsquote-contentid_eq__qt_38383_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530101845_qt_ data-ipsquote-userid_eq__qt_13379_qt_ data-ipsquote-username_eq__qt_dsman_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ dsman said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tEquirectangular mapping is not the best option for live 360 videos because it may require 10Mbps download speed for reasonable quality video (4K). \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think it depends on various factors such as - what your source materials is and how you prepare your files server side. You can cut an equirectangular image exactly in 6 _qt_faces_qt__co_ check your user view direction and start streaming only for a particular UV._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WZKPXM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WZKPXM_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-06-28T08:09:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_   Ok. We can sure contribute when we implement this. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ That is what we have considered. User orientation based adaptive streaming for 360. Will have to explore HLS and DASH to see if we can customize play functionality to maintain stream sync. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]