[{"Owner":"Wingnut","Date":"2014-06-22T21:06:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gang! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there a way to texture just one side of a box?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If so_co_ could someone also explain how to select which side (or top/bottom) of the box... that will receive the texture?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Moon","Date":"2014-06-22T21:17:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Use Blender. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-22T21:38:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Yes with software modeling directly will be the easiest._lt_/div_gt__lt_br_gt__lt_div_gt_otherwise with babylon can be see with the submeshs_co_ but I_t_m not sure._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-22T23:11:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_43808_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_7343_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1403471161_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hi gang! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there a way to texture just one side of a box?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If so_co_ could someone also explain how to select which side (or top/bottom) of the box... that will receive the texture?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Since you mentioned the word _qt_selecting_qt_ I am assuming you talking about in Blender.  If wrong never mind.  Recently found out how to multi-material from a tutorial series Gryff recommended.  \n_lt_/p_gt__lt_div class_eq__qt_ipsEmbeddedVideo_qt_ contenteditable_eq__qt_false_qt__gt__lt_div_gt__lt_iframe width_eq__qt_480_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/videoseries?list_eq_PLda3VoSoc_TSAKxPWs6N44UWiGmkp3FNA_qt_ frameborder_eq__qt_0_qt_ allowfullscreen_eq__qt_true_qt__gt__lt_/iframe_gt__lt_/div_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Think I may have got that url wrong_co_ but the 3 selecting types_co_ vertex (default)_co_ Edge_co_ &amp_sm_ Face are buttons down at the bottom.  This is described in episode 5 according to my notes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do not know have note where applying different materials to different faces_co_ but from your working the key is finding the faces selection button.  They are in a group of three.  They work like radio buttons_co_ but unfortunately do not look natively like them._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-22T23:46:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi!  Thanks for the quick replies!  The Blender information is very good_co_ thanks...  I might need to use that method. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was _lt_u_gt_hoping_lt_/u_gt_ to use only Babylon framework.  I was hoping that maybe somebody found a _t_cheat_t_ to make a standard box _t_act_t_ like a skybox_co_ and then I would_co_ for example_co_ only provide a mytexture_ny.png... to only texture the top of the box.  Somehow maybe _t_fool_t_ the engine_t_s cubeTexture system._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Dad72_co_ your submesh idea is VERY interesting.  I will probably experiment with that idea_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I realize that I could make a box using 6 separate planes_co_ but the box is going to be physics-active with applyImpulse coming from many different force-angles_co_ and my physics tests on 6-plane boxes has been disappointing. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I suppose the down_t_n_t_dirty way... is to place a textured plane against the box and parent it to the box._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks again for the informative replies_co_ one and all._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-06-23T07:08:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Wingnut_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In one on our project_co_ we created a function to apply a texture on only one side of a box. Let me some time to retrieve it if you still need it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT _dd_ Actually_co_ it_t_s not the inside of the box_co_ but several textures on a box _lt_em_gt_outside of it_lt_/em_gt__co_ and my post is completely out of topic. An admin can remove it if needed._lt_/p_gt__lt_p_gt_Sorry Wing_t_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-23T10:57:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You got it right_co_ Temechon (thanks).  I want the textures on the outside.  In fact_co_ I could texture all 6 sides_co_ but I want full control over each texture. (For example_co_ writing on top and bottom of box_co_ and solid colors on the sides.)  I don_t_t necessarily need to have a separate/different StandardMaterial on each of the 6 sides_co_ but if I did_co_ that would work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think it can be done with something called a cube map.  I have never used one_co_ and I don_t_t know if BJS supports them.  With a cube map_co_ I would use a single StandardMaterial diffuseTexture (a 6-section bitmap) created in a paint program. In a manner of speaking_co_ it is a way to FAKE being able to specifically texture certain sides.  We are still texturing all 6 sides_co_ but it looks-like/appears-like we are not doing so._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_looks as if.. ?_lt_/p_gt__lt_p_gt_appears as if... ?_lt_/p_gt__lt_p_gt_English sucks!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/davrous/archive/2014/02/19/coding4fun-tutorial-creating-a-3d-webgl-procedural-qrcode-maze-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/davrous/archive/2014/02/19/coding4fun-tutorial-creating-a-3d-webgl-procedural-qrcode-maze-with-babylon-js.aspx_lt_/a_gt_ ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Davrous (in step 2) did special top and bottom textures... using multi-materials and submeshes_co_ like Dad72 suggested.  (Good call_co_ Dad72)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Leave it to Wingnut to make something simple... suddenly seem complicated.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Thanks for the replies!  Keep them coming.  I am in no hurry to solve this_co_ and I love gathering this knowledge.  Information gathered here... might be going into the materials tutorial._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-06-23T12:21:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In this case_co_ here is my code. The object _t_wall_t_ is a simple box (created with CreateBox)._lt_/p_gt__lt_p_gt_If you have any questions_co_ as usual_co_ don_t_t hesitate _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var wall3DInnerMaterial _eq_ new BABYLON.StandardMaterial(_qt_wall3DINMaterial_qt__co_ scene)_sm_wall3DInnerMaterial.diffuseColor _eq_ SceneManager.COLOR_WHITE_sm_ var wall3DOuterMaterial _eq_ new BABYLON.StandardMaterial(_qt_wall3DOUTMaterial_qt__co_ this.sceneManager.scene)_sm_wall3DOuterMaterial.diffuseColor _eq_ SceneManager.COLOR_GREEN_sm_ var wall3DSideMaterial _eq_ new BABYLON.StandardMaterial(_qt_wall3DMaterial_qt__co_ this.sceneManager.scene)_sm_wall3DSideMaterial.diffuseColor _eq_ SceneManager.COLOR_GREY_sm_ var wall3DMaterial _eq_ new BABYLON.MultiMaterial(_qt_wall3DMaterial_qt__co_ scene)_sm_wall3DMaterial.subMaterials.push(wall3DInnerMaterial)_sm_wall3DMaterial.subMaterials.push(wall3DOuterMaterial)_sm_wall3DMaterial.subMaterials.push(wall3DSideMaterial)_sm_wall.subMeshes _eq_ []_sm_var verticesCount _eq_ wall.getTotalVertices()_sm_// Material at index 1 _dd_ wall3DOuterMaterialnew BABYLON.SubMesh(1_co_ 0_co_ verticesCount_co_ 0_co_ 3_co_ wall)_sm_new BABYLON.SubMesh(1_co_ 0_co_ verticesCount_co_ 3_co_ 3_co_ wall)_sm_// material at index 0 _dd_ wall3DInnerMaterialnew BABYLON.SubMesh(0_co_ 0_co_ verticesCount_co_ 6_co_ 3_co_ wall)_sm_new BABYLON.SubMesh(0_co_ 0_co_ verticesCount_co_ 9_co_ 3_co_ wall)_sm_//Material at index 2 _dd_ wall3DSideMaterialnew BABYLON.SubMesh(2_co_ 0_co_ verticesCount_co_ 12_co_ 24_co_ wall)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-23T15:40:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Cool_co_ T!  This is much like the Davrous code_co_ but what_t_s really cool_co_ is that you used it to build a wall.  (I assume your simple box was scaled to make it wall-like). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Remember my goofy _qt__lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/walls/wallyT/wallyPT02.htm_qt_ rel_eq__qt_external nofollow_qt__gt_wall with a window hole_lt_/a_gt__lt_/strong_gt__lt_/u_gt__qt_ demo?  It used a miserable _lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/walls/wallyT/js/wallplane02.js_qt_ rel_eq__qt_external nofollow_qt__gt_16-plane_lt_/a_gt__lt_/strong_gt__lt_/u_gt_ thing_co_ in order to avoid using CSG boolean subtract... to make the window hole.  I was scared of CSG back then_co_ but I created a _lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#NZPX4_qt_ rel_eq__qt_external nofollow_qt__gt_playground scene from our CSG demo_lt_/a_gt__lt_/strong_gt__lt_/u_gt__co_ and the fear went away_co_ somewhat.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Temechon... your wall making code is a partner to the 16-plane mess.  Your code is able to make walls without a window hole...  much easier than a 6-plane method.  Very good_co_ thanks.  So_co_ not only will your code work for my original situation_co_ but it is useful for a potential future _qt_wall tools_qt_ library.  Nice._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A bit off-topic_co_ but_co_ I wonder..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_IF a person used CSG boolean subtract to make the window hole in the wall_co_ would we still be able to set a unique texture on the inside edges of the window hole (the blue panels inside the window hole in the demo)?  Maybe the submesh multi-material method would work for that_co_ as well. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If anyone feels like making a testing demo for that... it would be MOST WELCOMED.  Basic box_co_ scaled to wall shape_co_ CSG boolean subtract a window hole or two... and then use the multimaterial submesh method to texture all planes_co_ including the window hole header_co_ shoulders_co_ and footer.  (How do you like my fancy carpenter terms?)  heh. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess we can talk more about that_co_ later_co_ when we start building and contributing to the _t_wall tools_t_ library. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Keep the comments coming.  Its all good knowledge. I am still wondering about cube map_co_ so if anyone has information on that method_co_ do tell.  Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-23T17:25:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I should mention that I do not fully buy into the perception that a _qt_Babylon only framework_qt_ as you called it and Blender are mutually exclusive.  I do not want to over commit myself_co_ but that is exactly what I am very close to merging.  I have rewritten the Blender export to produce a .Babylon JSON file that is &gt_sm_10% smaller than the current script._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In addition it produces a .log file_co_ but more importantly but also produce a .js which creates a sub-class of Babylon.Mesh or any class that is a sub-class of Babylon.Mesh for un-parented Blender meshes (not counting armatures as parents).  Child Meshes are just instances of the class you specify (default Babylon.Mesh)_co_ rather than sub-classed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sub-classing is really how to construct extensible libraries (I know classes in JS are only fictional). Combine this with the belief that writing code by hand increases in difficulty much quicker than using Blender does.  This is partly why I have gone down this route._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Being able to have both python scripts in use during development meant I had to give mine a different name.  I chose Tower of Babel_co_ after the old testament story about communicating in multiple languages.  I still have problems with skeletons &amp_sm_ animation.  I never implemented Instances in the .babylon file as the version of the script I started from did not yet have this.  I have a major problem with how instances were implemented anyway.  They were shunted to the side &amp_sm_ not built right into AbstractMesh &amp_sm_ Mesh_co_ but that is a different story._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is a sample of a multi-materialed cube .js and .html to call it.  Not sure I_t_ll get around to releasing Tower of Babel_co_ but I am opposed to it.  If no one cares I_t_ll definitely just keep it internal._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2048_qt__gt_inline_js.html.txt_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2049_qt__gt_wall.js.txt_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-23T19:14:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jeff_co_ thanks for the files... I will definitely look them over and give them a test run.  Sweet!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-23T20:09:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Btw_co_ my idea of merging is really to leverage Blender as an interactive code generator_co_ not to run a modeler inside of a browser using JS.  You get the productivity gain and output results expressed in code without troublesome hand coding.  How it fits is you expressed a desire for a code only solution for a wall section with a window that is much easier to model &amp_sm_ generate code than to write it by hand._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_.js over a .babylon file is not for everyone_co_ but it is _dd__lt_/p_gt__lt_ul_gt__lt_li_gt_synchronous (no callbacks to write as there is no asynchronous file I/O to wait for except for texture files)_lt_/li_gt__lt_li_gt_state can be put into a hand written superclass_co_ to manage complicated AI in the render loop.  Having stuff in 2 different places at run time (.babylon and the rest in code) can make things difficult_co_ and means you cannot take advantage of object orientation._lt_/li_gt__lt_li_gt_requires no local web server during development.  (Some IDEs might provide one automatically)_lt_/li_gt__lt_/ul_gt__lt_p_gt_Sorry if this is too programmer like terminology._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-23T20:27:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hehe.  As you noticed_co_ I quickly edited my post because I finally looked at the files and realized what you had done._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is amazing_co_ JC!  Now I am starting to see what you mean by the close integration between Blender and framework.  You took output from Blender_co_ and pretty much _t_generated_t_ JS scene code without needing to use a .babylon file.  Drooooool!  Unreal.  Thanks JC!  That is just SCARY levels of COOL!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Readers... here is _lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/walls/JC_Palmer_Wall/inline_js.html_qt_ rel_eq__qt_external nofollow_qt__gt_a demo of the slightly-adjusted JCPalmer Brick_lt_/a_gt__lt_/strong_gt__lt_/u_gt_.  Here is _lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/walls/JC_Palmer_Wall/JC_Palmer_Wall.zip_qt_ rel_eq__qt_external nofollow_qt__gt_a zip file of it_lt_/a_gt__lt_/strong_gt__lt_/u_gt_.  (I hope you don_t_t mind me re-publishing it_co_ JC.  Just holler if you prefer I didn_t_t.) _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Its not so much that it is a perfectly fine submesh multimaterial any-textured _t_brick_t__co_ but its more about how it was made.  My nipples still haven_t_t relaxed their erection.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-06-23T20:35:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_JC it is really cool. You should make a self post only for this to gain visibility for Delta and Davrous._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-24T00:11:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_43949_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_7343_qt_ data-ipsquote-username_eq__qt_Temechon_qt_ data-cite_eq__qt_Temechon_qt_ data-ipsquote-timestamp_eq__qt_1403555704_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_JC it is really cool. You should make a self post only for this to gain visibility for Delta and Davrous._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not too interested in gaining lots of visibility for something that only almost works right now.  I could really use examples of .blend files that have both skeletons and animation that fully work when using the existing Blender export script.  The simpler the better.  If I had some help of not having to make my own models might make getting over this hump possible._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would leave instancing issues for this later thread_co_ as it is more the way that instancing is implemented which harms a Babylon.Mesh subclassing approach than a problem with the python script._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-24T03:51:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_I could really use examples of .blend files that have both skeletons and animation that fully work when using the existing Blender export script._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_co_ here is a set of files that hopefully meet your criteria_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/jcp/jcp.zip_qt_ rel_eq__qt_external nofollow_qt__gt_A Man Walking_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A .blend file with a low poly mesh (3100 tris in Blender)_co_ a 32 bone rig(skeleton) and a 45 frame walking animation. The looping is not great - but tweaking that will take a little time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve included the babylon file and an html file that I used to test it on my local server._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-24T14:40:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_gryff_co__lt_/p_gt__lt_p_gt_Thanks great!  Now I only have to do one thing at a time!  I put it into my local server_co_ with renames of index &amp_sm_ male1 to index_orig &amp_sm_ male1_orig respectively.  Fully operational starting base.  Have done an initial Tower of Babel export and my .babylon file size is 901kb from the original of 1.1mb.  That is a 8.8% reduction (used linux block count to calc).  A little less than 10%._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now I can do that which I do._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-25T02:48:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_gryff_co__lt_/p_gt__lt_p_gt_Got your walking man to work.  Here is the replacement male1.babylon.  Here is also male1.js &amp_sm_ inline.html to call it.  The .js right now goes in the same directory as the .html_co_ but you can change if you like._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That took all day.  Will be doing more testing &amp_sm_ moving forward.  Where to exactly_co_ I do not know._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks again._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2059_qt__gt_male1.babylon.txt_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2060_qt__gt_male1.js.txt_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2061_qt__gt_inline.html.txt_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-25T03:41:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Of course I have to republish THAT_co_ too.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/jcp_gryff_walker/jcp_gryff_walker.html_qt_ rel_eq__qt_external nofollow_qt__gt_JCPalmer - Gryff - Walking Man_lt_/a_gt__lt_/strong_gt__lt_/u_gt_...  and _lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/jcp_gryff_walker/jcp_gryff_walker.zip_qt_ rel_eq__qt_external nofollow_qt__gt_its zip file_lt_/a_gt__lt_/strong_gt__lt_/u_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I couldn_t_t get male1.js into my Boxer text editor.  It said the lines were too long_co_ and asked if it could wrap it as needed.  And after saving that_co_ it no longer worked.  But as long as I didn_t_t put it in the editor and re-save it_co_ it worked fine.  Good and interesting work_co_ you guys.  Those big piles of coordinates remind me of my VRML days.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_290 KB zipped_co_ including BJS.  Unreal._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-25T10:03:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Will be doing more testing &amp_sm_ moving forward.  Where to exactly_co_ I do not know._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_co_ to be honest_co_ I_t_m not sure what is going on here_co_ but if you need Blender stuff as I have told you before - just ask._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Right now_co_ I_t_ve have guests from the UK - but that will be over soon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And Wingy_co_ the _qt_Walking Man_qt_ - shades of Stephen King. I have to wonder about _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Those big piles of coordinates remind me of my VRML days._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Actually_co_ VRML was able to use _qt_interpolators_qt_ for animations - no need to have every frame. The Blaxxun Contact VRML browser plugin_co_ used in Cybertown an early MMO_co_  was very good at that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-25T14:42:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_We can also use interpolators with babylon.js but the blender exporter does not use them_dd_(_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-25T15:09:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wingnut_co__lt_/p_gt__lt_p_gt_If you are on Windows_co_ try WordPad with wrap turned off.  I put in strategic lines breaks &amp_sm_ indenting to give it that _qt_hand built look_qt_.  On OSX_co_ try TextEdit.  Do not know if it works_co_ but it is worth the try.  Netbeans shows it very good.  On Linux_co_ gedit struggles mightily_co_ especially when scrolling.  Will look into putting a couple of line breaks on vertex data lines to avoid viewing issues.  Thanks for the republishing_co_ as I am _qt_host poor_qt_ right now._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_gryff_co__lt_/p_gt__lt_p_gt_Where I am going is a surprise.  Now that I am operational_co_ I think I know how to do more than you have seen so far _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ alt_eq__qt__dd_ph34r_dd__qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ .  As far a help_co_ sure I_t_ll ask.  I do not see a base-case .blend file in GIT.  It would be nice it you could work in some other stuff into this model.  Things do not have to make sense_co_ just be there so that this model can server as a test to guard against regressions as changes are made.  Things wanted are_dd__lt_/p_gt__lt_p_gt_- a node (do not know what that even is)_lt_/p_gt__lt_p_gt_- Camera animation_lt_/p_gt__lt_p_gt_- Direct animation of a mesh (rotation_euler_co_ location_co_ scale) only 1 needed_lt_/p_gt__lt_p_gt_- shadows_lt_/p_gt__lt_p_gt_- multi material cube somewhere_co_ maybe a side with a texture_lt_/p_gt__lt_p_gt_- fog_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Probably sorry you offered now_co_ eh?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-25T15:27:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_A blender-export torture test file.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Just maybe... the folks at Blender Org would make that file for us_co_ or already have one that they tested their SAVE with._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-25T20:39:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m so happy that JCP works on the blender exporter!! this is not my favorite part _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-27T01:41:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Direct animation of a mesh (rotation_euler_co_ location_co_ scale) only 1 needed_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_co_ how about this for a test - the mesh is modified with a shape key/morph._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/jcp/Tablecloth1.zip_qt_ rel_eq__qt_external nofollow_qt__gt_Animated Tablecloth_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]