[{"Owner":"jeremybyington","Date":"2017-04-05T00:15:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is my first time posting because usually I find everything in the documentation (really excellent_co_ by the way). I have a scene with four worms in it and they are all individual meshes with skeletons. I manually removed three of them from the babylon file to reduce the file size and I recreate them as clones later but it seems like I am having difficulty attaching the skeletons to them. Can someone direct me to the documentation on how to attach a skeleton to a mesh? What is currently happening is that all of the worms are locked in the same skeletal position (not being animated) and doing something like _lt_br /_gt__lt_br /_gt_\n\tworms[0].clone(_t_worm4_t_)_sm__lt_br /_gt_\n\tworms[3].skeleton _eq_ scene.getSkeletonById(2)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdoes nothing. I should note_co_ worm1 is using skeleton id#0_co_ so that is not the cause.  I also found a Mesh.applySkeleton() method that I tried and that also did nothing. Am I missing a step? Nothing is frozen at all_co_ either.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/58e435eb5c6a5_ScreenShot2017-04-04at7_09_39PM.png.e5694daa17f5bc683091a0b1963c3c14.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12346_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/58e435eb7ef84_ScreenShot2017-04-04at7_09_39PM.thumb.png.2b8c2812b720d7cb478f043ccfa7969f.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screen Shot 2017-04-04 at 7.09.39 PM.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borislav","Date":"2017-04-05T10:01:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEww... Disgusting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI sadly don_t_t know how to fix this problem _dd_(.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-04-05T10:47:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis PG might be helpful_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ZBQR3%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ZBQR3%237_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jeremybyington","Date":"2017-04-05T13:05:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn that playground (broken on my iPad_co_ by the way) it is showing cloning the same mesh and skeleton_co_ and that method is essentially what I did but in my situation I have three skeletons in the scene that were never used and I am simply trying to attach them again  but they don_t_t seem to be adjusting to the new skeleton positions_co_ but when inspecting the mesh object the skeletons that I want are there. Is there something that happens in the cloning of a skeleton that takes place_co_ or is there something that does _lt_em_gt_not _lt_/em_gt_happen to a skeleton during loading if there is not mesh attached to it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for all your help!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-04-05T13:15:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnother PG that could help_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#25M97N%2357_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#25M97N#57_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI got that from this thread_dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/22487-blender-exporter-problems-with-many-animations/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jeremybyington","Date":"2017-04-05T20:03:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat example had something new for me to try_co_ but unfortunately still did not work. My goal was to reduce the downloaded file size and_co_ as it turns out_co_ my designer was able to reduce the size by about 50% by decimating the worms and the tunnels they are set in. So for now_co_ with my deadlines_co_ that is going to have to do. Eventually_co_ I would like to solve this mystery_co_ though_co_ because in theory it seems like it should have been as easy as Mesh.skeleton _eq_ Scene.getSkeletonById(skeletonId) but that did not work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ thanks for your guys_t_ help!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]