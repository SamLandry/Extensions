[{"Owner":"aWeirdo","Date":"2017-07-31T14:50:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi_co__lt_br /_gt_\n\tI_t_m not sure where the issue originates_co__lt_br /_gt_\n\tbut i_t_m seeing some odd stripes_co_ like the sprite uv_t_s are getting cropped._lt_br /_gt__lt_br /_gt_\n\t3.0 (working normal)_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/indexstable#1ALQPZ%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/indexstable#1ALQPZ#4_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t3.1 (cropped edges?)_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#1ALQPZ%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#1ALQPZ#4_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-31T17:14:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-08-01T19:00:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ like nothing was changed in the SPS code for ages (except a math bug fix for the parented cameras)_co_ this is weird... unless it_t_s rather  related to some change in the _lt_em_gt_StandardMaterial_lt_/em_gt_ or the way _lt_em_gt_updateVerticesData()_lt_/em_gt_ deals with the UVs\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t you have a simpler example isolating the bug ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-08-01T19:08:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLet_t_s isolate (what you should also do to focus on a bug) _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WCDZS%2356_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WCDZS#56_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell.. it seems there_t_s a problem_co_ not with the SPS_co_ but with the texture you want to create from your image ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-01T20:08:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk I know why _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\twith 3.1 we added a new features when running with webgl2_dd_ textures are not more forced to be power of 2. The image you are using for instance is a 750x250\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo here is a way to force the engine to still require pow2 textures_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WCDZS%2358_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WCDZS#58_lt_/a_gt_ (see line #27)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-08-02T03:59:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tso (line 141)_co_ this becomes now this SPS _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#1ALQPZ%2327_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#1ALQPZ#27_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]