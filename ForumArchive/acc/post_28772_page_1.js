[{"Owner":"MackeyK24","Date":"2017-03-01T05:49:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ or _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ can i pick you guys brains for a sec...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to use the Simple Material with lighting support. But for some reason the _t_BACK-SIDE_t_ of the lighted surface is really black. This is the simple code i use to create a SimpleMaterial_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var tester_dd_BABYLON.AbstractMesh _eq_ this.scene.getMeshByName(_qt_Tester Cube 3_qt_)_sm_\nvar material_dd_BABYLON.SimpleMaterial _eq_ new BABYLON.SimpleMaterial(_qt_simpleMaterial_qt__co_ this.scene)_sm_\nmaterial.diffuseColor _eq_ BABYLON.Color3.White()_sm_\nmaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_/scenes/amiga.png_qt__co_ this.scene)_sm_\ntester.material _eq_ material_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut take a look a t the Cube on the LEFT... That is using the BABYLON.SimpleMaterial and the Cube on the right with looks perfect is using a standard shader and material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_11841_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58b65fd7afaee_ScreenShot2017-02-28at7_40_43PM.png.53f04c23bc585b307423009ba59b1c26.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_58b65fd9484ec_ScreenShot2017-02-28at7_40_43PM.thumb.png.e16d0fdd2d5b101f5c646f2d84a56bbf.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11841_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58b65fd9484ec_ScreenShot2017-02-28at7_40_43PM.thumb.png.e16d0fdd2d5b101f5c646f2d84a56bbf.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy is the back side too black when i thought SimpleMaterial supports the basic lighting workflow???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote the Beautiful shadows ... One is BAKED using Lightmaps and the Other is realtime ... But the look beautiful _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-03-01T06:00:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCheck the ambient value_co_ this does not exist on a simple mat. I guess you might have some in the standard\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-03-01T09:50:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_165459_qt_ data-ipsquote-contentid_eq__qt_28772_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1488348018_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCheck the ambient value_co_ this does not exist on a simple mat. I guess you might have some in the standard\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo Ambient values in Simple Material... Should i COPY/IMPLEMENT Ambient from default shader... Do i need the the AmbientTexture or would a base ambient color do??\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried something like this already_co_ where i tried to use a white hard coded baseAmbientColor of white... I DONT multiply baseAmbientColor.rgb *_eq_ LEVEL cause LEVEL is always 1 on texture by default... i think... Anyways i tried to include a white baseAmbientColor in the final composition but looks like the picture above... Black on backside_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_void main(void)\n\t\t\t{\n\t\t\t\t#include&lt_sm_clipPlaneFragment&gt_sm_\n\t\t\t\tvec3 viewDirectionW _eq_ normalize(vEyePosition - vPositionW)_sm_\n\n\t\t\t\t// Base color\n\t\t\t\tvec4 baseColor _eq_ vec4(1._co_ 1._co_ 1._co_ 1.)_sm_\n\t\t\t\tvec3 diffuseColor _eq_ _Color.rgb_sm_\n\n\t\t\t\t// Alpha\n\t\t\t\tfloat alpha _eq_ _Color.a_sm_\n\n\t\t\t\t#ifdef _MainTexDef\n\t\t\t\t\tbaseColor _eq_ texture2D(_MainTex_co_ _MainTexUV)_sm_\n\t\t\t\t\t#ifdef ALPHATEST\n\t\t\t\t\t\tif (baseColor.a &lt_sm_ 0.4)\n\t\t\t\t\t\t\tdiscard_sm_\n\t\t\t\t\t#endif\n\t\t\t\t\tbaseColor.rgb *_eq_ _MainTexInfos.y_sm_\n\t\t\t\t#endif\n\n\t\t\t\t#ifdef VERTEXCOLOR\n\t\t\t\t\tbaseColor.rgb *_eq_ vColor.rgb_sm_\n\t\t\t\t#endif\n\n\t\t\t\t// Ambient color\n\t\t\t\tvec3 baseAmbientColor _eq_ vec3(1._co_ 1._co_ 1.)_sm_\n\n\t\t\t\t// Normal\n\t\t\t\t#ifdef NORMAL\n\t\t\t\t\tvec3 normalW _eq_ normalize(vNormalW)_sm_\n\t\t\t\t#else\n\t\t\t\t\tvec3 normalW _eq_ vec3(1.0_co_ 1.0_co_ 1.0)_sm_\n\t\t\t\t#endif\n\n\t\t\t\t// Lighting\n\t\t\t\tvec3 diffuseBase _eq_ vec3(0._co_ 0._co_ 0.)_sm_\n\t\t\t\tlightingInfo info_sm_\n\t\t\t\tfloat shadow _eq_ 1._sm_\n\t\t\t\tfloat glossiness _eq_ 0._sm_\n\t\t\t\t#include&lt_sm_lightFragment&gt_sm_[0..maxSimultaneousLights]\n\n\t\t\t\t#ifdef VERTEXALPHA\n\t\t\t\t\talpha *_eq_ vColor.a_sm_\n\t\t\t\t#endif\n\n\t\t\t\t// Final Composition\n\t\t\t\tvec3 finalDiffuse _eq_ clamp(diffuseBase * diffuseColor + vAmbientColor_co_ 0.0_co_ 1.0) * baseColor.rgb_sm_\n\t\t\t\tvec4 color _eq_ vec4(finalDiffuse * baseAmbientColor_co_ alpha)_sm_\n\t\t\t\t#include&lt_sm_fogFragment&gt_sm_\n\t\t\t\tgl_FragColor _eq_ color_sm_\n\t\t\t}\n\t\t\t#endif //FRAGMENT-END _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my who_sm_e shader file with VERTEX and FRAGMENT sections_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_11843_qt_ data-fileid_eq__qt_11843_qt_ rel_eq__qt__qt__gt_AmigaShader.shader_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-03-01T11:03:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMight be a shadow issue as well? I assume the shadow generated is the left one. Can you try disabling the shadow and see what happens?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-03-01T11:47:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_165509_qt_ data-ipsquote-contentid_eq__qt_28772_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1488366231_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t42 minutes ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMight be a shadow issue as well? I assume the shadow generated is the left one. Can you try disabling the shadow and see what happens?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWithout static or realtime shadow... I think _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ is right about the ambient but I_t_m not too sure how to best include AMBIENT support in the simple shader...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut here is shot with out ANY shadows_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58b6b4c7ab2e2_ScreenShot2017-03-01at1_45_44AM.png.2ad2d9d7d47b546ce7ec5fc0f12702b5.png_qt_ data-fileid_eq__qt_11846_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11846_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58b6b4c96df49_ScreenShot2017-03-01at1_45_44AM.thumb.png.6b2ac5e007a534d166d235b0311f616a.png_qt_ alt_eq__qt_58b6b4c96df49_ScreenShot2017-03-01at1_45_44AM.thumb.png.6b2ac5e007a534d166d235b0311f616a.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-01T16:35:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is because the simplematerial is only about diffuse. It is not really intended to be used. It is here mostly for educational purposes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want you can as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ mentioned add code for ambient lightning\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-03-01T17:42:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_165585_qt_ data-ipsquote-contentid_eq__qt_28772_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1488386152_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis is because the simplematerial is only about diffuse. It is not really intended to be used. It is here mostly for educational purposes.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you want you can as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ mentioned add code for ambient lightning\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t Found and Fixed issue... First of all my Toolkit uses a new BABYLON.UniversalMateral for use as general purpose CYOS type deal...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe UnivseralShader is basically a copy of Standard Material merged with the Custom property map features from the shader material with the component life cycle to control you shader from tiny little shader controller scripts (just like the mesh_co_ light and camera scripts from toolkit)...  I can now pickup the entire standard (default.fx) shader pipeline for all unity supported material  property like _MainTex_co_ _BumpMap etc... that map to the UniversalMaterial diffuse bump etc... PLUS all the custom property map features from the shader material.. so can easily add runtime properties using UniversalMaterial.setfloat setTexture etc...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow i am picking up everything from standard shader pipeline ... Also Unity was using a very dark Ambient Specular Color... Had to change because babylon we want color like white for HemisphericLight specular color... Fixed that too... Now is working great so far _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-01T17:56:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDid I mention documentation lately? _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-03-01T23:51:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_165585_qt_ data-ipsquote-contentid_eq__qt_28772_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1488386152_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis is because the simplematerial is only about diffuse. It is not really intended to be used. It is here mostly for educational purposes.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you want you can as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ mentioned add code for ambient lightning\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\they _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter fixing lighting issues and use Ambient Light (Hemispheric Light) diffuse color to white the lighting shows up on cubes but as a side affect since the ambient diffuse color is white the shadows LIGHTEN up quite a bit... If i go darker ambient diffuse color the shadows are richer nut dark on cubes...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould the Shadow color take into ambient diffuse since we have shadow generator to control the darkness of shadow... Should the shadow part AFTER the ambient part in the shader fragment section??? \n_lt_/p_gt_\n\n_lt_p_gt_\n\ttake a look at the very light shadows now with ambient diffuse color set to white_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58b75e6d4e53a_ScreenShot2017-03-01at1_50_47PM.png.b60016288494262c56bee7b074c671e5.png_qt_ data-fileid_eq__qt_11854_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11854_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58b75e6edf508_ScreenShot2017-03-01at1_50_47PM.thumb.png.e668a48837ac46ab7633a4bc29ad5c3a.png_qt_ alt_eq__qt_58b75e6edf508_ScreenShot2017-03-01at1_50_47PM.thumb.png.e668a48837ac46ab7633a4bc29ad5c3a.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-02T17:44:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would say that this is expected as the ambient is here to add light even when there is no light (So even in the shadow part).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]