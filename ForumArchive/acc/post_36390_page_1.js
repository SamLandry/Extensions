[{"Owner":"dsman","Date":"2018-03-15T08:02:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have read many threads but have found no concrete steps to ensure we don_t_t have Aliasing in webVR ( Oculus/Vive not Cardboard based VR using  VRDeviceOrientationCamera). Most threads are about anti-aliasing in VRDeviceOrientationCamera using default render pipeline and FXAA post-process.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo let_t_s conclude it in this thread. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anti-aliasing or the level of it (4x/8x) be forced by BabylonJS while using webVR?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs my GPU is very capable_co_ while I am using other Oculus experiences the scene is perfectly anti-aliased. But while viewing our scene in BabylonJS in the browser there_t_s little aliasing everywhere. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have also figured running the browser in full screen while in WebVR (split screen view in browser)_co_ there_t_s less aliasing. Also if I reduce browser window size_co_ the aliasing is strikingly more. That makes me believe_co_ it has something to do with resolution on which the scene is rendered in primary display. That brings me to another question. Since Oculus screen resolution is larger than FullHD_co_ is it like if I had a bigger monitor than FullHD_co_ the aliasing effect would have reduced? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-03-15T18:16:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFrom my understanding_co_ anti aliasing should be possible in 2 ways.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    • FXAA is a post process and is toggled using the default pipeline. See playground below. This is done by babylon_t_s fxaa shader and should be supported by most browsers._lt_br /_gt_\n\t    • MSAA is not a post process and is performed by webGL automatically when number of samples for a given texture is specified to 4_co_ this is on by default when no pipeline is enabled. This default pipeline provides a control to toggle this that is false by default. In webGL versions &lt_sm_ 2 (eg. Edge currently) msaa is only supported on specific types of textures that are not compatible with post processes so enabling any post process will disable msaa and enabling msaa in the default pipeline will fail. (With a message in the console)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the resolution should not play a role in the quality of aa. If it does it might be an issue of re-scaling after aa has already been applied.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tTry out this playground which shows usage for both msaa and fxaa_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#DNUPI2%2327_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#DNUPI2#27_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    1. Enter vr_lt_br /_gt_\n\t    2. Observe msaa is enabled so it looks smooth_lt_br /_gt_\n\t    3. Press a key_lt_br /_gt_\n\t    4. Observe pipeline has been enabled for the headset_t_s camera with image processing enabled so msaa is now disabled and jagged edges are visible_lt_br /_gt_\n\t    5. Press 1 to toggle fxaa_lt_br /_gt_\n\t    6. Observe smoothness has improved_lt_br /_gt_\n\t    7. Press 2 to toggle msaa (Not supported in edge)_lt_br /_gt_\n\t    8. Observe smoothness has improved \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just tested this behavior in edge + mixed reality headset. Let me know if I missed any of your questions or if anyone has issues with a playground repro and I can try to take a look.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-03-15T20:19:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the elaborate answer. You mentioned that re-scaling after AA is applied could be the issue. I think this might be the issue in our case. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso is there any way to increase the MSAA quality?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-03-16T11:26:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso in normal cameras (No VR)_co_ the rendering is full anti-aliased but for some materials which are highly metallic (PBRMaterial with high metalness and less roughness and reflectionTexture from a probe with refreshRate of -1)_co_ it appears aliased like this. _lt_a href_eq__qt_http_dd_//prntscr.com/ir5aru_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//prntscr.com/ir5aru_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_img alt_eq__qt_5aaba9af8e37e_download(1).png.03d5a06eeb2e39edb86d99252fdc85ad.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17531_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/5aaba9af8e37e_download(1).png.03d5a06eeb2e39edb86d99252fdc85ad.png_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-03-16T20:25:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo increase the msaa quality_co_ the samples set on the first post process can be increased eg. setting it to 8 will be 8x aa. Currently this value is not exposed by the default pipeline but could be added if desired I created this _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3976_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3976_lt_/a_gt_ to track this potential work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the metallic issue you are describing_co_ would you be able to provide a playground example that reproduces it so it can be investigated further?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-03-24T00:21:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13379_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/_qt_ rel_eq__qt__qt__gt_@dsman_lt_/a_gt_ FYI msaa is now controlled via pipeline.samples _eq_ 4 or whatever level of msaa is desired instead of msaaEnabled to be consistent with the rest of the API before these were added a stable version.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpdated in_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#DNUPI2%2327_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#3d6594_sm_font-size_dd_14px_sm__qt__gt_http_dd_//playground.babylonjs.com/#DNUPI2#27_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]