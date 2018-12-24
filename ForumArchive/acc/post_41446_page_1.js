[{"Owner":"Edwin","Date":"2018-11-22T16:44:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti need to create a 3D image with the elevation data provided by google in meters unit. I don’t want to use heightmap image. I need to create it with the xyz coordinates. The elevation value coming from the dem api are in meters. I don’t know how to calculate the x and z corresponding to this elevation value in meters.Please help me with some examples.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-22T17:29:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ welcome to the forum.  Those structures are called _qt_heightMap_qt_ and _qt_displacementMap_qt_ in BabylonJS.  Sometimes two words... _qt_height map_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can do a _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/index.php?app_eq_core&amp_sm_module_eq_search&amp_sm_controller_eq_search&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_16_co_28_co_29_co_30_co_31_co_38_qt_ rel_eq__qt__qt__gt_forum search_lt_/a_gt__co_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_docs search_lt_/a_gt_ or _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/playground/_qt_ rel_eq__qt_external nofollow_qt__gt_playground search_lt_/a_gt_... for those terms.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe basic playground demo for height maps... is at_dd_  _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#95PXRY%230_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#95PXRY#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImporting tiff files... I don_t_t know about that_co_ sorry.  Stay tuned for more comments.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ feel free to edit the TOO LONG title/subject field...  for your first post.  (thx).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Edwin","Date":"2018-11-23T00:31:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks wingnut_co_ actually I don’t want to create it with the heightmap image. I want to create it with xyz geographic coordinates. Now I am confused about to create x and z value corresponding to the elevation values that are in meters. The elevation points I am getting from the Geotiff file. I am reading that Geotiff file with Geotiff.js library.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Calsa","Date":"2018-11-23T04:39:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just was looking into this myself a few months ago_co_ though I was pulling from offline open source ASTER Sat Images as Google  / Bing API Costs $ and as I am working in a fairly remote part of Madagascar right now internet is not reliable (often not existent)_co_ so in my case everything has to be designed to work offline _dd_x\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAndy Beaulieu had a nice tutorial with code to pull from Bing API_dd_ _lt_a href_eq__qt_http_dd_//www.spritehand.com/2013/12/bing-3d-maps-using-webgl-and-babylonjs.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.spritehand.com/2013/12/bing-3d-maps-using-webgl-and-babylonjs.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Google API is obviously are not identical but under the hood they have similar functionality / way of doing things. It should give you some ideas if nothing else.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Dynamic Terrain Plugin is a good place to start for creating terrain tiles from height maps_co_ using the metadata in the GeoTIFF you can set vertical Scale  &amp_sm_ AGL of each tile so they line up _dd_ Dynamic Terrain_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/extensions/dynamic_terrain_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/extensions/dynamic_terrain _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a cool demo from Dotvision_dd_ _lt_a href_eq__qt_http_dd_//live2.dotvision.com/live/virtualTour?guid_eq_f0045a3c-6c11-4329-b881-8d8a170538fb&amp_sm_lang_eq_fr&amp_sm_intro_eq_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//live2.dotvision.com/live/virtualTour?guid_eq_f0045a3c-6c11-4329-b881-8d8a170538fb&amp_sm_amp_sm_lang_eq_fr&amp_sm_amp_sm_intro_eq_true_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHappy Coding!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Edwin","Date":"2018-11-23T07:38:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Calsa_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the help. I have tried all these above but didn_t_t get anything. Actually i am not able to calculate x_co_y and z coordinates. my elevation point is coming in meters(unit). from the geotiff file i get the rasterData with the size of width * height. now i am confused how to project it with x and y so that i can get the correct elevation on texture image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Edwin","Date":"2018-11-23T08:11:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi I am trying to do this like the below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FJNR5%23269_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FJNR5#269_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you please help me to get elevation data calculated correctly without using noise library ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-23T13:52:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe elevation scale needs to be calculated from the data you exported from the api.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet s say you export a 2 * 2 m area_co_ it means that x and z would be between between 0 and 2 so you need to remap them from 0 - 90 to 0 - 2_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FJNR5%23287_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FJNR5#287_lt_/a_gt_ As the elevation is in meter it does not need to change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat said it is still strange to have lots of 0 in those data creating weird discontinuities everywhere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]