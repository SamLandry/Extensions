[{"Owner":"MarianG","Date":"2018-09-21T08:25:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs the title say. I want to know if i can find in some way how much space has one mesh inside.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy first thought was_dd_ _qt_It_t_s impossible_qt_ _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ The second one was_co_ ok_co_ maybe it_t_s not posibile_co_ but I should try something and ask maybe someone has a better idea._lt_br /_gt_\n\tMy idea is to calculate this like bounding box_co_ just that bounding box is the smallest box which inculde a specific mesh_co_ my bounding box will be the biggest box included in a specific mesh. Therefore i took a look at _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata#mesh-partitioning_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata#mesh-partitioning_lt_/a_gt_ which seems to be _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#UZGNA_qt_ rel_eq__qt_external nofollow_qt__gt_broke_lt_/a_gt_ _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\t_lt_br /_gt_\n\tI created a playground for _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#GZX9JH_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_. Till now only with this partitioning function._lt_br /_gt_\n\t_lt_br /_gt_\n\tAny ideas or links for research are welcome! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-24T07:40:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo_co_ I suppose I will come back to my first thought for the moment _dd_))_lt_br /_gt_\n\tI_t_ll see_co_ maybe we can put the user to define an area inside of mesh or something like this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-24T16:00:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHaha..Hope this works! Keep us posted\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-09-24T18:04:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave an idea but have not given it a go yet. It would only work with convex shapes. It goes like this\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbounding box is known is volume of bounding box is known.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdepending on facet position form a truncated triangular prism from each facet to the top surface or bottom surface of bounding box. Find volume of each prism_co_ sum all volumes_co_ subtract sum from volume of bounding box.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-09-24T18:14:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI agree with JohnK_t_s approach.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd you_t_re right_co_ something got broken in the facetData_co_ no idea what or why ... probably related to some latest fix because of the Chrome bug. Well_co_ it seems that things that used to work aren_t_t working any longer _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-24T20:23:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell fix that asap! _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt__lt_/span_gt_ is on it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-24T20:25:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is because the demo was using _properties...And this is not ok _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the fix_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#UZGNA#5_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#UZGNA#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m gonna fix the doc as well\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-09-25T06:38:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI really to spend some time on the modified code to get what deeply changed _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-25T06:40:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi. Thank you for sugestion_co_ and for fix this._lt_br /_gt_\n\tI_t_ll give a try and I_t_ll update you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-25T20:06:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi. It_t_s me again_co_ with something new._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this will be expensive for bigger meshes_co_ but what I_t_m trying to archieve is to create a 3d matrix of boxes and check if _t_intersect_t_ the mesh or not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut this tell me that the box intersect the mesh even if the box is inside mesh_co_ and I want if it_t_s posible to tell me that it intersect the mesh only if it intersect a face of mesh_co_ not when it_t_s inside and doesn_t_t intersect the mesh geometry _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\tIt seems with intersectPoint doesn_t_t work. Any ideas?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-26T09:29:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI figure it out_co_ but it_t_s not a good solution _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_ For this rectangle is working because boundingbox is the same like mesh_co_ but for a custom doesn_t_t work_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#3_lt_/a_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-09-26T15:40:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tKeep it up_co_ you are getting closer. but doing it for the entire mesh would be insanely expensive.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs a side idea_co_ you might try to refine your found intersection with Rays ? as they would get more precision ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-27T13:00:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey. Great idea _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_. Thank you._lt_br /_gt_\n\tI managed it to work in some way_co_ maybe not the best_co_ but it_t_s almost what i need _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%2314_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#14_lt_/a_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#15_lt_/a_gt__lt_br /_gt_\n\tOnly one thing left _lt_span class_eq__qt_ipsEmoji_qt__gt_😀_lt_/span_gt__lt_br /_gt_\n\tI got mesh surface_co_ but I want if it_t_s possible to fill mesh interior too.  _lt_br /_gt_\n\tAs example here _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#16_lt_/a_gt_ boxes which intersect the surface has outline but inside not (expected) and I would like to be able to make them too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-09-27T16:57:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe you you could ray cast from opposite directions to know if you are inside like rays coming to your point and if both collide outside_co_ you would be inside ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-09-27T17:43:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is another way but is very expensive on time. It uses CSG and when a box is completely subtracted it must be inside the mesh. Making the count on line 12 bigger than 15 can quickly lead to _t_browser is busy_t_ Perhaps some aspect of the CSG code could be utilised to check if any entries are made in the polygon array and once one entry is made skip as you know the box is outside the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#17_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-28T06:40:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ I_t_m not sure I understood _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_. I_t_ll give a try._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt__lt_/span_gt__co_ smart solution. Yes_co_ it_t_s  expensive_co_ but I_t_ll take a look at csg source_co_ as you said_co_ maybe I can use something from there. Thank you for hint.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-28T07:36:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHihihi _lt_img alt_eq__qt__dd_ph34r_dd__qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ title_eq__qt__dd_ph34r_dd__qt_ width_eq__qt_20_qt_ /_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_💪_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%2320_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#20_lt_/a_gt_. I think this was._lt_br /_gt_\n\tYes_co_ if the mesh is not a convex shape_co_ or its pivot is wrong positioned this won_t_t work._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#J71TH6%2321_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#J71TH6#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tBut in most of our cases it should work._lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks for support_co_ you was great as usually._lt_br /_gt_\n\tPS_dd_ If you have suggestions to improve it_co_ you_t_re welcome _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]