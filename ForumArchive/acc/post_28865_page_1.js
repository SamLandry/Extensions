[{"Owner":"Dad72","Date":"2017-03-06T18:42:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it normal that after serializing is the double weight of a model not serialized.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a model with Skeleton and animation that 16 MB_co_ but once serialize_co_ the file is now 38 MB Why is not it the same weight. is there information duplicate add?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the difference is huge. it has 22 MB add to the original file 16MB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-06T18:43:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is kind of expected as JSON serialization adds a lot of data when serializing numbers (instead of serializing _qt_0_qt__co_ it will serialize _qt_0.0000000_qt_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-06T18:46:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHow can we remove it to reduce the final weight of the object to serialize?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-06T18:49:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThis is a pure JS question actually. And I_t_m not sure we can control how JS serializes data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps something like that_dd_ _lt_a href_eq__qt_https_dd_//github.com/tcorral/JSONC_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/tcorral/JSONC_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-06T19:14:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYet when I look in the file_co_ the numbers have no 0.0000._co_ I see 0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy cons it is true that each number has a float number rise after the comma compare the original file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4 decimal in the original file and 16 after the decimal point in the serialized file. (4 * 4)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is no possibility to reduce the number of decimal 4 or 6 at the time of serialization in Babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-03-06T20:11:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/9339870/how-to-reduce-numbers-significance-in-jsons-stringify_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//stackoverflow.com/questions/9339870/how-to-reduce-numbers-significance-in-jsons-stringify_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-06T20:54:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Adam.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var str_serialized _eq_ JSON.stringify(serialization_co_ function(key_co_ val) { return val.toFixed ? Number(val.toFixed(4)) _dd_ val_sm_})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-06T21:15:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tArf_co_ in fact if I made it_co_ the model not load.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-06T21:27:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWith PHP if I had done this instead of recording in gross_co_ decreases the file is 26 MB rather that 38 MB I still fails to get closer to the initial weight of the file (before serialization 16 MB). There I  +10MB.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut the file babylon load after _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_$json _eq_ json_decode($value_co_ true)_sm_\n\n$json[_qt_meshes_qt_][0][_qt_scaling_qt_][0] _eq_ (float)$_POST[_t_scale_t_]_sm_\n$json[_qt_meshes_qt_][0][_qt_scaling_qt_][1] _eq_ (float)$_POST[_t_scale_t_]_sm_\n$json[_qt_meshes_qt_][0][_qt_scaling_qt_][2] _eq_ (float)$_POST[_t_scale_t_]_sm_\n\n$save _eq_ json_encode($json)_sm_\n\n@chmod($root_co_ 0777)_sm_\nfile_put_contents($root_co_ $save)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]