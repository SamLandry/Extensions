[{"Owner":"MackeyK24","Date":"2018-07-13T00:37:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys... Im working on encoding GLTF Skeletal Animations. It looks like the skeleton is there_co_ the bones are there_co_ the animations are on the bones...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut for some reason_co_ it does not Animate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  or _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ or _lt_strong_gt_ANYBODY_lt_/strong_gt_ who know _lt_strong_gt_ANYTHING_lt_/strong_gt_ about _lt_strong_gt_GLTF Animations_lt_/strong_gt_ ... C an you please take a look at this playground_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#I42JEZ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#I42JEZ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe you can tell WTF is going on the GLTF Animations i hav encoded... Am i missing something in the GLTF File or what.... Is the the Bone Weights ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShit... This is so frustrating because there is not that much to go on BESIDES the Khronos and Sketchfab UnityGLTF Exporters... WHICH BOTH SUCK FOR ANIMATIONS... So now i gotta go re-write that shit too _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-13T18:21:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have no much time but I can suggest you to try your generated gltf with the validator first_dd_ _lt_a href_eq__qt_http_dd_//github.khronos.org/glTF-Validator/_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//github.khronos.org/glTF-Validator/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-13T18:45:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI finally found the issue... GLTF is great... but the Unity GLTF not quite as good with animations... at least the transform animations work...\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti was use all my animation baking tools for skeletal animations\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-16T14:02:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks like im gonna have to implement GLTF Animations from scratch in UnityGLTF. Khronos does not support animations in the UnityGLTF Exporter and the Sketchfab has too many tweaks made especially for sketchfab viewer... Plus only the TRS animations worked... Kind of... So it looks like i am going to have to either study up on the GLTF Animation Format or serialized native Unity Animation Meta Data and handle that Animation Meta Data in the Parser... Bummer _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-07-17T18:49:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ There is a PR in the UnityGLTF repo that adds animation export support_dd_ _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/UnityGLTF/pull/160_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/UnityGLTF/pull/160_lt_/a_gt_. This was a port from _lt_a href_eq__qt_https_dd_//github.com/bghgary/glTF-Tools-for-Unity_qt_ rel_eq__qt_external nofollow_qt__gt_my repo_lt_/a_gt_ which already supports animation export. Let me know if this works for you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T04:41:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ are you sure that code is supposed to work... I fork that guys UnityGLTF... But when i try to export with animations... I get this error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tArgumentException_dd_ The requested value _t_localEulerAnglesRaw_t_ was not found.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tSystem.Enum.Parse (System.Type enumType_co_ System.String value_co_ Boolean ignoreCase) (at /Users/builduser/buildslave/mono/build/mcs/class/corlib/System/Enum.cs_dd_692)_lt_br /_gt_\n\tSystem.Enum.Parse (System.Type enumType_co_ System.String value) (at /Users/builduser/buildslave/mono/build/mcs/class/corlib/System/Enum.cs_dd_547)_lt_br /_gt_\n\tUnityGLTF.GLTFSceneExporter.ExportAnimation (UnityEngine.GameObject gameObject_co_ UnityEngine.AnimationClip unityAnimationClip) (at Assets/Canvas/Build/Sources/Extensions/GLTFSceneExporter.Animation.cs_dd_88)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs crapping out here_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#1e1e1e_sm_color_dd_#d4d4d4_sm_font-size_dd_12px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_                    _lt_/span_gt__lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_Property_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_property_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ (_lt_/span_gt__lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_Property_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_Enum_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_Parse_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_typeof_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_Property_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_pairProperty_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_Key_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tSo he is try to use a name that does now exist in the enum... I can only imagine _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T05:23:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222084_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531853399_qt_ data-ipsquote-userid_eq__qt_26831_qt_ data-ipsquote-username_eq__qt_bghgary_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ bghgary said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ There is a PR in the UnityGLTF repo that adds animation export support_dd_ _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/UnityGLTF/pull/160_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/UnityGLTF/pull/160_lt_/a_gt_. This was a port from _lt_a href_eq__qt_https_dd_//github.com/bghgary/glTF-Tools-for-Unity_qt_ rel_eq__qt_external nofollow_qt__gt_my repo_lt_/a_gt_ which already supports animation export. Let me know if this works for you.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow long ago was the animation support added... Apparently_co_ Unity uses localEulerAnglesRaw and NOT m_LocalRotation... How do i handle that ??? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T08:58:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMan i dont know about that one... Its not taking into account ALL the ofer rotation type... And the way hey is baking the clip... i have no idea when it the best time in his code to convert that Euler values to Quaternion...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the localEuler stuff has been around since 5.3... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo i i am wonder how this EVER worked ONLY using m_LocalRotation ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe should be doing Something like this to get ALL rotation types_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\t\t\t\tTargetCurveSet current _eq_ targetCurves[binding.path]_sm_\n\t\t\t\tif (binding.propertyName.Contains(_qt_m_LocalPosition_qt_))\n\t\t\t\t{\n\t\t\t\t\tif (binding.propertyName.Contains(_qt_.x_qt_))\n\t\t\t\t\t\tcurrent.translationCurves[0] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.y_qt_))\n\t\t\t\t\t\tcurrent.translationCurves[1] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.z_qt_))\n\t\t\t\t\t\tcurrent.translationCurves[2] _eq_ curve_sm_\n\t\t\t\t}\n\t\t\t\telse if (binding.propertyName.Contains(_qt_m_LocalScale_qt_))\n\t\t\t\t{\n\t\t\t\t\tif (binding.propertyName.Contains(_qt_.x_qt_))\n\t\t\t\t\t\tcurrent.scaleCurves[0] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.y_qt_))\n\t\t\t\t\t\tcurrent.scaleCurves[1] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.z_qt_))\n\t\t\t\t\t\tcurrent.scaleCurves[2] _eq_ curve_sm_\n\t\t\t\t}\n\t\t\t\telse if (binding.propertyName.ToLower().Contains(_qt_localrotation_qt_))\n\t\t\t\t{\n\t\t\t\t\tcurrent.rotationType _eq_ ROTATION_TYPE.QUATERNION_sm_\n\t\t\t\t\tif (binding.propertyName.Contains(_qt_.x_qt_))\n\t\t\t\t\t\tcurrent.rotationCurves[0] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.y_qt_))\n\t\t\t\t\t\tcurrent.rotationCurves[1] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.z_qt_))\n\t\t\t\t\t\tcurrent.rotationCurves[2] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.w_qt_))\n\t\t\t\t\t\tcurrent.rotationCurves[3] _eq_ curve_sm_\n\t\t\t\t}\n\t\t\t\t// Takes into account _t_localEuler_t__co_ _t_localEulerAnglesBaked_t_ and _t_localEulerAnglesRaw_t_\n\t\t\t\telse if (binding.propertyName.ToLower().Contains(_qt_localeuler_qt_))\n\t\t\t\t{\n\t\t\t\t\tcurrent.rotationType _eq_ ROTATION_TYPE.EULER_sm_\n\t\t\t\t\tif (binding.propertyName.Contains(_qt_.x_qt_))\n\t\t\t\t\t\tcurrent.rotationCurves[0] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.y_qt_))\n\t\t\t\t\t\tcurrent.rotationCurves[1] _eq_ curve_sm_\n\t\t\t\t\telse if (binding.propertyName.Contains(_qt_.z_qt_))\n\t\t\t\t\t\tcurrent.rotationCurves[2] _eq_ curve_sm_\n\t\t\t\t}\n\t\t\t\ttargetCurves[binding.path] _eq_ current_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen when Evaluating_co_ Convert Eulers to Quaternion\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (curveSet.rotationType _eq__eq_ ROTATION_TYPE.EULER)\n{\n\tQuaternion eulerToQuat _eq_ Quaternion.Euler(curveSet.rotationCurves[0].Evaluate(currentTime)_co_ curveSet.rotationCurves[1].Evaluate(currentTime)_co_ curveSet.rotationCurves[2].Evaluate(currentTime))_sm_\n\trotations[i] _eq_ new Vector4(eulerToQuat.x_co_ eulerToQuat.y_co_ eulerToQuat.z_co_ eulerToQuat.w)_sm_\n}\nelse\n{\n\trotations[i] _eq_ new Vector4(curveSet.rotationCurves[0].Evaluate(currentTime)_co_ curveSet.rotationCurves[1].Evaluate(currentTime)_co_ curveSet.rotationCurves[2].Evaluate(currentTime)_co_ curveSet.rotationCurves[3].Evaluate(currentTime))_sm_\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut Again... I can tell what is Going On In the GLTFSceneExporter.Animation.cs wih this function_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private AnimationSampler ExportAnimationSamplerRotation(AnimationCurve curveX_co_ AnimationCurve curveY_co_ AnimationCurve curveZ_co_ AnimationCurve curveW)\n{\n\treturn ExportAnimationSampler(\n\t\tnew AnimationCurve[] { curveX_co_ curveY_co_ curveZ_co_ curveW }_co_\n\t\tkeyIndex _eq_&gt_sm_ GetRightHandedQuaternion(new Quaternion(curveX.keys[keyIndex].inTangent_co_ curveY.keys[keyIndex].inTangent_co_ curveZ.keys[keyIndex].inTangent_co_ curveW.keys[keyIndex].inTangent))_co_\n\t\tkeyIndex _eq_&gt_sm_ GetRightHandedQuaternion(CreateNormalizedQuaternion(curveX.keys[keyIndex].value_co_ curveY.keys[keyIndex].value_co_ curveZ.keys[keyIndex].value_co_ curveW.keys[keyIndex].value))_co_\n\t\tkeyIndex _eq_&gt_sm_ GetRightHandedQuaternion(new Quaternion(curveX.keys[keyIndex].outTangent_co_ curveY.keys[keyIndex].outTangent_co_ curveZ.keys[keyIndex].outTangent_co_ curveW.keys[keyIndex].outTangent))_co_\n\t\ttime _eq_&gt_sm_ GetRightHandedQuaternion(CreateNormalizedQuaternion(curveX.Evaluate(time)_co_ curveY.Evaluate(time)_co_ curveZ.Evaluate(time)_co_ curveW.Evaluate(time)))_co_\n\t\tvalues _eq_&gt_sm_ GLTF.DataExporter.ExportData(values.Select(value _eq_&gt_sm_ value.ToGltfQuaternionConvert())_co_ _bufferId_co_ _root_co_ _bufferWriter))_sm_\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHow i can make another function like this that converts the Euler curves then feed them into ExportAnimationSamplerRotation... I guess...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThats why i ask how old is this code ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T11:03:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre the in and out tangent different for Eiulars vs Quaternion... do think I can just convet the key frame values in each animation curve and leave the ins and out tangents alone ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T16:17:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just end up porting the SketchFab Version and removing some of the ambient occlusion packing stuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut is does support skinned meshes.. so it exports JOINTS and WEIGHTS... Is does support Animations... Although it combines all animations as 1 long Take001 animation track... dunno how they plan to track when one animation clip stops and another another start WITHOUT keeping some king of start frame and stop frame  Ranges ... But at least is does work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote... No implementation at all... not a single one (C# Unity Based) that i can find... exports skeletal animations... Dunno why that seems to be missing in everyones C# implementation of GLTF  Exportation _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-07-18T20:52:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222174_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531904292_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\thow old is this code ???\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe code is just a port of my code from my repo. I didn_t_t take everything into account since I did it just to prove out the spec. Euler rotations are not supported in the code I wrote. I wrote this code about more than a year ago. glTF only supports Quaternion rotations. I will need to spend some time thinking about how to convert from Euler rotations to Quaternion rotations.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222232_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531930656_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tNo implementation at all... not a single one (C# Unity Based) that i can find... exports skeletal animations...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m a bit confused by this statement. The Sketchfab version you mentioned does support skeletal animations and it sounds like you are saying it works. My repo also has skeletal animation support.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T21:38:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSketchfab exports the skin... not the actual bone animations... it also packs all clips into one single channel set ... merged into one long animation called Take001\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have seen glTF with skeleton animation... just not one in unity ... so I dont know how to encode them into channel sets... I can bake out the animations easy... I already do that for Babylon ... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using Sketchfab as gospel... cause I don’t know any better and that is what I am using to learn the inner workings of the export \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T21:44:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ hey bro _co_ I wanna thank you for all your info and code ... this are a bunch of questions I came up with in the middle of the night while trying to tear apart that anim port of unityGltf ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplease don’t think I don’t appreciate all your help and info ... cause I do _lt_span class_eq__qt_ipsEmoji_qt__gt_😊_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T21:55:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBtw... I did manage to get a few things added to my Sketchfab port...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tadded GLB support with internal buffers\n_lt_/p_gt_\n\n_lt_p_gt_\n\tadded all my material fallbacks so any non pbr material gets converted to pbr spec with black and zero glossiness to give a legacy diffuse type fallback\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnot to mention all my unity metadata that I use to make Babylon Toolkit ... including components and scripts... my PlayCanvas glTF importer is parsing out great so far... also including components and scripts... that part is beautiful \n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy my problem is lack of knowledge of glTF animation ... both regular transform and skeletal... I can’t get all my mechanim styles animations I have baked into glTF format ... but I will keep trying _lt_span class_eq__qt_ipsEmoji_qt__gt_😉_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-07-18T21:58:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222278_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531949915_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 minutes ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSketchfab exports the skin... not the actual bone _lt_span_gt_﻿_lt_/span_gt_animations_lt_span_gt_﻿_lt_/span_gt_...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat has not been my experience. I have used the exporter and it worked for me. In Unity_co_ the bone hierarchy is part of the node hierarchy_co_ just like glTF (though we have _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF/issues/1285_qt_ rel_eq__qt_external nofollow_qt__gt_discussed_lt_/a_gt_ separating them in future versions). There isn_t_t a separate export for bone animations. The export for node animations are also for the bone animations. Perhaps there is a misunderstanding here?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-07-18T22:02:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222281_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531950918_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 minutes ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI can’t get all my mechanim styles animations I have baked into glTF format\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tglTF does not support Unity Animator (mechanim) components. glTF only support Unity animation clips. Unity Animator is basically a state machine that can blend animations between states. This does not exist in core glTF and I am not aware of an extension that does this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T22:02:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAccording to an email from Sketchfab \n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#000000_sm_font-size_dd_17px_sm__qt__gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#000000_sm_font-size_dd_17px_sm__qt__gt_\n\tSkeletal / humanoid / avatar animations are not currently supported in the Unity Exporter. We hope to improve this in the future.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#000000_sm_font-size_dd_17px_sm__qt__gt_\n\tI_t_ll add your _t_+1_t_ to this feature request and follow up with any news.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#000000_sm_font-size_dd_17px_sm__qt__gt_\n\tJames\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#000000_sm_font-size_dd_17px_sm__qt__gt_\n\tJames Green_lt_br /_gt_\n\tProduct Specialist_lt_br /_gt_\n\tSketchfab\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#000000_sm_font-size_dd_17px_sm__qt__gt_\n\tPlans | Store\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-07-18T22:09:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ that_t_s odd_co_ but you can use my code as reference if you_t_d like. _lt_a href_eq__qt_https_dd_//github.com/bghgary/glTF-Tools-for-Unity/blob/master/UnityProject/Assets/Gltf/Editor/Exporter.Skin.cs#L80_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/bghgary/glTF-Tools-for-Unity/blob/master/UnityProject/Assets/Gltf/Editor/Exporter.Skin.cs#L80_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T22:12:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222283_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531951335_qt_ data-ipsquote-userid_eq__qt_26831_qt_ data-ipsquote-username_eq__qt_bghgary_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ bghgary said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tglTF does not support Unity Animator (mechanim) components. glTF only support Unity animation clips. Unity Animator is basically a state machine that can blend animations between states. This does not exist in core glTF and I am not aware of an extension that does this.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI know_co_ but I bake out regular TRS info for each bone and encode the key frames ... I can encode the seperate T R S or like for Babylon I compose into a matrix and serialize a key frames with a path of _matrix\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is how I currently export out unity state machines ... with states_co_ transitions_co_ blend trees_co_ avatar masks. .._co_ the whole animator state machine... there are a few of my animation state machine stuff on playground... I also export regular animation clips curves... it all come down to a time and a value ... just like your glTF anim port... I just need to see some code on encoding bone anim into glTF ... I’m afraid I don’t quite understand all ins and outs and accessors enough to pack that stuff into. GlTF animation the same way I did for Babylon Toolkit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-18T22:16:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you seen any of my Babylon Toolkit stuff ???\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-07-18T22:40:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222290_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531952167_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 minutes ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHave you _lt_span_gt_﻿_lt_/span_gt_seen any of my Babylon Toolkit stuff ?_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt_?? _lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI haven_t_t looked at it carefully_co_ but I know about the extras stuff you are adding. I thought you were trying to get the animator stuff into core spec.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222288_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531951935_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t27 minutes ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI’m afraid I don’t quite understand all ins and outs and accessors enough to pack that stuff into.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m hoping my code can help with this_co_ but if not_co_ let me know how I can help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-19T00:19:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222295_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531953659_qt_ data-ipsquote-userid_eq__qt_26831_qt_ data-ipsquote-username_eq__qt_bghgary_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ bghgary said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI haven_t_t looked at it carefully_co_ but I know about the extras stuff you are adding. I thought you were trying to get the animator stuff into core spec._lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI_t_m hoping my code can help with this_co_ but if not_co_ let me know how I can help.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNope... just trying to get the UNDERLYING Skeletal Animation into GLTF Format\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-07-19T23:53:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222306_qt_ data-ipsquote-contentid_eq__qt_38819_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531959595_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 hours ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tjust trying to get the UNDERLYING Skeletal Animation into GLTF Format\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI watched the video you posted in the other thread (looks interesting btw)_co_ but I am still not sure how to help you with this. Do you need to learn more about the glTF format to be able to do your work? If so_co_ maybe the _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF-Tutorials/blob/master/gltfTutorial/gltfTutorial_020_Skins.md_qt_ rel_eq__qt_external nofollow_qt__gt_skinning section of the glTF tutorial_lt_/a_gt_ helps?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-07-20T02:03:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt would be great to see some code on how to build the animation and assign to bone or joint. As you saw I can bake key frames... I see how Sketchfab is doing a regular transform animation... but how do iterate the bones making glTF animations with my bone info...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif I can see some code actually building the animation... I can probably figure out how to use my animation data using that sample as a guide\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-07-20T15:50:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe code that I sent is all you need to do to export a skin and its joints/bones. The code that exports the animation for nodes is the same code that is necessary to export animation of joints/bones since Unity treats them the same (just like in glTF). I_t_m not sure what is the missing piece.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]