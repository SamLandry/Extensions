[{"Owner":"MasterSplinter","Date":"2016-03-08T20:17:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve looked through various threads (I believe someone attempted to do this for peter jackson a few months ago).  I_t_m trying to attach a live stream video to a texture.  One would think if it_t_s a video element it should attach.  However_co_ it doesn_t_t appear to be viewable.  I was hoping someone would have some idea why the element may or may not be appearing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//codepen.io/wpdildine/pen/zqqrba_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//codepen.io/wpdildine/pen/zqqrba_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAttached is a scene comment out line 65 and the plane will appear.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-P\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterSplinter","Date":"2016-03-09T03:09:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis isn_t_t really resolution to this issue.  But_co_ it appears safari in the way it_t_s implemented won_t_t render hls videos in a webgl context.  I might try some other formats and see if I can get it to work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterSplinter","Date":"2016-03-09T17:05:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny insight would help-- Any video I try to stream over the web does not work -- but if I download it it works fine..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#256QWU%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#256QWU#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I run this videoTexture locally no problem...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-09T18:02:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt seems there is a bug with _t_createTexture_t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUncaught TypeError_dd_ Cannot read property _t_createTexture_t_ of null\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Boz","Date":"2016-03-09T18:32:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou talk about createTexture() method of Engine ? It could be a problem with the engine or WebGL initialization\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterSplinter","Date":"2016-03-09T19:19:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe issue is a CORS problem that was masquerading as a webGL issue.  The solution is to add this line of code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#2b2b2b_sm_color_dd_#e6e1dc_sm_font-family_dd__t_Courier New_t__sm_font-size_dd_4.5pt_sm__qt__gt_\n_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt__lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm__qt__gt_videoTexture_lt_/span_gt_._lt_span style_eq__qt_color_dd_#d0d0ff_sm__qt__gt_video_lt_/span_gt_._lt_span style_eq__qt_color_dd_#979748_sm__qt__gt_setAttribute_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#a5c261_sm__qt__gt__qt_crossorigin_qt__lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#a5c261_sm__qt__gt__qt_anonymous_qt__lt_/span_gt_)_sm__lt_/span_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-09T20:01:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_119856_qt_ data-ipsquote-contentid_eq__qt_21047_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1457548368_qt_ data-ipsquote-userid_eq__qt_8472_qt_ data-ipsquote-username_eq__qt_Pouet_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Pouet said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyou talk about createTexture() method of Engine ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUncaught TypeError_dd_ Cannot read property _t_createTexture_t_ of null\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\to.createDynamicTexture @ babylon.js_dd_4\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t(anonymous function) @ babylon.js_dd_13\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_119861_qt_ data-ipsquote-contentid_eq__qt_21047_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1457551157_qt_ data-ipsquote-userid_eq__qt_15320_qt_ data-ipsquote-username_eq__qt_MasterSplinter_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t40 minutes ago_co_ MasterSplinter said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe solution is to add this line of code\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat didnt change anything for me. The sphere disappeared\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-10T11:17:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe exception is rather straight forward - \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDOMException_dd_ Failed to execute _t_texImage2D_t_ on _t_WebGLRenderingContext_t__dd_ The video element contains cross-origin data_co_ and may not be loaded.(…)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]