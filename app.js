  $( document ).ready(function() {
      var api_url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=GBP,RUB,EUR';
      var api_url2 = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=TRY,BRL,MXN';

        $.ajax({
            type: 'GET',
            url: api_url ,
            dataType: 'json',
            success: function(result){

            const objVal = result.rates;             
            var keys = [], k, i, len;

            for (k in objVal) {
                if (objVal.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
              
            keys.sort();
              
              len = keys.length;
              
              for (i = 0; i < len; i++) {
                k = keys[i];
                console.log(k + ':' + objVal[k]);
                var column = $("<div class='column'></div>");

                    for (j = 0; j < 3; j++) {
                    // TODO: Should you match .row here, or use a specific row?
                    $(".row").append(column);
                    // Use jQuery to create the P element instead of the DOM.
                    var para = $('<p></p>');
                    // Use the jQuery text() method to set the content.  (Prevents element
                    // injection by server via innerHTML.)
                    para.text(objVal[k].toFixed(3) + k);

                    // Append this element only to the one div we created this iteration of the
                    // outer loop.
                    column.append(para);
                    }
              }

                // for (const prop in result.rates) {

                //     // Create the column and store its jQuery object to use later.
                //     let column = $("<div class='column'></div>");

                //     // TODO: Should you match .row here, or use a specific row?
                //     $(".row").append(column);

                //     for (i = 0; i < 3; i++) {
                //         // Use jQuery to create the P element instead of the DOM.
                //         let para = $('<p></p>');
                //         // Use the jQuery text() method to set the content.  (Prevents element
                //         // injection by server via innerHTML.)
                //         para.text(`${result.rates[prop].toFixed(3)} ${prop} `);

                //         // Append this element only to the one div we created this iteration of the
                //         // outer loop.
                //         column.append(para);
                //     }
                //   }
                
            }
      })
  }); 