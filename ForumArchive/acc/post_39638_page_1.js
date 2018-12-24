[{"Owner":"freetoplay","Date":"2018-08-26T05:47:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen I use the Asset Manager to import my meshes_co_ it seems to be positioned at a weird angle vs when I import my meshes via append (see screenshots).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe first screenshot shows what happens when I use the Asset Manager_co_ how do I make it look like the 2nd screenshot?\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/770907776_Screenshotfrom2018-08-2601-44-30.png.feceadb7c8e29a26c32c908fd43dca1d.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_19763_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/770907776_Screenshotfrom2018-08-2601-44-30.png.feceadb7c8e29a26c32c908fd43dca1d.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot from 2018-08-26 01-44-30.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/380309920_Screenshotfrom2018-08-2601-44-49.png.4996b26740e2b6c691c8ee7b02cd7948.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_19764_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/380309920_Screenshotfrom2018-08-2601-44-49.png.4996b26740e2b6c691c8ee7b02cd7948.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot from 2018-08-26 01-44-49.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-26T16:29:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you are using createDefaultCameraOrLight()_co_ like your _qt_camera question_qt__co_ you are using an ArcRotateCamera._lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/cameras#arc-rotate-camera_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/cameras#arc-rotate-camera_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck out the alpha + beta + radius in the image in the docs.  Here is your duck from another angle_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TT2BK1%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TT2BK1#3_lt_/a_gt__lt_br /_gt_\n\tedit_dd_ The difference you are experience may be due to one method creating a new scene and the other appending to existing scene.  You would need to share the full code.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freetoplay","Date":"2018-08-26T17:13:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks again! I have been trying to play with those values_co_ but so far_co_ I have not been able to get it fully facing the front. I am using the math and code from the previous _qt_camera_qt_ thread_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TT2BK1%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TT2BK1#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you have any additional pointers?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-26T17:42:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat that you found which mesh had a good bounding box!  You will need to track which mesh (ie_dd_ .meshes[3]) has the bounding box and then perhaps a beta + alpha in radians.  I am not aware of mesh metadata that exposes preferred viewing angles_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TT2BK1%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TT2BK1#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you are building something to generically load different meshes_co_ here is some of the staging data that remix3D (I think) is using for their meshes to provide a consistent experience_dd__lt_br /_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/image.png.1fab1171bcc0a83b3d0889ba1d0228f4.png_qt_ data-fileid_eq__qt_19770_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19770_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/image.thumb.png.a8b804a65a18ed3f90c027c923a7cc77.png_qt_ alt_eq__qt_image.thumb.png.a8b804a65a18ed3f90c027c923a7cc77.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freetoplay","Date":"2018-08-26T19:23:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI realized that the BabylonJS viewer can do this pretty easily.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//codepen.io/anon/pen/zJqYMW_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//codepen.io/anon/pen/zJqYMW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith the exception of the duck (which seems to have its own set position)_co_ the above code seems to do exactly what I want it to do_co_ given a mesh that doesn_t_t have its own position set. However_co_ it seems like Viewer doesn_t_t support any frameworks yet. _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ Do you think that the Viewer is a better alternative than writing my own viewer_co_ even if it means waiting for framework support?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-26T21:24:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt works on straight up HTML_co_ but it_t_s open source as well.  Which framework are you using?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freetoplay","Date":"2018-08-26T22:41:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried using it with Vue_co_ but there appears to be some conflicts because it uses its own custom DOM element.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-26T23:16:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is some work on loaders in this project_co_ if you check the issues_dd_ _lt_a href_eq__qt_https_dd_//github.com/Beg-in/vue-babylonjs/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Beg-in/vue-babylonjs/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]