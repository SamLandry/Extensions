[{"Owner":"prvi_treti","Date":"2015-08-18T06:49:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_  I intend to include a trimetric map as inline element for a browser based game_co_ but as it is mostly for viewing purposes player should see map as static image at worst case (webGL unavailable/slow) ._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_  Current plan is rendering terrain server side in chunks and using with sprites at client side._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So _co_ question is  (as title suggest) does Babylon.JS supports/allows serverside rendering?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance_co__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-18T16:45:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BabylonJS is built on webGL_co_ so I doubt it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"prvi_treti","Date":"2015-08-18T17:16:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually seems there is room for achieving this _co_ at least for three.js apparently as seen @ _lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/19162510/how-do-i-render-three-js-in-node-js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//stackoverflow.com/questions/19162510/how-do-i-render-three-js-in-node-js_lt_/a_gt_ leading to _lt_a href_eq__qt_https_dd_//github.com/nulltask/node-three.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/nulltask/node-three.js_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-18T17:58:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Three.js has a software option (the canvas renderer) that we do not provide (on purpose). So unfortunately Babylon.js cannot render server side_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"prvi_treti","Date":"2015-08-18T18:29:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_93292_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16544_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1439920714_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Three.js has a software option (the canvas renderer) that we do not provide (on purpose). So unfortunately Babylon.js cannot render server side_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_May I ask reason behind this? (Wondering if not worth the trouble or a technical reason)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-20T17:46:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Babylon.js is highly optimized for webgl and adding an abstraction layer just for having a canvas rendering support where you can barely render a cube is not worth the trouble _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"prvi_treti","Date":"2015-08-20T19:35:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_93519_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16544_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1440092805_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Babylon.js is highly optimized for webgl and adding an abstraction layer just for having a canvas rendering support where you can barely render a cube is not worth the trouble _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Fair enough_co_ will check if can use a solution like _lt_a href_eq__qt_https_dd_//github.com/stackgl/headless-gl/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/stackgl/headless-gl/ _lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]