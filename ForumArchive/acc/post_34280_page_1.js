[{"Owner":"Oclahoma","Date":"2017-11-29T09:08:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood morning dear GameDevs_co__lt_br /_gt_\n\tI_t_m trying to make a mesh with StandardMaterial and bumpTexture look metallic_co_ but with moderate success. It should preferably not reflect like glass or chrome_co_ but rather reflect with a surface finish such as brushed or sandblasted aluminium. Does anyone have an idea how to realize something like this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-29T15:07:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Oclahoma... welcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOur PBR material has some interesting _qt_knobs_qt_ to play-with.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2FDQT5%2326_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2FDQT5#26_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat .metallicRoughnessTexture is something fun_co_ for sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did a Google IMAGE search... for _lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_metal texture wikimedia_lt_/span_gt__lt_span_gt_ (wikimedia textures/images are always CORs-clear so they can be used in our playgrounds)._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_It appears that the metallicRoughnessTexture is COLOR-reactive.  In other words... the amount of _qt_roughness_qt_ is dependent upon the colors of the image._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Anyway_co_ it_t_s something to play-with until someone wiser comes-along.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Oclahoma","Date":"2017-11-29T15:48:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt_Hey Wingnut_co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_thanks a lot for your reply. _lt_/span_gt_I_t_m gonna check the playground and play around with it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_width_dd_25px_sm_height_dd_10px_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-29T17:02:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHave a nice read_dd_ _lt_a href_eq__qt_https_dd_//www.marmoset.co/posts/pbr-texture-conversion/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.marmoset.co/posts/pbr-texture-conversion/_lt_/a_gt_ this will help you catch what is behind the knobs.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-29T17:43:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2FDQT5%2328_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2FDQT5#28_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had to make another.  I dumped the pbr material to console_co_ and clicked on _qt_object_qt_ to launch in-browser object inspector.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOMG.  There are a CRAPLOAD of knobs on that pbr texture thing!  HOURS of play!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I went twisting on a few of the fun knobs (properties)... and now I am using a 6-part cubemap texture for the environment texture. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think there may be a problem with the cubeMap mapping.  I see reflections of buildings on the ceiling_co_ and clouds on the floor.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThis whole PBR system looks like a LOT of FUN!  What a powerful monster!  Gruesome!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tUPDATE_dd_  Link updated to #28... I had a mis-named file in the cubemap array.  But still_co_ mapping is incorrect_co_ I think.  Side-wall images on ceiling_co_ sky image on side-wall_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother Update_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2FDQT5%2329_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2FDQT5#29_lt_/a_gt_  Apparently the ORDER of the URLs in the cubeMap array... is important.  Now it_t_s all fixed.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_The sky hasn_t_t really fallen_qt__co_ said The King.  _qt_It was only a pine cone_co_ Chicken-Lickin_t__qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _qt_But that pine cone is covered with fascinating occurrences of Fibonacci number sequences that_co_ if investigated_co_ maybe lead you to the secret of life._qt_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-29T18:11:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt works like with other cube textures_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2FDQT5%2331_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2FDQT5#31_lt_/a_gt_ _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-29T18:17:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t*nod*  Yeah_co_ as soon as I changed the order of the urls in the cubemap array... to match... _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/Textures/babylon.cubeTexture.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/Textures/babylon.cubeTexture.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...then it all straightened-up.  I didn_t_t expect url order to be an issue_co_ but it is.  *shrug*  Your way is nicer_co_ though.  Cleaner.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWere you instrumental in installing PBR for BJS_co_ Sebavan?  If so_co_ thanks... it_t_s very very cool.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]