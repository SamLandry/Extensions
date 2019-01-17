[{"Owner":"skalibran","Date":"2015-08-27T13:21:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_for the first real project_co_ I want to outsource as much as possible. In the index-File_co_ I just want to combine everything. For example I want the creation of all objects in another javascript file_co_ and I want to call it using a function in the index file. The problem_dd_ Whenever I want to use a created object_co_ it does not exist because it was made in another javascript file. Is there a way to create real global variables that are valid for the whole session? Or is there another way to outsource all the javascripts?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-27T15:00:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If this _t_index-File_t_ is just a bunch of global unassigned reference variables_co_ could you not just list it as the first application level script tag in the header section?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If that did not work_co_ or you wish to be different for deployment_co_ you could keep all your files separate_co_ then have a tiny build script.  Could be as simple as a one line .bat_co_ or .sh_co_ using copy or cp.  Once you have all your application level code in one file_co_ you could also use one of the online uglifiers for extra deployment effeciency._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A quick test without real code_co_ should confirm whether there would a a problem.  I plan to break things up as well using .ts files_co_ then combine as part of my build_co_ but do not plan to have such a file.  An OO approach would be to create subclasses of mesh with all the extra stuff they need.  This extra stuff would be both in the file &amp_sm_ in the class.  Any references to instances of a class in another file could be passed as arguments_co_  derived from a scene lookup call_co_ scene.getSkeletonByID._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"skalibran","Date":"2015-08-27T15:06:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co_ thanks for the answer! I_t_m probably not deep enough in javascript_co_ what do you mean with _qt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_first application level script tag_qt_? Seems like an uncomplicated first try._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-27T15:26:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In the head section of your html_co_ use must specify your .js fles.  The order is important.  You put stuff that other files reference first.  Like babylon.js._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"skalibran","Date":"2015-08-27T15:48:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just have one other js-File right now. If I - for example - create a cube in-code inside the main index file_co_ the problem is that I cannot modify its height or width in another file because that file does not now the cube. Of course I could write the parameter inside the function_co_ but if I have - let_t_s say 300 elements - I cannot write all those things into the function (otherwise it would look like function(var1_co_ var2_co_ var3_co_ ..._co_ var300)). Later on_co_ I want to create that cube in a javascript file that exists just for creating elements on startup_co_ then load it into the index-file and modify its values inside another file._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]