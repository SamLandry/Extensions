[{"Owner":"mak11","Date":"2017-08-22T10:51:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi all_co__lt_br /_gt_\n\tI have a problem when I try to export a model that I downloaded from the web_co_ using blender to babylon exporter as the model seems to lose it_t_s skeleton_co_ I don_t_t know the correct term for that so I_t_m sorry but it seems like it just puts the texture on it_co_ the animation is working but I don_t_t know what did happen when I tried to export it to babylon_co_ Also I don_t_t know anything in blender except the process of exporting the model into babylon so any guide or help would be very much appreciated._lt_br /_gt__lt_br /_gt_\n\tI attached the model before and after exporting it in blender and when I used it in babylon._lt_br /_gt__lt_br /_gt_\n\tThanks in advance _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/modelAfterExporting.png.1bee13d0069d3486b60b7dd5535dcf37.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14552_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/modelAfterExporting.png.1bee13d0069d3486b60b7dd5535dcf37.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_modelAfterExporting.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/modelAfter.png.46306708a8d3ad26fa75bd636a3c6c08.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14553_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/modelAfter.thumb.png.ecb653a1ffdfaed934e061362e91490d.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_modelAfter.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/modelbefore.png.10f6380b17d0f753310f919a9ce1615d.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14554_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/modelbefore.thumb.png.e0d3697fcb122405811e06dc7b94d84c.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_modelbefore.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-08-22T15:12:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre saying the skeleton is not exported?  If so_co_ post export log file. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you are say the exporter changed your .blend_co_ I do not know_co_ but the 2012 copyright license on your pictures is not encouraging.  That means this was made with a very old version of Blender.  Not sure pictures are definitive.  You should see an armature constraint on the constraints property page of the mesh(es) which have the skeleton for a .blend created with 2.78.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mak11","Date":"2017-08-22T17:01:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi JCPalmer_co__lt_br /_gt__lt_br /_gt_\n\tThanks for your reply_co_ If I understand you correctly I don_t_t intend or mean to violate the copyrights of the model I_t_m just using it for training purposes_co_ and I_t_m not intending to release any free or commercial products with it_co_ however the credit goes  to _lt_a href_eq__qt_https_dd_//opengameart.org/users/clint-bellanger_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//_lt_/a_gt__lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_14556_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14556_qt_ rel_eq__qt__qt__gt_wyvern.log_lt_/a_gt__lt_a href_eq__qt_https_dd_//opengameart.org/users/clint-bellanger_qt_ rel_eq__qt_external nofollow_qt__gt_/users/clint-bellanger_lt_/a_gt_ and Justin Nichol for creating it._lt_br /_gt__lt_br /_gt_\n\tI don_t_t know the correct term of what has exactly happened  as I_t_m newbie to blender and I don_t_t know that much about 3D models and graphics_co_ So I don_t_t really know if the exporter changed the model or what. I also updated blender to the current release and the problem is still present._lt_br /_gt__lt_br /_gt_\n\tI saw at the constraint property page and it has constraint for the armature._lt_br /_gt__lt_br /_gt_\n\tI attached the log file _lt_br /_gt__lt_br /_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14556_qt_ data-fileid_eq__qt_14556_qt_ rel_eq__qt__qt__gt_wyvern.log_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-08-22T18:49:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy only concern was the year was 2012.  Old .blends from people other than the poster_co_ from places like BlendSwap_co_ can try to do things which do not translate well to WebGL / BJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour log file does show a skeleton exported along with several actions_co_ and that skeleton is associated with a mesh. Looks like it worked.  If things looked different in Blender after export_co_ just do not re-save the .blend.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor people just grabbing something off the web_co_ loading Blender for the first time &amp_sm_ exporting_co_ it is a valid thing to test what you can really do without great investment.  The result is usually_co_ unless things go perfectly_co_ you are in way over your head hanging on for dear life.  You are following others who have tried as well.  Like you_co_ they also picked exotic creatures with unusual skeletons.  Lunch is rarely free.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-08-31T14:03:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28207-mak11/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28207_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28207-mak11/_qt_ rel_eq__qt__qt__gt_@mak11_lt_/a_gt_ _dd_ Hi and welcome to the forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for the slow response - I_t_ve been on vacation which will continue for a week or more. (Busy time of the year for me - friends and family reunions/gatherings _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I took a look at your wyvern file  which I got from_lt_a href_eq__qt_https_dd_//opengameart.org/content/wyvern-1_qt_ rel_eq__qt_external nofollow_qt__gt_ OpenGameArt.Org_lt_/a_gt_ (I hope that is the file you are using.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe issue seems to be one of the animations - _qt__lt_em_gt_SpotAction_lt_/em_gt__qt_. When I load it in the Action Editor I get the mess that is in the image below. I have no idea what it is doing or trying to do ?? _lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt has to be deleted. Here is the process I would use_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_1_lt_/strong_gt_. Create a blank empty file in Blender - just a light (I use a Hemi)_co_  a camera looking down the Y-Axis and put the cursor at 0_co_0_co_0 (Shift C)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_2_lt_/strong_gt_. Now go File-&gt_sm_Append-&gt_sm_ and navigate to the file _qt__lt_u_gt_wyvern.blend_lt_/u_gt__qt_ on your computer and select it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_3_lt_/strong_gt_. Now_co_ select Object-&gt_sm_wyvern (not the wyvern Armature!) - and click the Append Button.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis will add the mesh_co_ armature and one animation (in my case _qt_Hover_qt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow start adding more animations _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_4_lt_/strong_gt_. File-&gt_sm_Append-&gt_sm__lt_u_gt_Action_lt_/u_gt_-&gt_sm_Fly\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRepeat for all the animations EXCEPT the _qt_SpotAction_qt_ !!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow try exporting .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTake a look at the_lt_a href_eq__qt_http_dd_//www.3dworlds.ca/mak11/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_ wyvern flying_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne other thing you should note_co_ in Blender turn on _qt_backfaceculling_qt_ and the inside of the wings will disappear in the 3D window. The skin between the ribs of the wings are just one-sided so you will have to_lt_u_gt_ turn off back face culling with BJS_lt_/u_gt_. with code like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var theSkin _eq_ newScene.getMaterialByName(_qt_wyvern1.WyvernSkin_qt_)_sm_\ntheSkin.backFaceCulling _eq_ false_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHope that helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/spotaction1.png.12c2282d099098b75b6b4fcf9d3424f4.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14684_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/spotaction1.png.12c2282d099098b75b6b4fcf9d3424f4.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_spotaction1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mak11","Date":"2017-09-04T01:44:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ Yes it worked _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tThank you very much_co_ I_t_m really thankful_co_ I appreciate it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tHave a nice vacation _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]