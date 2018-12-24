[{"Owner":"fenomas","Date":"2015-03-30T10:09:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Considering a minecraft-style world_co_ where _qt_chunks_qt_ of static scenery are created and destroyed as the user moves around_dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is it possible to manually manage the scene_t_s octrees in order to keep picking fast? Notionally_co_ I want to tell BJS_dd_ _qt_Okay_co_ I_t_m adding 50 meshes but they are all inside the following bounding box_co_ so add a top-level octree and assume they_t_re all in it._qt_  And then later_dd_ _qt_Ok_co_ everything in the octree I added before is now gone._qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Obviously I need to avoid processing the whole scene when doing this. Is this possible_co_ or more broadly_co_ is it the correct approach?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-30T22:44:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can easily pick an OctreeNode and add whatever you want inside. The Octree structure is pretty simple (I hope_dd_))_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-31T02:44:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_77207_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13499_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1427755485_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_You can easily pick an OctreeNode and add whatever you want inside. The Octree structure is pretty simple (I hope_dd_))_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. Do you mean OctreeBlock?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2. Are there any docs/code samples? From the API I can see vaguely what_t_s going on but many details are unclear._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_3. Once you construct an octree how do you tell the scene to use it? Only API I can find is the one for auto-creating one._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-31T18:22:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_1. Yes sorry_lt_/p_gt__lt_p_gt_2. There is an usage doc here_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_22561_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_22561_lt_/a_gt__lt_/p_gt__lt_p_gt_3. If an octree is defined_co_ the scene will automatically use it_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.scene.ts#L1179_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.scene.ts#L1179_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-01T02:45:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the replies  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for docs_co_ I meant are there any code samples involving manual creation of _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_Octree_lt_/span_gt_ or _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_OctreeBlock_lt_/span_gt_ instances - the docs only cover automatic creation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For example_co_ both classes take in a _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_creationFunc_lt_/span_gt_ parameter_co_ but what is it meant to be doing?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-01T18:28:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You_t_re right this section need more doc _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Here are examples of the creationFunc_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Culling/Octrees/babylon.octree.ts#L98_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Culling/Octrees/babylon.octree.ts#L98_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Culling/Octrees/babylon.octree.ts#L104_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Culling/Octrees/babylon.octree.ts#L104_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-02T07:43:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Okay_co_ by digging through the source I was able to get this working. For posterity_co_ the code runs along these lines_dd__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt__lt_br_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__lt_br_gt_\n  // octree for whole scene_lt_br_gt_\n  var octree _eq_ new BABYLON.Octree()_lt_br_gt_\n  octree.blocks _eq_ []_lt_br_gt_\n  scene._selectionOctree _eq_ octree_lt_br_gt__lt_br_gt_\n  // branch block for area from 0..100_co_ 0..100_co_ 0..100_lt_br_gt_\n  var bmin _eq_ new BABYLON.Vector3(  0_co_   0_co_   0)_lt_br_gt_\n  var bmax _eq_ new BABYLON.Vector3(100_co_ 100_co_ 100)_lt_br_gt_\n  var branch _eq_ new BABYLON.OctreeBlock(bmin_co_ bmax)_lt_br_gt_\n  branch.blocks _eq_ []_lt_br_gt_\n  octree.blocks.push(branch)_lt_br_gt__lt_br_gt_\n  // leaf block for area from 0..25_co_ 0..25_co_ 0..25_lt_br_gt_\n  var min _eq_ new BABYLON.Vector3( 0_co_  0_co_  0)_lt_br_gt_\n  var max _eq_ new BABYLON.Vector3(25_co_ 25_co_ 25)_lt_br_gt_\n  var leaf _eq_ new BABYLON.OctreeBlock(min_co_ max)_lt_br_gt_\n  branch.blocks.push(leaf)_lt_br_gt__lt_br_gt_\n  // add meshes to leaf_lt_br_gt_\n  leaf.entries.push(myMesh)_lt_/pre_gt__lt_br_gt__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_DK_dd_ Having gotten it working_co_ it didn_t_t actually turn out to help performance like I_t_d thought..._lt_/div_gt__lt_br_gt__lt_div_gt_But I_t_ll ask you about that in a separate thread._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-02T17:28:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_feel free to add this to the documentation page if you will _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]