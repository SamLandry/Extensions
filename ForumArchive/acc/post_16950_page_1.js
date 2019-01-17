[{"Owner":"bws","Date":"2015-09-05T07:26:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hi_co__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Just wanting some guidance here...  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ alt_eq__qt__dd_huh_dd__qt__gt_ I_t_m new to 3D Web development and Babylon  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I_t_m wanting to create a _t_room_t_ with objects in it with the arc camera. The room is shaped as a simple 3D rectangle (as you would expect a room to be)._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_When the user looks at the room from a short distance_co_ I_t_m wanting the walls to be transparent (so the user can see inside the room)_co_ however the walls at the very back to be visible._lt_/div_gt__lt_br_gt__lt_div_gt_When the camera spins around the room (180 degrees for example)_co_ the same thing is to apply. Similarly with the floor and the roof by moving up and down._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_How can I achieve this?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I was thinking of creating the 6 _t_planes_t_ manually_co_ and then using some maths to set the transparency of each plane individually depending on where the camera is positioned (is this even possible?)._lt_/div_gt__lt_br_gt__lt_div_gt_Or_co_ is there a type of Mesh best suited to do this? Do i need to turn back culling off?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I wasn_t_t able to find anything on this hence my question. Any help would be greatly appreciated...._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thanks_co__lt_/div_gt__lt_br_gt__lt_div_gt_bws._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-05T13:28:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Flipping the normals on a Box_co_ and leaving backFaceCulling on should have the desired effect (but I wouldn_t_t know a function off the top of my head that does that in babylon js)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bws","Date":"2015-09-05T14:10:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh thanks! I only _lt_em_gt_just _lt_/em_gt_solved this myself by simply setting the _lt_strong_gt_sideOrientation _lt_/strong_gt_parameter to _lt_strong_gt_BABYLON.Mesh.BACKSIDE_lt_/strong_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In other words_co_ instead of_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var box _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ 10.0_co_ scene)_sm__lt_/pre_gt__lt_p_gt_you put_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var box _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ 10.0_co_ scene_co_ false_co_ BABYLON.Mesh.BACKSIDE )_sm__lt_/pre_gt__lt_p_gt_It was exactly what I was after._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank-you for your response Convergence._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]