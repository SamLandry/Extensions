[{"Owner":"Cacuser","Date":"2016-03-31T18:05:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to setup and run the Sponza demo on my local system. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen the scenes don_t_t seem to be loading. I have downloaded the entire samples-master_dd_ including  t_lt_span style_eq__qt_font-size_dd_10.5pt_sm_font-family_dd_Helvetica_co_ sans-serif_sm__qt__gt_he scene content from here_dd_ _lt_/span_gt_ _lt_span style_eq__qt_font-size_dd_10.5pt_sm_font-family_dd_Helvetica_co_ sans-serif_sm__qt__gt__lt_a href_eq__qt_https_dd_//u89128.ct.sendgrid.net/wf/click?upn_eq_CMN0GizhVspsgwZMqEa4Bzsz-2F4ueGruCPH1tmSqm6422tY-2B15BkKcL2-2BJCtqxCfe2-2BmelMiPPjP6x1MLC7Aa5k2Ohx7oaQQCUyq-2BEj84Qvc-3D_LSMH9pmwJtI5MmLX8ttk0yHS2j7EYaq6nrVcQ5uc2PzozFEUQAJFCyfGW6BM-2BuhKEs9Z-2F2ldy4A5NB4Lyd5mXSNWeL-2F2NmzF-2BXTxyeWLSIwaOZoc1hZREi28gD455cqPaKRuFx3z0SNREieHjMBPm-2B6sFQv8VS5mxspQLyvUgjHuCtPutGSozIYmWFdfAmRq04-2Fv7PY7biLydbVeAXVA7Q-3D-3D_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples/tree/master/Scenes/Sponza_lt_/a_gt_ and the code of the demo from here_dd_ _lt_a href_eq__qt_https_dd_//u89128.ct.sendgrid.net/wf/click?upn_eq_CMN0GizhVspsgwZMqEa4Bzsz-2F4ueGruCPH1tmSqm6422tY-2B15BkKcL2-2BJCtqxCfe2-2BmelMiPPjP6x1MLC7Aa5k2Ohx7oaQQCUyq-2BEj84Qvc-3D_LSMH9pmwJtI5MmLX8ttk0yHS2j7EYaq6nrVcQ5uc2PzozFEUQAJFCyfGW6BM-2BuhKWil0U88rrDrmu-2F-2FzGq5aLRWNzNULP6-2B3GDsENkgiiLXmkmbAXnOp8AAhIVQppS-2B1cCHkk-2Bn-2F8yU7e7R9sDo5mtneY9oL0wzZPdIMDhSqYJdFOoUMao3rU0RDlTbPGmpk3Y3yptn-2FioQQ7cM8sh-2BIKg-3D-3D_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples/tree/master/Scenes/Sponza_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t I can see that Sponza.babylon is being downloaded. (from localhost/samplesmaster/Scenes/Sponza/Sponza.babylon)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe console displays this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBJS - [15_dd_56_dd_59]_dd_ Babylon.js engine (v2.3.0-alpha) launched_lt_br /_gt_\n\tbabylon.js_dd_3 GET _lt_a href_eq__qt_http_dd_//localhost/samplesmaster/Scenes/Sponza/firePart1_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost/samplesmaster/Scenes/Sponza/firePart1_lt_/a_gt_ 404 (Not Found)h @ babylon.js_dd_3r.LoadFile @ babylon.js_dd_3t @ babylon.js_dd_22t.Parse @ babylon.js_dd_23e.SceneLoader.RegisterPlugin.load @ babylon.js_dd_13u @ babylon.js_dd_13e.onreadystatechange @ babylon.js_dd_3_lt_br /_gt_\n\tbabylon.js_dd_3 Uncaught Error_dd_ Error status_dd_ 404 - Unable to load ../../Scenes/Sponza/firePart1e.onreadystatechange @ babylon.js_dd_3_lt_br /_gt_\n\tbabylon.js_dd_3 GET _lt_a href_eq__qt_http_dd_//localhost/samplesmaster/Scenes/Sponza/firePart2_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost/samplesmaster/Scenes/Sponza/firePart2_lt_/a_gt_ 404 (Not Found)h @ babylon.js_dd_3r.LoadFile @ babylon.js_dd_3t @ babylon.js_dd_22t.Parse @ babylon.js_dd_23e.SceneLoader.RegisterPlugin.load @ babylon.js_dd_13u @ babylon.js_dd_13e.onreadystatechange @ babylon.js_dd_3_lt_br /_gt_\n\tbabylon.js_dd_3 GET _lt_a href_eq__qt_http_dd_//localhost/samplesmaster/Scenes/Sponza/firePart3_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost/samplesmaster/Scenes/Sponza/firePart3_lt_/a_gt_ 404 (Not Found)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using  a WAMP Apache (v2.2.1)  server I added the following line to the .htaccess file\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAddType application/babylon .babylon_lt_br /_gt_\n\tAddType application/fx .fx_lt_br /_gt_\n\tAddType application/babylonmeshdata .babylonmeshdata\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould I be doing something else or adding some other settings to make this work?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance for your help!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-04-09T00:00:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19556-cacuser/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19556_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19556-cacuser/_qt_ rel_eq__qt__qt__gt_@Cacuser_lt_/a_gt__co_ sorry that you have not gotten any replies.  Have you made any progress on your own? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-04-09T01:27:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHave you used this wamp server before?  Sometimes windows blocks port 80.  If you aren_t_t able to load other pages using the server_co_ I_t_d try configuring it to use another port like 8080.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"OMAR","Date":"2016-04-09T17:13:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI prefer _lt_a href_eq__qt_https_dd_//www.apachefriends.org/tr/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_xampp_lt_/a_gt_. You can have much more control using xampp than wamp I guess.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-09T18:19:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis seems like a parse error. Those files don_t_t exist_co_ and are never referenced by any of the files in the repository.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry using the 2.4 preview release and see if it helps. If you can debug a bit further or share a link where we can check this_co_ it would be wonderful.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Cacuser","Date":"2016-04-11T17:38:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for all your replies and suggestions - I_t_ll try some more things using your pointers. Hopefully I_t_ll be bale to get it to work!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Cacuser","Date":"2016-04-11T18:37:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tUpdate to 2.4 Preview release fixes the issue! But now there is another issue - the demo plays but does not fill the whole screen. The credits part seems to fill the whole screen_co_ while the actual scenes in the demo are in the upper left hand side of the screen. Please see attached screen shot. Will dig in to see what_t_s up - but any ideas on why this is happening are welcome!\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/sponza_1.PNG.46343a0d809eaba852de24cabd64ffcc.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7260_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/sponza_1.thumb.PNG.faab9e1b9193f92989e093583752cc6e.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_sponza_1.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JacobSobolev","Date":"2017-07-12T15:17:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19556-cacuser/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19556_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19556-cacuser/_qt_ rel_eq__qt__qt__gt_@Cacuser_lt_/a_gt_ can you please share the files? i having trouble running this on my local xampp server\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]