[{"Owner":"Melyon","Date":"2016-04-18T11:39:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody_co__lt_br /_gt_\n\tWe have developed an online 3D city called Melyon (_lt_a href_eq__qt_http_dd_//melyon.ir_qt_ rel_eq__qt_external nofollow_qt__gt_www.Melyon.ir_lt_/a_gt_ ).But we have a little problem here_dd_ When roaming in the city_co_ no matter in which scene we are_co_ from the 512 MB memory dedicated by GPU to the browser_co_ the max amount engaged in processing is just about 5 MB or less and the rest of memory needed is provided directly from RAM wich is as you know slower than GPU memory. Why is that and how we can fix it? We want most of the resources needed for processing comes from that 512 MB GPU memory dedicated for Browser and as much as possible not to engage Ram directly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your answers.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/5714c756b6fe3_Screenshot(584).png.0b142b4442d85b5f0c743b5adbe6fb39.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7324_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/5714c756b6fe3_Screenshot(584).png.0b142b4442d85b5f0c743b5adbe6fb39.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot (584).png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-04-18T15:21:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAll memory is slow.  Memory access is the new I/O.  It is 100 times slower to have to wait for memory access as opposed being in a processor cache.  Memory access sucks_co_ period.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat said_co_ memory is not fungible across processors_co_ unless it is _qt_pinned_qt_ meaning it is used by both to transfer data.  If you are disappointed with your performance_co_ start profiling to reduce CPU in the render loop.  A good start is reducing the number of draw calls by merging meshes of similar material.  This both reduces GPU draw calls_co_ and CPU overhead of of managing the drawing process.  Having too many objects of the same material is usually biggest bang for the buck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]