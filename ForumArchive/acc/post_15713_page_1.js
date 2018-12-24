[{"Owner":"cefleet","Date":"2015-07-13T23:53:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Greetings all_co_ _lt_br_gt_First time poster long time lurker. My question is regarding collisions. I_t_m using_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh1.intersectsMesh(mesh2_co_ true)_lt_/pre_gt__lt_p_gt_and_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh1.checkCollision _eq_ true_sm_ _lt_/pre_gt__lt_p_gt_However that is not precise enough because of the bounding blocks and the odd shape of the meshes. I would like to know if there is a way to calculate a mesh to mesh collision if the bounding block collision is detected? Or is there a better way to detect collisions? IE is there a callback on ellipsoidal collisions that can be used?_lt_br_gt_Essentially I am making the player loose a life on collision on a 3D side scrolling game.  I can make it _qt_bounce off_qt_ the obstacle_co_ using _qt_checkCollision_qt_ but I can only get it to tell me something when I_t_m hitting it using _qt_intersectMesh_qt_. So my _qt_bouncing_qt_ and _qt_hit_qt_ detection are different. I need them to be the same._lt_br_gt_Thanks for any help in advanced. _lt_/p_gt__lt_p_gt_  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-14T16:37:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello and welcome!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_checkCollisions_lt_/em_gt_ is for collisions and not for _lt_em_gt_intersectsMesh_lt_/em_gt_. As you mentioned_co_ _lt_em_gt_intersectsMesh _lt_/em_gt_only uses bounding boxes for performance reasons._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The problem with mesh vs. mesh collisions is that you have to go through all triangles of both meshes which will kill your fps_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But you can still use collisions engine here. You can define mesh.ellipsoid to get an impostor around your mesh and then use _lt_em_gt_mesh.moveWithCollisions_lt_/em_gt_ to check the mesh ellipsoid against all meshes which have _lt_em_gt_checkCollisions _lt_/em_gt__eq_ true._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To know if a collision occured_co_ just register a function on _lt_em_gt_mesh.onCollide_lt_/em_gt_._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-07-14T20:08:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok the mesh.onCollide is what I was looking for. Thank you. I don_t_t know how I missed that one. I marked it as solved. **Edit** maybe I spoke too soon._lt_br_gt_I set this._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.onCollide _eq_ function(){   console.log(_t_I am colliding with something_t_)}_lt_/pre_gt__lt_p_gt_but it never runs that function. Am I missing something?_lt_br_gt_**end of edit**_lt_br_gt__lt_br_gt_**Edit #2**. (I feel like a dork) _lt_br_gt_This is fixed in 2.2 and I was on 2.1. It works exactly as I expected in 2.2._lt_/p_gt__lt_p_gt_**end of edit 2**_lt_br_gt_ _lt_/p_gt__lt_p_gt_One follow up question however. By _qt_imposter around your mesh_qt_ are you referring to just an ellipsoid that is adjusted using offset and scale? I can do that. However_co_ is there a built in function to detect the size of an object and attempt to make the ellipsoid around it or does that need to be done manually?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-15T15:53:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes the ellipsoid can be offseted and scaled to match your mesh_t_ shape_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To get the size of an object you can use_dd_ mesh.getBoundingInfo()_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-17T15:24:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#18U5SO%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#18U5SO#1 _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCefleet_co_ at least in THIS case_co_ the .ellipsoid is already in place_co_ automatically.  (in case you hadn_t_t found that answer yet)  You might still need to size it_co_ and offset it from dragging in the dirt.  Ground-dragging ellipsoids can cause constant collisions.  But worse than that_co_ ellipsoid chafe_co_ and unexpected collisions with pet excrement.  _lt_img alt_eq__qt__dd_o_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ welcome to the forum!  Tell us about your dreams and projects when you get a chance_co_ C... we love show and tell.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat Jamaican?   Err... I mean whacha makin_t_?  Anything demented? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAside to Iceman and DellaFree_dd_ You_t_d think... between Della_t_s terrain-following skills_co_ Ice_t_s animating skills_co_ and my bloviating skills_co_ we_t_d have this darned rabbit hopping up and down the hills properly_co_ by now_co_ eh?  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-08-08T17:56:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry for this late reply. @wingnut I_t_ll make another post about what it is that I am working on in just a few minutes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But back to this subject. I_t_m testing something but I need to know if I am doing something wrong or there is a bug or if I_t_m reading wrong but when I do _dd__lt_br_gt__lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.onCollide _eq_ function(colMesh){   console.log(_t_I am colliding with _t_+colMesh.id)_sm_}_lt_/pre_gt__lt_p_gt_it works until I am colliding with 2 objects. Then it only runs for the first mesh for every game tic. My test are basically this_dd__lt_br_gt__lt_br_gt_I have a ground mesh (not babylon.js ground just a generic ground) and a wall mesh. My character walks across the ground and it gives me the message _qt_I am colliding with Ground_qt_ every game tick. However when I get to the wall_co_ I can tell that I am colliding with the wall because my character is stopped_co_ but it never says _qt_I am colliding with Wall_qt_. It just always says _qt_I am colliding with Ground_qt_. That is until I make my character jump then it will say _qt_I am colliding with Wall_qt_ until I land back on the ground. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am I missing something or will _qt_onCollide_qt_ be called just once per game tic?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-08-10T12:56:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again_co_ Cefleet!  Thanks for the About Cefleet post... what a great cause your school is.  It_t_s very cool that you are using BJS.  Excellent._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a few strange ideas for your _qt_two-collisions at once_qt_ issue_co_ but I am no expert in these things_co_ and it would be good to have a playground demo to do some testings._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_First_co_ if you have have not played-with _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.js#L654_qt_ rel_eq__qt_external nofollow_qt__gt_mesh.moveWithCollisions_lt_/a_gt__co_ (mentioned by Deltakosh) I_t_d say do that... and see if it can fix your unwanted ground collisions.  A forum search for _qt_moveWithCollisions_qt_ will bring plenty of returns_co_ too.  It is a heavily-used and often-talked-about function.  Maybe... with it... and some mesh.ellipsoidOffset(0_co_ .01_co_ 0) or similar... maybe something will work_co_ there._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I _lt_u_gt_think_lt_/u_gt_ it is .applyGravity that keeps pushing your camera or character .ellipsoid (or bounding box) into a continuous ground collision.  But you need gravity ON... for jumps_co_ right? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s take a look at one of DellaFree_t_s playgrounds where he used a ray to place a sphere at ground height continuously... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1L0CBO%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1L0CBO#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Line 125_co_ in the render loop... he_t_s got a little code that essentially makes the sphere be _qt_terrain following_qt_.  The main thing... he uses the ray to test the ground height and thus the sphere does not need gravity testing.  If you were to adapt his _qt_Am I on the ground?_qt_ testing... to YOUR issue_co_ you might be able to turn-OFF gravity on the camera or mesh that you are moving.  Essentially_co_ YOU would get to choose IF/NOT the mesh/cam .ellipsoid is rubbing on the ground.  Your ray-based _qt_what altitude?_qt_ checker would also need to operate correctly when the player jumps-up onto the top of a mesh_co_ too... and I think the ray system would work for that_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s pretend that the character or cam landed on the point of a up-pointing cone.  With gravity_co_ it might slide down (because the collision ellipsoid is round).  With ray-testing_co_ the char or cam would probably stay-atop and maybe be able to walk on the steep cone angles.  Fun with jumping.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In most cases_co_ jumps are a type of parabola trajectory.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#25OQ8V%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#25OQ8V#5_lt_/a_gt_  That is a non-physics-engine cannonball-firing demo kindly made for me by Jerome_co_ but it doesn_t_t work anymore.  Thread area is _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/page-28#entry79111_qt__gt_here_lt_/a_gt_.   All in all_co_ there might be some parabola formula in the line 105 area that you can use for your jumping.  While a jump is in progress_co_ you will need to keep firing your ray in the render loop_co_ making sure that the jump stops when it hits the ground or lands upon something with a landing surface._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To be brief_co_ once you have _lt_u_gt_some other way_lt_/u_gt_ of testing if you are _qt_landed_qt__co_ then you no longer need to apply gravity to that character/cam_co_ and maybe the .ellipsoid (or bounding box) won_t_t drag on the ground anymore.  Then_co_ you ONLY need to concern yourself with sideways collisions. The ray takes care of the walking surface._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You still have an issue of laterally colliding with two or more mesh at the same time_co_ but at least the ground collision issue is out of the way.  I_t_m not an expert in any of these things_co_ but these are some ideas that MIGHT be useful.  Hopefully_co_ the experts will comment.  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-08-10T14:55:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the reply. I_t_m not sure I follow you_co_ and maybe I didn_t_t explain it well. I_t_ve always used mesh.moveWithCollisions_co_ and my ellipsoid is how I want it to be._lt_/p_gt__lt_p_gt_The issue is that if I am on the ground the _qt_onCollide_qt_ is never called for the other item that my character is running into. If checkCollision is set its stops the character from moving so I know it is colliding_co_ but the onColIide is never called for that mesh until I am no longer touching the first mesh. I need the _qt_onCollide_qt_ to be called on both items. I need to know if I am on the ground and if I am touching a wall_co_ enemy_co_ bullet_co_ whatever.  My workaround is to use both _qt_onCollide_qt_ and _qt_intersectMesh_qt_ but it seems redundant and they are measuring different things._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-10T19:43:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Cefleet_co_ you just need to check the parameter sent with onCollide which is...the other mesh collided _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-08-12T05:58:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_cannon fixed _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#25OQ8V%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#25OQ8V#10_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_the tube _lt_em_gt_cap_lt_/em_gt_ parameter_co_ added later in the API_co_ was just missing_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT] the same a bit more fast with other parameter values _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#25OQ8V%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#25OQ8V#11_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-08-12T13:41:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_92428_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15713_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1439235804_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hey Cefleet_co_ you just need to check the parameter sent with onCollide which is...the other mesh collided _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not convinced that there is not something buggy here with the onCollide function. I_t_ve done all of the things you have all mentioned It just never works properly. I can observer that onCollide is called only on one of the two collisions that are happening. Also it seems it sometimes says it is colliding with the wrong mesh. IE If I am on top of the wall it says I am colliding with ground. But if I am colliding with nothing it correctly doesn_t_t say I_t_m colliding with anything._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-12T13:57:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Maybe you can provide a playground that shows that issue with the colliding?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-08-12T14:34:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you for the help_co_ but I_t_m sorry but I have only learned how to build a scene inside of blender and I don_t_t even know where to start with the playground. I_t_m currently in a 7 day game jam so I don_t_t have time to learn it right now._lt_/p_gt__lt_p_gt_However this is what I have been able to observer this morning. There are two issues I was describing appear to be the same issue. My ground is a single mesh. However it is hilly. If my character is inside of the bounding box of those hills (IE the vally) the onCollide will not fire on any item except for the ground mesh. Once I am at the top of the hill (out of the bounding box) onCollide appears to work as expected. IE I can collide with more than one thing_co_ just as long as I am not inside the bounding box of another item. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-08-14T15:21:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again C...  sorry to hear that you are having problems.  I_t_m just beginning to learn Blender and I haven_t_t installed an exporter in mine_co_ yet.  In your exporter_co_ do you have a choice to Export Javascript file?  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14206-tower-of-babel-20-released/_qt__gt_http_dd_//www.html5gamedevs.com/topic/14206-tower-of-babel-20-released/_lt_/a_gt_  ... see the picture._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If your Blender models are simple and untextured_co_ (keep the height-mapped ground simple_co_ too_co_ if possible)... then would you please export your scene to JS?  (thx)  You can set _t_Include initScene()_t_ true_co_ too. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then_co_ if you could zip or not_co_ and publish that somewhere_co_ or attach it here so I can DL it_co_ then maybe I can make a playground from it.  After that_co_ maybe we can get everyone involved in some experiments._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I first read your issue_co_ I didn_t_t know you had a heightMapped (bumpy) ground.  I think my solve is still appropriate_co_ though.  You might need to turn-off ground collisions.  You would use ray-checking (like Della_t_s terrain-following sphere) to keep your character at ground height.  It also can be used for jumping... because the ray will monitor the parabola of the jump... and even check for landing surfaces that are not the ground (jumping up onto a box_co_ for example)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once you are able to turn off ground collisions_co_ then check your symptoms again.  The bumpy ground bounding box should not be an issue anymore_co_ I would think (just like when you_t_re on a mountain top - not inside the ground_t_s b-box.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By chance_co_ are you hoping to have mesh slide/tumble up and down mountains and valleys?  Just curious._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How are you testing scenes?  Using a sceneLoader?  Babylon Sandbox?  (thx). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not very experienced in any of these things_co_ but I want to keep your ball rolling (ar ar ar bumpy terrain humor).  So_co_ if you can get a basic Blender scene in JS_co_ and we can make it into a playground... we_t_re going to learn more and see bugs easier.  You could be correct_co_ there could be problems with the collision system.  It was recently tweaked for WebWorkers support_co_ I believe._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But_co_ if I understand what you are describing... I_t_d say this is normal behavior.  You have a continuous collision condition when you are inside a boundingBox of a mesh with collision checking TRUE.  I would expect that to cause all sorts of issues when trying to check collisions on ANOTHER mesh.  Since you never _qt_clear_qt_ the collision condition for the ground_co_ certain properties in the code are never reset... and therefore are not ready to check for more collisions (pure speculation_co_ but certainly possible).  You never come out-of collision condition when you are in the valley (inside the bbox)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am doing lots of speculating and theorizing here... most of which is probably wrong.  But_co_ let_t_s see if we can somehow get this issue into a playground where lots of eyes can see it.  Don_t_t dread the playground.  It_t_s weird at first_co_ but it will become your best friend in no time.  Just try to cram mainline code into a function called createScene_co_ push the CLEAR button on the playground_co_ and paste your code in there.  Hit RUN... start experimenting_co_ hit save as often as you like_co_ and a new URL will be at the top of the playground after each SAVE.  Bookmark it_co_ come back later and fight with it some more... save and bookmark again... watch your console_co_ watch the playground error announcements_co_ and kick royal butt.   Easy.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But if/when you DO export to JS... you_t_ll see that it produces a rather weird JS file layout.  I might be able to convert that weirdness into less-weird for ya_co_ if needed.  Something more playground-ready.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Party on!  Keep us posted._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-08-17T17:11:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Wingnut. (and others who have helped). I really really appreciate you all taking the time to work with me on this. I just wrapped up the gamedev competition so I will take some time in the next couple of days to look over some things. You can play the _qt_electron/atom_qt_ downloadable version here._lt_br_gt_ _lt_br_gt__lt_a href_eq__qt_https_dd_//github.com/aletheiagamestudio/Week-of-Awesome-2015/blob/master/toDieIsToGain.zip?raw_eq_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/aletheiagamestudio/Week-of-Awesome-2015/blob/master/toDieIsToGain.zip?raw_eq_true_lt_/a_gt__lt_br_gt__lt_br_gt_or I will post an website version next week some time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However when I say I_t_m using my own exporter_co_ I really just modified the one that comes with babylon.js that exports the babylon file to have some more data that is read when the mesh is loaded. (I extended the mesh loading in my engine to look for things like _qt_Enemy_qt__co__qt_Obstacle_qt__co_ _qt_Trigger_qt__co_ etc). So I don_t_t know enough python or about blender gui making to make my own exporter export JS. But I_t_m guessing I should learn because that is GREAT idea. I never tried TOB but may look at it sometime. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway my final solution was to make many little invisible boxes that were ground and the single mesh that looked like the ground didn_t_t have collisions. This was a scrolling platformer game so it wasn_t_t as difficult as if the player could freely run around._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_92955_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15713_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1439565713_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_When I first read your issue_co_ I didn_t_t know you had a heightMapped (bumpy) ground.  I think my solve is still appropriate_co_ though.  You might need to turn-off ground collisions.  You would use ray-checking (like Della_t_s terrain-following sphere) to keep your character at ground height.  It also can be used for jumping... because the ray will monitor the parabola of the jump... and even check for landing surfaces that are not the ground (jumping up onto a box_co_ for example)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once you are able to turn off ground collisions_co_ then check your symptoms again.  The bumpy ground bounding box should not be an issue anymore_co_ I would think (just like when you_t_re on a mountain top - not inside the ground_t_s b-box.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By chance_co_ are you hoping to have mesh slide/tumble up and down mountains and valleys?  Just curious._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How are you testing scenes?  Using a sceneLoader?  Babylon Sandbox?  (thx). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not very experienced in any of these things_co_ but I want to keep your ball rolling (ar ar ar bumpy terrain humor).  So_co_ if you can get a basic Blender scene in JS_co_ and we can make it into a playground... we_t_re going to learn more and see bugs easier.  You could be correct_co_ there could be problems with the collision system.  It was recently tweaked for WebWorkers support_co_ I believe._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But_co_ if I understand what you are describing... I_t_d say this is normal behavior.  You have a continuous collision condition when you are inside a boundingBox of a mesh with collision checking TRUE.  I would expect that to cause all sorts of issues when trying to check collisions on ANOTHER mesh.  Since you never _qt_clear_qt_ the collision condition for the ground_co_ certain properties in the code are never reset... and therefore are not ready to check for more collisions (pure speculation_co_ but certainly possible).  You never come out-of collision condition when you are in the valley (inside the bbox)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_  This is what is happening. I just thought that _qt_intersectsMesh_qt_ was for bounding blocks and _qt_OnCollide_qt_ was for something else. I_t_m not sure what exactly but the behavior is different depending on which of these I am using._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-18T17:42:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To be really helpful_co_ we clearly need a repro case. Please go to www.babylonjs.com/playground and create s simple scene which can show us your issue. I promise it will then be fixed quickly_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-09-17T14:56:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok so I_t_m very sorry for the delay. Life has been crazy_co_ I went to DragonCon_co_ my wife lost her job_co_ my sub-renter is no longer going to rent from me and I started my student classes in the last couple of weeks.... but enough of my life details._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here are the three playgrounds I created (I_t_m using console.log to output the issue If there is a better way let me know). I_t_m using oncollide to register a collision._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#6XOBI%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#6XOBI#4_lt_/a_gt__lt_/p_gt__lt_p_gt_This one is colliding with ground and says that it is colliding with ground but never says it is colliding with the box1 even though you can see the box2 move from the collision._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#6XOBI%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#6XOBI#5_lt_/a_gt__lt_/p_gt__lt_p_gt_This one does not have ground. So you can see it registers a collision as soon as it hits box1 as expected._lt_br_gt__lt_br_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#6XOBI%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#6XOBI#6_lt_/a_gt__lt_/p_gt__lt_p_gt_this one box2 collides with box1 and registers but as soon as it begins colliding with ground it stops registering collision with box1. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The whole point is that it never registers a collision with two different meshes on the same frame._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-09-30T14:43:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/user/4442-deltakosh/_qt_ title_eq__qt__qt__gt_Deltakosh_lt_/a_gt_ is above what you were asking for?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-30T16:02:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep I understand now _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ than you very much._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unfortunately for performance reason_co_ as long as the closest collision is detected_co_ the system stops computing collisions and raise onCollide with the closest mesh. So I_t_m afraid that you cannot use this to achieve your goal (Or you will have to bend the collision system a little bit _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-09-30T16:41:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Thanks dk! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yeah_co_ cefleet... set the Y height of your collision ellipsoid... a bit smaller... so that the character-to-ground collision is NEVER happening.  This will cause your character or camera to sink into the ground... and start colliding again.  But use a SEPARATE ray to continuously check the ground distance and continuously set the char/cam y position... making it level with the ground again.  This way_co_ your collision ellipse will never hit the ground._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1L0CBO%232_qt_ rel_eq__qt_external nofollow_qt__gt_DellaFree_t_s terrain follower_lt_/a_gt_ uses this method._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You still won_t_t get multi-mesh intersect detection_co_ but at least the ground won_t_t be adding to your troubles.  *shrug*  AND_co_ sorry to hear about your rough waters_co_ C.  I hope it all improves soon._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-09-30T17:01:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks. I will work on a workaround then._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-30T17:04:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry about that _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cefleet","Date":"2015-09-30T17:08:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No need to apologize at all. I really appreciate Babylon.js and am thankful that you have shared it with all of us. As far as a workaround... I_t_m a programmer that_t_s what I do. I just didn_t_t want to fight against something that was already done._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"humaidk2","Date":"2017-01-01T02:56:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi_co__lt_br /_gt_\n\tI_t_m having the same problem. I_t_m trying to build VR Pacman and I_t_m wondering if you found a solution to this problem.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-01-02T05:21:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHmmm this topic has me thinking_co_ I might have a nifty work around at some point.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]