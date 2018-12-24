[{"Owner":"valepu","Date":"2016-06-26T17:51:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m having an issue where i_t_m using an ActionManager with these actions_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- On mouseover adds a decal_lt_br /_gt_\n\t- On mouseout removes a decal_lt_br /_gt_\n\t- On click does something else (console.log in the playground i linked below)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#26DEBS%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#26DEBS#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhile the decal is active it won_t_t let me click on the mesh all the time. On the playground if you click on the mesh sometimes it works_co_ sometimes it doesn_t_t (if it works try to move to another point). I suppose that_t_s because the Decal is a mesh itself so it won_t_t let me click on the original mesh below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there something that can be done (other than using scene.pick_co_ which seems to not be affected by this problem_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BAPRM%2375_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BAPRM#75_lt_/a_gt_ )?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-06-26T21:20:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello _lt_br /_gt_\n\tboth  examples works on my chrome browser_co_ maybe you just have to reset the cache  in your browser (from time to time)._lt_br /_gt_\n\t When i resize the window_co_- sometimes the console log freeze._lt_br /_gt__lt_br /_gt_\n\tI use the console window from babylon to pass msg like i++ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#26DEBS%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#26DEBS#4_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tGood Luck_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"valepu","Date":"2016-06-26T21:48:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSadly_co_ is not just that. I used it on 2 different browsers (chrome and mozilla) before writing this post_co_ and even the babylon console window gives me the same problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf it works try clicking on a different point of the ground in my example\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-06-26T22:30:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_br /_gt__lt_br /_gt_\n\ti think now_co_ its an logic error._lt_br /_gt__lt_br /_gt_\n\tI think you have to call update/dispose material the right way to get it to work correctly_lt_br /_gt__lt_br /_gt_\n\tunfortunately i have no idea how to do this _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tHere is the same example without using jquery_co_ or pickinginfo_co_ but if you figure it out_co_ it dont matter - i think._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#VNVOU%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#VNVOU#6_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tTell me if you got some news_lt_br /_gt__lt_br /_gt_\n\tBest\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"valepu","Date":"2016-06-27T08:24:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthe playground you linked brings me to an example that i think has nothing to do with my issue_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#VNVOU%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#VNVOU#6_lt_/a_gt_  I think you meant to link this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#26DEBS%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#26DEBS#5 _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut even in that playground it doesn_t_t work (you forgot to add clickAction) Mouseover and Mouseout work fine_co_ is the click that doesn_t_t work_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#26DEBS%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#26DEBS#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEven without using dispose at all i still have the same issue_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#26DEBS%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#26DEBS#6 _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyways i am not using jQuery_co_ the $ in $dispose is just a variable name that starts with $ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-27T16:17:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey you can just set your decal.isPickable _eq_ false \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"valepu","Date":"2016-06-27T18:19:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh it was that simple....thanks!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]