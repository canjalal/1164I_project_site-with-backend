function top_nav(nav_element, pp_no = null, bid_item_id = null)

{

    var return_block = '';
    var nav_path = '../';

    if (bid_item_id != null)

    {

        var NN = 0; // bid item index

        while (base_sov[NN].bid_item != bid_item_id) {
            NN++;
        }

    }

    if (nav_element == 'map')

    {

        nav_path = '';

    }

    return_block =

    '<nav class="navbar navbar-expand-lg bg-nav navbar-dark bg-primary">\
       <button class="navbar-toggler"\
                type="button"\
                data-bs-toggle="collapse"\
                data-bs-target="#main_nav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
         <span class="navbar-toggler-icon"></span>\
       </button>\
       <div class="collapse navbar-collapse" id="main_nav" >\
         <ul class="navbar-nav">\
	   <li class="nav-item active">\
             <a class="nav-link" href="' + nav_path + 'index.html">Map</a>\
           </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Payments</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">SOV &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP01.html">PP01 - Apr 2022</a>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP02.html">PP02 - May 2022</a>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Funding Breakdown &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP01.html">PP01 - Apr 2022</a>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP02.html">PP02 - May 2022</a>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">QTYs</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">Flatwork &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">Street Rennovation &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-02.html">R-02: Reflective Markings</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-03.html">R-03: Planing</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-04.html">R-04: HMA</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-05.html">R-05: 8in Conc. Base</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-06.html">R-06: 10in Conc. Base</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Sidewalk, Curb and Gutter &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-07.html">R-07: Conc. Pavement, Parking Strip and Gutter</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-08.html">R-08: 3.5in Sidewalk</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-09.html">R-09: 4in Curb</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-10.html">R-10: 6in Curb</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-11.html">R-11: Combined Curb and Gutter</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-12.html">R-12: Curb Ramps</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-15.html">R-15: Type III Pullboxes</a>\
	               </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Sewer &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">Side Sewers, Culverts &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-20.html">SW-20 - Side Sewer Connection to Sewer Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-21.html">SW-21 - Pre-Con TVI of (E) Side Sewers and Culverts</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-23.html">SW-23 - Side Sewer Replacement</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-29.html">SW-29 - Post-Con TVI of (N) Side Sewers and Culverts</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Mains &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-05.html">SW-05 - (N) 12" VCP SW Main</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Catch Basins &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-10.html">SW-10 - (N) CB - STD 87,188</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Manholes &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-03.html">SW-03 - (N) MH - STD 87,181</a>\
	               </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'specs/specs.html">Specs</a>\
           </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'other/1164I_mixes.pdf" target="_blank">Mixes</a>\
           </li>\
         </ul>\
       </div>';

    if (nav_element == 'sov')

    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Schedule of Values (SOV) for PP ' + pp_no + '</div>';

    } else if (nav_element == 'funding')

    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Funding Breakdown for PP ' + pp_no + '</div>';

    } else if (nav_element == 'qty')

    {

        return_block +=

            '<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="' + base_sov[NN]['Description'] +
            ' (' + base_sov[NN]['Unit'] + ')"\> Quantity Details for ' + bid_item_id + '</div>';

    }

    return_block += '</nav>';

    return return_block

}
