[{"Owner":"mandim","Date":"2018-05-03T14:47:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a .babylon file exported from blender with a rotation animation but when I try to load it (I have tried both addMeshTask() and ImportMesh()) I get a _qt_position animation_qt_ with zero values and _qt_scaling animation_qt_ with fixed values. This cause me a problem when I call beginAnimation() because I_t_m not able to scale and position the model in my scene. Moreover when I edit the file and remove the _qt_position animation_qt_ and _qt_scaling animation_qt_ the engine somehow loads them again (even with cleaning cache).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.dropbox.com/s/789lx8gm3v7zrsc/container_ship_sinking.babylon?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/789lx8gm3v7zrsc/container_ship_sinking.babylon?dl_eq_0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.dropbox.com/s/5odj9orv9cwcshp/container_ship_sinking.blend?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/5odj9orv9cwcshp/container_ship_sinking.blend?dl_eq_0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy there are these animations added? Is it something wrong with my export in blender?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-03T17:30:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_  all three of these have always been written_co_ before I was working on the exporter.  For Mesh actions_co_ the exporter can tell which frames are actually in the action &amp_sm_ only export those frames. If you can live with linear actions_co_ you can pull out all but the first - last frames_co_ or some other removal combination.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe exporter does not directly read the the animation keys_co_ but rather sort of _qt_plays_qt_ the animation &amp_sm_ pulls the values off the mesh.  This is easier than reading the keys_co_ but does not make it easy to know what type of keys are involved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI now know how to read (&amp_sm_ write) animation keys.  I_t_ll think about looping thru the keys to determine what is actually being used in the future_co_ but not now.  I thought you could delete those out of the file.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ that is possible_co_ right?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-03T22:02:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCorrect. This is absolutely ok\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mandim","Date":"2018-05-04T07:09:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ but removing these slots has no effect because as I mentioned above the engine somehow loads them again (even with cleaning cache).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-04T14:06:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo an sanity check by changing the name of the file_co_ or switching to a browser you have not loaded this on before.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mandim","Date":"2018-05-04T15:48:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_213774_qt_ data-ipsquote-contentid_eq__qt_37390_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525442768_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDo an sanity check by changing the name of the file_co_ or switching to a browser you have not loaded this on before.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ this is working but how is this explained? I mean why efter cleaning the cache there are still remainings? And why do I need to rename the file each time? Is there any workaround to this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-04T15:58:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBetter than re-installing your OS _lt_span class_eq__qt_ipsEmoji_qt__gt_😁_lt_/span_gt_!  Actually_co_ I do not know_co_ call Google_co_ Microsoft_co_ Apple_co_ or Mozzilla.  Maybe just reboot_co_ or just close the app.  Caching is a performance feature that might not affect what a running instance of the application.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]