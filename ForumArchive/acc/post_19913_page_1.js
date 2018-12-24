[{"Owner":"Asor","Date":"2016-01-17T02:05:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am trying to make a prism generator using BABYLON.CreatePolyhedron. Everything seemed ok until I applied a texture to it._lt_br_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AVCC8%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AVCC8#6_lt_/a_gt__lt_br_gt__lt_br_gt_\n\tBabylon is splitting the mesh into triangles like you would expect_co_ but then it is failing to map the new UV points in a sane way. I was able to manually set the new UV values to make it work_co_ and can just automate the process_co_ but It is a bit of a hack. Is there an easier fix to this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance for any help\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-17T07:38:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tshort answer _dd_ I_t_m afraid no for now\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow to set the UV on a surface is always a choice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe provided polyhedrons are built from sets of pre-computed data and we haven_t_t any pre-computed (of any choice) UVs. So the less worst solution we found was to set the UV by applying a rotation from the first vertex of a polyhedron face onto the texture image and to give from this rotation start the next vertices 2D coordinates as UV (not sure I_t_m very clear _dd_ in short_co_ we choose a computionnal way working in every case).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis can lead to some results you woudn_t_t have to get. They aren_t_t false_co_ they_t_re different from what you expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ manually setting the UV to your expectation still remains the best way to get what you want.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe might I add a parameter in the polyhedron constructor method to give the ability to the user to pass his own UV set ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]