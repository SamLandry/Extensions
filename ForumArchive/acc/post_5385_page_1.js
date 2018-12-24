[{"Owner":"thephox1982","Date":"2014-04-03T23:18:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I see that a flat terrain generated using CreateGround stops my object from falling through but terrain generated using CreateGroundFromHeightMap objects simply fall through using both basic phsyics and cannon.js which leads me to wonder if heightmap terrain even supports physics yet or not._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Artem","Date":"2014-04-04T00:57:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can_t_t you use MeshImpostor?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thephox1982","Date":"2014-04-04T02:56:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_MeshImpostor using cannon doesn_t_t support heightfield yet and Babylon.js only supports plane_co_ cube and sphere using cannon.js apparently according to documentation. I was hoping for another way like raycast_co_ but that doesn_t_t even exist in the documentation so it appears I am unable to use Babylon for developing an MMO game short of having all flat terrain. x.x_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Is there any potential way of finding the height from a heightfield terrain to an object_co_ that at least can provide a way to calculate where to move the object (actor_co_ car_co_ mount_co_ etc) in relation to the ground as this technically is all that would be needed_co_ say a function to report back the Y location of X number of nearby vertexes or faces._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-04-04T11:41:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes this should be possible with _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var pickInfo _eq_ yourGround.pick(yourObject.position.x_co_ yourObject.position.z)_sm_pickInfo.pickedPoint.y_sm_ //heightfield_lt_/pre_gt__lt_p_gt_I_t_m not sure_co_ but this should work._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-04T11:52:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi _t_thephox1982_t_... welcome to the forum.  I am a newbie to webGL physics_co_ but I have done a few torture tests.  A _t_MMO_t_ with javascript and webGL_co_ huh?  Well_co_ I guess if you_t_re going to have a dream_co_ it might as well be a big one.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Have you ever played a game/sim called Stunt Rally?  I think it is written in C#_co_ and it is a single player game_co_ with a vehicle_co_ and height-mapped terrain.  And_co_ it is pretty laggy... and C-sharp runs substantially faster than JS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Speaking of laggy_co_ have you seen the _lt_u_gt__lt_a href_eq__qt_http_dd_//www.cubicvr.org/45-news/webgl/82-cubicvr-js-vehicle-physics-demo_qt_ rel_eq__qt_external nofollow_qt__gt_cubicVR vehicle physics demo_lt_/a_gt__lt_/u_gt_ ?  It uses ramps and jumps instead of height-mapped ground_co_ and it is SERIOUSLY laggy.  And _lt_u_gt_you_lt_/u_gt_ want to have height-mapped terrain physics_co_ and lots of users in the scene_co_ too?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think you are asking the world of the cannon.js physics engine.  I do not nomally make comments like this.  I tend to promote users and dreams_co_ no matter how _t_pie in the sky_t_ large they are.  But your dream_co_ phew_co_ that_t_s a big one.  May I suggest that you use a flat area in the middle of your rolling landscape_co_ and install a physics-active ground plane in _t_the plains_t_ area of your scene_co_ and do some tests with ramps_co_ barrels_co_ and a couple of physics active vehicles... as a proof of concept? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cannon.js is a fast and small physics engine_co_ but you are still dealing with JS_co_ and I have a feeling that you are going to be disappointed with the performance.  But in the same breath_co_ I think you could use a _t_plausibility study_t_ regarding your whopper-sized dream and goal._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope I did not offend you.  It is great to think big and dream big... but JS still has limitations that you should probably take into account.  Maybe dad72_t_s information will help give you an alternative method that is feasible.  Sorry that I was not more optimitistic or helpful.  We would love for you to have the stars and the moon_co_ but for now_co_ the best we have is _t_down to Earth_t_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Be well_co_ good luck._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-04-04T12:19:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Making MMO is possible if all optimized models_co_ scene_co_ animation_co_ very little physical_co_ do not too large textures (512 max) and compress (DDS is supported or jpg). Do not create too much big ground too_co_ better create more portal to another scene. Use the LOD (function coming) all over your belongings._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_also do not expect millions of players. if you happen to 30 players_co_ it will be already good._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_as game server_co_ Node.js_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thephox1982","Date":"2014-04-04T19:25:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_32637_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_5385_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1396612369_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hi _t_thephox1982_t_... welcome to the forum.  I am a newbie to webGL physics_co_ but I have done a few torture tests.  A _t_MMO_t_ with javascript and webGL_co_ huh?  Well_co_ I guess if you_t_re going to have a dream_co_ it might as well be a big one.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Have you ever played a game/sim called Stunt Rally?  I think it is written in C#_co_ and it is a single player game_co_ with a vehicle_co_ and height-mapped terrain.  And_co_ it is pretty laggy... and C-sharp runs substantially faster than JS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Speaking of laggy_co_ have you seen the _lt_u_gt__lt_a href_eq__qt_http_dd_//www.cubicvr.org/45-news/webgl/82-cubicvr-js-vehicle-physics-demo_qt_ rel_eq__qt_external nofollow_qt__gt_cubicVR vehicle physics demo_lt_/a_gt__lt_/u_gt_ ?  It uses ramps and jumps instead of height-mapped ground_co_ and it is SERIOUSLY laggy.  And _lt_u_gt_you_lt_/u_gt_ want to have height-mapped terrain physics_co_ and lots of users in the scene_co_ too?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think you are asking the world of the cannon.js physics engine.  I do not nomally make comments like this.  I tend to promote users and dreams_co_ no matter how _t_pie in the sky_t_ large they are.  But your dream_co_ phew_co_ that_t_s a big one.  May I suggest that you use a flat area in the middle of your rolling landscape_co_ and install a physics-active ground plane in _t_the plains_t_ area of your scene_co_ and do some tests with ramps_co_ barrels_co_ and a couple of physics active vehicles... as a proof of concept? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cannon.js is a fast and small physics engine_co_ but you are still dealing with JS_co_ and I have a feeling that you are going to be disappointed with the performance.  But in the same breath_co_ I think you could use a _t_plausibility study_t_ regarding your whopper-sized dream and goal._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope I did not offend you.  It is great to think big and dream big... but JS still has limitations that you should probably take into account.  Maybe dad72_t_s information will help give you an alternative method that is feasible.  Sorry that I was not more optimitistic or helpful.  We would love for you to have the stars and the moon_co_ but for now_co_ the best we have is _t_down to Earth_t_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Be well_co_ good luck._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_By the way you describe simple things (I have already seen work just fine including a rally racing game made in HTML 5) are all laggy_co_ I question your graphics performance and such and I_t_m on a AMD Vision built in graphics_co_ that game in question was running at above 50FPS._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_There is no reason an MMO can_t_t run fine with HTML5 if one knows what they are doing and takes advantage of load on demand methods such as loading what is needed in to memory just before it is in render distance_co_ etc._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I accidently clicked Report and submitted that statment as a report because I didn_t_t notice it wasn_t_t a _qt_reply_qt_ button as normally that is where a reply button is found on forums_co_ lol_co_ come find there is none_co_ only quote button for replying to someone specifically. &gt_sm_.&gt_sm__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thephox1982","Date":"2014-04-04T19:38:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_32641_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_5385_qt_ data-ipsquote-username_eq__qt_dad72_qt_ data-cite_eq__qt_dad72_qt_ data-ipsquote-timestamp_eq__qt_1396613953_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_Making MMO is possible if all optimized models_co_ scene_co_ animation_co_ very little physical_co_ do not too large textures (512 max) and compress (DDS is supported or jpg). Do not create too much big ground too_co_ better create more portal to another scene. Use the LOD (function coming) all over your belongings._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_also do not expect millions of players. if you happen to 30 players_co_ it will be already good._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_as game server_co_ Node.js_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was debating using Node.js as game server_co_ either that or C#_co_ but that is the server which doesn_t_t matter so much here._lt_/p_gt__lt_p_gt_As for the suggestion of picking_co_ I_t_ll keep that in mind but I am going with three.js due to it_t_s vast amount of features and it supporting what I need to get done_co_ Babylon is just not ready for MMO yet_co_ however if it was I_t_d have gone with it as it is easier to work with I am finding_co_ it was more enjoyable and straight forward._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for the terrain bit_co_ I will be going a new concept route_co_ a load and unload on demand_co_ say little sectors in a grid 256x256_co_ 8 loaded at a time (2048x2048sm worth loaded at a given time)_co_ as the player moves out of one grid it loads it_t_s neighbors and unloads any that are now unused while the player doesn_t_t see it as it is out of range_co_ this will also load in the new grids items to memory but not render until within distance_co_ I have dubbed this _qt_Seamless Terrain and Object Load on Demand_qt_ (STO-LOD). With this it also becomes possible to create an ever growing world as it manages memory well enough_co_ so one could for instance as a game manager push new terrain they have developed to the server which then sends it out as a behind the scenes client update and have it load in to all the clients without them having to reload_co_ this is my planned route and it works in theory_co_ I am confident it will in practice._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the input guys!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thephox1982","Date":"2014-06-18T22:44:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Started the work about 2 months ago ish_co_ using Three.js and raycasting for terrain which I will add slope restriction and jump sequence and such to_co_ but thanks for the advice_co_ it works rather well_co_ even used raycasting to keep camera above terrain._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-20T21:50:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_But I was wondering. It is possible that the terrain mesh detects the collision with object (character)? This could may be help_co_ but I don_t_t know if this would cost dear or not._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I start a think for my project or I get soon a need to handle everything collision_co_ gravity_co_ physics._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thephox1982","Date":"2014-06-20T22:34:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_43567_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_5385_qt_ data-ipsquote-username_eq__qt_dad72_qt_ data-cite_eq__qt_dad72_qt_ data-ipsquote-timestamp_eq__qt_1403301048_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_But I was wondering. It is possible that the terrain mesh detects the collision with object (character)? This could may be help_co_ but I don_t_t know if this would cost dear or not._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I start a think for my project or I get soon a need to handle everything collision_co_ gravity_co_ physics._lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m sorry but I don_t_t understand what you mean._lt_/p_gt__lt_p_gt_The way I have my code setup for detecting terrain collision is based from the player character model_co_ it checks in real time the distance between the detected vertices of the terrain mesh Y (vertical axis)_co_ if the character is below that it places the character above it_co_ it has no performance impact and it isn_t_t noticeable visually as it does the correction before the new frame is rendered._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also as far as physics is concerned_co_ you could write your own bit like I am using raycasting as from what I_t_ve seen is that not one HTML5 based physics engine out there (at least for free) has huge performance issues with convex hull type objects or don_t_t support it at all_co_ so I gave up that route and found I can easily do it with raycasting then expand it to emulate gravity when jumping and falling from high places. If choosing this route do the emulation math in a new thread using a web worker. As a rule of thumb I try to do any complex math and also any repeat math processes in a math thread for performance reasons._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also kinda not related but kinda related_co_ if using Math.PI more than once in your code_co_ make it a global and reuse it as PI doesn_t_t change_co_ so I have code like_sm_ var rotation_z _eq_ PI * 0.5_sm__lt_/p_gt__lt_p_gt_Rather than_sm_ var rotation_z _eq_ Math.PI * 0.5_sm__lt_/p_gt__lt_p_gt_Do this especially when in a render loop so that PI doesn_t_t need to be calculated each frame!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-20T23:09:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Sorry I build sentences a little complicated in french to translate in English sometimes._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_But you understand what I mean. I wonder for my project which is also to make a MMORPG coupled to a Editor _qt_CastorEngine_qt_._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I am interested in your solution_co_ if you want well tell me more_co_ or give examples._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thank you_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thephox1982","Date":"2014-06-21T00:22:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_43576_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_5385_qt_ data-ipsquote-username_eq__qt_dad72_qt_ data-cite_eq__qt_dad72_qt_ data-ipsquote-timestamp_eq__qt_1403305793_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_Sorry I build sentences a little complicated in french to translate in English sometimes._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_But you understand what I mean. I wonder for my project which is also to make a MMORPG coupled to a Editor _qt_CastorEngine_qt_._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I am interested in your solution_co_ if you want well tell me more_co_ or give examples._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Thank you_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well I don_t_t yet have an exact solution per se_co_ but once I get something constructed I_t_ll try and remember to update here more about how I did it._lt_/p_gt__lt_p_gt_Also if you are interested you could help out with my MMO or at least look at the code as it develops and take from it_co_ it_t_s open source! _dd_-)_lt_/p_gt__lt_p_gt_See my signature for more information._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yomotsu","Date":"2014-06-26T14:17:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hi there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_in these days i_t_m trying to make a game physics plugin for three.js_co_ and it might be helpful_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_WASD to move_co_ Space to jump_co_ mouse drag to rotate._lt_/p_gt__lt_p_gt_plus_co_ mesh importer is available_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//yomotsu.github.io/threefield.js/example/5_terrain.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//yomotsu.github.io/threefield.js/example/5_terrain.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_it still needed optimization tough..._lt_/p_gt__lt_p_gt_you can see the code_co_ and feel fee to send pull requests_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/yomotsu/threefield.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/yomotsu/threefield.js_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-26T15:42:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_What is for Three.js is does not necessarily for babylon.js._lt_/div_gt__lt_br_gt__lt_div_gt_May be you could write for Babylon this plugin._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_But thanks for sharing.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]