[{"Owner":"ozRocker","Date":"2017-01-17T02:18:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m using fabric.js to create a dynamic texture over a mesh.  It works well except when the dynamic texture is moved through a UV seam.  Does anyone know how I can get this working over a seam?  Here_t_s the playground _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23118_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#118_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you drag the _qt_webGL_qt_ text or rectangle around the cylinder you_t_ll see it break when it hits the seam.  I_t_ve attached a photo to demonstrate\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/seam.jpg.be71613f6ecb02c197f0d8deb2e3c021.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11210_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/seam.jpg.be71613f6ecb02c197f0d8deb2e3c021.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_seam.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-01-17T04:45:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok_co_ I simplified the playground.  I got rid of fabric and just tested using Babylon.js text.  You can see the text getting cut off across the seam _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23120_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#120_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-17T08:31:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually there is no seam on the geometry. Your text is too big for the canvas size (512). If you build a bigger canvas _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23121_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#121_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor if you use a smaller font _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23122_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#122_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-01-17T08:40:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_159448_qt_ data-ipsquote-contentid_eq__qt_27757_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1484641863_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 minutes ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tActually there is no seam on the geometry. Your text is too big for the canvas size (512). If you build a bigger canvas _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23121_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#121_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tor if you use a smaller font _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23122_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#122_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI don_t_t think that will solve the problem_co_ unless I_t_m doing something wrong.  I can change the canvas size (texturewidth_co_ textureheight) in this playground _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23118_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#118_lt_/a_gt_ and it still gets cut off when I move it over the seam.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/seam_problem.jpg.6836488617ee4d910d4ae48e7ec406ed.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11219_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/seam_problem.jpg.6836488617ee4d910d4ae48e7ec406ed.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_seam_problem.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2017-01-17T12:28:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWell_co_ I think you need to draw it twice to compensate the jump from one end of the texture to the other end_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23123_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#123_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-01-17T12:42:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_159476_qt_ data-ipsquote-contentid_eq__qt_27757_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1484656102_qt_ data-ipsquote-userid_eq__qt_12304_qt_ data-ipsquote-username_eq__qt_iiceman_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 minutes ago_co_ iiceman said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWell_co_ I think you need to draw it twice to compensate the jump from one end of the texture to the other end_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23123_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#123_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tok cool.  That worked.  I_t_m trying to incorporate that into the fabric playground which is difficult _t_cos its dynamic_co_ can be moved anywhere.  I_t_m basically trying to do this _lt_a href_eq__qt_http_dd_//preview.punkoffice.com/clothica/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//preview.punkoffice.com/clothica/_lt_/a_gt_ You can see the Metallica logo get cut-off when it moves over the seam on the right side of the avatar_t_s body.  I guess I have to figure out when an edge crosses over a seam then add another fabric object on the other side and move that in conjunction with the original object_co_ then delete it when the cursor crosses over _dd_/\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2017-01-17T14:11:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSince JavaScript treats everything as a reference it might not be that hard_co_ is that what you want_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23124_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#124_lt_/a_gt_ (only did it for the text)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-01-17T23:06:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_159490_qt_ data-ipsquote-contentid_eq__qt_27757_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1484662298_qt_ data-ipsquote-userid_eq__qt_12304_qt_ data-ipsquote-username_eq__qt_iiceman_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ iiceman said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSince JavaScript treats everything as a reference it might not be that hard_co_ is that what you want_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23124_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#124_lt_/a_gt_ (only did it for the text)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m not sure what the difference is here.  The text still gets cut off when I drag it over the seam\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/seam2.jpg.264014c60a5bee6a8db9a99d84009fd9.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11255_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/seam2.jpg.264014c60a5bee6a8db9a99d84009fd9.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_seam2.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2017-01-18T07:57:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah_co_ you are right... I was pretty sure I tested it yesterday and it worked_co_ but I guess it doesn_t_t... strange. Sorry_co_ not sure what went wrong (or what went right yesterday _dd_P) If I have a bit of time on my hand I give it another try!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2017-01-18T09:38:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_ new try_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23125_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#125_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdded an ObjectMove Event as described in the Fabric Docs _lt_a href_eq__qt_https_dd_//github.com/kangax/fabric.js/wiki/Working-with-events_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/kangax/fabric.js/wiki/Working-with-events_lt_/a_gt_ to update the position of the second text\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLimitations_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tonly works from right to left it seems\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tonce you move over the edge you have only the second text left_co_ you probably have to updated both texts no matter which one is dragged\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tSo_co_ still far from perfect...but maybe you get the idea. There might be a better way_co_ but thats the only way I can image how it could work at the moment.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-01-18T10:27:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_159661_qt_ data-ipsquote-contentid_eq__qt_27757_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1484732322_qt_ data-ipsquote-userid_eq__qt_12304_qt_ data-ipsquote-username_eq__qt_iiceman_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t43 minutes ago_co_ iiceman said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOkay_co_ new try_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%23125_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#125_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAdded an ObjectMove Event as described in the Fabric Docs _lt_a href_eq__qt_https_dd_//github.com/kangax/fabric.js/wiki/Working-with-events_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/kangax/fabric.js/wiki/Working-with-events_lt_/a_gt_ to update the position of the second text\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tLimitations_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_ul_gt__lt_li_gt_\n\t\t\t\tonly works from right to left it seems\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tonce you move over the edge you have only the second text left_co_ you probably have to updated both texts no matter which one is dragged\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ul_gt__lt_p_gt_\n\t\t\tSo_co_ still far from perfect...but maybe you get the idea. There might be a better way_co_ but thats the only way I can image how it could work at the moment.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNice!! You are one smart dude!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve attached a pic of the Metallica logo over the seam.  It doesn_t_t look good here because of the way I structured the UV map.  That_t_s no problem_co_ I can redo the map and make the edges line up without a gap.  Even if your code is the best we can do I_t_m still happy to know I can place a dynamic texture over the seam\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/seam3.jpg.ec2bf791d1db640d51324c264ddf9b60.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11275_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/seam3.jpg.ec2bf791d1db640d51324c264ddf9b60.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_seam3.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-01-23T14:25:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthis is an old playground i did on an other topic i hope you catch the idea_co_ i dont know if it works out at the end_lt_br /_gt_\n\tso the concept is the get a reflection texture on a plane an the text is on an other plane behind the cam_co_ this way you can do advanced plane scaling without losing the text transformation. but is also i bit tricky_co_ maybe you find something useful. good luck_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1H7ZZH%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1H7ZZH#2_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]