Meteor.startup(function(){
  if (Calevents.find().count()===0){

    min=moment().valueOf();
    max=moment(min).add(7, 'days').valueOf();

    for (i = 0; i <= 400; i++) {
      startTime = getRandomIntInclusive(min, max);
      endTime = getRandomIntInclusive(startTime, max);

      Calevents.insert({
        title: "Test " + i,
        start: moment(startTime).format("YYYY-MM-DDTHH:mm:ss"),
        end: moment(endTime).format("YYYY-MM-DDTHH:mm:ss"),
        type: "Birthday",
        guests: getRandomIntInclusive(0,2000)
      });
    };
  }

  function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
  }

  function getRandomIntInclusive(min, max) {
    // Returns a random integer between min (included) and max (included)
    // Using Math.round() will give you a non-uniform distribution!
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

});
