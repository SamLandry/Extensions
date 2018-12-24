[{"Owner":"jacquesr","Date":"2018-03-05T14:09:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplease forgive me_co_ I was not sure if reporting this as a bug is really the best approach or if it should rather be an open discussion.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom what I can see I expect that scene.useRightHandedSystem is just scaling everything as _qt_x *_eq_-1_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis makes the feature rather impractical when text (on textures_co_ basically) is involved in the scene. I was hoping so much for this setting to address an issue we have where in our ecosystem_co_ babylonjs is the only component with a left handed coordinate system and requires offset translations for everything we draw...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI may also have textures that show logos_co_ which would then also be inverted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo my question is this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this the desired behavior of the feature?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground (from someone else_co_ just found it and flipped the coordinate system to make my point)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23120_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#120_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-05T15:59:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRight handed system is not only about scaling the x axis. it is a lot more than that. Otherwise all frameworks would simply support it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tno_co_ it is not the desirable behavior. If yous meshes are well prepared_co_ it shouldn_t_t happen. If you want to reproduce a right-handed playground and show that it works/doesn_t_t work_co_ it would be great.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jacquesr","Date":"2018-03-06T10:15:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Raanan_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust see those examples_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tleft handed\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23201_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#201_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tright handed\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23201_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#200_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-07T13:10:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you use the right-hand system you also need to take into account that z inverts (again_co_ among other things). So_co_ your demo should be this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23202_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#202_lt_/a_gt_ (left)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23203_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#203_lt_/a_gt_ (right)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it make sense?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]