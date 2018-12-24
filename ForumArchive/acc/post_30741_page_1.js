[{"Owner":"Pryme8","Date":"2017-05-30T17:53:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I am really struggling right now to understand the unit system for BJS when it comes to importing mesh data then exporting it._lt_br /_gt__lt_br /_gt_\n\tI am importing and combining multiple STL files with the CSG System(_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/2.5/csg_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/2.5/csg_lt_/a_gt_).  Then exporting them for the intended purpose of 3d Printing._lt_br /_gt__lt_br /_gt_\n\tAt the moment I have a scalier that can be applied to the mesh before the export processes_co_ but am having trouble finding the sweet spot..._lt_br /_gt_\n\tAn example with some numbers would be_dd__lt_br /_gt_\n\tCorrect Approx Size _dd_ _lt_span style_eq__qt_color_dd_#555555_sm__qt__gt_6.86 x 17.06 x 0.97 cm_lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\twhich could change depending on its orientation... but respectively those numbers._lt_br /_gt_\n\tbut what I am getting when I export with the scalier set to 10 after the unification is_dd_ _lt_span style_eq__qt_color_dd_#555555_sm__qt__gt_1.26 x 0.14 x 0.12 cm_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#555555_sm__qt__gt_Then I opened that mesh in c4d at 1cm ratio_co_ exported it at a 1cm ratio and it blew up to 68.57 x 8.90 x 170.25_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\tso maybe I am just tripping on how I am importing exporting in c4d and that the exported mesh from BJS has the right ratio just really really small..._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tIm getting the size from a 3rd party API that is handling the print processes_co_ which they use mm as the scale._lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tBasically_co_ what is BJS base unit size?  What is it in comparison to Unity?  I need to figure this out stat.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-30T18:06:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is no unit _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ you decide if 1 is 1m or 1cm \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt all depends on how you build your scene\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-05-30T20:47:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\toriginal STL data_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_solid AssimpScene\n facet normal -0.991445 0 0.130525\n  outer loop\n  vertex -17.4949 -6.9 61.5709\n  vertex -17.3824 -6.9 62.425\n  vertex -17.3824 -5.9 62.425\n  endloop\n endfacet\n\n facet normal -0.923879 0 0.382685\n  outer loop\n  vertex -17.8245 -6.9 60.775\n  vertex -17.4949 -6.9 61.5709\n  vertex -17.4949 -5.9 61.5709\n  endloop\n endfacet\n\n facet normal -0.991445 0 0.130525\n  outer loop\n  vertex -17.4949 -6.9 61.5709\n  vertex -17.3824 -5.9 62.425\n  vertex -17.4949 -5.9 61.5709\n  endloop\n endfacet\n\n facet normal -0.923879 0 0.382685\n  outer loop\n  vertex -17.8245 -6.9 60.775\n  vertex -17.4949 -5.9 61.5709\n  vertex -17.8245 -5.9 60.775\n  endloop\n endfacet\n\n facet normal -0.793354 0 0.608761\n  outer loop\n  vertex -18.349 -6.9 60.0915\n  vertex -17.8245 -6.9 60.775\n  vertex -18.349 -5.9 60.0915\n  endloop\n endfacet\n\n facet normal -0.608763 0 0.793352\n  outer loop\n  vertex -19.0324 -6.9 59.5671\n  vertex -18.349 -6.9 60.0915\n  vertex -18.349 -5.9 60.0915\n  endloop\n endfacet\n\n facet normal -0.793354 0 0.608761\n  outer loop\n  vertex -17.8245 -6.9 60.775\n  vertex -17.8245 -5.9 60.775\n  vertex -18.349 -5.9 60.0915\n  endloop\n endfacet\n\n facet normal -0.608763 0 0.793352\n  outer loop\n  vertex -19.0324 -6.9 59.5671\n  vertex -18.349 -5.9 60.0915\n  vertex -19.0324 -5.9 59.5671\n  endloop\n endfacet\n\n facet normal -0.382682 0 0.92388\n  outer loop\n  vertex -19.8283 -6.9 59.2374\n  vertex -19.0324 -6.9 59.5671\n  vertex -19.8283 -5.9 59.2374\n  endloop\n endfacet\n\n facet normal -0.130527 0 0.991445\n  outer loop\n  vertex -20.6824 -6.9 59.125\n  vertex -19.8283 -6.9 59.2374_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tExported\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_solid exportedMesh\nfacet normal 0.9914365069426241 -0.13058963473954632 0\n\touter loop\n\t\tvertex -17.4949 61.5709 -6.9\n\t\tvertex -17.3824 62.425 -6.900000000000001\n\t\tvertex -17.3824 62.425 -5.900000000000001\n\tendloop\nfacet normal 0.9239093154710283 -0.3826115220244365 0\n\touter loop\n\t\tvertex -17.8245 60.775 -6.9\n\t\tvertex -17.4949 61.5709 -6.9\n\t\tvertex -17.4949 61.5709 -5.9\n\tendloop\nfacet normal 0.9914365069426241 -0.13058963473954632 0\n\touter loop\n\t\tvertex -17.4949 61.5709 -6.9\n\t\tvertex -17.3824 62.425 -5.900000000000001\n\t\tvertex -17.4949 61.5709 -5.9\n\tendloop\nfacet normal 0.9239093154710283 -0.3826115220244365 0\n\touter loop\n\t\tvertex -17.8245 60.775 -6.9\n\t\tvertex -17.4949 61.5709 -5.9\n\t\tvertex -17.8245 60.775 -5.9\n\tendloop\nfacet normal 0.7933353995306864 -0.6087848091497408 0\n\touter loop\n\t\tvertex -18.349 60.0915 -6.9\n\t\tvertex -17.8245 60.775 -6.9\n\t\tvertex -18.349 60.0915 -5.9\n\tendloop\nfacet normal 0.6087678124406573 -0.7933484420708324 0\n\touter loop\n\t\tvertex -19.0324 59.5671 -6.9\n\t\tvertex -18.349 60.0915 -6.9\n\t\tvertex -18.349 60.0915 -5.9\n\tendloop_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_br /_gt_\n\t  your right_co_ It has to be something with how the 3rd party API is calculating the data.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-30T20:48:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHappy to help _dd__eq_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-05-30T21:02:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tactually after posting that_co_ it dawned on me I was exporting and invalid STL..._lt_br /_gt__lt_br /_gt_\n\tas soon as I added endfacet in the correct place everything fixed.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]