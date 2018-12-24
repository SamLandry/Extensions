[{"Owner":"binyan","Date":"2014-04-22T09:26:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone_co__lt_/p_gt__lt_p_gt_I_t_m developing a simple runner game_co_ and  I_t_m wondering what is the best way to implement endless landscape with curved track in Babylon.js._lt_/p_gt__lt_p_gt_I_t_ve read a lot of articles about this_co_ and figured out which techniques to use_co_ but I still cannot figure out how to bring these things to work together._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There are several main problems_dd__lt_/p_gt__lt_p_gt_1. Generate the landscape_lt_/p_gt__lt_p_gt_2. Generate the curved track_lt_/p_gt__lt_p_gt_3. Hide the next landscape prefab so the player wont be aware of the generation process_lt_/p_gt__lt_p_gt_4. Connect the generated prefab to the current landscape in way that will give a smooth transition._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As I understand  the best technique to use for the landscape generation is height map based on Perlin Noise generated texture. The question is how can I generate two ground meshes which can connect smoothly each to other. Is there any way to apply constraints on Perlin Noise algorithm? _lt_/p_gt__lt_p_gt_As for generating the track I thought about extrusion based on Bezier Curve points_co_ but again_co_ how can I generate it on the generated landscape?_lt_/p_gt__lt_p_gt_Finally I came to the conclusion that the best way to hide the generation of the next prefab is the turns along the track. I thought about track with hills next to both edges (in other words_co_ the track should be a kind of canyon)_co_ and before the transition to the next prefab there should be a sharp turn which hides the prefab._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Although a can think about _qt_how it should be implemented_qt_ theoretically_co_ a still cannot figure out how can I bring these things to work together._lt_/p_gt__lt_p_gt_Any help would be appreciated!_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-22T23:33:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi binyan!  Welcome to the forum.... good to have you with us! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know if I have much to add to your great idea_co_ but let_t_s set Babylon.js off to the side for a moment_co_ and just talk about JS and _qt_state management_qt_.  When you get done with the nightmare of managing the state_co_ babylon.js will easily be able to nicely render-up the _t_next section_t_ or the _t_previous section_t_.  Your nasty task_co_ is section management... a pure JS thing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think_co_ maybe_co_ in a situation like this_co_ you bring the road and scenery past the camera_co_ and not the camera through the scenery.  If I were you_co_ I would think about NEVER translating the camera on the z-axis at all.  Tilt it_co_ lift it_co_ lower it_co_ translate side-to-side_co_ all camera activity remains on the x and y axis_co_ but never on z. Don_t_t actually go anywhere.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Babylon.js cameras have a .maxZ setting that determines the depth of the camera frustum_co_ so you can easily decide how far ahead.... the user gets to see.  That frustum depth_co_ and the speed that you allow the user to travel-at_co_ will be key factors later._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now_co_ IF you are going to bring the road/scenery past the camera_co_ and not vice-versa... that tells you some things about your _t_section generator_t_.  Everytime you want to _t_grow_t_ a new section of world to fly past your camera_co_ you will need a smooth attachment to the previously grown section.  This is where _t_state_t_ comes into play.  You will base your new section of world... on the _t_ending state_t_ of the previous generated world-section.  When your generator starts to grow a new world section_co_ it needs to know the state of the roadway... the height_co_ the tilt_co_ the current curving_co_ etc.  You didn_t_t mention if you wanted to tilt the road_co_ and you didn_t_t mention if you wanted to allow reversing.  But since we are in dream mode here_co_ let_t_s plan big.  Think _qt_dynamically generated_qt_ roller coaster._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Believe it or not_co_ that is about all the words I have to say.  I am quite new to 3D graphics_co_ but I have done some CSS animating that required some of the same kind of _qt_state management_qt_.  When you grow/generate a new section_co_ you need to give a substantial amount of data to your generator... about the previous section... so it can grow a new section that attaches nicely to that previous section.  You have to feed the generator... the _t_state_t_ of the last generated section._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There are some VERY smart people here in this forum.  Give your post a bit of time... and maybe the geniuses will come out of the closet.  But keep in mind... this is not so much a webGL framework challenge... as it is a JS algorhythm challenge.  Babylon.js will easily be able to render your sections.  The real question is... can you build a JS-based scenery and roadway generator... with or without road tilt (banked corners)_co_ and with or without reversing allowed.  And is JS fast enough to make you happy with the results._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe start with pseudo-code.  Create a flow chart-type of thing_co_ and speak in your favorite language.  Talk to yourself.  Then slowly convert your flows_co_ branches_co_ and needed actions... to function names... and then to actual functions.  You can really build this project... without webGL... and then attach graphics later.  The main part_co_ is your JS state-maintaining section generator... which might be very object oriented (oop).  In many ways_co_ you will be generating JS _qt_section objects_qt__co_ right?  The .renderInWebGL() function is just a single function on a potentially complicated _qt_section object_qt_... a child class of _t_section_t__co_ produced by the _t_section object class/factory_t_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And again_co_ although you can easily use Babylon.js to view the results of your section object generator_co_ the JS itself_co_ and state managing_co_ is likely your biggest challenge._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was not much help in _qt_bringing these things together_qt__co_ was I?  I spoke about the theories_co_ didn_t_t I?  Sorry.  Let_t_s hope smarter people than I... respond.  But I must say_co_ this is a cool project_co_ and I would love to hear about your progress on this.  Please keep us posted._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I found two interesting urls that might be fun for you to look at_dd_  _lt_a href_eq__qt_http_dd_//www.littleworkshop.fr/landscapes/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.littleworkshop.fr/landscapes/_lt_/a_gt_ (push the green button)_co_ and _lt_a href_eq__qt_http_dd_//games.user00.com/EndlessRoad/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//games.user00.com/EndlessRoad/index.html_lt_/a_gt_ .  Be well!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2014-04-24T08:38:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hi Wingnut_co__lt_/div_gt__lt_br_gt__lt_div_gt_First of all thank you for your time_co_ and your thorough response._lt_/div_gt__lt_br_gt__lt_div_gt_There are great ideas in your post and I definitely will take them in account._lt_/div_gt__lt_br_gt__lt_div_gt_As you mentioned_co_ I_t_m never translating the camera on the z-axis. It is the world that is moving towards the camera_co_ and the camera moves right_co_ left_co_ up and down both with the character (I can_t_t see another option_co_ as it is an infinite world)._lt_/div_gt__lt_br_gt__lt_div_gt_And I_t_m fully agreed with you that it is all about state management_co_ or as you called it _qt_section generator_qt_. _lt_/div_gt__lt_br_gt__lt_div_gt_But the true question is what is the best way to implement such generator. I mean how to make these techniques to work together in such generator.  _lt_/div_gt__lt_br_gt__lt_div_gt_As for Babylon.js_co_ I just thought that maybe there are some built in tools in Babylon engine_co_ which would be helpful in this case._lt_/div_gt__lt_br_gt__lt_div_gt_But in general you_t_re right_co_ this is a pure 3d &amp_sm_ procedural generation question_co_ so maybe it not a right place for this thread and the moderator should consider to move it to _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/forum/4-3d/_qt__gt_this_lt_/a_gt_ forum._lt_/div_gt__lt_br_gt__lt_div_gt_Anyway thank you for your help_co_ hope there will be more posts and ideas. _lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-24T14:15:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again binyan! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am glad that some of my ideas fit your thinking.  Babylon.js has many rendering tools_co_ for lighting_co_ for creating meshes_co_ for texturing_co_ for handling cameras and their controllers_co_ etc.  The _qt_logic_qt_ you are thinking about... is called _qt_game logic_qt__co_ and babylon.js would be a fat pig if it tried to include game logic in its framework library.  But babylon.js easily accomodates other JS libraries operating in the same scene_co_ as it has proved with the cannon.js physics library.  That is an easy add-on to BJS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is also a library called GameFX that rides nicely with BJS_co_ and is written by people who visit this forum often.  YOUR game logic_co_ authored by you_co_ might well join that library_co_ or another library_co_ someday.  Procedural world-building is certainly a cool concept and has a very bright future._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s pretend you wanted to get your hands dirty with a proof-of-concept demo... using babylon.js.  We have the wonderful CreatePlane constructor.  In many ways_co_ CreatePlane is a roadway section generator_co_ right?  And we have the FreeCamera_co_ which is a driver_t_s view device_co_ yes?  A second camera_co_ probably an ArcRotateCamera (an orbiting camera) could easily be used as your _t_chase view_t_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Take a look our API for the freeCamera... _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24626_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24626_lt_/a_gt_.  See the properties keysUp and keysDown?  Now lets take a sniff at the source code for the freeCamera...  _lt_strong_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Cameras/babylon.freeCamera.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Cameras/babylon.freeCamera.js_lt_/a_gt__lt_/strong_gt_.  Right near the top_co_ you can see_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this.keysUp _eq_ [38]_sm_this.keysDown _eq_ [40]_sm__lt_/pre_gt__lt_p_gt_The free camera uses the up and down cursors... for its _t_truck forward_t_ and _t_truck backward_t_ motions.  And since the freecam begins looking +z_co_ then you know that translating on Z is something you won_t_t need.  So one of the early activities in your _qt_get dirty_qt_ babylon.js scene... might look like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// create a free cameravar myFreeCam _eq_ new BABYLON.FreeCamera(_qt_FreeCamera_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ -15)_co_ scene)_sm_// disable its truck-forward and truck-back keysmyFreeCam.keysUp _eq_ []_sm_myFreeCam.keysDown _eq_ []_sm__lt_/pre_gt__lt_p_gt_Let_t_s pretend that you included jQuery in your scene_co_ to make cross-browser keypress-getting_co_ easier._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_script src_eq__qt_./js/jquery-2.0.3.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/pre_gt__lt_p_gt_Then further below_co_ right after the opening &lt_sm_script&gt_sm_ element_co_ put in some jQuery keypress code_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_$(window).bind(_t_keydown_t__co_ function(e) {\tvar mycode _eq_ e.which_sm_\tswitch (mycode) {\t\tcase 38_dd_ // up-cursor vehicle forward\t\t\tforward()_sm_\t\t\tbreak_sm_\t\tcase 40_dd_ // down-cursor vehicle backward\t\t\treverse()_sm_\t\t\tbreak_sm_\t\tcase 32_dd_ // spacebar brakes\t\t\tbrakes()_sm_\t\t\tbreak_sm_\t\tdefault_dd_ break_sm_\t}})_sm__lt_/pre_gt__lt_p_gt_I will let your creativity do the rest.  Let_t_s say you want to initialize your scene... with 100 sections of roadway ahead of the vehicle_co_ and 100 sections behind it.  For each of those sections... make depth-thin_co_ but wide_co_ planes._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// Create a plane - 1 unit by 1 unitvar myPlane _eq_ BABYLON.Mesh.CreatePlane(_qt_board_qt__co_ 1.0_co_ scene)_sm_// Tip it down to be flat instead of upright. (90 degrees around x axis)myPlane.rotation.x _eq_ Math.PI/2_sm_// Make it depth-thinner_co_ but lots widermyPlane.scaling _eq_ new BABYLON.Vector2(10_co_ 0.5)...// Create myMat _eq_ standardMaterial... with a diffuseTexture of road.jpg_co_ // set myPlane.material _eq_ myMat_co_ etc_lt_/pre_gt__lt_p_gt_You have just used many babylon.js tools to get you easily _qt_rolling_qt__co_ eh?  And you might consider things like... when the vehicle is rolling forward_co_ and it is time to put a new plane way out front_co_ just move the furthest plane from behind the vehicle... out to the furthest plane ahead of the vehicle... after you check the state of the road ahead... the height of the road_co_ forward-backward (x-axis) tilt_co_ etc.  That way_co_ your roadway generators (front and rear) don_t_t need to MAKE new planes_co_ but instead re-position planes that were already made by the init_roadway() function when the scene first loaded._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is a simple straight-ahead roadway tester_co_ but it COULD use hills_co_ even in this early test/fun.  It is a simple way to get your hands dirty.  Remember our _lt_strong_gt__lt_u_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki_qt_ rel_eq__qt_external nofollow_qt__gt_Wiki Home menu_lt_/a_gt__lt_/u_gt__lt_/strong_gt__co_ and our _lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com_qt_ rel_eq__qt_external nofollow_qt__gt_API documentation_lt_/a_gt__lt_/strong_gt__lt_/u_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You probably know about all this already.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Sorry if I_t_m doing too much hand-holding.  I don_t_t know much about you_co_ but I hope you hang around with us and try to develop your system... using BJS.  That way_co_ WE get to watch you and watch your project progress.  We LIKE watching creative people work.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-24T16:52:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think_co_ maybe_co_ your Perlin noise texture... would scroll across one of our CreateGround planes_co_ via heightMap_co_ and maybe using wrapU and wrapV... and maybe uOffset and vOffset... found on the babylon.js texture class - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24708_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24708_lt_/a_gt_. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Generating Perlin noise texture procedurally_co_ phew_co_ that_t_s far beyond my intelligence.  But don_t_t let that stop you.  In some ways_co_ it seems that there might be two strips of Perlin noise texture_co_ one on each side of the _qt_track_qt_.  Or_co_ if you didn_t_t care about a track_co_ and just wanted to walk/drive across rolling hills of Perlin noise heightMap_co_ then you could use one texture_co_ set gravity on the vehicle or character_co_ set collision detect with the ground_co_ and you are ready to go (nowhere).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I found a couple of functions on the web_dd_  _lt_strong_gt__lt_a href_eq__qt_https_dd_//gist.github.com/banksean/304522_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/banksean/304522_lt_/a_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looks like fun!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]