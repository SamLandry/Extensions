[{"Owner":"tranlong021988","Date":"2017-02-15T08:29:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi_co_ I have new issue with BJS_co_ few days ago_co_ I have a post here_dd_  \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/28420-solved-question-about-spot-light-flash-light-simul/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tIt was a spot light issue_co_ and solved by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _co_ light behavior seem fine now. But since updating new BJS (with that issue fixed)_co_then skeleton animation issue came up. You can check PG here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FDJNK%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#FDJNK#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe character animation not run anymore_co_ although skeleton animation running(you can check via Skeleton Viewer).   \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo are there any API update that I miss or it caused by new BJS file update ? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FDJNK%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#FDJNK#0_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-02-15T16:43:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI struck the same issue some days ago\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/28257-solvedcloning-bones/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tAfter updating Babylon_co_ my own mesh is unable to play it_t_s animations_co_ as well as rotate bones using any of the setters.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I honestly haven_t_t checked whether my skeleton is animating without the verts binding to said skeleton. I will do however_co_ as it might help in narrowing down a spot where the issue might occur.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt weird_co_ if you try importing the _qt_dude_qt_ model_co_ he still has his mesh bound to the skeleton._lt_br /_gt__lt_br /_gt_\n\tEDIT_dd_ Just checked. The skeleton is indeed playing the animation I assign to it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe connection between the mesh and the skeleton is somehow _t_lost?_t_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ knows which changes might have caused this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-15T17:54:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt was a beautiful bug. I found it_co_ I crushed it_co_ I slaughtered its family\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe should be safe now _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tranlong021988","Date":"2017-02-15T18:07:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _dd_ There are no mercy for bugs. Thank you. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-02-15T20:29:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYayh. Commit confirmed to fix the bug. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNice _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ and I don_t_t hope I_t_ll be hijjacking the thread here_co_ althought the issue has been resolved. I have a new issue_co_ that I_t_m looking for a way to resolve_co_ one way or the other.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s an example of the issue_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe player model has a mesh_co_ a skeleton with bones and some animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe mesh_t_s arms are rotated accordingly to the mouse/camera orientation_co_ and done using rotation of the bones.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ if the skeleton runs an animation_co_ the manual rotation is being overwritten by the keyframes from the animation. Not only that_co_ but bones without any animations assigned to them_co_ overwrite the manual rotation_co_ so when running_co_ you are not able to see the _t_aim_t_ of the model_co_ only when no animation is being played.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any way around this? Like offsetting the bones_t_ rotations and positions or maybe have multiple skeletons?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs mentioned_co_ even if the bones have absolutely no key frames assigned to them_co_ their positions and rotations still overwrite the manual ones.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-02-15T21:54:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163550_qt_ data-ipsquote-contentid_eq__qt_28456_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487190551_qt_ data-ipsquote-userid_eq__qt_22713_qt_ data-ipsquote-username_eq__qt_Raggar_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Raggar said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tNow_co_ if the skeleton runs an animation_co_ the manual rotation is being overwritten by the keyframes from the animation. Not only that_co_ but bones without any animations assigned to them_co_ overwrite the manual rotation_co_ so when running_co_ you are not able to see the _t_aim_t_ of the model_co_ only when no animation is being played.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tRotate the bone before the scene is rendered.  Take a look at this example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1EVNNB%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1EVNNB#15_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]