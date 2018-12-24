[{"Owner":"Cytexx","Date":"2018-07-10T15:38:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey fellow Babylonians_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti ran into a problem regarding the performance of big dynamic textures (had it on 8000x8000_co_ but already reduced that). I needed to tile the texture with this process._lt_br /_gt_\n\tIs there a more performant way of tiling a dynamic texture? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason why i even use a dynamic texture is because i want a smooth blend between 2 textures. Maybe there is even a more performant way of accomplishing this without using a dynamic texture?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreets_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCytexx\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-10T17:58:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe will need more data to help _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Can you show us a demo on the Playground?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Cytexx","Date":"2018-07-11T08:06:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tnot sure how exactly i can use external image sources in the playground but here is the playground that should run once the images are loaded correctly_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#ICMA68_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#ICMA68_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe out-commented parts are the parts if the size of the dynamic-textures canvas is changed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(the performance is not bad on a normal desktop computer_co_ but our application should also run mobile)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-11T17:18:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello you can save pictures to imgur for instance and then reference them directly\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Cytexx","Date":"2018-07-12T08:28:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried to load images from imgur_co_ but its still not loading. Even tried to load images from the babylon site and they don_t_t load. _lt_br /_gt_\n\t_lt_br /_gt_\n\tMaybe just a short answer regarding the question_dd_ What is the best approach to fade from one texture to another?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-12T14:00:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ playing with the alpha channel seem logically right! You can add some blend animation using_co_ pretty cool babylonjs_co_ animation _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/animations_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/animations_lt_/a_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#ICMA68%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#ICMA68#1_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tTheir are really tones of playgrounds ..._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/playground/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/playground/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-12T15:55:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t212501 precisely _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]