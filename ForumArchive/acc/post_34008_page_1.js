[{"Owner":"nodejs","Date":"2017-11-14T20:54:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ i am again...\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have a realy noob question but cant find an answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince i playing with this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#102TBD%2356_qt_ rel_eq__qt_external nofollow_qt__gt_Playground_lt_/a_gt_ i try to figure out how i can get the position of the car (mesh _eq_ carBody ?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIm not successful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 42 - 44\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.registerBeforeRender(function(){\n        console.log(_qt_Poisition_qt__co_ carBody.position)_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe only thing that changes is when i turning the steering wheel._lt_br /_gt_\n\tNothing about the position on the ground...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tought the carBody _qt_merge_qt_ all meshes into one and move them around with them._lt_br /_gt_\n\tSo that the positions property on child meshes a relative to the parent mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI dont get it...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-11-14T21:10:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29151-nodejs/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29151_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29151-nodejs/_qt_ rel_eq__qt__qt__gt_@nodejs_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tThat is because the carBody is parented to the _qt_pivot_qt_ mesh _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\tSee line 101\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#102TBD%2357_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#102TBD#57_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nodejs","Date":"2017-11-14T21:16:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYoure right buddy_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut i tryed this befor and nothing has changed. Only when i turn the steering wheel. This is the axis of rotation if i undertsand it correct.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere only move when my stering is 0_co_ but i need the position of the centre from the car. at any time\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-14T22:35:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\thello you can call mesh.getAbsolutePosition() to get what you need\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]