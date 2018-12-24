[{"Owner":"han7a","Date":"2016-01-04T18:29:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all_co_ _lt_span_gt__lt_span_gt_I would like_lt_/span_gt_ to load _lt_span_gt_the_lt_/span_gt_ _lt_span_gt_textures for a_lt_/span_gt_ _lt_span_gt_cubeTexture_lt_/span_gt_ _lt_span_gt_in_lt_/span_gt_ _lt_span_gt_different sizes_lt_/span_gt__lt_span_gt__co__lt_/span_gt_ _lt_span_gt_so that_lt_/span_gt_ first _lt_span_gt_only_lt_/span_gt_ _lt_span_gt_a small_lt_/span_gt_ _lt_span_gt_resolution_lt_/span_gt_ _lt_span_gt_is loaded and_lt_/span_gt_ _lt_span_gt_then_lt_/span_gt_ _lt_span_gt_the_lt_/span_gt_ normal _lt_span_gt_textures_lt_/span_gt__lt_span_gt_. like LOD_lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_I would like to use the _lt_span_gt_assetsManager?_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_var assetsManager _eq_ new BABYLON.AssetsManager(scene)_sm__lt_br_gt_    var textureTask _eq_ assetsManager.addTextureTask(_qt_image task_qt__co_ _qt_example/blabla.png_qt_)_sm_//_lt_span style_eq__qt_color_dd_#ff8c00_sm__qt__gt_?url_lt_/span_gt__lt_br_gt_    textureTask.onSuccess _eq_ function(task) {_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt_       _lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt_//_lt_span style_eq__qt_color_dd_#ff8c00_sm__qt__gt_my skybox function _lt_span_gt__lt_span_gt_elsewhere_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_br_gt_        createSkybox(task.texture)_sm_// _lt_span style_eq__qt_color_dd_#ff8c00_sm__qt__gt_dont work_lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt__lt_span_gt_console.log(_qt_cubetexture loaded_qt_)_sm__lt_/span_gt__lt_br_gt_    }_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt_    assetsManager.load()_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_//_lt_span style_eq__qt_color_dd_#ff8c00_sm__qt__gt_my skybox function _lt_span_gt__lt_span_gt_elsewhere_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt__lt_span_gt_ createSkybox(_qt_example/blabla_qt_)_sm__lt_span_gt_//_lt_span style_eq__qt_color_dd_#ff8c00_sm__qt__gt_ fine_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-01-05T08:12:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You could solve it on your end (as Babylon doesn_t_t offer this functionality_co_ as far as I know) - check if the user is on mobile and provide a different url or a whole configuration for each device type._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"han7a","Date":"2016-01-05T17:16:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok thanks_co_ _lt_span_gt__lt_span_gt_I_t_ll check if mobile or desk and just generate different skyboxes_lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-01-06T01:43:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@han7a - Did you get your question answered?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I read your message differently... so I am checking._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are you asking how to get skybox textures to load in low-rez quick/first_co_ then maybe medium-rez_co_ and then finally full-rez? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Essentially... during-load texture LOD changes? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And you want that to work on mobile and desktop_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or_co_ none of that?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Likely_co_ I misunderstood the question.  Or did Raanan?  Or is everything fine? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Where am I?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Never mind me_co_ I_t_m just the telephone guy_co_ climbing a local pole.  We had a report of possible mis-communicating_co_ so I had to test the wires.  heh_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jessepmason","Date":"2016-01-06T02:00:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Wingnut if you feel like tackling that_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_111495_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19642_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1452044616_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_..........._lt_/p_gt__lt_p_gt_Are you asking how to get skybox textures to load in low-rez quick/first_co_ then maybe medium-rez_co_ and then finally full-rez? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Essentially... during-load texture LOD changes?_lt_/p_gt__lt_p_gt_........._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_I might find it useful _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"han7a","Date":"2016-01-06T08:30:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Wingnut - yes _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_span_gt__lt_span_gt__co_ so both_co_ during load process first quick and fast in low res then medium and then finally fully res. _lt_span_gt__lt_span_gt_That was my_lt_/span_gt_ _lt_span_gt_thought_lt_/span_gt_ _lt_span_gt_at the beginning_co__lt_span_gt_ _lt_span_gt_then_lt_/span_gt_ _lt_span_gt_for_lt_/span_gt_ _lt_span_gt_mobile_lt_/span_gt_ _lt_span_gt_we stop_lt_/span_gt_ the _lt_span_gt_process_lt_/span_gt_ _lt_span_gt_in_lt_/span_gt_ _lt_span_gt_medium or low res. _lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_so_co_ _lt_span_gt__lt_span_gt_I wanted to do_lt_/span_gt_ _lt_span_gt_it_lt_/span_gt_ _lt_span_gt_with the_lt_/span_gt__lt_/span_gt__lt_/span_gt_ assetsManager _lt_span_gt_if he_lt_/span_gt_ _lt_span_gt_could_lt_/span_gt_ load _lt_span_gt_cubemap_lt_/span_gt_ _lt_span_gt_textures_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-01-07T23:42:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well guys_co_ I have no idea how to do that.  Sorry. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am far from an expert_co_ but I would suspect that you would not be able to use the assetsManager_co_ but maybe pieces of it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would think the order of events might be like this..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1.  Get a skybox with colors only_co_ quick.  Render it.  (or provide ANYTHING to entertain the user during loads_co_ like SVG spirograph flowers)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_2.  Do device checking... try to determine your needed max rez._lt_/p_gt__lt_p_gt_3.  Change out the skybox texture to low rez TEXTURES.  Render it._lt_/p_gt__lt_p_gt_4.  Determine if you want to load the next rez level._lt_/p_gt__lt_p_gt_5.  Load and render hi-rez as necessary._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As Raanan mentioned_co_ somewhere in the sequence... you will know your device.  At that point_co_ you could completely branch_co_ and essentially _qt_stock_qt_ a scene... specifically designed for mobiles_co_ or specifically designed for desktop.  Essentially_co_ two different scenes.  Stay modular_co_ of course_co_ so you get maximum code reuse.  Special config.  Mobile profile or desktop profile.  *shrug*  Sorry that I don_t_t have many/any usable ideas_co_ guys._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-08T15:56:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Agree with Wingy_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jessepmason","Date":"2016-01-08T17:52:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thats kinda what I had in mind so thanks for posting!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"han7a","Date":"2016-01-08T18:28:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span_gt__lt_span_gt_I_lt_/span_gt__lt_span_gt__t_m doing_lt_/span_gt_ _lt_span_gt_a_lt_/span_gt_ _lt_span_gt_360_lt_/span_gt_ _lt_span_gt_panorama_lt_/span_gt_ _lt_span_gt_with several_lt_/span_gt_ _lt_span_gt_rooms_lt_/span_gt__lt_span_gt__co_ text_lt_/span_gt_ _lt_span_gt_photo_lt_/span_gt_ _lt_span_gt_info_lt_/span_gt_ _lt_span_gt_points_lt_/span_gt_ _lt_span_gt_video etc. like this.._lt_/span_gt_ _lt_a href_eq__qt_http_dd_//www.bmw-autosalon.ch/de-de/stand/_qt_ rel_eq__qt_external nofollow_qt__gt__lt_span_gt_ _lt_/span_gt__lt_/a_gt__lt_/span_gt__lt_a href_eq__qt_http_dd_//www.bmw-autosalon.ch/de-de/stand/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.bmw-autosalon.ch/de-de/stand/_lt_/a_gt_ _lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_.._lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt_and_lt_/span_gt_ _lt_span_gt_there you can see_lt_/span_gt_ _lt_span_gt_how_lt_/span_gt_ _lt_span_gt_the images_lt_/span_gt_ _lt_span_gt_are loaded_lt_/span_gt_ _lt_span_gt_progressively. _lt_span_gt__lt_span_gt_so_lt_/span_gt_ _lt_span_gt_I wanted_lt_/span_gt_ _lt_span_gt_something similar_lt_/span_gt_ _lt_span_gt_with a maximum_lt_/span_gt_ _lt_span_gt_code_lt_/span_gt_ _lt_span_gt_reuse_co_ _lt_span_gt__lt_span_gt_and_lt_/span_gt_ _lt_span_gt_with_lt_/span_gt_ _lt_span_gt_the ability_lt_/span_gt_ _lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_to save_lt_/span_gt_ _lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_ _lt_span_gt_unnecessary_lt_/span_gt_ _lt_span_gt_resources_lt_/span_gt_ _lt_span_gt_in_lt_/span_gt_ _lt_span_gt_small_lt_/span_gt_ _lt_span_gt_devices._lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_the whole thing is_lt_/span_gt_ _lt_span_gt_quite simple_lt_/span_gt_ _lt_span_gt_with_lt_/span_gt_ _lt_span_gt_Babylon_lt_/span_gt__lt_span_gt__co__lt_/span_gt_ _lt_span_gt_and_lt_/span_gt_ _lt_span_gt_does not have much_lt_/span_gt_ _lt_span_gt_code_lt_/span_gt__lt_span_gt__co_ so I_lt_/span_gt_ _lt_span_gt_can write a_lt_/span_gt_ _lt_span_gt_version_lt_/span_gt_ _lt_span_gt_for each device._lt_/span_gt_ _lt_span_gt_but I wanted_lt_/span_gt_ _lt_span_gt_one for_lt_/span_gt_ _lt_span_gt_all _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_ _lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-01-08T18:31:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just to add a bit of Wingnut philosophy_co_ a few of us have heard of the term _qt_MVC_qt_.  It stands for Model-View-Controller.  (Model !_eq_ mesh.  We are talking about the DATA modeI... which we could call the Scene Graph).   I hobbied in XUL for a number of years_co_ particularly in the _qt_views_qt_ department.  I made GUI _qt_listViews_qt_ and _qt_treeViews_qt_ and dialogs... and pretty much got a lot of tumors from it.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To get to the point... let_t_s talk about the _qt_view_qt_ part of MVC.  If you think about it_co_ you can render a BabylonJS scene... in HTML.  In Ascii!  In SVG.  In VRML_co_ or X3D.  A view is simply a representation of a model (scene graph)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ a person might start with a base class called _qt_View_qt_.  It has a connector to _qt_SuperFast Universal Proxy Data-Sniffer_qt_ class_co_ but that_t_s for later.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Think about BabylonJS.Scene.  Know why that puppy sits at the top level in SRC/ ... right next to Engine.ts?  Cuz it earned the right to be there!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Scene is a big dog class... but that doesn_t_t mean we can_t_t still abuse it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I can_t_t remember what point I was trying to make_co_ other than... a _qt_view_qt_ can be a snap-on connector.  A plugin.  A module.  Want to render your scene in HTML (as a big table - no webGL)?  Just route through the HTML _qt_view_qt_ plugin.  Want it in SVG (maybe as an arc graph)?  Same deal - route through the SVG view plugin._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The same COULD work for your mobile vs. desktop thing.  The mobile _qt_view-class_qt_ would possibly make heavy use of Babylon_t_s LOD features._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just thinkin_t_ and yappin_t_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jessepmason","Date":"2016-01-08T20:22:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wingnut you are very entertaining_co_ I think I followed the references _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2016-01-08T22:09:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi han7a_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don´t know much about HTML5 but an suggestion would be use a mix of &lt_sm_picture&gt_sm_ label and Babylon_co_ because &lt_sm_picture&gt_sm_ allow to set diferent images and let the navigator choose what image is closer to the size of the screen._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It seems easy to use_dd_ _lt_a href_eq__qt_http_dd_//www.hongkiat.com/blog/html5-picture/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.hongkiat.com/blog/html5-picture/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In this example you can shrink the navigator window to see diferent positions (images) of a kitty_dd_ _lt_a href_eq__qt_http_dd_//googlechrome.github.io/samples/picture-element/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//googlechrome.github.io/samples/picture-element/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_crazy idea but I think its possible. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-01-09T17:50:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am off-topic_co_ but_co_ han...  _lt_a href_eq__qt_http_dd_//www.bmw-autosalon.ch/de-de/stand/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.bmw-autosalon.ch/de-de/stand/_lt_/a_gt_ is nice nice nice!  Yum!  Well done!  Having a mouse dead-zone in the center of the pointerDown area might be cool.  Also_co_ maybe a pan-sensitivity slider / adjust.  Panning speeds got a little fast/sensitive for me_co_ and I felt a bit sea-sick.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But... wow!  Real nice_co_ a tasty interaction interface_co_ and beautiful photography! _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"han7a","Date":"2016-01-10T11:22:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@wingnut_co_ _lt_a href_eq__qt_http_dd_//www.bmw-autosalon.ch/de-de/stand/_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.bmw-autos...ch/de-de/stand/_lt_/a_gt_ _lt_span_gt__lt_span_gt_No_co__lt_/span_gt__lt_span_gt_ I have_lt_/span_gt_ _lt_span_gt_not made_lt_/span_gt_ _lt_span_gt__lt_span_gt__lt_span_gt_this_lt_/span_gt__co_ it was an _lt_span_gt_example_co_ _lt_/span_gt__lt_/span_gt_mine_lt_/span_gt_ _lt_span_gt_is not finished yet. _lt_span_gt__lt_span_gt_I_t_ll post_lt_/span_gt_ _lt_span_gt_when done._lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_@hit2501 _lt_span_gt__lt_span_gt_that could be a nice_lt_/span_gt_ _lt_span_gt_approach_lt_/span_gt__lt_span_gt__co__lt_/span_gt_ _lt_span_gt_I try.. _lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-01-10T13:41:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ahh_co_ sorry han... I jumped to some conclusion. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I like panoramas.  I hope they get as popular as _qt_selfies_qt__co_ someday.  Maybe we_t_ll call them _qt_here-ies_qt_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_   Probably not_co_ though._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jessepmason","Date":"2016-01-10T13:46:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@wingnut      with the push of 360 rigs/cameras you probley aren_t_t wrong...here-ies could be a thing _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"han7a","Date":"2016-03-11T10:41:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_ I have a new problem when I run the application local_co_ chrome and firefox conditionally block the content .. Chrome says_dd_  _qt_ Image from origin _t_file_dd_//_t_ has been blocked from loading by Cross-Origin Resource Sharing policy_dd_ Invalid response. Origin _t_null_t_ is therefore not allowed access. _qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span lang_eq__qt_en_qt__gt__lt_span_gt_Chrome_lt_/span_gt_ block all textures_lt_span_gt__co__lt_/span_gt_ _lt_span_gt_Firefox_lt_/span_gt_ _lt_/span_gt_ _lt_span lang_eq__qt_en_qt__gt__lt_span_gt_just a few_lt_/span_gt__lt_/span_gt__lt_span lang_eq__qt_en_qt__gt__lt_span_gt__co__lt_/span_gt_ IE show all textures_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span lang_eq__qt_en_qt__gt_online _lt_/span_gt_ _lt_span lang_eq__qt_en_qt__gt__lt_span_gt_runs_lt_/span_gt_ _lt_span_gt_everything._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span lang_eq__qt_en_qt__gt__lt_span_gt_is that_lt_/span_gt_ _lt_span_gt_really CORS_lt_/span_gt_? _lt_span_gt_or I_lt_/span_gt_ _lt_span_gt_have missed something_lt_/span_gt__lt_/span_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-03-11T22:15:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wish I had the time and enough experience to develop more quickly in babylon - since I would love to see 2 new extension_co_ which would most likely be used in EVERY bjs scene if these existed. The first would be an extension which identifies device_co_ browser_co_ and most importantly (perhaps only this) device resolution. Many of the posts on this forum deal with issues which are device and resolution dependant. If any developer could automatically identify the display resolution of the device in which they are rendering_co_ this would be invaluable. In addition_co_ then it would be great to know what device_co_ OS_co_ and any other specific of the device.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSecondly_co_ an LOD extension would also be invaluable. Utilizing the first extension_co_ functions which render optimized textures_co_ modifies the optimization and  tesselation of meshes_co_ and other optimizing features such as # of lights_co_ mesh inclusions and exclusions_co_ etc. would be an extension I would use in every scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m doing my very best to try and reach the very baseline of where some of you developers out there are_co_ since it probably takes me 10X as much time to write a new function with any substance. And once I reach this point_co_ I will be happy to contribute beyond the advice I might have from my unique experiences in production. If I thought I were able to accomplish efficiently and in reasonable time_co_ I would love to be able to build such extensions. However_co_ I need to be realistic_co_ as I_t_m already streching my development experience in WebGL and Javascript_co_ in building the applications currently for use in production. Although_co_ the work we_t_re doing on the server side should benefit everyone in the future.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I thought I would mention these two extensions_co_ as they would most likely be used in every scene developed in the future. I_t_m sure they would become a part of the master file eventually_co_ as this is necessary sometime in the future - it_t_s just to mention that now would be better than later if someone more proficient than I could find the time to build these.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]