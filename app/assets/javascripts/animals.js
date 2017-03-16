$("document").ready(function() {

  $("#add_new_animal_button").on(
    "click",
    function() {
      // Data to be submitted
      newAnimal = {
        "animal": {
          "common_name": $("#common_name").val(),
          "latin_name": $("#latin_name").val(),
          "kingdom": $("#kingdom").val(),
        }
      }

      $.ajax({
        dataType: 'json',
        url: '/animals',
        method: 'POST',
        data: newAnimal,
        success: function(dataFromServer) {
          add_to_animal_list(dataFromServer);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new animal failed: " + errorThrown);
        }
      });
  });// end add animal

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_animal_list(data) {
  $("#animal_list").append(
    "<td>" + data.common_name + "</td>" +
    "<td>" + data.latin_name + "</td>" +
    "<td>" + data.kingdom + "</td>" +
    '<td><a href="' + '/animals/' + data.id + '">' + "Show" + "</a></td>" +
    '<td><a href="' + '/animals' + data.id + '/edit">' + "Edit" + "</a></td>" +
    '<td><a href="' + '/animals#destroy/' + data.id + '">' + "Destroy" + "</a></td>"
    );
}
