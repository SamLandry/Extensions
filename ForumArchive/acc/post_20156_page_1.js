[{"Owner":"rhys-vdw","Date":"2016-01-27T08:19:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ just started working on my first Bablyon project. I_t_m planning a client/server model that will share some code between Node and the browser.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve encountered a couple of pain points_co_ and noticed there is no issues section on GitHub_co_ so I_t_m guessing this is the proper place to discuss with devs?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe first is pretty major_co_ the npm module uses a minified version of the source as its entry point_co_ which is excruciating to debug! It_t_s impossible to set breakpoints or sometimes to even work out which function is failing. Ideally the project would be distributed as unminified JavaScript that includes source maps. There is no reason to minify code for npm since it will ultimately be handled by the user_t_s build tool (in production only!).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other problem is that I_t_d like to use the `Vector3` class (and perhaps others) in my server code. To do so I must _qt_pretend_qt_ that `window` and `navigator` exist in the global scope.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_global.window _eq_ {}_sm_\nglobal.navigator _eq_ {}_sm_\nimport { Vector3 } from _t_babylonjs_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIdeally I_t_d like to do something like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import { Vector3 } from _t_babylonjs/Math_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThat is not possible since the unminified source is not supplied in the package_co_ and if I understand correctly_co_ does not use the node module system anyway. Since the file `babylon/src/Math` actually doesn_t_t require access to `window` etc. this should be fine. It could potentially make sense to split `Vector3` into its own repo and have it as a dependency of babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any interest or discussion in this area? How do other people debug the minified code?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-27T16:53:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe provide unminified version to debug_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/babylon.2.2.max.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/babylon.2.2.max.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo get the best debugging experience_co_ you can also reference manually all files_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/generals/Creating_the_Mini-fied_Version_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/generals/Creating_the_Mini-fied_Version_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding math.js_co_ why not just referencing it directly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Math/babylon.math.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Math/babylon.math.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rhys-vdw","Date":"2016-01-31T00:06:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Dalkatosh_co_ thanks for the response. My post above is really regarding the npm module structure_co_ perhaps I should have posted it to bugs?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t\t\twe provide unminified version to debug_dd__lt_span_gt_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/babylon.2.2.max.js_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_underline_sm_background-color_dd_transparent_sm__qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/babylon.2.2.max.js_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGreat_co_ thanks. I can access the unminified code via_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var BABYLON _eq_ require(_t_babylonjs/babylon.max_t_)_sm_\n// or with ES import semantics\nimport BABYLON from _t_babylonjs/babylon.max_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHowever_co_ minifcation breaks convention for npm distributions_co_ and provides no benefits to the library consumer. Normally `babylon.js` would be unminified and unconcatenated_co_ with the entry point named as `main` in `package.json`. Babylon does not use module syntax internally. Each file just assigns its code to `window.BABYLON`. So currently it_t_s not possible to maintain the file structure in the package. However simply providing the unminified code as the `main` file would be an improvement.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_Regarding math.js_co_ why not just referencing it directly?_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t`math.js` is not included in the npm module_co_ and could not be imported in isolation due to lack of modules.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is possible to use npm modules in TypeScript. There is an example  _lt_a href_eq__qt_https_dd_//github.com/basarat/ts-npm-module_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI understand NPM support wouldn_t_t be a high priority as a front end library_co_ but build tools such as WebKit and and Browserify are quite popular these days.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rhys-vdw","Date":"2016-01-31T00:09:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso if you_t_re interested in this kind of change I_t_m willing to find time to provide a PR adding in module exports and imports in Babylon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-01T03:16:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor sure! If this could help others and do not break anything_co_ please do. I will validate the PR with pleasure _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rhys-vdw","Date":"2016-02-08T23:25:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDelkatosh_co_ great. sorry for the slow replies_co_ it seems this website doesn_t_t send email alerts for responses? I_t_m putting the project on hold for a few weeks_co_ but it_t_s definitely going to be using Babylon.js_co_ so I_t_ll look into it when I get back into it. I_t_ve been meaning to check out TypeScript for a while so I look forward to it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-09T00:32:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tno worry _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ We all have a life !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Swayed","Date":"2016-02-17T01:50:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! Long time lurker_co_ first time poster!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wanted to jump in and say that I_t_m also interested in the outcome of this_co_ and have read post from several other people asking for_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/7038-nodejs-with-babylon/_qt__gt_ somewhat the same thing_lt_/a_gt_. The general idea seems to be a _qt_nodejs_qt_ version of babylonjs that has the same objects and functionality as babylonjs_co_ but without the rendering code. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ one could run babylon code in nodejs_co_ using the vector3_co_ CreateScene_co_ meshes_co_ rotations_co_ raytracers_co_ moveWithCollisions_co_ but without any of the visual rendering (no window_co_ light sources_co_ shadows_co_ camera_co_ textures_co_ mapping_co_ etc). Clients would have active replication using the same babylonjs framework_co_ but with the visual appeal that the full babylonjs offers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes this make sense_co_ or is even possible? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]