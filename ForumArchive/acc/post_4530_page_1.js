[{"Owner":"emilbusman","Date":"2014-03-06T21:45:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m a newbie going through the basics _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/06/27/babylon-js-a-complete-javascript-framework-for-building-3d-games-with-html-5-and-webgl.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_. In the section about creating a mesh from a list of vertices_co_ I can_t_t get the code to work. It seems to crash when constructing the mesh in the line_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var plane _eq_ new BABYLON.Mesh(_qt_plane_qt__co_ [3_co_ 3_co_ 2]_co_ scene)_sm__lt_/pre_gt__lt_p_gt_Any thoughts? I am trying to create a hexagon (once I get the sample code working anyways _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-06T22:38:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_THe correct line is_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_#0000FF_sm__qt__gt_var _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_plane _eq_ BABYLON.Mesh.CreatePlane(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(163_co_21_co_21)_sm__qt__gt__qt_plane_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ 3_co_ scene)_sm__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"emilbusman","Date":"2014-03-07T13:49:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_27898_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_4530_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1394145500_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_THe correct line is_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_#0000FF_sm__qt__gt_var _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_plane _eq_ BABYLON.Mesh.CreatePlane(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(163_co_21_co_21)_sm__qt__gt__qt_plane_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ 3_co_ scene)_sm__lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the reply_co_ but that doesn_t_t seem to be what I need either._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The section of the walkthrough I am referring to states_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_You can also create a mesh from a list of vertices and faces_dd_.var plane _eq_ new BABYLON.Mesh(_qt_plane_qt__co_ [3_co_ 3_co_ 2]_co_ scene)_sm_var indices _eq_ []_sm_var vertices _eq_ []_sm_// Verticesvar halfSize _eq_ 0.5_sm_vertices.push(-halfSize_co_ -halfSize_co_ 0_co_ 0_co_ 1.0_co_ 0_co_ 0.0_co_ 0.0)_sm_vertices.push(halfSize_co_ -halfSize_co_ 0_co_ 0_co_ 1.0_co_ 0_co_ 1.0_co_ 0.0)_sm_vertices.push(halfSize_co_ halfSize_co_ 0_co_ 0_co_ 1.0_co_ 0_co_ 1.0_co_ 1.0)_sm_vertices.push(-halfSize_co_ halfSize_co_ 0_co_ 0_co_ 1.0_co_ 0_co_ 0.0_co_ 1.0)_sm_// Indicesindices.push(0)_sm_indices.push(1)_sm_indices.push(2)_sm_indices.push(0)_sm_indices.push(2)_sm_indices.push(3)_sm_plane.setVertices(vertices_co_ 1)_sm_plane.setIndices(indices)_sm_return plane_sm_You have to create a blank new mesh and call setVertices and setIndices._lt_/pre_gt__lt_p_gt_using the line you gave me breaks the lines plane.setVertices(vertices_co_ 1)_sm_ and plane.setIndices(indices)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t see anything like those two functions in the documentation either._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-03-07T15:58:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BABYLON.Mesh does not take three argument. his signature is _qt_Name_qt_ and _qt_Scene_qt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-08T02:35:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh sorry I misunderstood._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is a working sample for a box_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.Mesh.CreateBox _eq_ function (name_co_ size_co_ scene_co_ updatable) {        var box _eq_ new BABYLON.Mesh(name_co_ scene)_sm_        var normalsSource _eq_ [            new BABYLON.Vector3(0_co_ 0_co_ 1)_co_            new BABYLON.Vector3(0_co_ 0_co_ -1)_co_            new BABYLON.Vector3(1_co_ 0_co_ 0)_co_            new BABYLON.Vector3(-1_co_ 0_co_ 0)_co_            new BABYLON.Vector3(0_co_ 1_co_ 0)_co_            new BABYLON.Vector3(0_co_ -1_co_ 0)        ]_sm_        var indices _eq_ []_sm_        var positions _eq_ []_sm_        var normals _eq_ []_sm_        var uvs _eq_ []_sm_        // Create each face in turn.        for (var index _eq_ 0_sm_ index &lt_sm_ normalsSource.length_sm_ index++) {            var normal _eq_ normalsSource[index]_sm_            // Get two vectors perpendicular to the face normal and to each other.            var side1 _eq_ new BABYLON.Vector3(normal.y_co_ normal.z_co_ normal.x)_sm_            var side2 _eq_ BABYLON.Vector3.Cross(normal_co_ side1)_sm_            // Six indices (two triangles) per face.            var verticesLength _eq_ positions.length / 3_sm_            indices.push(verticesLength)_sm_            indices.push(verticesLength + 1)_sm_            indices.push(verticesLength + 2)_sm_            indices.push(verticesLength)_sm_            indices.push(verticesLength + 2)_sm_            indices.push(verticesLength + 3)_sm_            // Four vertices per face.            var vertex _eq_ normal.subtract(side1).subtract(side2).scale(size / 2)_sm_            positions.push(vertex.x_co_ vertex.y_co_ vertex.z)_sm_            normals.push(normal.x_co_ normal.y_co_ normal.z)_sm_            uvs.push(1.0_co_ 1.0)_sm_            vertex _eq_ normal.subtract(side1).add(side2).scale(size / 2)_sm_            positions.push(vertex.x_co_ vertex.y_co_ vertex.z)_sm_            normals.push(normal.x_co_ normal.y_co_ normal.z)_sm_            uvs.push(0.0_co_ 1.0)_sm_            vertex _eq_ normal.add(side1).add(side2).scale(size / 2)_sm_            positions.push(vertex.x_co_ vertex.y_co_ vertex.z)_sm_            normals.push(normal.x_co_ normal.y_co_ normal.z)_sm_            uvs.push(0.0_co_ 0.0)_sm_            vertex _eq_ normal.add(side1).subtract(side2).scale(size / 2)_sm_            positions.push(vertex.x_co_ vertex.y_co_ vertex.z)_sm_            normals.push(normal.x_co_ normal.y_co_ normal.z)_sm_            uvs.push(1.0_co_ 0.0)_sm_        }        box.setVerticesData(positions_co_ BABYLON.VertexBuffer.PositionKind_co_ updatable)_sm_        box.setVerticesData(normals_co_ BABYLON.VertexBuffer.NormalKind_co_ updatable)_sm_        box.setVerticesData(uvs_co_ BABYLON.VertexBuffer.UVKind_co_ updatable)_sm_        box.setIndices(indices)_sm_        return box_sm_    }_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-23T06:59:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey emilbusman (and everyone else)... we will make sure that the example in that document... gets updated.  Thanks for pointing it out to us._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-11T03:06:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I have updated that document (Thanks to Wingnut)_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]