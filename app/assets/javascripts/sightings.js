
$("document").ready(function() {

  $("#add_new_sighting_button").on(
    "click",
    function() {
      // Data to be submitted
      newSighting = {
        "sighting": {
          // format JS dates and times to look nice on the front end
          "date": $("#date").val(),
          "time": $("#time").val(),
          "latitude": $("#latitude").val(),
          "longitude": $("#longitude").val(),
          "animal_id": $ ("#animal_id").val()
        }
      }

      $.ajax({
        dataType: 'json',
        url: '/sightings',
        method: 'POST',
        data: newSighting,
        success: function(dataFromServer) {
          add_to_sighting_list(dataFromServer);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new animal failed: " + errorThrown);
        }
      });
  });// end add sighting

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_sighting_list(data) {
  $("#sighting_list").append(
    "<td>" + data.date + "</td>" +
    "<td>" + data.time + "</td>" +
    "<td>" + data.latitude + "</td>" +
    "<td>" + data.longitude + "</td>" +
    // include data for animal name once we know how to access it
    '<td><a href="' + '/sightings/' + data.id + '">' + "Show" + "</a></td>" +
    '<td><a href="' + '/sightings' + data.id + '/edit">' + "Edit" + "</a></td>" +
    '<td><a href="' + '/sightings#destroy/' + data.id + '">' + "Destroy" + "</a></td>"
    );
}
