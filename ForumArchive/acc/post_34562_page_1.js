[{"Owner":"Northwind","Date":"2017-12-14T00:03:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust as a newbie in this forum_co_ I need your help. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to do a project doing the following things_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta. upload a file which is a CAD model (may represent a small ship or a cylinder) and send the file to the server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tb. do some calculations on the server side.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tc.send back the meshed data and display them on the chrome or IE_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone tell me whether there are already such prototype implementations that I can customize?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJohn\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-14T13:11:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya Northwind_co_ welcome to the forum!  Sorry for the slow replies... makes me sad.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not an expert at these things_co_ but I_t_m sure similar things have been done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I wanted to welcome you to the forum_co_ and say Hi!  The forum is a bit sleepy at the moment_co_ likely due-to upcoming holiday season.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLikely_co_ you_t_ll want to import the CAD model... into a modeller such as 3dsMax or Blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ export from modeller to myModel.babylon file (a JSON file). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen publish a webpage on a web server_co_ with BJS scene code that loads-in myModel.babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen your webGL-rendered model is _qt_public_qt_ and view-able in a browser.  You may need to adjust your webserver allowed mime types... to allow .babylon files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou want to modify the model on the server side?  That should be possible_co_ depending upon what you want to modify. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you please give us more details about those _qt_calculations on the server side_qt_? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre they only for texturing_co_ coloring_co_ position_co_ rotation_co_ scaling_co_ lighting_co_ etc (scene layout)?  Or do you want to modify the vertices/shape of the model (modelling)?   Both?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMore info from you _eq__eq_ more forum helpers. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCurrently_co_ it is difficult to determine if/not similar systems are easily available to you_co_ because we don_t_t have a precise description of what you wish to do.  Do your best to describe as many details of your wishes... as possible.  thx agn.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]