[{"Owner":"yokewang","Date":"2018-01-04T09:36:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tIt_t_s very fast without scaling or the number of mesh is small(less than 1000). But with scaling_co_ the more meshes_co_ the slower. \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#BU5QQR%234_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_#3d6594_sm__qt__gt_https_dd_//playground.babylonjs.com/#BU5QQR#4_lt_/a_gt_  it_t_s fast with out scaling. 234ms for my computer._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#BU5QQR%233_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_#3d6594_sm__qt__gt_https_dd_//playground.babylonjs.com/#BU5QQR#3_lt_/a_gt_ it_t_s very slow when scaling. 2607ms . And when size change to 30_co_ it will be timeout._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tWhy?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tThanks.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-04T16:56:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is slower because by changing the scaling you force the world matrix to update.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo you end up with tons of math computation.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yokewang","Date":"2018-01-05T01:08:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have tested the performance for different number meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnumber     no-scaling     scaling  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1000             31ms           61ms\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3375              80ms           587ms\n_lt_/p_gt_\n\n_lt_p_gt_\n\t8000              291ms         3276ms    \n_lt_/p_gt_\n\n_lt_p_gt_\n\t15625           470ms         20615ms\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe time of no-scaling is almost linear to the number of meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut with scaling_co_ the time is exponential increasing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s confused. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-01-05T06:27:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEach time you set a new scaling value_co_ the WM is marked as dirty_co_ meaning it has to be recomputed from scratch what is a heavy operation. If don_t_t set any scaling (nor position_co_ nor rotation) value_co_ the WM isn_t_t recomputed but is got from the cache_co_ even by calling _lt_em_gt_computeWorldMatrix()_lt_/em_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fact that the performance falls down with the increasing number of meshes is not surprising _dd_ the more meshes_co_ the more computations. The fact the time increasing is no linear isn_t_t surprising either _dd_ this is the way it happens when it overcrosses the limits of the JS engine and the CPU capabilities.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor you very example (a huge bunch of spheres with different scalings)_co_ I would recommand to use a SPS (single particle system) what uses a single global WM and a single draw call to be rendered instead of thousands of individual meshes.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-05T18:04:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAlso_dd_ calling random() takes a lot of time\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-05T20:07:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_200451_qt_ data-ipsquote-contentid_eq__qt_34877_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515175499_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAlso_dd_ calling random() takes a lot of time\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAlso_co_ is a crappy way to do randomness...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yokewang","Date":"2018-01-07T01:57:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI found some clues from the source code. If scaling.isNonUniform_co_ it will iterate every mesh in the scene to _markAllSubMeshesAsDirty(I don_t_t know why) when call computeWorldMatrix.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBelow is the stack detail.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_sphereMesh.computeWorldMatrix()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t--&gt_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (this.scaling.isNonUniform) {\n  this._updateNonUniformScalingState(true)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t--&gt_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_AbstractMesh.prototype._updateNonUniformScalingState _eq_ function (value) {\n    if (!_super.prototype._updateNonUniformScalingState.call(this_co_ value)) {\n        return false_sm_\n    }\n    this._markSubMeshesAsMiscDirty()_sm_\n    return true_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t--&gt_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_AbstractMesh.prototype._markSubMeshesAsMiscDirty _eq_ function () {\n    if (!this.subMeshes) {\n        return_sm_\n    }\n    for (var _i _eq_ 0_co_ _a _eq_ this.subMeshes_sm_ _i &lt_sm_ _a.length_sm_ _i++) {\n        var subMesh _eq_ _a[_i]_sm_\n        var material _eq_ subMesh.getMaterial()_sm_\n        if (material) {\n            material.markAsDirty(BABYLON.Material.MiscDirtyFlag)_sm_\n        }\n    }\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t--&gt_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Material.prototype.markAsDirty _eq_ function (flag) {\n    if (flag &amp_sm_ Material.TextureDirtyFlag) {\n        this._markAllSubMeshesAsTexturesDirty()_sm_\n    }\n    if (flag &amp_sm_ Material.LightDirtyFlag) {\n        this._markAllSubMeshesAsLightsDirty()_sm_\n    }\n    if (flag &amp_sm_ Material.FresnelDirtyFlag) {\n        this._markAllSubMeshesAsFresnelDirty()_sm_\n    }\n    if (flag &amp_sm_ Material.AttributesDirtyFlag) {\n        this._markAllSubMeshesAsAttributesDirty()_sm_\n    }\n    if (flag &amp_sm_ Material.MiscDirtyFlag) {\n        this._markAllSubMeshesAsMiscDirty()_sm_\n    }\n    this.getScene().resetCachedMaterial()_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t--&gt_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Material.prototype._markAllSubMeshesAsMiscDirty _eq_ function () {\n    this._markAllSubMeshesAsDirty(function (defines) { return defines.markAsMiscDirty()_sm_ })_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t--&gt_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Material.prototype._markAllSubMeshesAsDirty _eq_ function (func) {\n    for (var _i _eq_ 0_co_ _a _eq_ this.getScene().meshes_sm_ _i &lt_sm_ _a.length_sm_ _i++) {\n        var mesh _eq_ _a[_i]_sm_\n        if (!mesh.subMeshes) {\n            continue_sm_\n        }\n        for (var _b _eq_ 0_co_ _c _eq_ mesh.subMeshes_sm_ _b &lt_sm_ _c.length_sm_ _b++) {\n            var subMesh _eq_ _c[_b]_sm_\n            if (subMesh.getMaterial() !_eq__eq_ this) {\n                continue_sm_\n            }\n            if (!subMesh._materialDefines) {\n                continue_sm_\n            }\n            func(subMesh._materialDefines)_sm_\n        }\n    }\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe last function _markAllSubMeshesAsDirty will iterate every mesh in the scene_co_ so the performance will decrease dramatically.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s very confusing that changing scaling is related to the material and will iterate each mesh in the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_dd_ My babylonjs version is 3.1.1  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-07T05:25:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twhat happens with you do this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar self _eq_ this_sm__lt_br /_gt__lt_span style_eq__qt_color_dd_#f92672_sm_font-size_dd_14px_sm__qt__gt_setTimeout(()_eq_&gt_sm_{self_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_._updateNonUniformScalingState(_lt_/span_gt__lt_span style_eq__qt_color_dd_#f92672_sm_font-size_dd_14px_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_)_sm_}_co_0)_sm__lt_/span_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tdoubt it will fix it_co_ but Id like to see if its the thread loop that is doing the impact.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-08T22:43:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen scaling is non uniform we have to process the normals (in the shader) using a different (a slower) path. This is why we need to flag all materials as dirty.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can add a property on the mesh which could be mesh.ignoreNonUniformScalingUpdate. It should work flawlessly in your case as you are doing everything before the first frame\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]