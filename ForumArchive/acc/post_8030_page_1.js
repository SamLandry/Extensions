[{"Owner":"Zino54220","Date":"2014-07-22T08:08:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I need you again !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So my problem _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a scene (and a dream too...but it_t_s not the question actualy... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_dry.png_qt_ alt_eq__qt_&lt_sm__&lt_sm__qt__gt_ ....)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_co_ a .gif of my scene _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-6162-0-61648900-1406015484.gif_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-6162-0-61648900-1406015484_thumb.gif_qt_ data-fileid_eq__qt_2264_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-6162-0-61648900-1406015484_thumb.gi_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Like you can see_co_ I play animations of basics meshes on html select onchange event without difficulties...But when I try to play a skeleton animation with the last select html tag with the onchange event_co_ I get an error in console like this _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-6162-0-48311100-1406015716.gif_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-6162-0-48311100-1406015716_thumb.gif_qt_ data-fileid_eq__qt_2265_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-6162-0-48311100-1406015716_thumb.gi_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I play my animation in the callback function parameter of the _qt_Scene.Loader.ImportMesh(...)_qt_ function_co_ there is no problem....I tried to create a _qt_homemade_qt_ callback function but I had the same result..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here my scene code _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__t_use strict_t__sm_// A voir pour popup patiente//var canvas _eq_ document.getElementById(_t_myCanvas_t_)_sm_//var context _eq_ canvas.getContext(_t_2d_t_)_sm_//var imageObj _eq_ new Image()_sm_////imageObj.onload _eq_ function() {//context.drawImage(imageObj_co_ 69_co_ 50)_sm_//}_sm_//imageObj.src _eq_ _t_http_dd_//www.html5canvastutorials.com/demos/assets/darth-vader.jpg_t__sm_var scene_sm_var engine_sm_var posXSkel _eq_ 0_sm_var posYSkel _eq_ -3_sm_var posZSkel _eq_ 5_sm_var objBrasSqueletteSupportExterne_sm_var objBrasSqueletteSupportInterne_sm_var objBrasSquelette_sm_var objBrasProgramationSupportExterne_sm_var objBrasProgramationSupportInterne_sm_var objBrasProgramation_sm_var objBrasPieceSupportExterne_sm_var objBrasPieceSupportInterne_sm_var objBrasPieceSupport_sm_var objBrasPieceOutil_sm_var objCapot_sm_var objTrappeContour_sm_var drapAnimationStart_sm_ var nameLastSkelAtelier_sm_var tabMeshImportes _eq_ []_sm_var tabSkelImportes _eq_ []_sm_var tabAnimationSquelette _eq_ []_sm_var tabAnimationPiece _eq_ []_sm_var objAnimTest_sm_//Start the demofunction runVisuAtelier(canvasId_co_listeParamsSkel) {    var canvas _eq_ document.getElementById(canvasId)_sm_    engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_        nameLastSkelAtelier _eq_ _qt__qt__sm_       scene _eq_ new BABYLON.Scene(engine)_sm_       BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_SceneAtelier.babylon_qt__co_ engine_co_ function (newScene) {                        // Wait for textures and shaders to be ready            //newScene.executeWhenReady(function () {                                // Attach camera to canvas inputs                newScene.activeCamera.attachControl(canvas)_sm_                                // Get the scene_t_s objects                objCapot _eq_ newScene.getMeshByName(_qt_MeshCapotTrappeAtelier_qt_)_sm_                objBrasSqueletteSupportExterne _eq_ newScene.getMeshByName(_qt_MeshSupportExterneBrasSkeletteAtelier_qt_)_sm_                objBrasSqueletteSupportInterne _eq_ newScene.getMeshByName(_qt_MeshSupportInterneBrasSkeletteAtelier_qt_)_sm_                objBrasSquelette _eq_ newScene.getMeshByName(_qt_MeshAimantBrasSkeletteAtelier_qt_)_sm_                objBrasProgramationSupportExterne _eq_ newScene.getMeshByName(_qt_MeshSupportExterneBrasProgramationAtelier_qt_)_sm_                objBrasProgramationSupportInterne _eq_ newScene.getMeshByName(_qt_MeshSupportInterneBrasProgrammationAtelier_qt_)_sm_                objBrasProgramation _eq_ newScene.getMeshByName(_qt_MeshCasqueProgramationAtelier_qt_)_sm_                objBrasPieceSupportExterne _eq_ newScene.getMeshByName(_qt_MeshSupportExterneBrasPieceAtelier_qt_)_sm_                objBrasPieceSupportInterne _eq_ newScene.getMeshByName(_qt_MeshSupportInterneBrasPieceAtelier_qt_)_sm_                objBrasPieceSupport _eq_ newScene.getMeshByName(_qt_MeshBrasPieceSupportAtelier_qt_)_sm_                objBrasPieceOutil _eq_ newScene.getMeshByName(_qt_MeshBrasPieceOutilsAtelier_qt_)_sm_                objTrappeContour _eq_ newScene.getMeshByName(_qt_MeshContourCapotAtelier_qt_)_sm_                                // In default_co_ the scene plays all animations                newScene.stopAnimation(objCapot)_sm_                newScene.stopAnimation(objBrasSqueletteSupportExterne)_sm_                newScene.stopAnimation(objBrasSqueletteSupportInterne)_sm_                newScene.stopAnimation(objBrasSquelette)_sm_                newScene.stopAnimation(objBrasProgramationSupportExterne)_sm_                newScene.stopAnimation(objBrasProgramationSupportInterne)_sm_                newScene.stopAnimation(objBrasProgramation)_sm_                newScene.stopAnimation(objBrasPieceSupportExterne)_sm_                newScene.stopAnimation(objBrasPieceSupportInterne)_sm_                newScene.stopAnimation(objBrasPieceSupport)_sm_                newScene.stopAnimation(objBrasPieceOutil)_sm_                newScene.stopAnimation(objTrappeContour)_sm_                                    // Set up the select tag                initSelectPackPiecesAte()_sm_                initSelectAnimaSkelAte()_sm_                initSelectAnimaPackPieceAte()_sm_                //scene.beginAnimation(target_co_ from_co_ to_co_ loop_co_ speedRatio_co_ onAnimationEnd)                 //newScene.beginAnimation(objCapot_co_ 140_co_ 160_co_ true_co_ 1.0_co_ function(){})_sm_                               scene _eq_ newScene_sm_                            createSkybox()_sm_                createAllSkeletons(listeParamsSkel)_sm_                                                drapAnimationStart _eq_ false_sm_                                // Once the scene is loaded_co_ just register a render loop to render it                engine.runRenderLoop(function() {                                        scene.render()_sm_                                    })_sm_                            //})_sm_                    })_sm_}//Create the skyboxfunction createSkybox() {    var sMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyboxMaterialMagasin_qt__co_ scene)_sm_    sMaterial.backFaceCulling _eq_ false_sm_        //sMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_images/skybox/skybox_qt__co_ scene)_sm_    sMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_../../Bll/MoteurJeu/Img/IMG_Decor/Skybox/skyboxArene_qt__co_ scene)_sm_    sMaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.SKYBOX_MODE_sm_    var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_SkyboxMagasin_qt__co_ 50_co_ scene)_sm_    skybox.material _eq_ sMaterial_sm_        skybox.checkCollisions _eq_ true_sm_ }// Set the position of meshfunction setupMeshWithPosFix(obj_co_meshes_co_posX_co_posY_co_posZ){    obj _eq_ meshes[0]_sm_    obj.position _eq_ new BABYLON.Vector3(posX_co_posY_co_posZ)_sm_     return obj_sm_}// Create the skeleton into the cylinderfunction createSkeleAtelier(tabParamsSkel){        if(tabParamsSkel !_eq_ null)    {        var skelAtelier_sm_        var nomSkelAtelier _eq_ tabParamsSkel[0].NomBlender_sm_        //var chemVersFichierSkelAtelier _eq_ tabParamsSkel[0].ChemVersFichier_sm_        //var nomFichierSkelAtelier _eq_ tabParamsSkel[0].NomFichier_sm_                        if(nameLastSkelAtelier !_eq_ _qt__qt_)        {            skelAtelier _eq_ scene.getMeshByID(nameLastSkelAtelier)_sm_                    if(skelAtelier !_eq_ null)            {                scene.beginAnimation(objCapot_co_ 500_co_ 540_co_ false_co_ 1.0_co_ function(){})_sm_                skelAtelier.position _eq_ new BABYLON.Vector3(posXSkel_co_ posYSkel-10_co_ posZSkel-2.0)_sm_                            if(tabMeshImportes.length &gt_sm_ 0)                {                    var i _eq_ 0_sm_                    var nbMeshesImportes _eq_ tabMeshImportes.length_sm_                    for(i_eq_0_sm_i&lt_sm_nbMeshesImportes_sm_i++)                    {                        var mesh _eq_ scene.getMeshByID(tabMeshImportes[i])_sm_                        mesh.position _eq_ new BABYLON.Vector3(posXSkel_co_ posYSkel-10_co_ posZSkel-2.0)_sm_                    }                }                            }                        }                        // Charger le squelette de démo pour l_t_aperçu de la pièce        //skelAtelier _eq_ scene.getMeshByName(nameLastSkelAtelier)_sm_            //skelAtelier _eq_ scene.getMeshByName(nomSkelAtelier)_sm_            //skelAtelier _eq_ scene.getSkeletonByName(_qt_Armature_qt_)_sm_            //skelAtelier _eq_ scene.getSkeletonById(nomSkelAtelier)_sm_            skelAtelier _eq_ scene.getMeshByID(nomSkelAtelier)_sm_        // If mesh already exists        if(skelAtelier !_eq_ null)        {                        // Jouer l_t_animation d_t_entrée du squelette            scene.beginAnimation(objBrasSqueletteSupportExterne_co_ 0_co_ 100_co_ false_co_ 1.0_co_ function(){})_sm_            scene.beginAnimation(objBrasSqueletteSupportInterne_co_ 0_co_ 100_co_ false_co_ 1.0_co_ function(){})_sm_            scene.beginAnimation(objBrasSquelette_co_ 0_co_ 100_co_ false_co_ 1.0_co_ function(){})_sm_            scene.beginAnimation(objTrappeContour_co_ 0_co_ 100_co_ false_co_ 1.0_co_ function(){                                scene.beginAnimation(objTrappeContour_co_ 100_co_ 190_co_ false_co_ 1.0_co_ function(){})_sm_                scene.beginAnimation(objBrasSquelette_co_ 100_co_ 190_co_ false_co_ 1.0_co_ function(){})_sm_                scene.beginAnimation(objBrasSqueletteSupportInterne_co_ 100_co_ 190_co_ false_co_ 1.0_co_ function(){})_sm_                scene.beginAnimation(objBrasSqueletteSupportExterne_co_ 100_co_ 190_co_ false_co_ 1.0_co_ function(){})_sm_                                                skelAtelier.position _eq_ new BABYLON.Vector3(posXSkel_co_ posYSkel+3.5_co_ posZSkel-2.0)_sm_            })_sm_        }                nameLastSkelAtelier _eq_ nomSkelAtelier_sm_                }}// Load all of the skeleton at the beginning of in the scenefunction createAllSkeletons(listeParamsSkel){        var tabParamsSkel _eq_ eval(listeParamsSkel)_sm_        if(tabParamsSkel !_eq_ null)    {        var i_sm_        for (i_eq_0_sm_i&lt_sm_tabParamsSkel.length_sm_i++)        //for (i_eq_0_sm_i&lt_sm_1_sm_i++)\t\t\t// for test the first skeleton only        {               var skelAtelier_sm_            var nomSkelAtelier _eq_ tabParamsSkel[i].NomBlender_sm_            var chemVersFichierSkelAtelier _eq_ tabParamsSkel[i].ChemVersFichier_sm_            var nomFichierSkelAtelier _eq_ tabParamsSkel[i].NomFichier_sm_            BABYLON.SceneLoader.ImportMesh(nomSkelAtelier_co_ _qt_../../Bll/MoteurJeu/_qt_ + chemVersFichierSkelAtelier_co_ nomFichierSkelAtelier_co_ scene_co_             function (newMeshesSkel_co_particleSystems_co_ skeletons) {                // -10 in y to load the skeleton under the floor and +3.5 in final position                skelAtelier _eq_ setupMeshWithPosFix(skelAtelier_co_newMeshesSkel_co_posXSkel_co_ posYSkel-10_co_ posZSkel-2.0)_sm_                     //skelAtelier _eq_ setupMeshWithPosFix(skelAtelier_co_newMeshesSkel_co_skeletons_co_posXSkel_co_ posYSkel+3.5_co_ posZSkel-2.0)_sm_                                     // Animation of skeleton is good here !!!!                //objAnimTest _eq_ scene.beginAnimation(skeletons[0]_co_ 10_co_ 55_co_ true_co_ 1.0_co_ function(){})_sm_                //objAnimTest.stop()_sm_                            })_sm_            tabSkelImportes.push(tabParamsSkel[i])_sm_        }            }}// Create the device on the robotfunction createPieceAtelier(tabParamsPiece){           if(tabParamsPiece !_eq_ null)    {        // Play the scene animations...        scene.beginAnimation(objBrasPieceSupportExterne_co_ 200_co_ 270_co_ false_co_ 1.0_co_ function(){})_sm_        scene.beginAnimation(objBrasPieceSupportInterne_co_ 200_co_ 270_co_ false_co_ 1.0_co_ function(){})_sm_        scene.beginAnimation(objBrasPieceSupport_co_ 200_co_ 270_co_ false_co_ 1.0_co_ function(){})_sm_        scene.beginAnimation(objBrasPieceOutil_co_ 200_co_ 270_co_ false_co_ 1.0_co_ function(){                        var i_sm_            var nbPieces _eq_ tabParamsPiece.length_sm_            for(i_eq_0_sm_i&lt_sm_nbPieces_sm_i++)            {                var nomBlenderPiece _eq_ tabParamsPiece[i].NomBlender_sm_                var chemVersFichierPiece _eq_ tabParamsPiece[i].ChemVersFichier_sm_                var nomFichierPiece _eq_ tabParamsPiece[i].NomFichier_sm_                var piece_sm_                                var pos _eq_ tabMeshImportes.indexOf(nomBlenderPiece)_sm_                if(pos _eq__eq_ -1)                {                                        // Import the mesh                    BABYLON.SceneLoader.ImportMesh(nomBlenderPiece_co_ _qt_../../Bll/MoteurJeu/_qt_ + chemVersFichierPiece_co_ nomFichierPiece_co_ scene_co_                     function (newMeshes) {                        piece _eq_ setupMeshWithPosFix(piece_co_newMeshes_co_posXSkel_co_ posYSkel+3.5_co_ posZSkel-2.0)_sm_                        piece.name _eq_ nomBlenderPiece_sm_                    })_sm_                    tabMeshImportes.push(nomBlenderPiece)_sm_                }                else                {                    var mesh _eq_ scene.getMeshByID(tabMeshImportes[pos])_sm_                                        if(mesh !_eq_ null)                        mesh.position _eq_ new BABYLON.Vector3(posXSkel_co_ posYSkel+3.5_co_ posZSkel-2.0)_sm_                }                            }                        scene.beginAnimation(objBrasPieceOutil_co_ 270_co_ 340_co_ false_co_ 1.0_co_ function(){})_sm_            scene.beginAnimation(objBrasPieceSupport_co_ 270_co_ 340_co_ false_co_ 1.0_co_ function(){})_sm_            scene.beginAnimation(objBrasPieceSupportInterne_co_ 270_co_ 340_co_ false_co_ 1.0_co_ function(){})_sm_            scene.beginAnimation(objBrasPieceSupportExterne_co_ 270_co_ 340_co_ false_co_ 1.0_co_ function(){})_sm_                    })_sm_                    }}// Create the animation of the skeletonfunction createAnimation(idSkel_co_idAnimationSkel){    if(!drapAnimationStart)    {        var i _eq_ 0_sm_        var skelAtelier_sm_        var keyDeb_sm_        var keyFin_sm_        var nbSkel _eq_ tabSkelImportes.length_sm_        for(i_eq_0_sm_i&lt_sm_nbSkel_sm_i++)        {            if(tabSkelImportes[i].ID _eq__eq_ idSkel)            {                var nomSkel _eq_ tabSkelImportes[i].NomBlender_sm_                skelAtelier _eq_ scene.getMeshByID(nomSkel)_sm_                if(skelAtelier !_eq_ null)                {                    // Find keyframes of the animation                    var j _eq_ 0_sm_                    var nbAnimsSkel _eq_ tabAnimationSquelette.length_sm_                    for(j_eq_0_sm_j&lt_sm_nbAnimsSkel_sm_j++)                    {                        if(tabAnimationSquelette[j].ID _eq__eq_ idAnimationSkel)                        {                            keyDeb _eq_ tabAnimationSquelette[j].KeyFrameDeb_sm_                            keyFin _eq_ tabAnimationSquelette[j].KeyFrameFin_sm_                        }                    }                }            }        }                if(!drapAnimationStart)        {            var objAnim _eq_ scene.beginAnimation(skelAtelier.skeleton_co_ keyDeb_co_ keyFin _co_ false_co_ 1.0_co_ function(){                drapAnimationStart _eq_ false_sm_                            })_sm_            drapAnimationStart _eq_ true_sm_        }                //objAnimTest.restart()_sm_        //skelAtelier _eq_ scene.getSkeletonByName(_qt_Armature_qt_)_sm_                /*        var objAnim _eq_ scene.beginAnimation(skelAtelier.skeleton_co_ keyDeb_co_ keyFin _co_ false_co_ 1.0_co_ function(){            drapAnimationStart _eq_ false_sm_                        })_sm_        drapAnimationStart _eq_ true_sm_        */                //test(retour2_co_skelAtelier.skeleton_co_ keyDeb_co_ keyFin )_sm_ // affiche _t_Retour 2_t_                //scene.render()_sm_        //scene.unregisterBeforeRender(function(){                      //})_sm_                //scene.registerBeforeRender(function(){                    /*            if(!drapAnimationStart)            {                var objAnim _eq_ scene.beginAnimation(skelAtelier.skeleton_co_ keyDeb_co_ keyFin _co_ false_co_ 1.0_co_ function(){                    drapAnimationStart _eq_ false_sm_                                })_sm_                drapAnimationStart _eq_ true_sm_            }            */                //})_sm_    }    }function addInTabAnimationSquelette(animationSkel){    tabAnimationSquelette.push(animationSkel)_sm_}function addInTabAnimationPiece(animationPiece){    tabAnimationPiece.push(animationPiece)_sm_}// Test of callback functionfunction retour2(lObjSkel_co_lImgeDeb_co_lImgeFin) {  //alert(_t_Retour 2_t_)_sm_      if(!drapAnimationStart)    {        var objAnim _eq_ scene.beginAnimation(lObjSkel_co_ lImgeDeb_co_ lImgeFin_co_ false_co_ 1.0_co_ function(){            drapAnimationStart _eq_ false_sm_                        })_sm_        drapAnimationStart _eq_ true_sm_    }    }function test(fct_retour_co_objSkel_co_imgDeb_co_imgFin) {  fct_retour(objSkel_co_imgDeb_co_imgFin)_sm_ // appel de la fonction}_lt_/pre_gt__lt_p_gt_ and here my onchange event function of the html select _qt_Liste des Ids des packs de pieces_qt_ _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function getValComboAnimationSkelAtelier(idDeComboSkel_co_idDeCombo){    // Get the skeleton    var selectBox _eq_ document.getElementById(idDeComboSkel)_sm_        var txtCombo _eq_ selectBox.options[selectBox.selectedIndex].textContent_sm_        var posBal _eq_ txtCombo.indexOf(_t__dd__t_)_sm_        var idSkelStr _eq_ txtCombo.substr(0_co_posBal)_sm_        // Get the num skeleton    selectBox _eq_ document.getElementById(idDeCombo)_sm_        txtCombo _eq_ selectBox.options[selectBox.selectedIndex].textContent_sm_        posBal _eq_ txtCombo.indexOf(_t__dd__t_)_sm_        var idAnimationStr _eq_ txtCombo.substr(0_co_posBal)_sm_        if(idAnimationStr !_eq_ _qt__qt_)    {        createAnimation(idSkelStr.trim()_co_idAnimationStr.trim())_sm_    }    }_lt_/pre_gt__lt_p_gt_Anyone has an idea ???_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks !!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Zino  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zino54220","Date":"2014-07-22T13:04:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried to translate my code_t_s comments in English but don_t_t hesitat to ask me if you need more informations..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zino54220","Date":"2014-07-22T15:17:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I found it !!!!!!!!! The problem was here _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if(!drapAnimationStart)        {            var objAnim _eq_ scene.beginAnimation(skelAtelier.skeleton_co_ keyDeb_co_ keyFin _co_ false_co_ 1.0_co_ function(){                drapAnimationStart _eq_ false_sm_                            })_sm_            drapAnimationStart _eq_ true_sm_        }_lt_/pre_gt__lt_p_gt_My variables _qt_keyDeb_qt_ and _qt_keyFin_qt_ was from type string certainly and of course_co_ beginAnimation need type int...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So to resolve this problem_co_ you must use the _qt_parseInt_qt_ function and it_t_s good!_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if(!drapAnimationStart)        {            var objAnim _eq_ scene.beginAnimation(skelAtelier.skeleton_co_ parseInt(keyDeb)_co_ parseInt(keyFin) _co_ false_co_ 1.0_co_ function(){                drapAnimationStart _eq_ false_sm_                            })_sm_            drapAnimationStart _eq_ true_sm_        }_lt_/pre_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-22T16:41:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good job _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]