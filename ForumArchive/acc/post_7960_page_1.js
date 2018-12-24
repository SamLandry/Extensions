[{"Owner":"reddozen","Date":"2014-07-19T01:50:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is very similar to the last issue where the top of the statue was missing. In this case_co_ parts of the scene aren_t_t visible unless the view angle is correct. I_t_m not sure I can reproduce this with a smaller scene. A link to examples is below._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Without Octree_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-5217-0-25284200-1405734503.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-5217-0-25284200-1405734503.png_qt_ data-fileid_eq__qt_2239_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5217-0-25284200-1405734503.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With Octree (press the octree button when it_t_s done loading._lt_/p_gt__lt_p_gt_After the scene loads (almost 250000 verts)_co_ press the Octree button to turn them on. You may have to click it a few times._lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-5217-0-45514600-1405734517.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-5217-0-45514600-1405734517.png_qt_ data-fileid_eq__qt_2240_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5217-0-45514600-1405734517.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-19T10:19:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I had a similar problem that I solved with_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_for (var i _eq_ 0_sm_ i &lt_sm_ mesh.getChildren().length_sm_ i++) {    octree.dynamicContent.push(mesh.getChildren()[i])_sm_    mesh.getChildren()[i].useOctreeForCollisions _eq_ true_sm_}_lt_/pre_gt__lt_p_gt_You must also set MaxZ of the camera to see._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-19T12:53:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_But if you add children as dynamic content aren_t_t thy ignored by the octree? These map objects are static within the game_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-19T13:16:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I had the same problem but I used a character to animate._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/7764-mesh-which-disappears/_qt__gt_http_dd_//www.html5gamedevs.com/topic/7764-mesh-which-disappears/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_try also_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_camera.minZ _eq_ 0_sm__lt_/p_gt__lt_p_gt_camera.maxZ _eq_ 5000_sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-19T13:34:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I can_t_t do a max of 5000 do to the scale of my scene. I would have less than 10 FPS._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-19T17:46:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you give me the name of the object that disappears ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is extremely hard to debug on complex scene with minifed version of babylon.js _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-19T18:10:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You_t_re favorite guy... dongsang disappears... lol_lt_/p_gt__lt_p_gt_But most of the scene outside what looks to be the first octree zone has most objects disappearing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_prt_dongsang.babylon_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-19T18:14:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll look into setting up a kind of _qt_mouseover_qt_ to show object name feature. Would it help if i used the debug on babylon 13 instead?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there anything specifically that would help you look at larger scenes (this town represents 1/5 of the total map that this will be)? I only see my scenes getting larger and in some cases it may only be possible to bring out the bug on that scale. I want to make it as easy for you to look at as possible_co_ and I_t_ll work out any tools I need to._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could this have something o do with instances and octrees maybe?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T17:02:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The best for me will be to use non minified version of babylon.js_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-21T17:06:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_But aren_t_t all the octree changes in 1.13? I didn_t_t compile a copy of 1.13 if that_t_s what you_t_re considering _qt_minefield_qt__co_ it_t_s the one provided on the GIT. Or are you saying that I should use 1.12 for testing?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T17:22:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To debug instead of having just one file it is easier for me to work with separated files (not babylon.js but babylon.camera.js etc....)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-21T17:33:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok I_t_ll look into using the individual package files instead of the precompiled file._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T19:40:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thank you_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-21T23:56:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I changed it_co_ but now nothing loads when I call octrees. The scene will load fine if I don_t_t call the octrees._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-22T00:12:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Your scene does not find the images reddozen._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-22T02:50:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_only some of them. It still loads normally when you don_t_t call octrees through this method._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-22T10:23:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I had waited 3 to 4 minutes and the scene was not charging_co_ I don_t_t insist and I prefer to warn you._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-22T13:09:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks. I_t_m not sure what those materials are to be honest... they don_t_t have extensions on them... I think that they_t_re coming across from my Unreal engine exporter_co_ but there_t_s nothing named that in ANY of the texture packages in me unreal files... very strange. I_t_ll probably just end of deleting them from the meshes_co_ and write it off as a glitch._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The scene loads VERY slow without the compiled version of babylon. This is what DK needed to debug the scene though_co_ so I will do whatever he needs to make it easier for him to look at._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-22T13:47:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes I understand. but when you say the scene is very long a load_co_ this mean how long. because at the end of 4 minute_co_ I told myself that the scene won_t_t it load. This could this happen if other person tests your scene._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-22T14:59:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You are correct_co_ this scene is not loading currently. For whatever reason_co_ when I enable the octrees using this method_co_ nothing loads. If I were to disable octrees_co_ it would load after 2~3 minutes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I need to know why octrees are failing now. I have a try/catch in there to keep the javascript from crashing_co_ so it_t_s not that. The try/catch was my only solution for the problem with async loading of the models through import mesh causing a race condition and the octree call beating the file loads._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-22T16:51:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Right now I cannot debug_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could you reduce the complexity? just one object or two perhaps?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-22T17:15:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll try. I_t_ll let you know._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-30T00:12:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sooo... few questions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So far I have around 1.5~1.6 million vertexes in my scene. Without octrees I_t_m running at about 20~30FPS. With them on it drops to 5~8FPS_co_ and some of the meshes disappear as I_t_ve reported._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) What would cause the the frame rate to drop so much if these are supposed to help speed up a scene by eliminating things that aren_t_t visible etc?_lt_/p_gt__lt_p_gt_- Should backfaceculling be enabled on the meshes? (Is it seeing through walls)_lt_/p_gt__lt_p_gt_- Should mesh.useOctreeForRenderingSelection be included on all the meshes in the scene?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2) Could the meshes disappearing be because they_t_re translated prior to being exported from 3DS Max_co_ and babylon thinks that their center is somewhere else (assuming that it uses the center of the mesh for octree assignment)?_lt_/p_gt__lt_p_gt_- What is used to determine what meshes are in what octrees_co_ and how do those rules apply to visibility?_lt_/p_gt__lt_p_gt_-- Example_dd_ A mesh is part of tree 1 and tree 2. If tree 1 says that it_t_s visible_co_ then tree 2 says it_t_s not_co_ if tree 2 is the last one to assign a visibility_co_ then is it not visible?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-30T00:38:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1/ the octree help selecting meshes. If you only have a few meshes then this is not a good idea to create an octree. If you have_co_ let_t_s say_co_ more than 200 meshes then creating a simple octree can be ok._lt_/p_gt__lt_p_gt_backFaceCulling is only useful with transparent meshes_lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_useOctreeForRenderingSelection is for meshes with a lot of submeshes_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_2/babylonjs compute a bounding box for every mesh. If an object is not moving then octree could be useful else you have to put your object in the dynamicMeshes of your octree_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_There is only one octree per scene (and one octree per mesh if you activate it)_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-07-30T00:51:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I guess for 2 I should have been more clear. I_t_m asking more how it knows which zone of the octree the mesh is in. None of my meshes are moving._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This might help figure out what_t_s going on... the walls floating above are my invisible objects that all my visible scene meshes are instanced from. They shouldn_t_t be visible at all._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-5217-0-01011900-1406681543.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-5217-0-01011900-1406681543_thumb.png_qt_ data-fileid_eq__qt_2338_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5217-0-01011900-1406681543_thumb.pn_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]