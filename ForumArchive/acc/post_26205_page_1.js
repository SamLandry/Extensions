[{"Owner":"ozRocker","Date":"2016-11-04T14:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m using Babylon.js for my multiplayer games_co_ but this question can apply to any type of multiplayer game.  I cannot find any answers on the net though so I_t_m just asking all the forums.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone know the best way to streamline server updates to the clients in a multiplayer scene?  For example_co_ if you have a massive world with 1000 avatars walking around_co_ laying down landmines_co_ etc.. you wouldn_t_t want the movement of every avatar broadcast to all the clients.  That would be a massive load on the server and clients.  I_t_m assuming you would only transmit avatar updates to clients that can see that avatar_co_ or is a certain distance from that avatar.  This would also apply to dynamic objects in the scene and collision detection (assuming collision is handled by the server).  Anyone know of any articles/tutorials on the net that explains how this is done?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne method I thought of was to cycle through every client that_t_s connected to see if they are in the vicinity.  But that could take too long.  Then I thought of splitting the world up into a grid so then I can narrow doing all the checks to just clients within the neighbouring grid squares.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-11-04T15:22:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have done a fair amount of http client / server_co_ though none of it for gaming.  Adding the position and direction of the clients camera with every http _lt_u_gt__lt_strong_gt_put_lt_/strong_gt__lt_/u_gt_ might be a good idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour server could then update its in memory DB of objects it is tracking_co_ then use your camera_t_s location / direction to see what to send back.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other way that makes sense is to include the SERVERS timestamp when things are sent down.  The client also returns the stamp of the last call in its next call.  If the server time is in each record of the DB_co_ I would then just cull the things the client already knows.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do not know which would be faster_co_ but think the timestamp would probably be the one.  You could also combine them_co_ BUT you would need to indicate when the camera has move since last call.  Or only sending the camera status implies to return based on proximity_co_ else based on time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know not of any books_co_ but think doing _qt_whatever_qt_ on the SERVER is better than cycling on the client.  It should also be much easier to experiment &amp_sm_ change methods_co_ if the process was on the server.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-11-04T23:16:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks for the tips _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ I don_t_t really understand how the timestamp method works.  If one player has been stationary for a minute and another player runs in front_co_ or drops a box in front of them that should also update the stationary player_t_s view.  Maybe I misunderstood.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m thinking of scalability.  The server could get really bogged down if with every frame of movement from every player and every object_co_ it needs to do a comparison to every other player to see if its within view.  There must be some kind of standard process that games like Warcraft would use to solve this problem.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2016-11-05T00:18:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOne massive life saver is not to give exact location_co_ but direction or target position etc... this won_t_t help with server lag_co_ but will help with client... so if the network hiccups_co_ then the character will still flow in the correct direction._lt_br /_gt_\n\tAka this player is going towards 300_co_20_co_21 or something - it all depends on what type of game you_t_re making_co_ of course.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tAlso_co_ be sure never to update the position if you don_t_t need to - if the client already knows where a character is_co_ and that character hasn_t_t moved_co_ no need to push any updates!_lt_br /_gt_\n\tAnd yus timestamps are great too._lt_br /_gt_\n\t(I don_t_t know too much about this_co_ but have researched and a made a mini multiplayer game thing)_lt_br /_gt__lt_br /_gt_\n\tGood luck my friend!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]