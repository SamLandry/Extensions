[{"Owner":"Pycz","Date":"2018-07-31T22:52:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI converted one simple model in 3DMax 2018 to .babylon and .glb format using standart settings for babylon.js exporter. Then I tried to use it on my webpage_co_ but the same _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_exported _lt_/span_gt__lt_/span_gt_ .babylon and .glb_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_ models looked different_co_ although they were represented by the same code._lt_/span_gt__lt_/span_gt_ Babylon format looks predictable_co_ as I imagined it_co_ but the same glb model looks too dark for some reason_co_ even light in scene don_t_t make any difference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_Babylon_dd__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#A2W7U6_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#A2W7U6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(model _lt_a href_eq__qt_https_dd_//pycz.github.io/test.babylon_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pycz.github.io/test.babylon _lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGLB_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#PF7MH0_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#PF7MH0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(model _lt_a href_eq__qt_https_dd_//pycz.github.io/test.glb_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pycz.github.io/test.glb_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMAX_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(model _lt_a href_eq__qt_https_dd_//pycz.github.io/test.max_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pycz.github.io/test.max_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust don_t_t understand_co_ why glb looks different and what to do to make it looks like babylone one. Maybe it is obvious_co_ but I really don_t_t see it._lt_span class_eq__qt_ipsEmoji_qt__gt_😬_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/1345121523_Screenshot_2018-08-01BabylonjsPlayground(1).png.b70cc9aa7df683b550846c482535429c.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_19459_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/1345121523_Screenshot_2018-08-01BabylonjsPlayground(1).png.b70cc9aa7df683b550846c482535429c.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot_2018-08-01 Babylon js Playground(1).png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/1902188834_Screenshot_2018-08-01BabylonjsPlayground.png.a1e16fad14689fd7f953838342b82a52.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_19460_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/1902188834_Screenshot_2018-08-01BabylonjsPlayground.png.a1e16fad14689fd7f953838342b82a52.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot_2018-08-01 Babylon js Playground.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-01T15:37:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! this is because glTF uses a PBR material and this kind of material needs an environment texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust call scene.createDefaultEnvironment() after loading your gltf file\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pycz","Date":"2018-08-01T21:01:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you! After creating default environment it still looks not the same as .babylon format_co_ but now it looks like I have the direction for further investigations. I_t_ll report if I_t_ll make any progress.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-02T16:27:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt won_t_t look perfectly the same as the PBR is really dependent on your env map\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]