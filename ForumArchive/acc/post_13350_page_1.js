[{"Owner":"larsiii23","Date":"2015-03-24T11:48:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m having a problem regarding meshes that is translated to origin during the process of exporting the Blender scene to Babylon file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To be more specific_dd__lt_/p_gt__lt_p_gt_In blender I have imported a model of a house. But I want to some modifcations on this. For example am I trying to create a ramp in the stairs to smoothen the movement going upstairs. I have done this by creating a plane witch i place over the stair (and later on make invisible). The plane is placed so the 4 vertexes of the plane intersects the vertexes of the top and bottom stair. In blender it looks perfect_co_ but as I export it to a babylon file and renders it in the browser the plane/ramp has been translated to origin (0_co_0_co_0). All other meshes stays where they are suppose to. The plane I have added is the only mesh that is translated to origin. Rotation and scale stays however true to what it is assigned in Blender._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is anyone familiar with this problem_co_ and have a solution to it?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"larsiii23","Date":"2015-03-24T11:57:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Update_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I added another dummy mesh to check if that mesh also would translate to origin. And it did. However that made the ramp to be placed at the correct spot on top of the stairs._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Even though I_t_ve found a soultion_co_ it would be nice if anyone know why this is happening._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-03-24T12:12:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve encountered this kind of problems regarding the export of blender models to BJS. Most of these issues came from the parent-child relationships set between objects._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could you please share all or parts of your blender file here_co_ along with the part of the code you use to import these meshes?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ do you use a recent version of the exporter?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"larsiii23","Date":"2015-03-24T16:58:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry_co_ but the reason to the problem was only my own code. I had forgotten to remove a line which translated the last added mesh to origin._lt_/p_gt__lt_p_gt_Useless thread_co_ can be deleted  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-03-25T06:52:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good news _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]