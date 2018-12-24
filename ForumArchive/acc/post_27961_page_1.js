[{"Owner":"Ozeki","Date":"2017-01-24T22:14:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt_Theory_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI recently wanted to try and use/adapt the official Blender exporter addon for Babylon to allow for parsing a directory of source models (FBX) and have Blender batch export them to the Babylon Json format. I know that there is a C++ CLI tool to do exactly this but (correct me if I_t_m wrong) it seems like it will only run on Windows (no OSX or Linux). So I wanted to be add this functionality via Python scripting in Blender to be able to do this no matter the platform. Disclaimer_co_ Python is not my native language. _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI taken some inspiration from a few existing scripts and adapted a simple one that _dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tLooks for files ending with FBX in the input path.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tImports them (one by one) via the Blender FBX operator _dd_\n\t\t_lt_pre_gt_\n_lt_code_gt_bpy.ops.import_scene.fbx(filepath_eq_file)_lt_/code_gt__lt_/pre_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tExports them (one by one) via the BabylonJS operator _dd_\n\t\t_lt_pre_gt_\n_lt_code_gt_bpy.ops.bjs.main(filepath_eq_file)_lt_/code_gt__lt_/pre_gt_\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Problem_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSadly here I am getting an error. Perhaps I_t_m being naive here by thinking that I can access a non-standard issue addon via scripting ? That is what the error seems to indicate at least _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Traceback (most recent call last)_dd_\n  File _qt_/BatchConvert.py_qt__co_ line 54_co_ in &lt_sm_module&gt_sm_\n  File _qt_/BatchConvert.py_qt__co_ line 44_co_ in convert_recursive\n  File _qt_/Users/ozeki/Library/Application Support/Steam/steamapps/common/Blender/blender.app/Contents/MacOS/../Resources/2.78/scripts/modules/bpy/ops.py_qt__co_ line 189_co_ in __call__\n    ret _eq_ op_call(self.idname_py()_co_ None_co_ kw)\nAttributeError_dd_ Calling operator _qt_bpy.ops.bjs.main_qt_ error_co_ could not be found\n\nlocation_dd_ &lt_sm_unknown location&gt_sm__dd_-1\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Solution ?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this doable with the way the Babylon Blender addon is setup and if so what am I doing wrong? I have attached my current code to this post. I_t_ve also added a list of references for the scripts that I have looked at or adapted from originally.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_References_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/io_export_babylon.py#L202_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/io_export_babylon.py#L202_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/src/babylon-js/__init__.py#L66_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/src/babylon-js/__init__.py#L66_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_http_dd_//blender.stackexchange.com/a/47000_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blender.stackexchange.com/a/47000_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_http_dd_//blender.stackexchange.com/a/34539_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blender.stackexchange.com/a/34539_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_https_dd_//github.com/pjezek/blender/blob/master/unity_tools/__init__.py_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/pjezek/blender/blob/master/unity_tools/__init__.py_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_https_dd_//github.com/RH2/TD_B3D-UDK/blob/master/main.py#L152_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/RH2/TD_B3D-UDK/blob/master/main.py#L152_lt_/a_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_11356_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_11356_qt_ rel_eq__qt__qt__gt_BatchConvert.py_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-01-24T23:32:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis has no been tried up till now.  I am not hopeful.  First_co_ I assume exporter is permanently saved as enabled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also tried calling a MakeHuman add-in from my code.  I remember having to add it onto my _qt_path_qt_.  I do not do it anymore_co_ but I remembered on the MakeHuman forum I pasted code which did.  You will have to convert this for us_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_# add import_runtime_mhx2 to sys.path_co_ so can be imported\nmhxOnPath _eq_ False\ndef putMhxOnPath()_dd_\n    global mhxOnPath\n    if not mhxOnPath_dd_\n        import os\n        import sys\n        addon_paths _eq_ bpy.utils.script_paths(_t_addons_t_)\n        for path in addon_paths_dd_\n            lib_path _eq_ os.path.join(path_co_ _t_import_runtime_mhx2_t_)\n            if os.path.exists(lib_path)_dd_\n                print(_t_mhx2 found @ _t_ + lib_path)\n                sys.path.append(lib_path)\n                mhxOnPath _eq_ True\n                break\n   \n    return mhxOnPath_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tFinally_co_ the exporter will bring up UI_co_ something called exporthelper.  Do not know if you can set filepath like that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ozeki","Date":"2017-01-25T01:40:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey again_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your input_co_ the path was a good clue to keep me going and helped me solve the problem. I was able to make this work with the 4.6.1 version of the Babylon Export as it exposes the _lt_strong_gt_bpy.ops.scene.babylon_lt_/strong_gt_ Blender Operator when you _lt_strong_gt_import io_export_babylon_lt_/strong_gt_ of that version of the Exporter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI might try to make this work with the newer version later on but I don_t_t have a lot of time right now. I_t_m willing to share my findings but fair warning_co_ this hasn_t_t been thoroughly tested so use it at your own risks. That being said when we solve a problem in an open-source community it is the least we can do to give something back so here is my contribution. Blender version and usage information is available in the file_t_s header.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne could easily adapt this script to also have an OUTPUT_DIR next to the CONVERT_DIR in order to allow for outputting the files elsewhere than in the same folder but it did not bother me for my workflow. I believe one could also adapt this for use with almost any other two formats compatible with Blender. Either way cheers and thank you again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBlender - Batch Export from Fbx to BabylonJS_lt_br /_gt__lt_a href_eq__qt_https_dd_//gist.github.com/osmanzeki/13ad20cca2bbffa7a600a3648888da83_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/osmanzeki/13ad20cca2bbffa7a600a3648888da83_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]