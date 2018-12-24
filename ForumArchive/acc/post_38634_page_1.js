[{"Owner":"JCPalmer","Date":"2018-07-04T17:43:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am not sure there is really a need to be able to record (webm) when using the VR rig.  One of the _lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_CZaXW4VQ4tY_qt_ rel_eq__qt_external nofollow_qt__gt_few 3D video on YouTube_lt_/a_gt_ has gotten 2.8 million views_co_ so I would definitely want to get some of that.  Not seen any videos with a barrel distortion.  I do not have the hardware.  Can you even watch stuff with a _qt_phone on your head_qt_?  I recall something during the winter Olympics.  If trying to record with the VR rig is a waste of time_co_ please let me know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf this is desirable output_co_ basically nothing comes out when _lt_u_gt__lt_strong_gt_canvas.toDataURL(_t_image/webp_t__co_ quality)_sm__lt_/strong_gt__lt_/u_gt_ is called on Chrome when this rig is used.  I suspect that it is due to the fact that each of the sub-cameras writes to it own _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.camera.ts#L747_qt_ rel_eq__qt_external nofollow_qt__gt_viewport_lt_/a_gt__co_ and that is not taken into account.  Really glad this would not work for the stereo rigs I added_co_ or I might have screwed myself. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I tried the newer WEBVR rig_co_ it did output_co_ but only a single screen.  Is the VR rig just around for backward compatibility?  Might it be ok to mess with the old VR rig_co_ maybe add another post process_co_ if I can think of a way?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFYI_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ &amp_sm_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ I cringe every time RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL is mentioned as a solution when some device does  not support webVR.  The stereo rigs are interleafing_co_ meaning that in the doubled dimension only every other pixel is printed.  It gives each side a squished look_co_ but on a 3D TV it widens out to the original dimensions. Something for these devices would need to crop the left &amp_sm_ right side of each image to really work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-07-05T09:20:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHI JC_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcamera rig is still being used in webvr. WenVR has two child-cameras_co_ defined also as rig cameras (unlss it was internally changed?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout exporting the canvas_co_ it is important to know when to run the canvas.toDataURL . I remember trying to use it as well_co_ having a few problems with it because i called it inside the babylon before-render loop (obviously the wrong place).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to share a demo and show what_t_s not working_co_ maybe we can get it to work?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-05T14:36:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I_t_ll postpone any demos till the PG can save them.  I am using a scene level After-render.  The stereo rigs also use a post process_co_ and they work.  That is why I zeroed in on the different part_co_ the viewport feature.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-05T17:49:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPG restored _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-05T19:16:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#UQILNB%231_qt_ rel_eq__qt_external nofollow_qt__gt_Demo _lt_/a_gt_made.  It only runs on Chrome.  I tried to simplify to the maximum_co_ so no webm is made_co_ just a single  _t_image/webp_t__co_ which is displayed on a new page.  So you can see the source code_co_ I commented out the after render registration.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpshot is the demo worked_co_ which is pretty good to me.  It did not solve the problem of why this rig is not generating_co_ but I now know I was looking in the wrong place.  Assumptions reset now in progress.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFYI_co_ if you replace the rig with _lt_strong_gt_RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL_lt_/strong_gt__co_ then an error is generated _qt_ e.StereoscopicInterlacePostProcess is not a constructor_qt_.  This works in the last stable version_co_ so the version in dev has broken it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-05T20:47:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWill fix the stereo issue\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-05T20:49:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWill be fixed with next commit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-06T15:15:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I looked at the webm file through a webm viewer program.  All the frames are there.  The byte size of the frames is what I am expecting.  I modified my test scene to do the same trick as the playground_co_ namely take the last frame of the video_co_ make a document out of it_co_ &amp_sm_ just write over the web page.  It is coming out fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoing some completely random changing just to get something _qt_to pop_qt__co_ I changed the scene clear color to grey from black_co_ but when the video is played all the frames are still just Black.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19047_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/1454847670_VRCapture.JPG.fe96fbe51d4ff57fc0dc3b299fb8608b.JPG_qt_ alt_eq__qt_1454847670_VRCapture.JPG.fe96fbe51d4ff57fc0dc3b299fb8608b.JPG_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGot me to thinking though.  Just what exactly IS that white stuff that surrounds?  Is it even stuff? Can we make it actual stuff in dev to see if a webp image gets generated_co_ so a webm video understands it? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can do a few more tests like look at the file through a hex file reader.  Doing that helped me see that setting the quality to 1.0_co_ changed the format from VP8 to VP8L.  This did not work.  Got all black there too.  That is why my quality slider only goes to 0.99.  Hmm?  I_t_ll look at this area again too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T15:25:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe white stuff is the clear color of the scene (used to clear the render texture used by the vr distortion post process)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you want to change the color? (easy by setting the clear color of the render target) or something else?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-06T16:05:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs a test_co_ yes_co_ anything without any alpha would do.  Can this be made in application code_co_ or only in the framework?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-06T16:42:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSame question as before about app or framework code?  FYI_co_ in a WEBP image_co_ there can be 3 different codecs_co_ VP8_co_ _lt_a href_eq__qt_https_dd_//developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification_qt_ rel_eq__qt_external nofollow_qt__gt_VP8L_lt_/a_gt__co_ &amp_sm_ _lt_a href_eq__qt_https_dd_//developers.google.com/speed/webp/docs/riff_container#extended_file_format_qt_ rel_eq__qt_external nofollow_qt__gt_VP8X_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVP8L is for lossless.  That is what I get when I set the quality to 1.0. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure what VP8X is_co_ but when I change to the VR rig_co_ that is what is coming out_co_ not _t_VP8 _t_ like all the other rigs!  One of these 3 strings are always found in the dataUrl.  8 bytes later the data starts.  I am currently just checking for _t_VP8_t_ in the data. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe WEBM video format takes 2 codecs _t_VP8_t_ &amp_sm_ _t_VP9_t_.  Something is causing a _t_VP8X_t_ to be generated.  At least now I think I know the reason the video is black.  The border seems to be the only difference.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-06T17:43:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHold on_co_  something that just happened.  I changed my test to find the start of data from _t_VP8 _t_ to _t_VP8 _t_.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let keyframeStartIndex _eq_ webP.indexOf(_t_VP8 _t_)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe video in not now all black.  The area in the background is black &amp_sm_ jagged_co_ but that_t_s a start.  I am really thinking this has to do with alpha of the clear color.  My checks for _t_VP8X_t_ are still successful_co_ so BOTH must be in the file when using VR rig. (Am going to have to check the quality 1.0 thing again too).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill similar question_co_ can the alpha be taken out of clear_co_ or is this also being used by the edges of what is rendered_co_ so will not matter?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_vrCapture2.JPG.2e4833cb2bebf3916dfccc564fcd92f1.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19050_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/vrCapture2.JPG.2e4833cb2bebf3916dfccc564fcd92f1.JPG_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T18:20:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell there is no alpha (that I_t_m aware of here). Only a plain color is used_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/PostProcess/babylon.postProcess.ts#L471_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/PostProcess/babylon.postProcess.ts#L471_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-06T22:19:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am going to do a quick test on chrome or Firefox using the _lt_a href_eq__qt_https_dd_//www.w3.org/TR/mediacapture-fromelement/#html-canvas-element-media-capture-extensions_qt_ rel_eq__qt_external nofollow_qt__gt_HTML Canvas.captureStream()_lt_/a_gt_ instead of toDataUrl().  I tried it earlier_co_ but got strange results.  If this method does give good results for the VR rig_co_ I think I have found a way to get around the issue I have with this method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat issue is it is realtime-based.  It is much faster than toDataUrl()_co_ because it just passes a memory pointer of the canvas to a browser background thread.  But_co_ you cannot use it to directly render at a true_co_ dependable_co_ settable frame rate.  And also_co_ not to a frame rate might be greater than your scene can be rendered at a given resolution on your machine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn example is a complicated scene_co_ with many meshes using 2 sub-cameras &amp_sm_ postprocessing for 3D_co_ say @ 1080 or Ultra-HD resolution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA think a commandline program ffmpeg has an option which allows you to over write whatever the capture said the time was with a fixed increment.  Now you can capture at perfectly timed frames at given points in time_co_ regardless of when they actually render.  I need to merge the final consolidated audio file with the video file anyway. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe option is_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t-r[_dd_stream_specifier] fps (input/output_co_per-stream)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSet frame rate (Hz value_co_ fraction or abbreviation).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAs an input option_co_ ignore any timestamps stored in the file and instead generate timestamps assuming constant frame rate fps. This is not the same as the -framerate option used for some input formats like image2 or v4l2 (it used to be the same in older versions of FFmpeg). If in doubt use -framerate instead of the input option -r.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-07T15:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI came so close to getting a completely successful _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#A7UIKS%234_qt_ rel_eq__qt_external nofollow_qt__gt_test _lt_/a_gt_of Canvas.captureStream on FireFox_co_ _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_.  Whether on Chrome or Firefox_co_ the VR rig worked fine_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19068_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/153719356_Usingcanvas-Capture.JPG.0ace2dd84bf5717e0aa9e7b1c0a024e4.JPG_qt_ alt_eq__qt_153719356_Usingcanvas-Capture.JPG.0ace2dd84bf5717e0aa9e7b1c0a024e4.JPG_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn either case though_co_ you cannot specify a codec.  Firefox puts out VP8_co_ but chrome does not even put out a true WEBM file.  It has an MP4 codec.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19069_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/1096312500_Firefoxresults.JPG.2f17c680e8c934bbbfef5b24015d9bc7.JPG_qt_ alt_eq__qt_1096312500_Firefoxresults.JPG.2f17c680e8c934bbbfef5b24015d9bc7.JPG_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19070_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/116117303_Chromeresults.JPG.a35cac83fc0b76e2e00b267f92117209.JPG_qt_ alt_eq__qt_116117303_Chromeresults.JPG.a35cac83fc0b76e2e00b267f92117209.JPG_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe killer is you cannot set the size of the capture in code.  It is whatever the physical size of the canvas is on the screen.  It makes sense_co_ but that is a problem which cannot really be overlooked.  Am going to stick with toDataUrl() method_co_ and table the VR rig for now_co_ unless some knows how to size a physical canvas (probably need to create the canvas in code).  I have a 30_qt_ high res display (2560 x 1600)_co_ so could not do UHD (3840 x 2160).  Do not know if that is a real problem or just imaged.  Code I use to size canvas_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// make videos of an exact size_co_ regardless if looks weird on screen\nfunction sizeSurface( width_co_ height) {\n    const canvas _eq_ engine.getRenderingCanvas()_sm_\n    canvas.width _eq_ width_sm_\n    canvas.height _eq_ height_sm_\n\n     // may not have auto resize_sm_ if it does no harm doing it again\n     engine.setSize(width_co_ height)_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-09T17:19:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInteresting study!! Can_t_t remember if you tried the ScreenRecorder from WebRTC_dd_ _lt_a href_eq__qt_https_dd_//www.webrtc-experiment.com/Pluginfree-Screen-Sharing/#5834900709824411_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.webrtc-experiment.com/Pluginfree-Screen-Sharing/#5834900709824411_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-07-10T20:19:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks_co_ but no_co_ I had not.  I can say that I am all about control &amp_sm_ that looks to have none (no frame rate_co_ no quality_co_ no resolution).  I just completed using toDataUrl().\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/vid-gui.jpg.5859fa9472dc6de8977fc3cd3fce13f1.jpg_qt_ data-fileid_eq__qt_19129_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19129_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/vid-gui.thumb.jpg.d1c18b977d7b0732779e3d1827cfb546.jpg_qt_ alt_eq__qt_vid-gui.thumb.jpg.d1c18b977d7b0732779e3d1827cfb546.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is the only one in which you can control quality.  In the 1.6 sec clip below_co_ the .webm + .wav files combined size is a MASSIVE 8_co_858 kb.  That is a lot for so small a clip_co_  but when the multi-pass VP9 codec convert &amp_sm_ sound track merge is done by ffmpeg_co_ it is only 277 kb.  As I am merging the consolidated soundtrack afterward anyway_co_ giving ffmpeg the most crisp frames as a source to encode as VP9 or H264 is very desirable.  It takes a lot of RAM_co_ but I have 16 gb &amp_sm_ room for 16 more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe annotations in the cropped black bars were supposed to be just a joke_co_ but it is really helpful to bake settings right into the video during dev.  You can easily mix your files without knowing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm now starting to work on a clip with actual talking_co_ work on recording code is done_co_ unless I fine something.  The alpha for VR is probably in the cameras_co_ not background thinking about it.  Going to throw VR under the Bus.  Actually_co_ YouTube can show _lt_a href_eq__qt_https_dd_//support.google.com/youtube/answer/6178631?hl_eq_en&amp_sm_ref_topic_eq_2888648_qt_ rel_eq__qt_external nofollow_qt__gt_360 videos_lt_/a_gt_.  Not going to attempt this right now_co_  but wonder about having a rig with say 300 cameras &amp_sm_ viewports.  The VR distortion on the combined_co_ probably wrong for this though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt_\n_lt_video class_eq__qt_ipsEmbeddedVideo_qt_ controls_eq__qt__qt_ data-controller_eq__qt_core.global.core.embeddedvideo_qt__gt_\n\t\t_lt_source src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/side-by-side-vp9.webm.13dcfc851b5e1361de4ebd1c7993ff1c.webm_qt_ type_eq__qt_video/webm_qt__gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_19130_qt_ data-fileid_eq__qt_19130_qt_ rel_eq__qt__qt__gt_side-by-side-vp9.webm_lt_/a_gt_\n\t_lt_/source_gt__lt_/video_gt_\n\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]