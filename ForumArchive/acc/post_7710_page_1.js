[{"Owner":"Dad72","Date":"2014-07-08T22:43:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When an animation (scene.beginAnimation) inside of a collider_co_ it crashes the scene._lt_/p_gt__lt_p_gt_It works with a static object_co_ but not have an object to animate._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-08T23:03:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m pretty sure you know what I_t_ll ask _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-08T23:34:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ but not with playground_co_ because I cannot import models outside and textures._lt_br_gt_ _lt_br_gt__lt_a href_eq__qt_http_dd_//www.castorengine.com/babylon/collision/_qt_ rel_eq__qt_external nofollow_qt__gt_moveWithCollisions with mesh animate_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Z and S to control the character and the mouse for the oriented._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-09T00:00:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sounds like you_t_re not using the right version of babylon.js_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Please double check_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-09T01:27:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ I updated the version of babylon and it is the same thing._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-09T02:45:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perhaps I found the problem_co_ I uploaded a new version_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-09T11:46:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes it works. Thanks Deltakosh. ellipsoidOffset works well aslo. However my character no longer works in forward but backwards._lt_br_gt_How can I make go forwards or backwards using moveWithhCollisions?_lt_br_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-09T13:53:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I find with negate()_sm__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_velocity _eq_ new BABYLON.Vector3(parseFloat(posX) / VitessePerso_co_ 1_co_ parseFloat(posZ) / VitessePerso)_sm_velocityAndForward _eq_ velocity.negate()_sm__lt_/pre_gt__lt_p_gt_One works like this there would be very useful for the _lt_em_gt_velocity and direction_lt_/em_gt__dd__lt_/p_gt__lt_ul_gt__lt_li_gt__lt_em_gt_BABYLON.mesh.TransformDirection()_sm__lt_/em_gt__lt_/li_gt__lt_/ul_gt__lt_p_gt_and Currently we have _lt_em_gt_BABYLON.Vector3.Up_lt_/em_gt_ and _lt_em_gt_BABYLON.Vector3.Zero_lt_/em_gt__co_  I propose also _dd__lt_/p_gt__lt_ul_gt__lt_li_gt__lt_em_gt_BABYLON.Vector3.Forward_lt_/em_gt__lt_/li_gt__lt_/ul_gt__lt_p_gt_and_lt_/p_gt__lt_ul_gt__lt_li_gt__lt_em_gt_BABYLON.Vector3.Backwards_lt_/em_gt__lt_/li_gt__lt_/ul_gt__lt_p_gt_You think than that might be added Deltakosh. This would allow to_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_var speed _eq_ 2_sm_mesh.TransformDirection(BABYLON.Vector3.Forward * speed)_sm_ // avancer sans collisionmesh.TransformDirection(BABYLON.Vector3.Backwards * speed)_sm_ // reculer sans collision//Or with collision mesh.moveWithCollisions(BABYLON.Vector3.Forward * speed)_sm_ // avancer avec collisionmesh.moveWithCollisions(BABYLON.Vector3.Backwards * speed)_sm_ // reculer avec collision_lt_/pre_gt__lt_p_gt__lt_em_gt_TransformDirection()_lt_/em_gt_ would be like _lt_em_gt_moveWithCollisions()_lt_/em_gt_ but without collisions (useful for moving from arrow_co_ ball...)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-09T16:18:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_forward and backwards depend on where you are looking to _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-09T16:27:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes. It is exactly what it is. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-09T21:03:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt__lt_br_gt__lt_div_gt_In fact since the last change_co_ I had realized that my character was more going forward_co_ but backward._lt_/div_gt__lt_div_gt_And on the stage of my editor I realize that there are many reverse. The arrows on the gizmo_t_s transformation for example upside down._lt_/div_gt__lt_div_gt_There is an inversion with the + and -._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_/div_gt__lt_div_gt_And I also have a concern with the new positions of moveWithCollisions. If I move a character with mesh.position_co_ the new position is not recalculated for moveWithCollisions_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_&lt_sm_fr&gt_sm__lt_/div_gt__lt_div_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd_arial_co_ sans-serif_sm__qt__gt__lt_span style_eq__qt_font-size_dd_10.5pt_sm__qt__gt_En fait depuis le dernier changement_co_ je m’étais rendu compte que mon personnage n’allait plus en avant_co_ mais en arrière._lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd_arial_co_ sans-serif_sm__qt__gt__lt_span style_eq__qt_font-size_dd_10.5pt_sm__qt__gt_Et la sur la scène de mon éditeur je me rends compte qu_t_il y a beaucoup d_t_inversion. Les flèches du gizmo de transformation par exemple sont à l’envers._lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10.5pt_sm__qt__gt_Il y a une inversion avec les + et les - et ce depuis le _lt_/span_gt_dernière_lt_span style_eq__qt_font-size_dd_10.5pt_sm__qt__gt_ update._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10.5pt_sm__qt__gt_Et j_t_ai aussi un souci avec les nouvelles positions de moveWithCollisions. si je _lt_/span_gt_déplace_lt_span style_eq__qt_font-size_dd_10.5pt_sm__qt__gt_ un personnage avec mesh.position_co_ la nouvelle position _lt_/span_gt_n’est_lt_span style_eq__qt_font-size_dd_10.5pt_sm__qt__gt_ pas recalculer pour _lt_/span_gt_moveWithCollisions. Je me sert du déplacement a une autre position pour le cas de portail de téléportation._co_ mais la nouvelle position ne correspond plus a la précédente. comme redonner cette new position a moveWithCollisions_lt_/p_gt__lt_p_gt_&lt_sm_/fr&gt_sm__lt_/p_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Update scene and engine _dd__lt_/div_gt__lt_div_gt__lt_a href_eq__qt_http_dd_//www.castorengine.com/babylon/collision/_qt_ rel_eq__qt_external nofollow_qt__gt_moveWithCollisions backwards_lt_/a_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Gizmo red_co_ green_co_ blue reverse _dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-09T23:10:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Velocity is the direction where you want to go and not a rotation like I see in your code_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-09T23:21:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Vous parlez de cela._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_posX _eq_ Math.sin(parseFloat(mesh.rotation.y))_sm__lt_/div_gt__lt_br_gt__lt_div_gt_posZ _eq_ Math.cos(parseFloat(mesh.rotation.y))_sm__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Je sais que velocity est une direction_co_ et je la calcule la direction par rapport a la rotation du perso._lt_/div_gt__lt_br_gt__lt_div_gt_cela sert a calculer l’orientation du personnage de façons a ce qu_t_il avance toujours face a la direction de la rotation du perso. J’ai toujours fait ça  et cela fonctionnait tres bien jusqu’à la dernière update qui a inverser les + et les -. regarder mon image_co_ les fleche des gizmos sont a l’envers et ce depuis la dernière update_co_ avant il était a l_t_endroit._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Et ma seconde question pour recuperer la position pour _lt_span_gt_moveWithCollisions (c’est calculer comment ?)_lt_/span_gt__lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-09T23:23:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Je n_t_ai rien changer sur les rotations (sinon toutes mes scenes seraient a l_t_envers). ca vient de chez toi je pense le soucis des gizmos (ou alors il faut me le prouver dans le playground _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_le moveWithCollisions met a jour la position pour toi (mesh.position)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-09T23:31:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Je comprend vraiment pas DK_co_ ce qui a pu ce passer sur ma scene ou j_t_ai rien toucher a part mettre a jour le moteur. et ma scène ce retrouve avec des truc a l’envers. donc moi je veux bien que ça vienne de chez moi_co_ mais j_t_ai juste mis a jour le moteur_co_ donc j_t_en déduit que c’est un bug du moteur et pas de chez moi. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Je vous assure que depuis la dernière update_co_ mon perso avancer_co_ et il c’est mis a reculer et sur ma scene ou j_t_ai rien modifier a part le moteur_co_ je me retrouve avec des choses a l’envers. Je n_t_ai pas dit que c’était les rotation_co_ mais les + sont devenue des - ou un truc du genre._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Même les gizmo des lumiere ce retrouve a l’envers le perso qui recule au lieur d_t_avancer... tout fonctionnait bien avant la dernière update ou celle d_t_avant. j_t_ai pas ouvert mon éditeur depuis quelque jours.._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-09T23:47:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Voila une preuve sur playground _dd_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#2A3JCM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#2A3JCM_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_logiquement le resultat devrais être comme ca_co_ mais sur playground_co_ vous pouvez voir que tout est a l_t_envers_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-10T00:13:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok je suis trop con_dd_) en fait j_t_ai valide un Pull request qui corrigeait le sens des cylindres (maintenant c_t_est nom_co_ hauteur_co_ diametre haut et diametre bas)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_TU vois que ca sert de me faire un playground _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-10T00:22:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah oui_co_ je voie le quelle Pull request. donc je doit faire quoi ? corriger suivant cette nouvelle signatures_co_ ou vous voulez garder la compatibilité ?_lt_/p_gt__lt_p_gt__lt_span_gt_Oui_co_ le playground est utiles_co_ je ne dit pas le contraire_co_ mais suivant les scène_co_ tant qu_t_il n’est pas question de textures ou de mesh importer et lien externe ça vas._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]