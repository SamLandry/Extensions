[{"Owner":"royibernthal","Date":"2017-10-05T21:52:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_d like to do some PRs_co_ but at the moment I_t_m unable to compile bjs source so I_t_m having a hard time testing my changes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cloned bjs locally via GitHub_co_ I_t_m trying to compile the root folder in vscode using tsc_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t&gt_sm_ Executing task_dd_ tsc  -p _qt_d_dd_\\GitHub\\Babylon.js\\src\\tsconfig.json_qt_ &lt_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tCollisions/babylon.collisionWorker.ts(264_co_17)_dd_ error TS2304_dd_ Cannot find name _t_importScripts_t_._lt_br /_gt_\n\t\t\tCollisions/babylon.collisionWorker.ts(265_co_17)_dd_ error TS2304_dd_ Cannot find name _t_importScripts_t_._lt_br /_gt_\n\t\t\tCollisions/babylon.collisionWorker.ts(266_co_17)_dd_ error TS2304_dd_ Cannot find name _t_importScripts_t_._lt_br /_gt_\n\t\t\tThe terminal process terminated with exit code_dd_ 1\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTerminal will be reused by tasks_co_ press any key to close it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen commenting these problematic lines and trying to compile again I see this_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t&gt_sm_ Executing task_dd_ tsc  -p _qt_d_dd_\\GitHub\\Babylon.js\\src\\tsconfig.json_qt_ &lt_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\tTerminal will be reused by tasks_co_ press any key to close it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo errors_co_ but it seems like nothing is being compiled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat am I missing?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-05T22:33:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI haven_t_t compiled from source in a couple of weeks.  What version of Typescript and what do you have in tsconfig for lib? (ie_dd_ [_qt_es6_qt__co_ _qt_dom_qt_]).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-10-05T22:47:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTypeScript 2.5.2.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy tsconfig.json is exactly that_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/tsconfig.json_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/tsconfig.json_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-10-06T00:15:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you not rely on the available gulp process ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/generals/how_to_start_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/generals/how_to_start_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-06T07:46:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe tsconfig in the main directory is no longer used. Gulp had its own configuration for TypeScript_co_ for each phase and module. Gulp is the way to go.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2017-10-08T16:22:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPerfect. You guys did a wonderful job there_co_ it_t_s very easy and convenient to modify and test bjs source.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]