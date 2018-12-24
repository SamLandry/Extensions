[{"Owner":"Vousk-prod.","Date":"2014-03-13T11:25:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everybuddy_co_ a little question for you._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I instanciate many CubeTextures with the same skybox maps_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var cubemap_showroom1 _eq_ new BABYLON.CubeTexture(_qt_media/assets/cubemaps/showroom/showroom_qt__co_ scene)_sm_var cubemap_showroom2 _eq_ new BABYLON.CubeTexture(_qt_media/assets/cubemaps/showroom/showroom_qt__co_ scene)_sm__lt_/pre_gt__lt_p_gt_because I want different reflexion levels for different materials_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mat_verre.reflectionTexture _eq_ cubemap_showroom1_sm_mat_verre.reflectionTexture.level _eq_ 1_sm_mat_metal.reflectionTexture _eq_ cubemap_showroom2_sm_mat_verre.reflectionTexture.level _eq_ 0.2_sm__lt_/pre_gt__lt_p_gt_Are the textures loaded several times or only once ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If they_t_re loaded many times_co_ is there an optimised way to do that ?_lt_/p_gt__lt_p_gt__lt_em_gt_Of course the following doesn_t_t work (operator _lt_strong_gt__eq_ _lt_/strong_gt_assigns object by reference) _dd__lt_/em_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var cubemap_showroom _eq_ new BABYLON.CubeTexture(_qt_media/assets/cubemaps/showroom/showroom_qt__co_ scene)_sm_mat_verre.reflectionTexture _eq_ cubemap_showroom_sm_mat_verre.reflectionTexture.level _eq_ 1_sm_mat_metal.reflectionTexture _eq_ cubemap_showroom_sm_mat_verre.reflectionTexture.level _eq_ 0.2_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-13T12:56:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Since you have to instantiate many CubeTextures you get several instances in javascript but internally some properties may be shared. It is what it_t_s done when you clone a mesh for example_dd_ buffers are shared. I don_t_t know about textures in BabylonJS though and a quick reading of code doesn_t_t drive me to the conclusion that some properties are shared. There is also a clone method for textures_co_ it seems to return a new texture with the same values of the source texture but without sharing references._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure_co_ it helped... Sorry. Nevertheless maybe some other guys will jump on my remarks _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-13T17:15:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_All textures are shared. If a specific filename is used for more than one texture_co_ they all share the same data _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-03-13T21:38:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So great !! You_t_re a boss Deltakosh_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-14T01:28:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-15T22:25:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is it the following line that I missed?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this._texture _eq_ this._getFromCache(rootUrl)_sm__lt_/pre_gt__lt_p_gt_According to this function (_getFromCache)_co_ _texture is shared only if noMipmap is false or undefined for the cached entry. Is it always the case?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-16T00:37:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not exactly. Textures are cached based on the required state (url and mipmap)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.BaseTexture.prototype._getFromCache _eq_ function (url_co_ noMipmap) {        var texturesCache _eq_ this._scene.getEngine().getLoadedTexturesCache()_sm_        for (var index _eq_ 0_sm_ index &lt_sm_ texturesCache.length_sm_ index++) {            var texturesCacheEntry _eq_ texturesCache[index]_sm_            if (texturesCacheEntry.url _eq__eq__eq_ url &amp_sm_&amp_sm_ texturesCacheEntry.noMipmap _eq__eq__eq_ noMipmap) {                texturesCacheEntry.references++_sm_                return texturesCacheEntry_sm_            }        }        return null_sm_    }_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-16T09:41:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Obviously it_t_s based on url too. I was only concerned by noMipmap so I didn_t_t mention url but you_t_re right to mention it since I was not clear in my post and that could be confusing. Thanks._lt_/p_gt__lt_p_gt_In the constructor of CubeTexture_co_ _getFromCache is called with noMipmap which is undefined_co_ so the texturesCacheEntry is returned only if its noMipmap is undefined too (and it has the same url). If its noMipmap has been changed from undefined to false for example then the required state is different and data are not shared. Could this case happen? If the texturesCacheEntry doesn_t_t exist_co_ a new texture is created in CubeTexture constructor by calling createCubeTexture on the engine which doesn_t_t set noMipmap so we are fine while creating a new one but could noMipmap change later on? I guess not. Nevertheless_co_ we should remember that data are shared based on the required state (url and mipmap) and not only based on texture. A same picture (same url) could be used for a CubeTexture (noMipmap is undefined) and for a another texture without mipmaps (noMipmap is true) then data wouldn_t_t be shared_co_ would it?_lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-17T19:22:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Right_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-17T19:24:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I will add a noMipmap property for createCubeTexture_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]