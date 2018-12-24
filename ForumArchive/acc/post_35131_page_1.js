[{"Owner":"heyzxz","Date":"2018-01-17T11:09:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst I know there is nothing private in javascript_co_ but since it is marked as private in the typescript code _co_ I_t_m just wondering if there is an official api/ or a nice trick to obtain it without breaking the rule... \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Amarth2Estel","Date":"2018-01-17T11:36:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi heyzxz !_lt_br /_gt__lt_br /_gt_\n\tThe type of engine._gl is WebGLRenderingContext._lt_br /_gt_\n\tYou can use canvas.getContext(_t_webgl_t_) to access it._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//developer.mozilla.org/fr/docs/Web/API/WebGLRenderingContext_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/fr/docs/Web/API/WebGLRenderingContext_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"heyzxz","Date":"2018-01-17T13:40:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201699_qt_ data-ipsquote-contentid_eq__qt_35131_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516189003_qt_ data-ipsquote-userid_eq__qt_29328_qt_ data-ipsquote-username_eq__qt_Amarth2Estel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Amarth2Estel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi heyzxz !_lt_br /_gt__lt_br /_gt_\n\t\t\tThe type of engine._gl is WebGLRenderingContext._lt_br /_gt_\n\t\t\tYou can use canvas.getContext(_t_webgl_t_) to access it._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//developer.mozilla.org/fr/docs/Web/API/WebGLRenderingContext_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/fr/docs/Web/API/WebGLRenderingContext_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you Amarth2Estel _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYe it_t_s a feasible way for some cases_co_ but may not be my choice_co_ because firstly I have to do some manually check like _t_canvas.getContext(_qt_webgl2_qt_) || canvas.getContext(_qt_experimental-webgl2_qt_) || canvas.getContext(_qt_webgl_qt_) || getContext(_qt_experimental-webgl_qt_) ..._t__co_ which is a little bit cumbersome . Secondly_co_  I_t_m  making custom materials_co_ which means in my case_co_ the _t_canvas_t_ should be unknowable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLater Edit_dd_ the canvas is knowable_co_ there is a public _t_engine.getRenderingCanvas()_t_ _co_ so ignore my _t_secondly_t_ above _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Amarth2Estel","Date":"2018-01-17T15:18:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh_co_ sorry_co_ you are completly right !_lt_br /_gt__lt_br /_gt_\n\tPerhaps you may use engine.webGLVersion to reduce the number of context keys ?_lt_br /_gt_\n\tStill not perfect...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-17T16:13:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello it is hidden and not accessible because the engine is doing a LOT of caching and optimizations in the background\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I deeply encourage you to go through engine APIs instead of reaching the gl context directly\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"heyzxz","Date":"2018-01-17T18:02:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201731_qt_ data-ipsquote-contentid_eq__qt_35131_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516205633_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello it is hidden and not accessible because the engine is doing a LOT of caching and optimizations in the background\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSo I deeply encourage you to go through engine APIs instead of reaching the gl context directly\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your reply _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_. But please let me explain why I need engine._gl instead of using engine API.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ in my project_co_ I want to do some preprocessing for some textrues. These textures are HDR and cubemap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo make it success_co_ I need_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Create renderTargetCubeTexture( to draw the preprocessed results onto) with correct formats_co_ currently the builtin _t_engine.createRenderTargetCubeTexture_t_ has hard coded the texture forms/type to _t_RGBA _co_ RGBA _co_ UNSIGNED_BYTE_t_ (see image below)_co_ but I may need _t_RGBA32F + RGBA + FLOAT _t_ to match the HDR outputs_sm_ (Please let me know if there is another api can do this )_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16657_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a5f87274af93_ScreenShot2018-01-18at1_24_33AM.png.805b819d3f3665d261ade60c1841a3f8.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a5f872769ae1_ScreenShot2018-01-18at1_24_33AM.thumb.png.23a022a776daff1b2ec3ce6e299f98a6.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16657_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a5f872769ae1_ScreenShot2018-01-18at1_24_33AM.thumb.png.23a022a776daff1b2ec3ce6e299f98a6.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Another problem is I need to  bind framebuffer texture with different mipmap levels. Currently all the _t_gl.framebufferTexture2D(...)_t_ calls in the engine has hard coded the last _t_level_t_ parameter to 0_co_ that_t_s why I want the _t_gl_t_ object and call this function manually with different _t_level_t_ values.  (I know for webgl1.0 the _t_level_t_ must be 0_co_ but I tried for webgl2.0_co_ nonzero levels do supported. And I can take care about the browser compatibilities myself).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell you may guessed what kind of preprocessing things I_t_m doing now_co_ and yes_co_ it_t_s kind of things that IBLBaker can do_dd_ convert a single hdr texture_co_ to irradiance map + radiance(specular) map_co_ and some kind of _t_integration_t_ on the radiance map for better roughness look_co_ all in realtime. Why I need to do this_dd_ 1.  Because _qt_I_t_m  red-blooded and have too much time!_qt_... kidding_co_ because I_t_m on a MAC_co_ no IBLBaker support_sm_ 2. Filesize is a big deal in my project_co_ I need to keep things small. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny way_co_ Currently I_t_ll follow the way which Amarth2Estel mentioned and move forward.  Once there is a better way found(or some changes bjs made)_co_ I_t_ll get back and fix things up. Thank you guys!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"heyzxz","Date":"2018-01-17T21:55:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGod I realized that there is a _t_onContextRestored_t_ handling... Things become more difficult now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I do have to preprocess textures offline...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-17T22:55:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1. Could be fixed easily but exposing a property where we can define the formats\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. This one is tougher but perhaps we could think of an API entry point as well _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI love people with free time and I_t_m jealous now!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"heyzxz","Date":"2018-01-18T06:04:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201785_qt_ data-ipsquote-contentid_eq__qt_35131_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516229734_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t1. Could be fixed easily but exposing a property where we can define the formats\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t2. This one is tougher but perhaps we could think of an API entry point as well _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI love people with free time and I_t_m jealous now!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you Deltakosh_co_  and yes it_t_ll be great if you can make these changes in the future updates. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut as I mentioned above_co_ things gonna be more difficult when it comes to thinking about the onContextRestored operation for the (real-time) preprocessed textures. For now_co_ just hacking _t_engine._gl_t_ isn_t_t enough for me_co_ something inside the InternalTexture._rebuild still needs to be hack(otherwise they can_t_t be restored correctly if context lost/restored really happens )... which is too hacky and terrible I think...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ Finally I_t_ll turn to think about making some kind of offline preprocess tools to fit my requirements instead of hacking bjs too much.  And I_t_ll mark this post as solved as I got enough informations I think. Thank you!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-18T21:39:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmy pleasure!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease feel free to propose a PR where we can discuss how to implement these options for you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]