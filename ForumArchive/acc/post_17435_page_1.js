[{"Owner":"CodeIain","Date":"2015-09-25T08:58:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi All_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am looking for some advice._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am currently working on a project the will display a mesh on a scene. this will them be projected inside a dome with a warped lens._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For this to look correct when projected I need to warp the scene like this._lt_/p_gt__lt_p_gt__lt_img src_eq__qt_https_dd_//rengkodriders.files.wordpress.com/2011/12/stereographic_projection_15.jpg_qt_ alt_eq__qt_stereographic_projection_15.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I was wondering is I could do this via a custom camera that would inherit from the standard Arc camera but display the scene like the above image._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have come across this project on GitHub that has a shader that  warps google map images how I would want me scene to warp_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//notlion.github.io/streetview-stereographic/#o_eq_.729_co_-.483_co_.346_co_.34&amp_sm_z_eq_1.743&amp_sm_mz_eq_18_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//notlion.github.io/streetview-stereographic/#o_eq_.729_co_-.483_co_.346_co_.34&amp_sm_z_eq_1.743&amp_sm_mz_eq_18_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I was wondering is there was any tutorials or examples on how to attach a shader to a camera or scene?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any help would be great!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-25T09:26:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_About the shaders_dd_ did you see this one already_dd_ _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-25T09:29:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have had a quick look at that page but I have the shader_co_ but am not 100% on how to apply it to a camera rather that a mesh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-25T10:26:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I don_t_t really know much about shaders_co_ but I think it it applies to what_t_s on the screen... so it_t_s for the whole scene as far as I know. But let_t_s wait for somebody who knows a bit more about it than I do _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-25T16:25:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have been trying this on the CYOS but my shader compiles but all I get is a black screen._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could anyone help?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/CYOS/#2L9YGY_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/CYOS/#2L9YGY_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-25T17:01:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This comes from your vertex shader where you only use projection and not worldViewProjection_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-25T17:30:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi thanks for this any chance you could supply me an example._lt_/p_gt__lt_p_gt_Am still struggling with how to apply a shader to the camera or scene rather than a model._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-25T17:43:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To apply a shader to a scene or camera_co_ you have to use postprocesses_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_PostProcesses_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_PostProcesses_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-27T07:11:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok am still struggling with this!!!!!!!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_this is where i have got but the error in the logs are not very helpful_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1DVN04_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1DVN04 _lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could anyone show me where am going wrong?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-27T09:38:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My Chrome says_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/Babylon/Shaders/customFragmentShader.fragment.fx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/Babylon/Shaders/customFragmentShader.fragment.fx_lt_/a_gt_ Failed to load resource_dd_ the server responded with a status of 404 (Not Found)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_..as the first error. Not sure why it is looking for that file but it seems missing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Did you already get it working in the CYOS? I tried copying your shader definitions_co_ it seems to compile but the object just turns black_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#1MVZJN_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#1MVZJN_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But since it compiles it might just be a problem about how you use the shader in the playground. I know some people have done that before but I couldn_t_t find a working example in the forum yet. Did you already try to use the shader on your local pc or a webspace with separate files? Does that make any difference?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd_ found one where shader is working in the playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WBBW0%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WBBW0#1_lt_/a_gt_ Maybe you can compare and check ifthis one does something differently. (I know I am not a big help_co_ sorry about that. I am just providing ideas _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-27T12:56:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_All ideas_co_ have been great_co_ i think it is a issue with my shader i have never built a shader before so its a big learning curve._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-27T16:40:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When I run my _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1DVN04_qt_ rel_eq__qt_external nofollow_qt__gt_playground _lt_/a_gt_example i get the following in the logs but my shader compiles in the CYOS_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div style_eq__qt_font-family_dd_consolas_sm_font-size_dd_12px_sm_color_dd_#FF0000_sm__qt__gt_[17_dd_38_dd_51]_dd_ Error_dd_ ERROR_dd_ 0_dd_1_dd_ _t_The_t_ _dd_ syntax error_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_div style_eq__qt_font-family_dd_consolas_sm_font-size_dd_12px_sm_color_dd_#FF0000_sm__qt__gt_[17_dd_38_dd_51]_dd_ Defines_dd__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_div style_eq__qt_font-family_dd_consolas_sm_font-size_dd_12px_sm_color_dd_#FF0000_sm__qt__gt_[17_dd_38_dd_51]_dd_ Fragment shader_dd_customFragmentShader_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_div style_eq__qt_font-family_dd_consolas_sm_font-size_dd_12px_sm_color_dd_#FF0000_sm__qt__gt_[17_dd_38_dd_51]_dd_ Vertex shader_dd_postprocess_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_div style_eq__qt_font-family_dd_consolas_sm_font-size_dd_12px_sm_color_dd_#FF0000_sm__qt__gt_[17_dd_38_dd_51]_dd_ Unable to compile effect_dd__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-28T08:25:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_also when i run this locally I get _lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_If I use my Vector Shader _lt_/div_gt__lt_div_gt_BJS - [09_dd_24_dd_22]_dd_ Error_dd_ ERROR_dd_ 0_dd_1_dd_ _t__t_ _dd_ No precision specified for (float) _lt_/div_gt__lt_div_gt_ERROR_dd_ 0_dd_2_dd_ _t_attribute_t_ _dd_  supported in vertex shaders only  _lt_/div_gt__lt_div_gt_ERROR_dd_ 0_dd_2_dd_ _t__t_ _dd_ No precision specified for (float) _lt_/div_gt__lt_div_gt_ERROR_dd_ 0_dd_3_dd_ _t_attribute_t_ _dd_  supported in vertex shaders only  _lt_/div_gt__lt_div_gt_ERROR_dd_ 0_dd_3_dd_ _t__t_ _dd_ No precision specified for (float) _lt_/div_gt__lt_div_gt_ERROR_dd_ 0_dd_4_dd_ _t__t_ _dd_ No precision specified for (float) _lt_/div_gt__lt_div_gt_ERROR_dd_ 0_dd_6_dd_ _t_assign_t_ _dd_  l-value required _qt_v_texcoord_qt_ (can_t_t modify a varying)_lt_/div_gt__lt_div_gt_ERROR_dd_ 0_dd_7_dd_ _t_gl_Position_t_ _dd_ undeclared identifier _lt_/div_gt__lt_div_gt_ERROR_dd_ 0_dd_7_dd_ _t_assign_t_ _dd_  cannot convert from _t_4-component vector of float_t_ to _t_float_t__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_And If i use my fragmentShader I get _lt_/div_gt__lt_div_gt_Error_dd_ Varyings with the same name but different type_co_ or statically used varyings in fragment shader are not declared in vertex shader_dd_ v_texcoord_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_my Vector Shader looks like this_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_    uniform mat4 worldViewProjection_sm_        attribute vec3 position_sm_        attribute vec2 texcoord_sm_        varying vec2 v_texcoord_sm_        void main(){            v_texcoord _eq_ texcoord_sm_            gl_Position _eq_ worldViewProjection * vec4(position_co_ 1.)_sm_        }_lt_/pre_gt__lt_p_gt_and my fragment shader looks like this _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_precision mediump float_sm_uniform sampler2D texture_sm_uniform float scale_co_ aspect_co_ time_sm_uniform mat3 transform_sm_varying vec2 v_texcoord_sm_#define PI 3.141592653589793void main(){\tvec2 rads _eq_ vec2(PI * 2._co_ PI)_sm_\tvec2 pnt _eq_ (v_texcoord - .5) * vec2(scale_co_ scale * aspect)_sm_\t// Project to Sphere\tfloat x2y2 _eq_ pnt.x * pnt.x + pnt.y * pnt.y_sm_\tvec3 sphere_pnt _eq_ vec3(2. * pnt_co_ x2y2 - 1.) / (x2y2 + 1.)_sm_\tsphere_pnt *_eq_ transform_sm_\t// Convert to Spherical Coordinates\tfloat r _eq_ length(sphere_pnt)_sm_\tfloat lon _eq_ atan(sphere_pnt.y_co_ sphere_pnt.x)_sm_\tfloat lat _eq_ acos(sphere_pnt.z / r)_sm_\tgl_FragColor _eq_ texture2D(texture_co_ vec2(lon_co_ lat) / rads)_sm_}_lt_/pre_gt__lt_p_gt_and am using the BABYLON.PostProcess like this._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ var postProcess _eq_ new BABYLON.PostProcess(_qt_Down sample_qt__co_ _qt_../shaders/fragmentShader_qt__co_ [_qt_worldViewProjection_qt_]_co_ null_co_ 0.25_co_ null_co_ BABYLON.Texture.BILINEAR_SAMPLINGMODE_co_ engine_co_ true)_sm_                return scene_sm__lt_/pre_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Just don_t_t why this is not working any help would be great_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-28T10:58:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok I am making some progress_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My shader not renders in the CYOS _lt_a href_eq__qt_http_dd_//www.babylonjs.com/CYOS/#2L9YGY%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/CYOS/#2L9YGY#5_lt_/a_gt_ doesn_t_t give the result I want but I can work on that but when ever I try and run this as a BABYLON.PostProcess i get the error _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Error_dd_ Varyings with the same name but different type_co_ or statically used varyings in fragment shader are not declared in vertex shader_dd_ v_texcoord_lt_/pre_gt__lt_p_gt_So how do I define what vertex shader is used on a PostProcess?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CodeIain","Date":"2015-09-28T12:05:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Am I just being a complete idot?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Lets take a step back_co_ I am trying to take a 3D view like this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QSMQ0%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QSMQ0#1_lt_/a_gt_ and apply a shader to it so it rather that render in 3D renders like the image in my first post_lt_/p_gt__lt_p_gt__lt_img src_eq__qt_https_dd_//rengkodriders.files.wordpress.com/2011/12/stereographic_projection_15.jpg_qt_ alt_eq__qt_stereographic_projection_15.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have been trying to do this with a fragment shader but as i want to apply this to all Meshes in the scene not there textures._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So would I need to the do this via a vector shader to manipulate the points of each vector?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-28T16:10:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello did you read the documentation? _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_PostProcesses_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_PostProcesses_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You have to use only the defined values_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_background-color_dd_rgb(248_co_248_co_248)_sm__qt__gt_varying vec2 vUV_sm_ _lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_background-color_dd_rgb(248_co_248_co_248)_sm__qt__gt_uniform sampler2D textureSampler_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And do not forget to add .fx MIMETYPE to your web server_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]