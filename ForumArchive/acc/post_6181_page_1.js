[{"Owner":"Gugis","Date":"2014-05-05T18:01:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi._lt_/p_gt__lt_p_gt_I want to apply diffuse texture and color for mesh. Texture have transparent areas_co_ so i want to use diffuse color in that areas on a mesh_co_ elsewhere - apply texture. What is the best/easiest way to do it?_lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-05T18:13:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m afraid you should have to wrote your own shader for that. The standardMaterial does not have this behavior_lt_/p_gt__lt_p_gt_some useful posts abotu shaders_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/08/06/babylon-js-creating-a-convincing-world-for-your-game-with-custom-shaders-height-maps-and-skyboxes.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/08/06/babylon-js-creating-a-convincing-world-for-your-game-with-custom-shaders-height-maps-and-skyboxes.aspx_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gugis","Date":"2014-05-05T18:27:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_36991_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6181_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1399313588_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I_t_m afraid you should have to wrote your own shader for that. The standardMaterial does not have this behavior_lt_/p_gt__lt_p_gt_some useful posts abotu shaders_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/08/06/babylon-js-creating-a-convincing-world-for-your-game-with-custom-shaders-height-maps-and-skyboxes.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/08/06/babylon-js-creating-a-convincing-world-for-your-game-with-custom-shaders-height-maps-and-skyboxes.aspx_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Oh... well... I was most afraid of that.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-05T20:20:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The other idea is to copy/paste standardMaterial to a standardMaterial2 and just slightly change the shader _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gugis","Date":"2014-05-06T12:12:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nailed it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Materials/babylon.standardMaterial.js_lt_/strong_gt__lt_/p_gt__lt_p_gt_Line 296_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this._baseColor.copyFromFloats(1_co_ 1_co_ 1)_sm__lt_/pre_gt__lt_p_gt_Change to_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this._baseColor _eq_ this.diffuseColor_sm__lt_/pre_gt__lt_p_gt__lt_strong_gt_Shaders/default.fragment.fx_lt_/strong_gt__lt_/p_gt__lt_p_gt_Line 416_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_baseColor _eq_ texture2D(diffuseSampler_co_ vDiffuseUV)_sm__lt_/pre_gt__lt_p_gt_Change to_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_baseColor _eq_ (vDiffuseColor * (1.0 - texture2D(diffuseSampler_co_ vDiffuseUV).a)) + (texture2D(diffuseSampler_co_ vDiffuseUV) * texture2D(diffuseSampler_co_ vDiffuseUV).a)_sm__lt_/pre_gt__lt_p_gt_Also you can add new property to control material_t_s behaviour. Let_t_s call it _lt_em_gt_mixed_lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Materials/babylon.standardMaterial.js_lt_/strong_gt__lt_/p_gt__lt_p_gt__lt_em_gt_After line 25_dd__lt_/em_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this.emissiveColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_/pre_gt__lt_p_gt_Add new line_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this.mixed _eq_ false_sm__lt_/pre_gt__lt_p_gt_After block (lines) 66 - 72_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (this.diffuseTexture &amp_sm_&amp_sm_ BABYLON.ExtendedMaterial.DiffuseTextureEnabled) {    if (!this.diffuseTexture.isReady()) {        return false_sm_    } else {        defines.push(_qt_#define DIFFUSE_qt_)_sm_    }}_lt_/pre_gt__lt_p_gt_Add new block_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if(this.mixed){    defines.push(_qt_#define MIXED_qt_)_sm_}_lt_/pre_gt__lt_p_gt_Now line 301_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this._baseColor _eq_ this.diffuseColor_sm__lt_/pre_gt__lt_p_gt_Change to this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if(this.mixed)    this._baseColor _eq_ this.diffuseColor_sm_else    this._baseColor.copyFromFloats(1_co_ 1_co_ 1)_sm__lt_/pre_gt__lt_p_gt_Lastly after line 529_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_newExtendedMaterial.specularPower _eq_ this.specularPower_sm__lt_/pre_gt__lt_p_gt_Add new line_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_newExtendedMaterial.mixed _eq_ this.mixed_sm__lt_/pre_gt__lt_p_gt__lt_strong_gt_Shaders/default.fragment.fx_lt_/strong_gt__lt_/p_gt__lt_p_gt_In fragment shader file change line 416 to_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_#ifdef MIXED\tbaseColor _eq_ (vDiffuseColor * (1.0 - texture2D(diffuseSampler_co_ vDiffuseUV).a)) + (texture2D(diffuseSampler_co_ vDiffuseUV) * texture2D(diffuseSampler_co_ vDiffuseUV).a)_sm_#else\tbaseColor _eq_ texture2D(diffuseSampler_co_ vDiffuseUV)_sm_#endif _lt_/pre_gt__lt_p_gt_Now you can use both color and texture_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var material _eq_ new BABYLON.StandardMaterial(_qt_male_qt__co_ game.scene)_sm_material.diffuseTexture _eq_ new BABYLON.Texture(_qt_/game/textures/male.png_qt__co_ game.scene)_sm_material.diffuseColor _eq_ new BABYLON.Color3(0.88_co_0.72_co_0.6)_sm_material.mixed _eq_ true_sm_ // false if you want to have old behaviour_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]