[{"Owner":"NasimiAsl","Date":"2016-12-13T08:43:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi again _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ ( i don_t_t know but i feel someone hate me when i reply )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#D6IPT%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#D6IPT#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat take a 2 min time for calculate (i can fix that _t_maybe_t_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand i find something new in babylon JS _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ about create line you can make split Path in MeshLine when you set { x_dd_NaN _co_ y_dd_0_co_z_dd_0 } that is wonderful for make Optimized Wireframe \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt_  i think that can make 90% solution\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_static GetQuadPoints(geo_dd_ Geometry) _dd_ any {\n            var quad _eq_ []_sm_\n            for (var i _eq_ 0_sm_ i &lt_sm_ geo.faces.length_sm_ i +_eq_ 3) {\n\n                quad.push({ a_dd_ geo.vertices[geo.faces[i]]_co_ b_dd_ geo.vertices[geo.faces[i + 1]]_co_ c_dd_ geo.vertices[geo.faces[i+2]]  })_sm_\n            }\n            function len(p1_co_ p2) {\n                return Math.sqrt(Math.pow(p1.x - p2.x_co_ 2.) + Math.pow(p1.y - p2.y_co_ 2.) + Math.pow(p1.z - p2.z_co_ 2.))_sm_\n            }\n            function eq(p1_co_ p2) {\n                return  len(p1_co_p2) &lt_sm_ 0.00001_sm_\n            }\n            function getQuad(r_co_ ind) {\n                var res _eq_ []_sm_\n                for (var qa in quad) {\n   \n                    var q _eq_ quad[qa]_sm_\n                    var p1_co_ p2_co_ p3_co_ p4_sm_\n                    var findMatch _eq_ true_sm_\n                    if (qa _eq__eq_ ind) { findMatch _eq_ false_sm_ continue_sm_ }\n                    if (eq(q.a_co_ r.a) &amp_sm_&amp_sm_ eq(q.b_co_ r.b)) { p1 _eq_ q.a_sm_ p2 _eq_ q.b_sm_ p3 _eq_ q.c_sm_ p4 _eq_ r.c_sm_ }\n                    else if (eq(q.a_co_ r.a) &amp_sm_&amp_sm_ eq(q.b_co_ r.c)) { p1 _eq_ q.a_sm_ p2 _eq_ q.b_sm_ p3 _eq_ q.c_sm_ p4 _eq_ r.b_sm_ }\n\n                    else if (eq(q.a_co_ r.b) &amp_sm_&amp_sm_ eq(q.b_co_ r.a)) { p1 _eq_ q.a_sm_ p2 _eq_ q.b_sm_ p3 _eq_ q.c_sm_ p4 _eq_ r.c_sm_ }\n                    else if (eq(q.a_co_ r.b) &amp_sm_&amp_sm_ eq(q.b_co_ r.c)) { p1 _eq_ q.a_sm_ p2 _eq_ q.b_sm_ p3 _eq_ q.c_sm_ p4 _eq_ r.a_sm_ }\n\n                    else if (eq(q.a_co_ r.c) &amp_sm_&amp_sm_ eq(q.b_co_ r.a)) { p1 _eq_ q.a_sm_ p2 _eq_ q.b_sm_ p3 _eq_ q.c_sm_ p4 _eq_ r.b_sm_ }\n                    else if (eq(q.a_co_ r.c) &amp_sm_&amp_sm_ eq(q.b_co_ r.b)) { p1 _eq_ q.a_sm_ p2 _eq_ q.b_sm_ p3 _eq_ q.c_sm_ p4 _eq_ r.a_sm_ } \n\n                    else if (eq(q.b_co_ r.a) &amp_sm_&amp_sm_ eq(q.c_co_ r.b)) { p1 _eq_ q.b_sm_ p2 _eq_ q.c_sm_ p3 _eq_ q.a_sm_ p4 _eq_ r.c_sm_ }\n                    else if (eq(q.b_co_ r.a) &amp_sm_&amp_sm_ eq(q.c_co_ r.c)) { p1 _eq_ q.b_sm_ p2 _eq_ q.c_sm_ p3 _eq_ q.a_sm_ p4 _eq_ r.b_sm_ }\n\n                    else if (eq(q.b_co_ r.b) &amp_sm_&amp_sm_ eq(q.c_co_ r.a)) { p1 _eq_ q.b_sm_ p2 _eq_ q.c_sm_ p3 _eq_ q.a_sm_ p4 _eq_ r.c_sm_ }\n                    else if (eq(q.b_co_ r.b) &amp_sm_&amp_sm_ eq(q.c_co_ r.c)) { p1 _eq_ q.b_sm_ p2 _eq_ q.c_sm_ p3 _eq_ q.a_sm_ p4 _eq_ r.a_sm_ }\n\n                    else if (eq(q.b_co_ r.c) &amp_sm_&amp_sm_ eq(q.c_co_ r.a)) { p1 _eq_ q.b_sm_ p2 _eq_ q.c_sm_ p3 _eq_ q.a_sm_ p4 _eq_ r.b_sm_ }\n                    else if (eq(q.b_co_ r.c) &amp_sm_&amp_sm_ eq(q.c_co_ r.b)) { p1 _eq_ q.b_sm_ p2 _eq_ q.c_sm_ p3 _eq_ q.a_sm_ p4 _eq_ r.a_sm_ }\n\n                    else if (eq(q.c_co_ r.a) &amp_sm_&amp_sm_ eq(q.a_co_ r.b)) { p1 _eq_ q.c_sm_ p2 _eq_ q.a_sm_ p3 _eq_ q.b_sm_ p4 _eq_ r.c_sm_ }\n                    else if (eq(q.c_co_ r.a) &amp_sm_&amp_sm_ eq(q.a_co_ r.c)) { p1 _eq_ q.c_sm_ p2 _eq_ q.a_sm_ p3 _eq_ q.b_sm_ p4 _eq_ r.b_sm_ }\n\n                    else if (eq(q.c_co_ r.b) &amp_sm_&amp_sm_ eq(q.a_co_ r.a)) { p1 _eq_ q.c_sm_ p2 _eq_ q.a_sm_ p3 _eq_ q.b_sm_ p4 _eq_ r.c_sm_ }\n                    else if (eq(q.c_co_ r.b) &amp_sm_&amp_sm_ eq(q.a_co_ r.c)) { p1 _eq_ q.c_sm_ p2 _eq_ q.a_sm_ p3 _eq_ q.b_sm_ p4 _eq_ r.a_sm_ }\n\n                    else if (eq(q.c_co_ r.c) &amp_sm_&amp_sm_ eq(q.a_co_ r.a)) { p1 _eq_ q.c_sm_ p2 _eq_ q.a_sm_ p3 _eq_ q.b_sm_ p4 _eq_ r.b_sm_ }\n                    else if (eq(q.c_co_ r.c) &amp_sm_&amp_sm_ eq(q.a_co_ r.b)) { p1 _eq_ q.c_sm_ p2 _eq_ q.a_sm_ p3 _eq_ q.b_sm_ p4 _eq_ r.a_sm_ }\n\n                    else { findMatch _eq_ false_sm_ continue_sm_ }\n                    // quad Condition\n                    if (findMatch) {\n                        \n                        if (len(p1_co_ p2) &gt_sm__eq_ Math.max(len(p1_co_ p2)_co_ Math.max(len(p1_co_ p3)_co_ Math.max(len(p2_co_ p3)_co_ Math.max(len(p1_co_ p4)_co_ len(p2_co_ p4)))))) {\n                            res.push([p1_co_ p3_co_ p2_co_ p4_co_ p1])_sm_\n                        } \n                    }\n                }\n                return res_sm_\n            } \n            var result _eq_ []_sm_\n            for (var g1 in quad) {\n                var q _eq_ quad[g1]_sm_\n               var rs _eq_ getQuad(q_co_ g1)_sm_\n               if (rs !_eq_ null)\n                   result.push(rs)_sm_\n            } \n            return result_sm_\n        }\n        _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-13T08:58:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat looks pretty good _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_  I think some polygons might be missing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis shader sometimes crashes the browser though.  I_t_m using Chrome on a Windows desktop\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-12-13T09:00:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_155007_qt_ data-ipsquote-contentid_eq__qt_21605_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481619518_qt_ data-ipsquote-userid_eq__qt_12544_qt_ data-ipsquote-username_eq__qt_ozRocker_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tJust now_co_ ozRocker said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThat looks pretty good _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_  I think some polygons might be missing.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis shader sometimes crashes the browser though.  I_t_m using Chrome on a Windows desktop\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tthat is not shaderBuilder  i just find quad from geometry data with condition you can see the source \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-12-13T09:08:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10727_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Untitled-1.png.2d54ee0b0b48f5ec374f39ba38453dfa.png_qt_ alt_eq__qt_Untitled-1.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust find _lt_strong_gt_p1_lt_/strong_gt_ and _lt_strong_gt_p2_lt_/strong_gt_ ( 2 points in coordinate of the 2 face) and check this condition\n_lt_/p_gt_\n\n_lt_p_gt_\n\tl1 &gt_sm_ _eq_ max(l1_co_l2_co_l3_co_l4_co_l5)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-13T09:13:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_155008_qt_ data-ipsquote-contentid_eq__qt_21605_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481619651_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 minutes ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tthat is not shaderBuilder  i just find quad from geometry data with condition you can see the source \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tah ok_co_ I see what you_t_re doing.  That_t_s pretty neat.  Its not completely accurate result though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder how Sketchfab makes such an accurate wireframe_co_ and so quick to load.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//sketchfab.com/models/818277492a3346728958d7de33b9f9b1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//sketchfab.com/models/818277492a3346728958d7de33b9f9b1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/cat_wireframe.jpg.7f9a83c27ceef9a0b4a9a380953a9eda.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10728_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/cat_wireframe.jpg.7f9a83c27ceef9a0b4a9a380953a9eda.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_cat_wireframe.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-12-13T09:19:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti know how can i make that but for this time i just load triangulate  Polygon but you can get   _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_accurate_lt_span_gt_ _lt_/span_gt__lt_/span_gt_  result when you have Quadrangulate Polygon \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti need time to attach that for my .Obj Loader\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-13T17:26:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBut I_t_m wondering if the quads are the same in Sketchfab and in Blender\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-14T00:07:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti crushed the texture to much (72kB).  as long NasimiAsl writing a shader_lt_br /_gt__lt_br /_gt_\n\tu can do in better!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1LMACK%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1LMACK#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-14T00:23:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_155125_qt_ data-ipsquote-contentid_eq__qt_21605_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481674044_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 minutes ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\ti crushed the texture to much (72kB).  as long NasimiAsl writing a shader_lt_br /_gt__lt_br /_gt_\n\t\t\tu can do in better!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1LMACK%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1LMACK#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s pretty cool!  (I got rid of the seams here _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1LMACK%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1LMACK#2_lt_/a_gt_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thought about doing this technique if its not possible to render a wireframe using babylon.js in realtime.  I like how the wireframe is on top of the diffuse texture so you can see exactly what_t_s happening.  So much better than having a wireframe which shows front and back at the same time.  I_t_m testing it out on iPhone but so far nothing is showing up _dd_/\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-14T00:51:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_155131_qt_ data-ipsquote-contentid_eq__qt_21605_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481674980_qt_ data-ipsquote-userid_eq__qt_12544_qt_ data-ipsquote-username_eq__qt_ozRocker_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t27 minutes ago_co_ ozRocker said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m testing it out on iPhone but so far nothing is showing up _dd_/\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf i hang longer around here i will never be able to test it with an iphone. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-14T00:52:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHow do you generate this texture?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-14T01:36:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\the unwrap it manually. I think he also imported uv information to Scetchfab. (texture1D to fragment and then some lines_co_ maybe)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/uv-map.JPG.47781819e97d440ccedc10d4d0b74212.JPG_qt_ data-fileid_eq__qt_10754_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_uv-map.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10754_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/uv-map.thumb.JPG.a838faad05a87511d52eb20d165c1f88.JPG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-14T01:39:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_155135_qt_ data-ipsquote-contentid_eq__qt_21605_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481676738_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t46 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHow do you generate this texture?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tBlender has an option where you can save the UV outline as an image\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-14T02:05:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tsaidly that the uv layout exporter from blender has only 1px line thickness. A possible workaround would be to apply a blur filter to smooth the lines out a bit. as i said their are some optimizations are possible from side of the texturing. I exported from Photoshop save for Web with 2 Colors Alpha and Blue. so 1024x1024*1bits per pixel. but if you export as PNG8 1024x1024X8bits (256Colors) its at least 1MB big that are allocated by your GPU not 72kB download time. So iphone has a strong limitation to texture size. IDK just saying. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-14T19:13:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid you by any chance use the Sketchfab exporter that is built into Blender when uploading the model to Sketchfab?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//sketchfab.com/exporters/blender_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//sketchfab.com/exporters/blender_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-14T23:27:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_155260_qt_ data-ipsquote-contentid_eq__qt_21605_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481742813_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tDid you by any chance use the Sketchfab exporter that is built into Blender when uploading the model to Sketchfab?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//sketchfab.com/exporters/blender_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//sketchfab.com/exporters/blender_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI just uploaded the .OBJ.  I didn_t_t know there was a Sketchfab exporter until you mentioned it.  I checked and I can see its there_co_ just needs to be enabled in User Preferences\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-12-15T07:23:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1LMACK%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1LMACK#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tshader for  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_  Reply \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-12-15T08:51:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_155333_qt_ data-ipsquote-contentid_eq__qt_21605_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481786593_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1LMACK%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1LMACK#4_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNot bad mate.  I_t_m trying to find a way to do this without textures so it can scale properly when zooming in and out.  Also cos iOS doesn_t_t like dealing with too many textures.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bentwonk","Date":"2017-03-14T01:42:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSilly question from a newb_co_ but is it possible to blend materials_co_ for example overlay the_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__lt_span_gt_ _lt_/span_gt_grid material on a textured heightmap to show_lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_topology_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_Even better could it be applied only to a limited area of the ground_co_ such as that the user is inspecting?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-14T15:16:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ there is no newb questions. All questions are welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo do what you want you will need to clone your ground and affect a gridmaterial to the clone (and probably slide it a bit to have it on top of the main ground)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]