[{"Owner":"d13","Date":"2017-11-24T13:00:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Everyone!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to figure out how to do the following_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Tilt a sphere about 20 degrees on it_t_s z axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Then spin the sphere around its tilted axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code I_t_ve been using up till looks something like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I create the mesh_co_ I set up its z rotation like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotation.z _eq_ tiltValue * 180 / Math.PI_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis does give me the axis that I need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I_t_ve been trying to spin the sphere around that tilted axis in the game loop_co_ like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotation.y -_eq_ rotationValue_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut_co_ this causes the mesh to wobble around the y and z a axis instead of spinning on the tilted y axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat seems to make sense_co_ but I don_t_t know how to get the effect I need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone help?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried some of the code from this older thread\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed9095072427_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/7104-rotate-a-mesh-about-a-given-axis/?do_eq_embed_qt_ style_eq__qt_height_dd_205px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSpecifically this bit_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotate(BABYLON.Axis.z_co_ 1_co_ BABYLON.Space.LOCAL)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t... but this throws an error_dd_ TypeError_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tt is undefined babylon.js_dd_7_dd_6425\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if I_t_m on the right track or not_co_ but any help will be much appreciated! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-24T13:31:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi d13.  I used about the same method as you... but it worked.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#012I9K%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#012I9K#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*shrug*  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  My _qt_local_qt_ isn_t_t all-caps_co_ just the first letter.  Not sure if that is the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Update_lt_/strong_gt__dd_  Oh_co_ when I change my .Z to .z_co_ I get the same error as you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#012I9K%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#012I9K#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI bet your _qt_z_qt_ should be capitalized.  weird.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-11-24T13:59:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you use Quaternions_co_ you can multiply rotations._lt_br /_gt__lt_br /_gt_\n\tFeel free to copy from my code_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.bitofgold.com/solarsystem/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.bitofgold.com/solarsystem/_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tLike this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Setup_dd_\nmesh.baseRotationQuaternion _eq_ BABYLON.Quaternion.RotationYawPitchRoll(0.0_co_ 0.0_co_ 20.0 * Math.PI / 180_co_ 0.0))_sm_\nmesh.rotationQuaternion _eq_ new BABYLON.Quaternion()_sm_\n\n\n...\nat every frame_dd_\n\nmesh.rotationQuaternion.copyFrom(mesh.baseRotationQuaternion)_sm_\nmesh.rotationQuaternion.multiplyInPlace(BABYLON.Quaternion.RotationYawPitchRoll(alpha_co_ 0.0_co_ 0.0))_sm_\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2017-11-24T13:59:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAwesomeness!_lt_br /_gt_\n\tThank you Mr Wingnut_co_ Sir_co_ it works beautifully _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]