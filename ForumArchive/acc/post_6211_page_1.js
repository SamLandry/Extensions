[{"Owner":"reddozen","Date":"2014-05-06T13:07:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m importing my scene into Blender_co_ scaling things by -1 on the Y axis_co_ then rotating them back to upright_co_ making them single sided meshes_co_ and recalculating the normals. The problem is that when I export them_co_ it doesnt seem to save the scaling or transforms. It is keeping the normals data though so I know that it_t_s updating the export files_co_ but when it_t_s loaded the scene isn_t_t coming out un-mirrored._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My problem is that the Unreal 2k4 exporter we_t_re using to convert our models exports all our objects inside out_co_ mirrored and 2 sided... I wrote a blender script to just fix the whole scene automatically. It was a much simpler solution than trying to modify the complicated Unreal 2k4 exporter._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any ideas?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-05-06T14:08:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Red_co_ You have to apply any transforms_co_ rotations or scaling changes you make._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In _qt_Object Mode_qt__co_ select an object_co_ then go to the Object Menu -&gt_sm_Apply-&gt_sm_Location and Object Menu -&gt_sm_Apply-&gt_sm_Scale_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2014/post-7026-0-18360900-1399385194.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2014/post-7026-0-18360900-1399385194.jpg_qt_ data-fileid_eq__qt_1573_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-18360900-1399385194.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-05-06T15:43:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So it will just visually show the change and then I have to _qt_apply_qt_ it to confirm it?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd__lt_/p_gt__lt_p_gt_Just read up on it.. makes since. I_t_ll add that into my script tonight. I still have to flip my center coordnates and my Yaw on all my items to put them back in line after the mirror_co_ but that_t_s another issue all together._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]