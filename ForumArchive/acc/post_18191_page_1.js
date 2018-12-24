[{"Owner":"DezOnlyOne","Date":"2015-10-27T13:41:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When swapping out meshes with large animations After a few swaps I get an OOM error. By swapping out animations I mean dispose of the previous mesh and load a new one. This was also an issue in THREE.js_co_ but seems to be less of an issue because Babylon seems to handle files with large amounts of animations much better. However_co_ it appears that both leave these animations in memory even after disposing of the mesh. What is the best way to dispose of a mesh with say_co_ 20k frames of animation_co_ and load another without getting an OOM. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance for the help. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-10-27T14:37:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Might depend on the type of Animation_co_ ANIMATIONTYPE_VECTOR3 or ANIMATIONTYPE_QUATERNION_co_ for things like position / rotation / scale_co_ or ANIMATIONTYPE_MATRIX for skeletal._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the case of skeletal_co_ the mesh does not _qt_own_qt_ the animation_co_ it is part of the BABYLON.Skeleton object.  BABYLON.Mesh.dispose() not explicitly dispose the skeleton (or anything on the CPU) _co_ but it should not have to.  If all uses / references held of the BABYLON.Animation object were to fall out of scope_co_ then it would be a candidate for garbage collection._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Remember_dd_  This IS NOT C++ where you are responsive for releasing your own memory.  The VM handles that.  Mesh.dispose() is only explicitly releasing resources on the GPU._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If this is skeletal animation_co_ scene.skeletons[ ] will need to splice out the reference 2 the object_co_ so it can be garbage collected._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-27T14:40:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think there is something right in the question._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looking at the code_co_ it seems like animatables stay in an array in the scene and are never disposed. They should also be stopped before the mesh is destroyed_co_ which I don_t_t see as well._lt_/p_gt__lt_p_gt_I can push a fix (shouldn_t_t be a problem)_co_ but I want to see if DK has a different approach._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-27T14:41:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you please share a repro somewhere? Can you please also push a repro sample with the babylon.max.js version?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We_t_re going to investigate._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-10-27T15:18:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I will put one together in a bit. Thanks guys. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-27T15:24:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Agree with Raanan_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-27T16:02:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll fix it later._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-27T16:08:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m on it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-27T16:15:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do you reuse your skeletons? because else_co_ you need to remove them from the scene as well_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-10-27T19:22:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I put together a package. I can_t_t get the cross origin proxy site to keep working over time. So I packaged everything up into a zip file. It is too big to attach to thisforum so here is the link. There are too buttons to load one of the 2 patients. alternating between them multiple times will produce the OOP error. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//protest.jht.com/duke/babylonswap.zip_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//protest.jht.com/duke/babylonswap.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-27T21:40:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_can you check with the latest version I published on the repo? (and can you as well try to dispose skeletons if you are no more using them)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-10-27T23:34:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Added the dispose to the removePatient() function. Still getting the OOM error. _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function removePatient() {    if (patient) {        skeletons.forEach(function(s){ s.dispose()})_sm_        meshes.forEach(function(m){ m.dispose()})_sm_        meshes _eq_ null_sm_        skeletons _eq_ null_sm_        patient _eq_ null_sm_    }}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-28T00:53:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you do a memory profile using Edge or Chrome to see where the memory goes_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-10-28T03:46:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am not totally sure how to read the memory snapshot_co_ but it looks like the memory is tied up with Skeleton_co_ bones_co_ and animation. What I did was load the bigger patient_co_ and then removed him. Disposing of skeletons and meshes. There is nothing visible on screen when I took this snapshot_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Attached is a screenshot of the snapshot. I can upload the actual snapshot somewhere for you to download_co_ but it is 59MB. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2015/post-16887-0-85256200-1446003964.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2015/post-16887-0-85256200-1446003964_thumb.jpg_qt_ data-fileid_eq__qt_5436_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-16887-0-85256200-1446003964_thumb.j_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-10-28T15:53:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If I am reading this correctly_co_ all or a lot of the space is in the Float32Arrays backing all the Matrixs objects.  The number of Matrix objects is pretty high_co_ and is nearly identical to the number of Float32Arrays._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wonder if they might still be in scene._activeSkeletons?  SmartArray.reset() called every frame does not actually make changes to SmartArray.data.  Could still be there._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-28T20:14:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve just tested with your test scene and when I call your _qt_removePatient_qt_ function the memory seems to be freed_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-10-28T20:16:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s odd. I used that function before I made the heap snapshot above. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-28T20:19:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I moved from 52 mb to 7mb_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-10-29T13:55:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For me the heap snapshot size was relatively low_co_ for a couple of times alternating between loads. It starts to get bigger after several times. Eventually it will crash chrome for me. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2015/post-16887-0-46225000-1446126920.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2015/post-16887-0-46225000-1446126920_thumb.jpg_qt_ data-fileid_eq__qt_5443_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-16887-0-46225000-1446126920_thumb.j_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-11-11T15:53:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am still having the same issue. I have tried everything I know how to do. It seems that there is still this residual animation information that is left behind. I tried to delete all the skeletal animations_co_ but nothing seems to work. I am not sure how many others have similar issues to mine who has tens of thousands of frames of animations that they need to have available_co_ but it seems like I am crossing some threshold_co_ or ding this completely wrong. I updated my babylonswap package for an example here_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//protest.jht.com/duke/babylonswap.zip_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//protest.jht.com/duke/babylonswap.zip_lt_/a_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I also uploaded it so that could be viewed online. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//protest.jht.com/duke/babylonswap/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//protest.jht.com/duke/babylonswap/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When you load the page the app will load the patientA automatically. The problem is that in the application that I am building_co_ I need to be able to swap files multiple times. As many times as my end user would like to. So when you click the button to load patientB_co_ then back to A_co_ then back to B and so on... You end up with an OOM error. This same thing was happening to me in threejs. Babylon works much better for my needs_co_ but this one lingering issue_co_ will make or break a HUGE project._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just need to know what I am doing wrong here. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_please help_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-11T17:07:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Let_t_s work by eliminating multiple sources._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is it working when there is no animation?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-11-11T19:03:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes. It works fine with no animation. We created a test with very high poly shapes. A teapot and a torus. Both about 180MB babylon files. There is of course a dreop in frame rate while the file loads but otherwise no OOM error._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-11T22:40:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok so now can you do it with a single animation (like position animation) ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-11-11T23:17:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I cannot do it myself with this model_co_ I would need the help of one of our artists_co_ but I could create a very simple animation to try with shapes. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I setup 2 files with 10000 frames of animation_co_ and around 80k verts. I can_t_t do skeletal animations because I don_t_t have the know how_co_ and the artists have gone home for the evening. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The files that I did setup seem to swap fine with just an animation of their position. They were very big as well(50MB &amp_sm_ 170MB)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-11T23:23:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok so seems like the problem comes from skeletons animation_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So my next ask_dd_ can you animate just one single bone? If the issue appears please send me the file you used along side your code_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]