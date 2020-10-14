$(document).ready(function () {

    $.getJSON("data.json", function(result){
        $.each(result, function(i, obj){
            $("#myTable").append("<tr>" + 
            "<th class=\"1\">" + obj.id + "</th>" +
            "<th id=\"aname\">" + obj.aname + "</th>" +
            "<th id=\"pname\">" + obj.pname + "</th>" +
            "<th id=\"pdesc\">" + obj.pdesc + "</th>" +
            "<th id=\"psdesc\">" + obj.psdesc + "</th>" +
            "<th id=\"sku\">" + obj.sku + "</th>" +
            "<th id=\"url\">" + obj.url + "</th>" +
            "<th id=\"img\">" + obj.img + "</th>" +
            "<th id=\"img_80\">" + obj.img_80 + "</th>" +
            "<th id=\"img_250\">" + obj.img_250 + "</th>" +
            "<th id=\"all_images\">" + obj.all_images + "</th>" +
            "<th id=\"lot_nr\">" + obj.lot_nr + "</th>" +
            "<th id=\"lot_emin\">" + obj.lot_emin + "</th>" +
            "<th id=\"lot_emx\">" + obj.lot_emax + "</th>" +
            "<th id=\"lot_est\">" + obj.lot_est + "</th>" +
            "<th id=\"auction\">" + obj.auction + "</th>" +
            "</tr>");
        });
    });

    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      
});
