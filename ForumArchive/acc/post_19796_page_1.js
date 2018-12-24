[{"Owner":"MasterK","Date":"2016-01-12T01:47:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti have a model with 32 bones_co_ and it can display and do animation in my computer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut it make wrong in ipad. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand more than 70 bones model will not display in other android device.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe error was_dd__lt_strong_gt_ _qt_too many uniforms_qt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut in early version_co_ i have 48 bones model and it works in my pad. and after update engine_co_ it cant display...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chg","Date":"2016-01-12T02:00:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know Babylon.js so it_t_s just a guess but is your 48 bone model maybe using submeshes (such that each part only uses a few of the bones)._lt_br_gt__lt_br_gt_\n\t128 is the guaranteed number of uniforms supported in WebGL / openGL ES 2_co_ GPUs can offer more but you should maybe query this at runtime if you need to use them I think._lt_br_gt__lt_br_gt_\n\tEach uniform is a 4D vector_co_ so for the matrices needed for bones you need 4 of them. eg. 32bones needs 128 uniforms._lt_br_gt__lt_br_gt_\n\tYou can_t_t use all of the vertex uniforms on bones though_co_ as you (Babylon.js) likely use them for lighting and other effects.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-01-12T02:28:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes_co_ i know this reason...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tnow i use the 20151104 version Babylon.js_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe model can display and animate in pad... the bones number is 48... it_t_s the key problem...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-01-12T04:30:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tignore _qt_early version_qt_...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin same latest version_co_ in one project_co_ the 48 bones can display...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin other project_co_ 32 bones(and 58 bones_co_ 74 bones) can_t_t display_co_ 16 bones can display...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-12T19:07:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is the declaration section of the default shader.  Ignore the varying declarations.  As you can see_co_ knowing whether you have gone over budget has a lot of input.  If you wish to run on iPad_co_ without falling back to cpu skinning_co_ you need take this into account as well as get the uniform limit for that device.  Also_co_ older iPads may handle less.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t@chg _co_ a Vec2 counts as 1_co_ not 0.5_co_ right?\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_\n// Attributes\nattribute vec3 position_sm_\n#ifdef NORMAL\nattribute vec3 normal_sm_\n#endif\n#ifdef UV1\nattribute vec2 uv_sm_\n#endif\n#ifdef UV2\nattribute vec2 uv2_sm_\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color_sm_\n#endif\n\n#if NUM_BONE_INFLUENCERS &gt_sm_ 0\n\tuniform mat4 mBones[BonesPerMesh]_sm_\n\n\tattribute vec4 matricesIndices_sm_\n\tattribute vec4 matricesWeights_sm_\n\t#if NUM_BONE_INFLUENCERS &gt_sm_ 4\n\t\tattribute vec4 matricesIndicesExtra_sm_\n\t\tattribute vec4 matricesWeightsExtra_sm_\n\t#endif\n#endif\n\n// Uniforms\n\n#ifdef INSTANCES\nattribute vec4 world0_sm_\nattribute vec4 world1_sm_\nattribute vec4 world2_sm_\nattribute vec4 world3_sm_\n#else\nuniform mat4 world_sm_\n#endif\n\nuniform mat4 view_sm_\nuniform mat4 viewProjection_sm_\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV_sm_\nuniform mat4 diffuseMatrix_sm_\nuniform vec2 vDiffuseInfos_sm_\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV_sm_\nuniform mat4 ambientMatrix_sm_\nuniform vec2 vAmbientInfos_sm_\n#endif\n\n#ifdef OPACITY\nvarying vec2 vOpacityUV_sm_\nuniform mat4 opacityMatrix_sm_\nuniform vec2 vOpacityInfos_sm_\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV_sm_\nuniform vec2 vEmissiveInfos_sm_\nuniform mat4 emissiveMatrix_sm_\n#endif\n\n#ifdef LIGHTMAP\nvarying vec2 vLightmapUV_sm_\nuniform vec2 vLightmapInfos_sm_\nuniform mat4 lightmapMatrix_sm_\n#endif\n\n#if defined(SPECULAR) &amp_sm_&amp_sm_ defined(SPECULARTERM)\nvarying vec2 vSpecularUV_sm_\nuniform vec2 vSpecularInfos_sm_\nuniform mat4 specularMatrix_sm_\n#endif\n\n#ifdef BUMP\nvarying vec2 vBumpUV_sm_\nuniform vec2 vBumpInfos_sm_\nuniform mat4 bumpMatrix_sm_\n#endif\n\n#ifdef POINTSIZE\nuniform float pointSize_sm_\n#endif\n\n// Output\nvarying vec3 vPositionW_sm_\n#ifdef NORMAL\nvarying vec3 vNormalW_sm_\n#endif\n\n#ifdef VERTEXCOLOR\nvarying vec4 vColor_sm_\n#endif\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane_sm_\nvarying float fClipDistance_sm_\n#endif\n\n#ifdef FOG\nvarying float fFogDistance_sm_\n#endif\n\n#ifdef SHADOWS\n#if defined(SPOTLIGHT0) || defined(DIRLIGHT0)\nuniform mat4 lightMatrix0_sm_\nvarying vec4 vPositionFromLight0_sm_\n#endif\n#if defined(SPOTLIGHT1) || defined(DIRLIGHT1)\nuniform mat4 lightMatrix1_sm_\nvarying vec4 vPositionFromLight1_sm_\n#endif\n#if defined(SPOTLIGHT2) || defined(DIRLIGHT2)\nuniform mat4 lightMatrix2_sm_\nvarying vec4 vPositionFromLight2_sm_\n#endif\n#if defined(SPOTLIGHT3) || defined(DIRLIGHT3)\nuniform mat4 lightMatrix3_sm_\nvarying vec4 vPositionFromLight3_sm_\n#endif\n#endif\n\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vec3 vPositionUVW_sm_\n#endif\n\n#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED\nvarying vec3 vDirectionW_sm_\n#endif\n\n#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant_sm_\nvarying float vFragmentDepth_sm_\n#endif\n_lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-01-13T01:56:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyeah_co_ thank u both.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think i see more clearly...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe defines make deafultVertex special number uniforms.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tadd bone*4 uniforms should &lt_sm_ 128. \n_lt_/p_gt_\n\n_lt_p_gt_\n\totherwise maybe shader build will throw error_co_  but it can show anyway_co_ just ignore the uniforms over 128.. so i saw the not complete model...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-01-13T02:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tand the fallbacks will reduce some defines. not very useful for many bones.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-01-13T07:30:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tit_t_s an auto change \n_lt_/p_gt_\n\n_lt_p_gt_\n\t mesh.computeBonesUsingShaders _eq_ false_sm__lt_br_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tso the problem here is_co_ when use cpu to compute bones_co_ the display is not right...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_01/5695fcee7778a_QQ20160113152955.png.7d70232e0fd7e265ee04a5606e8fa2f6.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_6020_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_01/5695fcee7778a_QQ20160113152955.png.7d70232e0fd7e265ee04a5606e8fa2f6.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_QQ图片20160113152955.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-13T17:13:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you share a demo somewhere?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-01-14T02:14:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//42.62.1.80/test/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//42.62.1.80/test/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-14T18:05:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI thought I would get the iPad uniform limits.  I did a search and got the table below from_lt_a href_eq__qt_https_dd_//developer.apple.com/library/ios/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/OpenGLESPlatforms/OpenGLESPlatforms.html_qt_ rel_eq__qt_external nofollow_qt__gt_ here_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe values are not expressed in # of uniforms_co_ so which ones would you use?\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_01/Selection_147.png.ab53d00878e47e653aefe76af8ff809f.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_6035_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_01/Selection_147.thumb.png.187b82cac5697debdd169da4562f8a9b.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Selection_147.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-14T18:10:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWait.  If I had read further_co_ I would have seen OpenGL ES 2.0 stuff.  Since mobile hardware is already supporting OpenGL ES 3.0_co_ when will WebGL?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMore searching gets me that _lt_a href_eq__qt_https_dd_//www.phoronix.com/scan.php?page_eq_news_item&amp_sm_px_eq_Firefox-WebGL2-Nightly_qt_ rel_eq__qt_external nofollow_qt__gt_FireFox Nightly_lt_/a_gt_ just started supporting WebGL 2.0.  Should BJS 2.4 be about moving to WebGL 2.0?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]