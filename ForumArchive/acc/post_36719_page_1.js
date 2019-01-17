[{"Owner":"jonathanlurie","Date":"2018-03-29T20:52:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co__lt_br /_gt_\n\tI am new here and new with BJS so I might ask for something obvious. Though_co_ I looked well in the resources_co_ how-tos and was digging pretty deeply into BJS codebase and couldn_t_t find any answer. Also_co_ in case of lack of satisfying answers_co_ I_t_ll also post my own solution to my problem (a hack).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to load a 3D texture of a brain (MRI) and display it on 3 orthogonal planes_co_ then i can move my plane-set around_co_ and even spin it to display oblique slices. On my GLSL code_co_ i need to load my 3D texture as a sampler3D and lookup for some world coordinates to feed gl_FragColor with the colors (actually LUMINANCE) from the texture (Look at the screenshot). And it works_co_ but with a hack_co_ because I could not find how to build a raw 3D texture object because the `RawTexture` class_co_ even though it inherits `Texture`_co_ will only call `engine.createRawTexture()` and never `engine.createRawTexture3D()`.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt first_co_ I thought I would just create my texture 3D object calling directly `engine.createRawTexture3D()` but this doesn_t_t create an instance of the prototype/class `Texture`_co_ only an `InternalTexture`_co_ so when the texture validation time comes_co_ calling methods like `myTexture.isReady()` would fail because `isReady()` (as well as other methods) are part of the `Texture` prototype/class.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is missing here is the 3D counterpart of `RawTexture`_co_ so I made it myself and called it `RawTexture3D`_co_ that I declared somewhere in my code where I have access to the BABYLON module_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/*\n(In ES6 syntax)\n\nHere_co_ _t_data_t_ is an Uint8Array and the rest is the usual things\n*/\nclass RawTexture3D extends BABYLON.Texture {\n\n    constructor(data_co_ width_co_ height_co_ depth_co_ format_co_ scene_co_\n                generateMipMaps _eq_ true_co_ invertY _eq_ false_co_\n                samplingMode _eq_ BABYLON.Texture.TRILINEAR_SAMPLINGMODE_co_\n                type _eq_ BABYLON.Engine.TEXTURETYPE_UNSIGNED_INT)\n    {\n        super(null_co_ scene_co_ !generateMipMaps_co_ invertY)_sm_\n      \n        this._texture _eq_ scene.getEngine().createRawTexture3D(\n            data_co_\n            width_co_\n            height_co_\n            depth_co_\n            format_co_\n            generateMipMaps_co_\n            invertY_co_\n            samplingMode\n        )\n\n        this.is3D _eq_ true_sm_\n    }\n}\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis works well but it would be much better if it was part of the core_co_ especially for maintenance. Say tomorrow `Texture.is3D` gets renamed into `Texture._is3D`_co_ I would probably find out the hard way...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have another solution to this hack_co_ please share! We are not a lot having to work with 3D textures_co_ so let_t_s help each other! If you were looking for a hack_co_ then this one is yours_co_ and if you are one of the core dev of BabylonJS_co_ then_co_ could you add that to the core_co_ pleeeeaaase? (or maybe i will do a PR at some point but I am not super familiar with TS) And also_co_ thanks for this awesome lib! (I_t_ve started to use it yesterday so I don_t_t even fully realize how awesome it is)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/5abd4c5e08171_Capturedecran2018-03-29a16_27_18.png.2e71c9f2177a9234e3787f51b2a977b3.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_17699_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/5abd4c5f4abf0_Capturedecran2018-03-29a16_27_18.thumb.png.de3bbe396281d37325532575b6b78e0d.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Capture d’écran 2018-03-29 à 16.27.18.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-30T15:54:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is cool!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd you are right_co_ we should expose a RawTexture3D. I will expose it for the next commit (in a couple of hours)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease grab it and let me know if it works (I won_t_t be against a cool sample with your data in the PG _sm_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-03-31T03:30:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYEAH! it works perfectly! Thanks for adding that to the core!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor loading the MRI data I use _lt_a href_eq__qt_http_dd_//www.pixpipe.io/_qt_ rel_eq__qt_external nofollow_qt__gt_Pixpipe_lt_/a_gt_ _co_ which is a lib I am developing at the Montreal Neurological Hospital. I will share this example in a git page because I am not too sure how to deal with dependencies and remote data in a PG_co_ and also the MRI has to be loaded in advance and use a callback that only then creates the scene -- I_t_m not sure we can do that in the playground. I will update this thread when I have a cleaner source to share! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut in the meantime_co_ here is a youtube capture of it in action_dd_ \n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_344_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/lcYsGEzI3zA?feature_eq_oembed_qt_ width_eq__qt_459_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-04-01T18:47:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou should make a custom shader for it and discard back.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-04-02T02:52:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ it_t_s already a custom shader and by discarding back_co_ do you mean discarding the black surrounding? If so_co_ then no_co_ researchers and clinicians are used to keep the surrounding because getting rid of it (with a simple threshold) could mean discarding important signal.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-02T18:04:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would love to share a demo on babylonjs.com!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-04-04T14:27:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _co_ I am currently cleaning up this example a bit to make it more robust because for now_co_ a lot of things are dirty and hardcoded. As soon as it_t_s cleaner (hopefully this week)_co_ I_t_ll let you know!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-04-05T01:06:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am making a cleaner example that I can share but there is a thing. My 3D texture comes from an MRI (NIfTI file) and is encoded in Float32. For the sake of simplicity_co_ I was so far converting the buffer from Float32Array into a Uint8Array and used BABYLON.Engine.TEXTUREFORMAT_LUMINANCE as a format. I_t_d rather use a flag that let me use the original float buffer_co_ it would same time_co_ memory and would allow more operation once on the shader. I thought of doing_dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt__lt_span_gt_let_lt_/span_gt_ texture3D _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.RawTexture3D(\n  img3D._data_co_ _lt_span_gt_// &lt_sm_--- THIS IS a Float32Array_lt_/span_gt_\n  dim0_co_\n  dim1_co_\n  dim2_co_\n  BABYLON.Engine.TEXTUREFORMAT_LUMINANCE_co_\n  scene\n)\n\n_lt_span_gt_// THIS IS THE LINE THAT MATTERS_lt_/span_gt_\ntexture3D.textureType _eq_ BABYLON.Engine.TEXTURETYPE_FLOAT_sm__lt_/code_gt__lt_/pre_gt_\n\t_lt_span style_eq__qt_background_dd_rgba(220_co_220_co_220_co_.5) url(&quot_sm_//www.html5gamedevs.com/applications/core/interface/ckeditor/ckeditor/plugins/widget/images/handle.png&quot_sm_)_sm__qt__gt__lt_/span_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tUnfortunately_co_ this does not work and I have a warning message saying _qt_texImage3D_dd_ type UNSIGNED_BYTE but ArrayBufferView not Uint8Array_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the record_co_ the float buffer I want to send has values from in [0_co_ few thousands] (my point is_co_ it_t_s not a [0_co_ 1] buffer).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it something possible?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-05T15:28:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt should be possible but not afterwards. You have to create your texture with the format you want. The format is then immutable\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-04-10T19:07:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _co_ I finally took the time to bake a more robust demo_co_ it_t_s _lt_a href_eq__qt_http_dd_//www.pixpipe.io/pixpipejs/examples/bjs_texture3D_example.html_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_ and the source is on _lt_a href_eq__qt_https_dd_//github.com/Pixpipe/pixpipejs/blob/master/examples/bjs_texture3D_example.html_qt_ rel_eq__qt_external nofollow_qt__gt_Github _lt_/a_gt_and part of the list of Pixpipe_t_s example. It_t_s ok to share because all the scripts are on CDN and the volume data as well _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-10T21:26:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool! Will update bjs website with it!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]