[{"Owner":"Pryme8","Date":"2018-03-23T17:50:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI will have dynamic grass if it eff word kills me._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3D3RPL%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3D3RPL#3_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tIt looks like I am losing the added buffer uvRef that I am adding to each individual blade._lt_br /_gt_\n\t_lt_br /_gt_\n\tDoes that mean I just keep pushing the values to the array and then set the buffer on the merged mesh?  The Vertices data should be in the same order I would imagine?_lt_br /_gt_\n\tBut when I do that I get this result_dd__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3D3RPL%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3D3RPL#6_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\tThe Buffers seem to be there now_co_ but using it in the shader makes it disappear so I wonder what I am doing wrong?_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3D3RPL%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3D3RPL#7_lt_/a_gt__lt_br /_gt_\n\tthen the mesh reappears when I nerf line 19 in the vertShader._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3D3RPL%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3D3RPL#8_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\tthis is Approx what I am going for_co_ but from the uvRef Data not position._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3D3RPL%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3D3RPL#10_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-23T18:16:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo mergeMeshes will only merge know kinds and not all of them if you add custom ones .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou will need to manually merge the custom ones\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-23T18:18:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3D3RPL%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3D3RPL#12_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tSo am I merging them wrong?_lt_br /_gt_\n\t_lt_br /_gt_\n\tOk I think I just am setting it up wrong... I think its because my numbers are off on how many I am pushing to the array._lt_br /_gt_\n\tYup has to be_co_ because the counts should be the same as the uv attribute.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-23T18:22:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou should try without merge at first. Making sure the shader works\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen switch to mergemeshes. I_t_m ok to add a version which could also merge additional custom attributes\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-23T18:22:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tASD_dd_LFKASDFSNAKFNDASKL\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYAAAAAASSSSS!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3D3RPL%2313_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3D3RPL#13_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tThis will do. _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt_ Im starting to get excited_co_ wait to you see what I am planning with this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-23T18:23:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]