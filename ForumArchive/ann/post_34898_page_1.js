[{"Owner":"JCPalmer","Date":"2018-01-05T16:29:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMade a couple of changes to Blender exporter.  Here is commit comment_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t- fixed a bug when no checking an action has at least one frame. Now ignore &amp_sm_ write warning to .log file_lt_br /_gt_\n\t\t\t- added 2 new scene level custom properties for animation processing\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tScene level auto animate allows you to turn on animations_co_ except for skeleton based.  This probably should not be used unless the second property also enabled.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tCurrently assigned action only_co_ when checked only exports one animation for any object.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_5a4fa58658ad7_babylon5-5.jpg.9d70918c9166546fbe8fd32eab8d132b.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16513_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a4fa58658ad7_babylon5-5.jpg.9d70918c9166546fbe8fd32eab8d132b.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBackstory_dd_ in a Blender scene_co_ there is just an array of all actions (animations).  Individual meshes_co_ lights_co_ cameras_co_ skeletons do not own them.  These objects just point to the action they are currently assigned.  The original exporter_co_ by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ only exported the currently assigned action. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis meant you could not have a character centric .blend where the character mesh could have many actions (run _co_ walk_co_ sit_co_ pay taxes_co_ etc) and export them all as separate BABYLON.AnimationRanges.  Multiple action support was added around version 4.0.  There was one side effect of identifying what to export when there were multiple meshes with a current action assigned. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt was initially solved by using a name convention format of _t_object-name_t_.  Clicking _t_Only Currently Assigned Actions_t_ is another way to solve it.  It goes back to the original way.  Now there are 2 different ways of handling animation exporting for different type of .blend files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-05T17:42:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is really cool! Thanks for you unlimited commitment to help!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-01-06T21:52:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s worth noting that the installation instructions in the BJS documentation seem incorrect. _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/installing__the_babylon_exporter_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/resources/installing__the_babylon_exporter_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThey suggest unzipping the archive and finding io_export_babylon.py - a file which isn_t_t in the 5.5 archive.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s only when I read the readme in the git repo I realised that I should simply install the zip and Blender does the extracting and building itself.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-11T21:15:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for pointing that out.  I wrote the readme one.  I did not know that the other was there.  You almost have to go to the directory with the readme to get the zip file_co_ so I put my directions there. Even the other directions link to the directory of the readme.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can directly push to Exporters repo_co_ and I never figured out how to put pictures in the documentation repo_co_ so I only updated exporters repo.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-17T08:20:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHow do I use the Blender shape keys with the Babylon.js morph manager?  Been looking around for doco and examples but can_t_t find any.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-18T18:16:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo idea.  I have my own morphing.  One thing I do know is it has nothing special to do with Blender.  Once the shapekeys are exported_co_ check log file_co_ the should work just like any other.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-18T22:16:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIts all good.  I figured it out\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var target _eq_ mesh.morphTargetManager.getTarget(0)_sm_\ntarget.influence _eq_ 0.5_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]