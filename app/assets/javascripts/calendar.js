$(document).ready(function() {
   $("#calendar").fullCalendar({
     events: "/sightings/get_sightings",
     timeFormat: "LT",
     eventClick: function(sightings) {
      if (sightings.url) {
          window.open(sightings.url);
          return false;
      }
    }
  });
});
