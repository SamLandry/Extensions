[{"Owner":"babaorhum","Date":"2017-03-21T10:48:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone and thank you all for babylonjs\n_lt_/p_gt_\n\n_lt_p_gt_\n\taccording to this console _dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere is a bug\n_lt_/p_gt_\n\n_lt_p_gt_\n\tboth library are the same version 2.5\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan it explain blank canvas from visual studio?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe NuggetManager only provide 2.3... babylonjs but canvas2D at all\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKind regards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I may be wrong of course\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screenshot.jpg.4c5a267f2ced6f088aaa88df8682b06c.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12137_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screenshot.thumb.jpg.f928e306b5f569e71b29c8303ee23bac.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_screenshot.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screenshot2.jpg.649a013397b97843d99b34c11fe1da84.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12139_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screenshot2.thumb.jpg.876718e83e438000b9fb83dec11aa2ef.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_screenshot2.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-03-21T14:28:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou need to load BJS first.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babaorhum","Date":"2017-03-22T08:00:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt seems to me that it is actually the case isn_t_t it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-22T17:33:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNopte..the canvas file is loaded before babylonjs\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-23T08:47:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually the declaration order of the &lt_sm_script&gt_sm_ tags doesn_t_t really matter_co_ because the download time of each file is unpredictable. Each JS file is downloaded by the browser at its own variable speed (depending so many things _dd_ the web server charge_co_ the network charge_co_ the hypothetical different paths to different hosts_co_ each file size_co_ etc) and is run just after it_t_s received.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo whatever the declaration order the first declared JS file may be run after the last declared one. And vice-versa.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImho_co_ the right thing to do would be to bind each dependency execution to some core events...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twindow.onload (here_co_ we_t_re sure that everything is completely downloaded) _eq_ run your code what calls some BJS functions (we are also sure that BJS is downloaded and run)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf a dependant lib needs that BJS is already accessible (loaded or run) because it calls alone some BJS functions by its own (something different than _dd_ the user call a lib function what calls a core function)_co_ it should rely on the same process.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babaorhum","Date":"2017-03-23T10:22:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_168304_qt_ data-ipsquote-contentid_eq__qt_29223_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1490204032_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t16 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tNopte..the canvas file is loaded before babylonjs\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThx guys_co_ no more such error\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_168361_qt_ data-ipsquote-contentid_eq__qt_29223_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1490258869_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tmple _dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\twindow.onload (here_co_ we_t_re sure that everything is completely downloaded) _eq_ run your code what calls some BJS functions (we are also sure that BJS is downloaded and run)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf a dependant lib needs that BJS is already accessible (loaded or run) because it calls alone some BJS functions by its own (something different than _dd_ the user call a lib function what calls a core function)_co_ it should rely on the same process.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI had already such function going\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnow it is the canvas2D that doesn_t_t load anything and send errors\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tUncaught TypeError_dd_ Cannot read property _t_push_t_ of undefined_lt_br /_gt_\n\t\t\t    at n._registerTrackedNode (babylon.2.5.canvas2d.js_dd_8)_lt_br /_gt_\n\t\t\t    at n [as constructor] (babylon.2.5.canvas2d.js_dd_5)_lt_br /_gt_\n\t\t\t    at n [as constructor] (babylon.2.5.canvas2d.js_dd_7)_lt_br /_gt_\n\t\t\t    at new n (babylon.2.5.canvas2d.js_dd_8)_lt_br /_gt_\n\t\t\t    at panel (sceneBase.js_dd_73)_lt_br /_gt_\n\t\t\t    at createScene (sceneBase.js_dd_117)_lt_br /_gt_\n\t\t\t    at sceneBase.js_dd_134\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tworks on playground_co_ and if I comment the canvas2D snippet it works...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tany idea?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1MVIGI%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1MVIGI#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-23T16:32:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPG is using 3.0-alpha\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should do the same. Don_t_t be afraid by the version number. The release is already rock solid _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-03-23T18:18:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_168361_qt_ data-ipsquote-contentid_eq__qt_29223_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1490258869_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tActually the declaration order of the &lt_sm_script&gt_sm_ tags doesn_t_t really matter_co_ because the download time of each file is unpredictable. Each JS file is downloaded by the browser at its own variable speed (depending so many things _dd_ the web server charge_co_ the network charge_co_ the hypothetical different paths to different hosts_co_ each file size_co_ etc) and is run just after it_t_s received.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf you try loading this page_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_!doctype html&gt_sm__lt_br /_gt_\n\t&lt_sm_html&gt_sm__lt_br /_gt_\n\t&lt_sm_head&gt_sm__lt_br /_gt_\n\t   &lt_sm_script src_eq__qt_babylon.canvas2d.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_br /_gt_\n\t   &lt_sm_script src_eq__qt_babylon.max.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_br /_gt_\n\t&lt_sm_/head&gt_sm__lt_br /_gt_\n\t&lt_sm_body&gt_sm__lt_br /_gt_\n\t&lt_sm_/body&gt_sm__lt_br /_gt_\n\t&lt_sm_/html&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand then open the console you will see this error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUncaught TypeError_dd_ Cannot read property _t_Effect_t_ of undefined_lt_br /_gt_\n\t    at babylon.canvas2d.js_dd_1\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScripts execute in the order they appear on the page unless the html5 async property is used.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-23T20:19:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ Adam is right... I kept a distant bad experience in mind where the declaration order wasn_t_t respected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it is. And it shall be _dd_ _lt_a href_eq__qt_http_dd_//docstore.mik.ua/orelly/webprog/jscript/ch12_03.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//docstore.mik.ua/orelly/webprog/jscript/ch12_03.htm_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhatever the actual download order or delay.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease don_t_t take notice of my former post. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babaorhum","Date":"2017-03-24T08:28:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_168424_qt_ data-ipsquote-contentid_eq__qt_29223_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1490286761_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tPG is using 3.0-alpha\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou should do the same. Don_t_t be afraid by the version number. The release is already rock solid _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI was waiting for the official release with red carpet and champagne_co_ but I give it a shot\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]