[{"Owner":"NYCdotNet","Date":"2016-11-09T22:45:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_\n\tGreetings_co_\n_lt_/div_gt_\n\n_lt_div_gt_\n\t \n_lt_/div_gt_\n\n_lt_div_gt_\n\tI want to improve the documentation for using MultiMaterial and subMeshes.  In order to attempt to understand it myself_co_ I put together this playground which I think has everything required to demonstrate the basic concepts fairly well.\n_lt_/div_gt_\n\n_lt_div_gt_\n\t \n_lt_/div_gt_\n\n_lt_div_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1GRJLM%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1GRJLM#1_lt_/a_gt_\n_lt_/div_gt_\n\n_lt_div_gt_\n\t \n_lt_/div_gt_\n\n_lt_div_gt_\n\tI need help with two things.\n_lt_/div_gt_\n\n_lt_div_gt_\n\t \n_lt_/div_gt_\n\n_lt_div_gt_\n\tThe first is understanding the difference between vertices and indices.  I know the vertices represent the actual points in 3d space - where do the indices come in to play?  I_t_m assuming it_t_s the grouping of the points into triangles_co_ right?  Sorry if this is discussed in many places already - I_t_m having a hard time searching for this stuff.  Does the _qt_Index array_qt_ section of this article apply?   _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Triangle_mesh_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//en.wikipedia.org/wiki/Triangle_mesh_lt_/a_gt_\n_lt_/div_gt_\n\n_lt_div_gt_\n\t \n_lt_/div_gt_\n\n_lt_div_gt_\n\tSecond_co_ when would you NOT specify 0 and the total count of vertices in the mesh for the second and third arguments when constructing a submesh?\n_lt_/div_gt_\n\n_lt_div_gt_\n\tAll of the answers to the above will go into a docs PR that I_t_ll try to cross-reference liberally.\n_lt_/div_gt_\n\n_lt_div_gt_\n\t \n_lt_/div_gt_\n\n_lt_div_gt_\n\tThank you!!!\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-11-10T08:08:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPlease have a read a this old DK_t_s post _dd_ _lt_a href_eq__qt_https_dd_//www.eternalcoding.com/?p_eq_113_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.eternalcoding.com/?p_eq_113_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe indices are related to the index buffer.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NYCdotNet","Date":"2016-11-10T14:30:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you so much_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NYCdotNet","Date":"2016-11-11T22:46:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes this all sound accurate?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tA vertex is a point in 3D space represented by its x_co_y_co_z coordinates.  In Babylon.js_co_ the vertices that make up a mesh are stored in a vertex buffer._lt_br /_gt_\n\tSpecifically_co_ a Babylon.js mesh_t_s vertex buffer is a JavaScript array of numbers._lt_br /_gt_\n\tEvery three numbers in the vertex buffer represents a point_co_ however there is no implied relationship between different points in a Babylon.js vertex buffer - they are just points floating in 3D space._lt_br /_gt_\n\tYou can get the raw position vertex data on a Mesh object by calling its getVerticesData(BABYLON.VertexBuffer.PositionKind) method._lt_br /_gt_\n\tIn order to relate the vertices in a mesh_co_ Babylon.js uses an index buffer._lt_br /_gt_\n\tThe index buffer is an array of numbers that represent indexes in the vertex buffer that should be related to make triangles._lt_br /_gt_\n\tThe length of the index buffer is always divisible by 3 because it takes 3 vertices to make a triangle_sm_ three elements from the index buffer taken together are called a face._lt_br /_gt_\n\tYou can get the raw index data on a Mesh object by calling its getIndices() method.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-11-12T10:02:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have a basic undertanding... However the following info will explain this fully.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//rbwhitaker.wikidot.com/index-and-vertex-buffers_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//rbwhitaker.wikidot.com/index-and-vertex-buffers_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI highly recomend viewinf the source ode for the example - otherwise simply viewing the page may not make sense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-11-15T14:26:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   NYCdotNet_co_ this playground might be useful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UHFAP%2367_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UHFAP#67_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is a _qt_color-per-vertex_qt_ version.  Go to version #68 to see the UV_t_s and a standardMaterial in-use.  The UV values are _qt_guessed_qt__co_ and it shows.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe little blue boxes can be removed... after you are done playing with plotting.  They are helper boxes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPersonally_co_ I think this little playground delivers a whole lot of learning... quite quickly.  Hope it helps.  It is certainly a great piece of code... to experiment-with.  Perhaps_co_ take home a ZIP_co_ roll one up_co_ and become one with BJS plotting.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tTwo extra things you should know. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  The clockwise/counter-clockwise direction... used to connect 3 verts together with indices.... determines WHICH is the back-face and which is the front-face. For example_co_ change line 62 from 3_co_ 1_co_ 0 (counter-clockwise)... to 3_co_ 0_co_ 1 (clockwise).  One of the faces (on the back of the mesh) will disappear_co_ because its backface is now facing the camera.  It is still view-able... from inside the mesh.  You may wish to set camera.wheelPrecision _eq_ 250 (to allow more precise mouseWheeling)_co_ and remember that control-mousedragging can be used to move-around the arcCamera.target.  By doing those two things_co_ you can take the camera inside the mesh_co_ and see that affected face... now facing the inside of the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Lighting normals_qt_ come into play_co_ too.  There is a lighting normal at each vertex.  In #67 demo_co_ pan around until you see vert #7 (in the dent).  See the _qt_green specular light movement_qt_ inside the dent area... as you pan?  Specular shine.  This is caused by light2 specular color in line 14.  Change Green() to Blue()_co_ and hit RUN again_co_ and the light reflection will change to blue.  Another similar specular shine happens around the #6 vert_co_ caused by line 19.  Now change line 74...  to 1_co_ 0_co_ 0 (the lighting normal for vert #7.  Hit RUN and do some panning around vert #7 again.  Things have changed_co_ right?  How lights act... their diffuse_co_ specular_co_ etc_co_ near a vert... is affected by its lighting normal direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.  When some madman does... mesh.convertToFlatShadedMesh()_co_ things CAN really go to hell.  The amount of verts_co_ normals_co_ UVs_co_ all increase (but not indices?)  Let_t_s take a look at another playground.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#104HTQ%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#104HTQ#1_lt_/a_gt_   Line 42 does the conversion_co_ as you can see.  Enable/disable it... to see the difference between flat and smooth shading.  Look at console to see the difference in data lengths.... pre-conversion and post-conversion.  Interesting?  Almost_co_ huh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor fun and adventure_co_ let_t_s de-activate line 33 and activate line 32 (in the #1 playground).  Let_t_s see what these console numbers look-like... with _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#104HTQ%232_qt_ rel_eq__qt_external nofollow_qt__gt_a plain old BJS box_lt_/a_gt_.  (click on that link_co_ if you wish... easier than typing).  Also_co_ you can type control forward-slash... which quickly activates/de-activates code lines in our playground_t_s Monaco editor... a handy feature.  Ok_co_ how about those console numbers... when using the box instead of the torus knot?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFascinating_co_ eh?  24 verts for box.  Why not 8?  We_t_ll talk.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThere is a _qt_rule_qt_ in the BJS plotting world.  Only ONE lighting normal allowed per vertex.  When a mesh is converted to flat-shaded_co_ three lighting normals are needed at each vertex position (I think this is true) (I_t_m far from a pro).  The way BJS accomplishes this... is to add verts atop previous vert positions_co_ and aim their lighting normals at different angles from the original vert_t_s lighting normal angle.  This is how three lighting normals can be placed at the same vert POSITION.  When using our torus knot_co_ we can easily see the difference between flat shaded and smooth shaded (by disabling/enabling line 42). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut... have you asked yourself WHY... a box... has 24 verts by default_co_ instead of 8?  One would suspect that boxes are ALREADY flat shaded... by default_co_ yes?  Yet_co_ when we converted the box to flat shaded_co_ 12 verts were added.  Why?  I do not know why.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But then again_co_ I do not know why boxes have 24 verts instead of 8.  But I have a theory_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_A chap named _lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_J_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_erome... is one of our local superheroes._lt_/span_gt_  He_t_s a nice guy_co_ super-helpful_co_ and has done TONS to advance BJS dynamic mesh generating... by coding something called _lt_em_gt_meshBuilder._lt_/em_gt_  One of the very cool things he did.... was to use a phenomenon called _lt_em_gt_faceUV_t_s... _lt_/em_gt_in order to add a feature that allows EACH SIDE of a BJS box... to have a different color or texture.  In order to accomplish this_co_ it was required that BJS boxes have 24 verts_co_ by default.  I THINK that is why our boxes have 24 verts.  Not sure_co_ though.  I_t_m still learning.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps_co_ you should return to our original plotting demo_co_ and try to use it to create an 8-vertex box... just to prove it can be done.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tI hope this helps.  Be well_co_ party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]