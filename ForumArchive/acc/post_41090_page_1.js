[{"Owner":"Eisha","Date":"2018-11-07T03:42:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am trying to reverse the direction of a sphere as soon as it touches the ground. I have tried every possibilities to try reverse the direction and I want it to bounce up and down starting from the ground to go upward and then coming back down. I am not understanding how to do it. Below is the code for that part. Please help me._lt_br /_gt_\n\tThank You \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var originalVelocity _eq_ -.005_sm__lt_br /_gt_\n\t            scene.registerAfterRender(function () { _lt_br /_gt_\n\t                sphere3.position.y _eq_ sphere3.position.y + originalVelocity_sm__lt_br /_gt_\n\t                if (sphere3.intersectsMesh(ground_co_ true)) { _lt_br /_gt_\n\t                    sphere3.material.diffuseColor _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm__lt_br /_gt_\n\t                _lt_br /_gt_\n\t                    sphere3.position.y _eq_ sphere3.position.y - 4*originalVelocity_sm_  //this line is not working_lt_br /_gt_\n\t                } _lt_br /_gt_\n\t            })_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-11-07T06:50:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33311-eisha/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33311_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33311-eisha/_qt_ rel_eq__qt__qt__gt_@Eisha_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twelcome to forum\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_p_gt_\n\t\t_lt_s_gt_try this_lt_/s_gt_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t_lt_s_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_bx.scaling.y _eq_ -_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt__lt_/s_gt_\n\t_lt_/p_gt_\n\n\t_lt_div_gt_\n\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6HZEL3_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#6HZEL3_lt_/a_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tmiss understand\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-11-07T08:26:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow about something like this?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var velocity _eq_ 0.005_sm_\nvar dir _eq_ -1.0_sm_\nscene.registerBeforeRender(function () { \n    sphere.position.y +_eq_ velocity * dir\n    \n    if (sphere.intersectsMesh(ground_co_ false)) {\n         console.log(_t_intersected_t_)_sm_\n         dir _eq_ 1.0_sm_\n    }\n\n    if (sphere.position.y &gt_sm_ 3) {\n        dir _eq_ -1.0_sm_\n    }\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Explanation_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSphere is moving in the direction of velocity * -1 (negative y direction is downwards).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen the sphere touches the ground_co_ the direction is flipped to the positive direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen the sphere reaches a height of y _eq_ 3_co_ it returns to the negative direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Going Further_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMore like gravity_dd_ Increase the velocity a little each step when traveling in the negative y direction (like accelerating downwards via gravity). Decrease the velocity while traveling in the positive y direction (like a ball reaching the top of an arc and then falling). No need to flip the direction manually at the top anymore_co_ this fake gravity will have done it already.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMore like a rubber ball_dd_ if the ball_t_s scale is compressed in the y direction when it hits the ground_co_ it_t_ll look like a bouncy ball. There are other little details depending how bouncy/squishy one would like things to look.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Demo_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7D23I2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7D23I2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eisha","Date":"2018-11-07T17:38:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234000_qt_ data-ipsquote-contentid_eq__qt_41090_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1541573445_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33311-eisha/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33311_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33311-eisha/_qt_ rel_eq__qt__qt__gt_@Eisha_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\twelcome to forum\n\t\t_lt_/p_gt_\n\n\t\t_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_p_gt_\n\t\t\t\t_lt_s_gt_try this_lt_/s_gt_\n\t\t\t_lt_/p_gt_\n\n\t\t\t_lt_p_gt_\n\t\t\t\t_lt_s_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_bx.scaling.y _eq_ -_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt__lt_/s_gt_\n\t\t\t_lt_/p_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6HZEL3_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#6HZEL3_lt_/a_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\tmiss understand\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt__lt_br /_gt_\n\tThank You _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eisha","Date":"2018-11-07T17:42:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234007_qt_ data-ipsquote-contentid_eq__qt_41090_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1541579165_qt_ data-ipsquote-userid_eq__qt_12667_qt_ data-ipsquote-username_eq__qt_timetocode_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ timetocode said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHow about something like this?\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt_var_lt_/span_gt_ velocity _eq_ _lt_span_gt_0.005_lt_/span_gt__sm_\n_lt_span_gt_var_lt_/span_gt_ dir _eq_ -_lt_span_gt_1.0_lt_/span_gt__sm_\nscene.registerBeforeRender(_lt_span_gt__lt_span_gt_function_lt_/span_gt_ _lt_span_gt_()_lt_/span_gt_ {_lt_/span_gt_ \n    sphere.position.y +_eq_ velocity * dir\n    \n    _lt_span_gt_if_lt_/span_gt_ (sphere.intersectsMesh(ground_co_ _lt_span_gt_false_lt_/span_gt_)) {\n         console.log(_lt_span_gt__t_intersected_t__lt_/span_gt_)_sm_\n         dir _eq_ _lt_span_gt_1.0_lt_/span_gt__sm_\n    }\n\n    _lt_span_gt_if_lt_/span_gt_ (sphere.position.y &gt_sm_ _lt_span_gt_3_lt_/span_gt_) {\n        dir _eq_ -_lt_span_gt_1.0_lt_/span_gt__sm_\n    }\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_Explanation_dd__lt_/strong_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSphere is moving in the direction of velocity * -1 (negative y direction is downwards).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhen the sphere touches the ground_co_ the direction is flipped to the positive direction.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhen the sphere reaches a height of y _eq_ 3_co_ it returns to the negative direction.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_Going Further_dd__lt_/strong_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tMore like gravity_dd_ Increase the velocity a little each step when traveling in the negative y direction (like accelerating downwards via gravity). Decrease the velocity while traveling in the positive y direction (like a ball reaching the top of an arc and then falling). No need to flip the direction manually at the top anymore_co_ this fake gravity will have done it already.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tMore like a rubber ball_dd_ if the ball_t_s scale is compressed in the y direction when it hits the ground_co_ it_t_ll look like a bouncy ball. There are other little details depending how bouncy/squishy one would like things to look.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_Demo_dd__lt_/strong_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7D23I2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7D23I2_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12667-timetocode/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12667_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12667-timetocode/_qt_ rel_eq__qt__qt__gt_@timetocode_lt_/a_gt__lt_br /_gt_\n\tThank you so much for your help its a great explanation _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_ _lt_br /_gt_\n\tVery well explained_lt_br /_gt_\n\tThank You\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]