$(document).ready(function() {
   $("#calendar").fullCalendar({
     eventColor: '#4CAF50',
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
