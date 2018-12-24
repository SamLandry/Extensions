[{"Owner":"Hans","Date":"2017-01-26T12:32:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi @all again_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis there a way to change the gravity for certain space?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCase 01_dd_ I want for example that the player or other objects can fly to space. So if specific distance has been reached from the ground_co_ the gravity should decrease with rising distance_co_ until null.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCase 02_dd_ If the player or other objects goes into a hidden area/space/box_co_ the gravity for all objects in there is different to the world gravity (scene.gravity).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for ideas.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2017-01-26T16:01:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHmm.. that sounds fun. Maybe something like applying a force or impulse based on the y value of the object in the opposite direction of the gravity to nullify it_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#BEFOO%23133_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#BEFOO#133_lt_/a_gt_ I know_co_ doesn_t_t work that well yet_co_ but you get the idea. Not sure how exactly gravity is applied... would have to find that in the babylon code or just disable it and do your own gravity _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-01-26T18:09:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you using one of the physics plugins?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf yes_co_ I wonder if it wouldn_t_t be possible to simply change the gravity of the world object_co_ whenever the condition is met. This of course wouldn_t_t work for multiplayer.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2017-01-26T18:33:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah_co_ not sure what the current default physics plugin is cannon or oimo. Well_co_ if you have only one object that you want to apply gravity to_co_ then you can change the worlds gravity I guess... if you have something like..lets say a rocket that flys to space and half the way you detach the first primary thrusters... then the thrusters should fall back to the planet with the the gravity at that certain point but the rest of the rocket keeps going and reaches the lower outer space gravity... sooo..depends on how complex you want it I guess _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hans","Date":"2017-01-26T18:51:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI use cannon.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to make two rooms. In one there is the gravity for all objects -9_co_81 and in the second room and in the other one it is +9_co_81. Just an example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother example is a simulation_dd_ The player starts to fly from a planet (planet gravity) with a spaceship to space (no gravity). _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-01-26T19:56:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn that case you could always play with impulses_co_ although that might get a little complex.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder if you could create multiple worlds_co_ and whether or not it would destroy performance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var earthWorld _eq_ new CANNON.World()_sm_\n\nvar spaceWorld _eq_ new CANNON.World()_sm_\n\nearthWorld.gravity.set(0_co_-10_co_0)_sm_\n\nspaceWorld.gravity.set(0_co_10_co_0)_sm_\n\nvar body _eq_ new CANNON.Body(shapes_co_ sizes and shit)_sm_\n\nearthWorld.add(body)_sm_\n\n(renderloop{\n\nearthWorld.step(60/1)_sm_\n\nspaceWorld.step(60/1)_sm_\n\nif(calculateDistance(body)){\n\nearthWorld.remove(body)_sm_\n\nspaceWorld.add(body)_sm_\n\n}_sm_\n\n)}_sm_\n\n\nfunction calculateDistance(cannonBody){\n\n//If distance from earth is bigger than x -&gt_sm_\n\nreturn true_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have No idea whether this would work_co_ though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame thing with rooms._lt_br /_gt__lt_br /_gt_\n\tEdit_dd_ Whoops. Don_t_t step it 60/1 _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hans","Date":"2017-02-18T22:21:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo I am back in this topic. Sorry for my delay.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI prepared one nice Demo_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#XMXU7_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#XMXU7_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can _lt_strong_gt_move the player with arrow_lt_/strong_gt_ keys AND you can _lt_strong_gt_deactivate/reactiveate the world gravity with key K_lt_/strong_gt_. _lt_em_gt_(The green space got a positive gravity  Y_dd_ _lt_strong_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_+_lt_/span_gt_ 2 * 9_co_81_lt_/strong_gt_. The red space got a negativ gravity Y_dd_ _lt_strong_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_-_lt_/span_gt_ 9.81_lt_/strong_gt_.)_lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis works like i want_co_ BUT _lt_strong_gt_the Problem is_lt_/strong_gt__dd_ If you deactivate the world gravity _lt_em_gt_(key k)_lt_/em_gt_ and move with the player in the red box (with gravity y_dd_-9_co_81)_co_ the player got no friction and slips like ice. The player sould walk normal in the red box with world gravity off.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-02-18T23:05:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25374-hans/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25374_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25374-hans/_qt_ rel_eq__qt__qt__gt_@Hans_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not certain why you might want to change the Workd Scale gravity dynamically_co_ but this is certainly something you can accomplish_sm_ and I find this action more controlable using Oimo instead of Cannon - but this is based upon many experiments taking all settings in each physics extension into consideration. But if I was personally attempting to alter the affect of gravity using either Oimo or Cannon as the physics engine_co_ I would change the mass of my objects using a variable to pass to each meshes_t_ physics imposter_sm_ which would allow a single change in the variable to affect as many objects as required at the time. This also allows you to set the behavior of each mesh or group of meshes to behave very specificaly - as opposed to to achieving the desired behavior using a single global setting - which is far more difficult to achieve the desired result from the physics simulation in detail. So it is far more flexible and simpler to change the imposter_t_s mass over time and/or to make a single adjustment to each imposter_t_s mass - however_co_ make certain you utilize _lt_strong_gt_mesh.physicsImpostor.forceUpdate() _lt_/strong_gt_to apply the change in mass to each object_t_s physics imposter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are other methods you can apply_co_ such as _lt_strong_gt_scene.gravity _eq_ new BABYLON.Vector3(X_co_ Y_co_ Z)_sm_ _lt_/strong_gt_but I personally find that changing the mass for your physics imposters provide far more flexability and more specific control over the objects in your scene. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hans","Date":"2017-02-18T23:22:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ You are right. Changing mass is easy. I_t_ve already thought about that. _lt_strong_gt_Problems here are_lt_/strong_gt__dd_ It is not possible to set negative mass on physicsImposter. Also mass dont work for a gravity space like_dd_ (-10_co_0_co_0)_co_ respectly gravity in X- or Y-Axis direction.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-02-19T00:07:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25374-hans/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25374_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25374-hans/_qt_ rel_eq__qt__qt__gt_@Hans_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163923_qt_ data-ipsquote-contentid_eq__qt_28003_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487460168_qt_ data-ipsquote-userid_eq__qt_25374_qt_ data-ipsquote-username_eq__qt_Hans_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 minutes ago_co_ Hans said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou are right. Changing mass is easy. I_t_ve already thought about that. _lt_strong_gt_Problems here are_lt_/strong_gt__dd_ It is not possible to set negative mass on physicsImposter. Also mass dont work for a gravity space like_dd_ (-10_co_0_co_0)_co_ respectly gravity in X- or Y-Axis direction.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ this can become more complex than necessary - but you can orient your camera and or scene gravity to create the appearance of X or Z negative mass. So if yourphysics simulations are relatively uniform throught your scene and in time_co_ then you can often achieve the behaviors you require by setting _lt_strong_gt_scene.gravity _lt_/strong_gt_to create a negative mass for all objects - which can be changed conditionally in time as well. In addition_co_ you can set proceedural animation for each mesh in an array or for seperate arrays and conditions which will work in addition to any impulses you might be including in your simulation. A typical example is to create a condition which if you mesh is moving at a velocity less than your desired velocity in any specific vector_co_ then add a value to the object_t_s own _lt_strong_gt_mesh.position.z _lt_/strong_gt_or _lt_strong_gt_mesh.position.x _lt_/strong_gt_and this will translate your mesh in the direction of whatever vector you desire - and your impulses will still behave as expected simultaniously with an addition to the object_t_s own position independant of the impulse (subjectively). Many devs haven_t_t yet discovered that you can add values to a mesh_t_s own position to create movement for the mesh in addition to any physics impulses already in play on the mesh_t_s imposter - which allows you to either change direction (position) of movement_co_ or to set a speed limit on collisions - and many other possibilities for animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo there are many solutions to your what might be percieved s a problem_co_ but these can all be overcome. And I_t_ve learned from working on projects with _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ that it is better to set your own object_t_s movement_co_ velocity_co_ etc. - or change in position - and to avoid using impulses altogether in your physics simultations. However_co_ both of these methods to translate your mesh through world space are valid - seperately and together. It simply takes a little experimentation to create the desired movement for your specific scene or instance. However_co_ in my experience_co_ I now find far more control in avoiding the use of impulses_co_ and to conditionally set the change in position_co_ acceleration_co_ and velocity for any mesh in a physics simultation using my choice of physics engine_sm_ maintaining every other aspect of the physics simulation - as this allows me far more flexability in any simulation and scene. And I personally find cannon.js to be easier to use in these circumstances. However_co_ Oimo.js is great_co_ but a bit more complex to navigate in such conditions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-19T03:42:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25374-hans/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25374_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25374-hans/_qt_ rel_eq__qt__qt__gt_@Hans_lt_/a_gt__co_ two things_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. For per-body gravity_co_ I think you_t_re doing things the right way - just set a global gravity value_co_ and for any body that needs a different amount of gravity_co_ apply an additional force each tick. However_co_ you should probably just use _qt_addForce_qt__co_ rather than zeroing out or directly manipulating the values of the body_t_s _qt_force_qt_ property. This way the gravitational force will play nicely with any other forces occurring (e.g. the force you use to move the player around).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d suggest not changing the body_t_s mass to change its reaction to gravity_co_ since mass affects lots of other things in the simulation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. For your problem at hand_dd_ \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163914_qt_ data-ipsquote-contentid_eq__qt_28003_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487456474_qt_ data-ipsquote-userid_eq__qt_25374_qt_ data-ipsquote-username_eq__qt_Hans_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ Hans said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis works like i want_co_ BUT _lt_strong_gt_the Problem is_lt_/strong_gt__dd_ If you deactivate the world gravity _lt_em_gt_(key k)_lt_/em_gt_ and move with the player in the red box (with gravity y_dd_-9_co_81)_co_ the player got no friction and slips like ice. The player sould walk normal in the red box with world gravity off.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSimilarly to that other thread_co_ the behavior you_t_re seeing is physically correct - without gravity the body is floating freely_co_ and once he starts moving sideways there_t_s nothing to stop him. So the question to answer is_co_ what kind of non-physical behavior you want? You could stop the player by increasing his linearDamping_co_ but that would affect vertical motion as well so it may not be what you want. Another option would be_co_ when no movement key is pressed_co_ apply a movement force in a direction opposite to the player_t_s velocity. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich is best probably depends on what_t_s going on thematically in your game. E.g. if the player_t_s gravity is off because he_t_s floating in liquid_co_ then linearDamping would imply he_t_s slowing down because if the liquid_t_s viscosity. If he_t_s a space guy moving around in space_co_ then he probably moves himself with thruster rockets or something_co_ and by implication he probably stops himself by firing them in the opposite direction_co_ so it will make sense for the physics to simulate that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hans","Date":"2017-02-19T12:45:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163939_qt_ data-ipsquote-contentid_eq__qt_28003_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487475779_qt_ data-ipsquote-userid_eq__qt_12925_qt_ data-ipsquote-username_eq__qt_fenomas_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ fenomas said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSimilarly to that other thread_co_ the behavior you_t_re seeing is physically correct - without gravity the body is floating freely_co_ and once he starts moving sideways there_t_s nothing to stop him\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes this is right_co_ but if the player is in the read space_co_ there is a gravity and the friction have to stop the player as normal or? But of course the world gravity is off. There is still gravity in the read box as normal. Its like world gravity in the read box_co_ i thougth. Why i have to regulate the friction behavior by myself with linearDamping/counterforce? I want to understand this _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBtw. you suppose right_co_ my theme is outer space. And I want to simulate a ship with his own gravity and the player should stand like normal one the ship ground/platform_co_ no matter how the ship is moving or rotating in a world of gravity or without gravity. So i want to reuse the insights of our last topic too. This is my main goal this days. _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-19T13:35:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163967_qt_ data-ipsquote-contentid_eq__qt_28003_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487508344_qt_ data-ipsquote-userid_eq__qt_25374_qt_ data-ipsquote-username_eq__qt_Hans_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t14 minutes ago_co_ Hans said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYes this is right_co_ but if the player is in the read space_co_ there is a gravity and the friction have to stop the player as normal or? But of course the world gravity is off. There is still gravity in the read box as normal. Its like world gravity in the read box_co_ i thougth. Why i have to regulate the friction behavior by myself with linearDamping/counterforce? I want to understand this _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tEr_co_ I_t_m not sure I understand the question fully_co_ but for starters I think your code might be backwards. As written_co_ the scene has a gravity of _lt_strong_gt_[0_co_ -9.81_co_ 0]_lt_/strong_gt_ (i.e. gravity pushes in the _lt_strong_gt_-Y_lt_/strong_gt_ direction)_co_ and then when the player touches the green space you apply a _lt_strong_gt_+Y_lt_/strong_gt_ force_co_ and when he hits the red space you apply a _lt_strong_gt_-Y_lt_/strong_gt_ force. So effectively_co_ in the green area the player experiences zero gravity_co_ and in red he experiences stronger than normal gravity. Not sure if that_t_s what you wanted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEither way_co_ note that friction can occur whenever two bodies are being pushed together - it doesn_t_t matter whether they_t_re pushed by gravity_co_ or by _qt_applyForce_qt__co_ or by a combination of both_co_ etc. Right now_co_ in the green area there_t_s no net force pushing them together_co_ hence no friction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163967_qt_ data-ipsquote-contentid_eq__qt_28003_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487508344_qt_ data-ipsquote-userid_eq__qt_25374_qt_ data-ipsquote-username_eq__qt_Hans_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t43 minutes ago_co_ Hans said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBtw. you suppose right_co_ my theme is outer space. And I want to simulate a ship with his own gravity and the player should stand like normal one the ship ground/platform_co_ no matter how the ship is moving or rotating in a world of gravity or without gravity. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt sounds like_co_ inside the ship_co_ you want the player to move as if he was in a static environment with normal gravity. Why not just model it that way_co_ with the ship_t_s floor and walls and whatever being static bodies?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hans","Date":"2017-02-19T14:01:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163970_qt_ data-ipsquote-contentid_eq__qt_28003_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487511327_qt_ data-ipsquote-userid_eq__qt_12925_qt_ data-ipsquote-username_eq__qt_fenomas_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ fenomas said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tEr_co_ I_t_m not sure I understand the question fully_co_ but for starters I think your code might be backwards. As written_co_ the scene has a gravity of _lt_strong_gt_[0_co_ -9.81_co_ 0]_lt_/strong_gt_ (i.e. gravity pushes in the _lt_strong_gt_-Y_lt_/strong_gt_ direction)_co_ and then when the player touches the green space you apply a _lt_strong_gt_+Y_lt_/strong_gt_ force_co_ and when he hits the red space you apply a _lt_strong_gt_-Y_lt_/strong_gt_ force. So effectively_co_ in the green area the player experiences zero gravity_co_ and in red he experiences stronger than normal gravity. Not sure if that_t_s what you wanted.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNot exactly_dd_ _lt_em_gt_(The green space got a positive gravity  Y_dd_ _lt_strong_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_+_lt_/span_gt_ 2 * 9_co_81_lt_/strong_gt_. The red space got a negativ gravity Y_dd_ _lt_strong_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_-_lt_/span_gt_ 9.81_lt_/strong_gt_.). The green box push the player in the air. The red box pull the player harder to the ground like normal (Y_dd_ 2 * -9.81). This ist okay and _lt_/em_gt_deliberately.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_So we deactivate the world gravity by pressing the key K_dd_ _lt_/em_gt__lt_em_gt_The green box pushed the player still in the air (_lt_/em_gt_deliberately)_lt_em_gt_. The red box is now Y_dd_ -9.81 and not Y_dd_ 2 * -9.81_lt_/em_gt_. I thougth its like normal gravity now in the red box. The player is also pulled down to the ground_co_ but with no friction. How can I simulate the wolrd force in the red box without world gravity to have friction too?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso a problem is_dd_ The player can not stick together with the ground _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/27927-solved-player-want-to-standmove-on-moving-box/?page_eq_2_qt_ rel_eq__qt__qt__gt_like my other topic_lt_/a_gt__co_ because the collideEvent do not occure. I think this is the reason there is no friction too._lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163970_qt_ data-ipsquote-contentid_eq__qt_28003_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487511327_qt_ data-ipsquote-userid_eq__qt_12925_qt_ data-ipsquote-username_eq__qt_fenomas_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ fenomas said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tEither way_co_ note that friction can occur whenever two bodies are being pushed together - it doesn_t_t matter whether they_t_re pushed by gravity_co_ or by _qt_applyForce_qt__co_ or by a combination of both_co_ etc\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhy? How do this the world gravity to apply force with friction? _lt_img alt_eq__qt__dd_blink_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ title_eq__qt__dd_blink_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163970_qt_ data-ipsquote-contentid_eq__qt_28003_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487511327_qt_ data-ipsquote-userid_eq__qt_12925_qt_ data-ipsquote-username_eq__qt_fenomas_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ fenomas said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt sounds like_co_ inside the ship_co_ you want the player to move as if he was in a static environment with normal gravity. Why not just model it that way_co_ with the ship_t_s floor and walls and whatever being static bodies?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tBecause the game sould become a local coop game. There will be two or more players at the end. _lt_img alt_eq__qt__dd_ph34r_dd__qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ title_eq__qt__dd_ph34r_dd__qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-19T18:32:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhhh_co_ I see what you_t_re asking now. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd it looks like the answer is_dd_ _lt_a href_eq__qt_https_dd_//github.com/schteppe/cannon.js/issues/224_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/schteppe/cannon.js/issues/224_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn short_co_ Cannon uses the length of the world gravity vector to approximate the maximum friction force_co_ so you_t_ll probably need to set your scene_t_s gravity to a common-sense value_co_ and then apply counter-forces when you want to negate it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hans","Date":"2017-02-25T12:23:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tested it finally. It works. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12925-fenomas/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12925_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12925-fenomas/_qt_ rel_eq__qt__qt__gt_@fenomas_lt_/a_gt_  Thanks again _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately the solution ist a little bit unfriendly for the performance. _lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf there is a better solution in the future pls contact me  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-02-27T06:58:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWrap your hea around this project. Forget all impulses and do the math_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/DEMOS2014/kyprolis_final/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/DEMOS2014/kyprolis_final/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ was instrumental on this project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh_co_ by the way - it_t_s touch screen only!_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ try both one and multiple fingers...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_EDIT - this is made for and currently used on 90+ inch touchsceeens at trade shows daily. So the detail is much greater than you might see on your current touchscreen._lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]