[{"Owner":"prvi_treti","Date":"2015-04-09T11:43:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ Sorry if title and question sounds stupid but I checked four types of lights of Babylon.js but couldn_t_t find what I need. Light I need will just illuminate the scene but there will be no shadows_co_ reflections (just will show texture as is) etc.Is there such feature?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ Or can it be achieved by existing lights?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-09T13:37:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It can be achieved_co_ just not with Lights_co_ materials.  Make the material self lighting_co_ setting the emissiveColor / emissiveTexture.  See_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//babylondoc.azurewebsites.net/page.php?p_eq_22051_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylondoc.azurewebsites.net/page.php?p_eq_22051_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"prvi_treti","Date":"2015-04-09T13:49:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_78394_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13742_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt_ data-cite_eq__qt_JCPalmer_qt_ data-ipsquote-timestamp_eq__qt_1428586672_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_It can be achieved_co_ just not with Lights_co_ materials.  Make the material self lighting_co_ setting the emissiveColor / emissiveTexture.  See_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//babylondoc.azurewebsites.net/page.php?p_eq_22051_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylondoc.azurewebsites.net/page.php?p_eq_22051_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EmissiveTexture is what I was looking for_co_ thank you._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-04-09T13:55:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The hemispheric light can be a handy _qt_general purpose_qt_ light_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#139LKD_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#139LKD_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s aimed straight-up in this demo... which causes the light to reflect back from the sky... and light 5 of 6 crate sides.  The bottom of the crate is lit via line 8_co_ and the light shining off-of the material... is eliminated in line 9.  This is one of my favorite _qt_working light_qt_ configs._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"prvi_treti","Date":"2015-04-09T15:21:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_78399_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13742_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1428587707_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_The hemispheric light can be a handy _qt_general purpose_qt_ light_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#139LKD_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#139LKD_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s aimed straight-up in this demo... which causes the light to reflect back from the sky... and light 5 of 6 crate sides.  The bottom of the crate is lit via line 8_co_ and the light shining off-of the material... is eliminated in line 9.  This is one of my favorite _qt_working light_qt_ configs._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Party on!_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One of the reasons I prefer a lightless solution is that I will use sprites for most cases and other is I tend to believe a lightless solution will have better performance (nothing to calculate after all). Hope I am right _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]