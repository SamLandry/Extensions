[{"Owner":"Butterwell","Date":"2015-11-29T15:12:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When I run this code locally_co_ it_t_s fine_co_ the generated spheres _qt_stay put_qt_. On the playground_co_ the generated spheres move with the target (which is the parent of the camera)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RZ2XP%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RZ2XP#4_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Press _qt_C_qt_ to generate spheres. Use arrow keys to change movement direction._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I were to guess_co_ this is a difference in what happens with this code_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_var local_position _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_lt_/p_gt__lt_div_gt_local_position.z +_eq_ 40_lt_/div_gt__lt_div_gt_        _lt_/div_gt__lt_div_gt_// Local to World Transformation _lt_/div_gt__lt_div_gt_var to_world_transform _eq_ target.getWorldMatrix()_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_var place_at _eq_ BABYLON.Vector3.TransformCoordinates(local_position_co_ to_world_transform)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(As a side note_co_ how does one get the BABYLON version string?)_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-29T16:50:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello and welcome_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m sorry but I do not get the problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ can you elaborate a bit more? I see a red box moving to me and static spheres for now._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One note_dd_ the playground already provides an engine and a renderloop. So I cleanup a bit your playground for further investigations_dd__lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_alert(BABYLON.Engine.Version)_sm__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For version display_dd_ _lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_alert(BABYLON.Engine.Version)_sm__lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Butterwell","Date":"2015-11-29T19:52:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you_co_ glad to be here._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sure. The cube is static at 0_co_ 0_co_ 0 global. The spheres _qt_should be_qt_ static_co_ I think. When served from my local machine (and when running from file_dd_//) the spheres are static. The camera is moving in conjunction with it_t_s parent_co_ _qt_target_qt_. The sphere appears static because it_t_s moving at the same clip as the target on the playground._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You_t_ll if you turn a bit to the left or right (arrow keys) and continue to generate spheres © you_t_ll notice that each new sphere is generated a bit further away. (Again_co_ on my local machine_co_ they get generated right in front of the camera)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My code might not be best practice for adding an object right in front a moving target/camera_co_ and any pointers about how to do that another way are appreciated._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(I thought it might be a version difference_co_ but both the playground and locally I_t_m running v2.3.0-alpha)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Butterwell","Date":"2015-11-29T20:00:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Notice_co_ also_co_ that the rendering position of the spheres (all uniform size) seems to be different from the camera clipping (terminology?) position of the spheres_dd_ they get no bigger yet disappear from view after a while._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Butterwell","Date":"2015-11-29T20:44:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here_t_s a version with no human interaction needed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RZ2XP%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RZ2XP#6_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Butterwell","Date":"2015-11-29T21:16:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And move everything into createScene_co_ and..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Tada!  It works._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RZ2XP%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RZ2XP#7_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Compare #6 and #7_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The essential difference is that everything is in createScene. Gotta love scoping. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-30T01:16:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_lol ! Me too _sm_D_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]