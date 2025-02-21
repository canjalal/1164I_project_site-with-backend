function period_sov_details(bid_item_id, pp_no) {

    var return_array = []; // 0th element to to date QTY, 1st element is to date AMT 
    var NN = 0; // bid item index

    while (base_sov[NN]['bid_item'] != bid_item_id) {
        NN++;
    }

    return_array = [NN, 0];

    if (base_sov[NN]['unit_price'] != "-")

    {

        for (const fund_source in base_sov[NN]['payment_history'])

        {

            return_array[1] += base_sov[NN]['payment_history'][fund_source]["PP"+zeroPad(pp_no,2)];

        }

        if (return_array[1] != 0) {

            return_array[0] = format_unit(return_array[1] / base_sov[NN]['unit_price'], base_sov[NN]['unit']);

        } else

        {

            return_array = ["", ""];

        }


    } else {
    
        return_array = ["-", "-"];
        
    }

    return return_array


}



function to_date_sov_details(bid_item_id, pp_no) {

    var return_array = []; // 0th element to to date QTY, 1st element is to date AMT 
    var NN = 0; // bid item index

    while (base_sov[NN]['bid_item'] != bid_item_id) {
        NN++;
    }

    return_array = [NN, 0];

    if (base_sov[NN]['unit_price'] != "-")

    {

        for (const fund_source in base_sov[NN]['payment_history'])

        {

            //for (const payment_no in base_sov[NN]['payment_history'][fund_source])
              for (var pp = 1; pp < pp_no + 1; pp++)

            {


                return_array[1] += base_sov[NN]['payment_history'][fund_source]["PP"+zeroPad(pp,2)];

            }

        }

        if (return_array[1] != 0) {

            return_array[0] = format_unit(return_array[1] / base_sov[NN]['unit_price'], base_sov[NN]['unit']);

        } else

        {

            return_array = ["", ""];

        }


    } else {
        return_array = ["-", "-"];
    }

    return return_array


}


function generate_sov_table(pp_no) {

    var contract_total_amount = 0;
    var period_total_amount = 0;
    var to_date_total_amount = 0;

    var return_block = "";

        return_block +=

           '<thead class="sov_thead">\
                <tr>\
                    <th class="sov_th" style="width:5vw">Bid<br>Item</th>\
                    <th class="sov_th" style="width:30vw">Description</th>\
                    <th class="sov_th" style="width:5vw">Unit</th>\
                    <th class="sov_th sov_qty">Contract<br>QTY</th>\
                    <th class="sov_th sov_amt">Unit<br>Price</th>\
                    <th class="sov_th sov_amt">Contract<br>Amount</th>\
                    <th class="sov_th sov_qty">Period<br>QTY</th>\
                    <th class="sov_th sov_amt">Period<br>Amount</th>\
                    <th class="sov_th sov_qty">To Date<br>QTY</th>\
                    <th class="sov_th sov_amt">To Date<br>Amount</th>\
                </tr>\
            </thead>\
            <tbody>';

    for (ii = 0; ii < base_sov.length; ii++) {

        if (isNaN(base_sov[ii]['unit_price']) == false)

           {contract_total_amount +=  base_sov[ii]['unit_price'] * base_sov[ii]['contract_qty'];}

        if (Math.abs(parseFloat(period_sov_details(base_sov[ii]['bid_item'], pp_no)[1])) > 0)

           {period_total_amount += period_sov_details(base_sov[ii]['bid_item'], pp_no)[1]; }

        if (Math.abs(parseFloat(to_date_sov_details(base_sov[ii]['bid_item'], pp_no)[1])) > 0)

          {to_date_total_amount += to_date_sov_details(base_sov[ii]['bid_item'], pp_no)[1];}

        return_block += '<tr class="sov_tr">';
        
        if (base_sov[ii].worksheet == 1)
        
          {
                    
           return_block += '<td class="sov_td" style="text-align:center; text-decoration: underline;">'
                            + "<a href=\"..\\qty/" + 'qty_' + base_sov[ii]['bid_item'].replace('-','-0') + 
                              ".html\" target=\"_blank\">" + base_sov[ii]['bid_item'] + "</td>";
           
           }

        else if (base_sov[ii].worksheet == 2)
        
          {
                    
            return_block += '<td class="sov_td" style="text-align:center; text-decoration: underline;">'
                            + "<a href=\"..\\qty/" + 'qty_' + base_sov[ii]['bid_item'] + 
                              ".html\" target=\"_blank\">" + base_sov[ii]['bid_item'] + "</td>";          
           }
           
        else if (base_sov[ii].worksheet == 3)
        
          {
                    
            return_block += '<td class="sov_td" style="text-align:center; text-decoration: underline;">'
                            + "<a href=\"..\\qty/" + 'qty_' + base_sov[ii]['bid_item'].replace(/ /g,"_") + 
                              ".html\" target=\"_blank\">" + base_sov[ii]['bid_item'] + "</td>";          
           }
           
        else
        
          {
          
           return_block += '<td class="sov_td" style="text-align:center">' + base_sov[ii]['bid_item'] + '</td>';
          
           }   
        
           return_block += '<td class="sov_td">' + base_sov[ii]['description'] + '</td>\
                            <td class="sov_td" style="text-align:center">' + base_sov[ii]['unit'] + '</td>\
                            <td class="sov_td" style="text-align:center">';

        if (base_sov[ii]['unit'] == 'LS' || base_sov[ii]['unit'] == 'AL') {

            return_block += 100 * base_sov[ii]['contract_qty'] + '%</td>';

        } else {

            return_block += base_sov[ii]['contract_qty'] + '</td>';

        }


        return_block +=

            '<td class="sov_td"\
                         style="text-align:right">' +
            amount_cell(base_sov[ii]['unit_price']) +
            '</td>\
                    <td class="sov_td"\
                         style="text-align:right">' +
            amount_cell(base_sov[ii]['unit_price'] * base_sov[ii]['contract_qty']) +
            '</td>\
             <td class="sov_td"\
                         style="text-align:center">' +
            period_sov_details(base_sov[ii]['bid_item'], pp_no)[0] +
            '</td>\
                    <td class="sov_td"\
                         style="background-color:#f29779;\
                                text-align:right">' +
            amount_cell(period_sov_details(base_sov[ii]['bid_item'], pp_no)[1]) +
            '</td>\
                    <td class="sov_td"\
                         style="text-align:center">' +
            to_date_sov_details(base_sov[ii]['bid_item'], pp_no)[0] +
            '</td>\
                    <td class="sov_td"\
                         style="background-color:#fa6428;\
                                text-align:right">' +
            amount_cell(to_date_sov_details(base_sov[ii]['bid_item'], pp_no)[1]) +
            '</td>\
                </tr>';

    }

    return_block +=
    
            '<tr class="sov_tr">\
              <td class="sov_td"></td>\
              <td class="sov_td"></td>\
              <td class="sov_td"></td>\
              <td class="sov_td"></td>\
              <td class="sov_td" style="text-align:right"><strong>Total:</strong></td>\
              <td class="sov_td">' + amount_cell(contract_total_amount) + '</td>\
              <td class="sov_td"></td>\
              <td class="sov_td">' + amount_cell(period_total_amount) + '</td>\
              <td class="sov_td"></td>\
              <td class="sov_td">' + amount_cell(to_date_total_amount) + '</td>\
             </tr>\
           <tbody><br>';
             
    return return_block

}






