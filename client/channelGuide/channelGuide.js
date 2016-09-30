// ------Ken's code for vis channel Guide


import { Template } from 'meteor/templating';

import { ReactiveVar} from 'meteor/reactive-var';
//
// import './channelGuide.html'

import vis from 'vis';

Tracker.autorun(function() {
    console.log("The Picky is: " + moment(Session.get("picky")).format("dddd, MMMM Do YYYY, h:mm:ss a"));
});

Template.picky.onCreated(function() {
    Session.set('picky', moment(new Date()).valueOf());
});

Template.picky.onRendered(function() {
    $('.datetimepicker').datetimepicker({
        timeZone: 'America/Chicago',
        useCurrent: true,
    });
});

Template.picky.events({
    'submit form' (event, template) {
        event.preventDefault();

        let picker = $('.datetimepicker'),
            dateTime = picker.data('DateTimePicker').date();

        if (dateTime) {
            Session.set("picky", moment(dateTime).valueOf());
        } else {
            console.log('Make sure to pick an appointment time!', 'danger');
        }
    }
});



Template.kenTime.onRendered(function() {
  // ---------Events publication------------------
  var eventsCollection = this.subscribe('events');
  // ---------------------------------------------

  this.autorun(function() {
    if (eventsCollection.ready()) {
      console.log("> Subscription Recived");
      let events = Events.find().fetch();

      console.log(events[0]);

      let container = document.getElementById('mytimeline');

      let eventLinkOne = "<a href='/eventFlyer/" + events[0]._id + "'>" + events[0].eventName + "</a>",
          eventLinkTwo = "<a href='/eventFlyer/" + events[1]._id + "'>" + events[1].eventName + "</a>",
          eventLinkThree = "<a href='/eventFlyer/" + events[2]._id + "'>" + events[2].eventName + "</a>",
          eventLinkFour = "<a href='/eventFlyer/" + events[3]._id + "'>" + events[3].eventName + "</a>",
          eventLinkFive = "<a href='/eventFlyer/" + events[4]._id + "'>" + events[4].eventName + "</a>";


      var groups = new vis.DataSet([{
          id: 1,
          content: 'Sponsored Event'
      }, {
          id: 2,
          content: eventLinkOne
      }, {
          id: 3,
          content: eventLinkTwo
      }, {
          id: 4,
          content: eventLinkThree
      }, {
          id: 5,
          content: eventLinkFour
      }, {
          id: 6,
          content: eventLinkFive
      }]);

      var options = {
          showCurrentTime: true
      };

      var data = new vis.DataSet();

      timeline = new vis.Timeline(container, data, groups, options);

      var windowStart = moment(Session.get('picky')).valueOf();
      var windowEnd = moment(Session.get('picky')).add(7, 'days').valueOf();

      for (i = 0; i <= 4; i++) {
          events[i]["group"] = i + 2;
          events[i]["id"] = i + 2;
      };

      var data = new vis.DataSet();
      data.add(events);



        // var data = new vis.DataSet([
        //   {
        //     id: 1,
        //     start: moment(new Date()) - 60 * 1000,
        //     end: moment(new Date()),
        //     content: 'Dynamic event 1',
        //     group: "1"
        //   },
        //   {
        //     id: 2,
        //     start: moment(new Date()) + 10 * 1000,
        //     end: moment(new Date()) + 60 * 1000,
        //     content: 'Dynamic event 2',
        //     group: "2"
        //   },
        //   {
        //     id: 3,
        //     start: moment(new Date()) - 320 * 1000,
        //     end: moment(new Date()) + 180 * 1000,
        //     content: 'Dynamic event 3',
        //     group: "3"
        //   },
        //   {
        //     id: 4,
        //     start: moment(new Date()) + 60 * 1000,
        //     end: moment(new Date()) + 180 * 1000,
        //     content: 'Dynamic event 4',
        //     group: "4"
        //   },
        //   {
        //     id: 5,
        //     start: moment(new Date()) - 10 * 1000,
        //     end: moment(new Date()) + 10 * 1000,
        //     content: 'Dynamic event 5',
        //     group: "5"
        //   },
        //   {
        //     id: 6,
        //     start: moment(new Date()) - 320 * 1000,
        //     end: moment(new Date()),
        //     content: 'Dynamic event 6',
        //     group: "6"
        //   },
        // ]);


        timeline.destroy();
        timeline = new vis.Timeline(container, data, groups, options);
        timeline.addCustomTime(moment(picky));

        timeline.setWindow(windowStart, windowEnd, {
            animation: false
        });



        // var start = moment(Session.get('picky') - 20 * 60 * 1000);
        // var end   = moment(Session.get('picky') + 20 * 60 * 1000);
        //
        // //var start = new Date((new Date()).getTime() - 2 * 60 * 1000);
        // //var end   = new Date((new Date()).getTime() + 3 * 60 * 1000);
        // console.log("Start Window: ", moment(start).format("dddd, MMMM Do YYYY, h:mm:ss a"));
        // console.log("End Window", moment(end).format("dddd, MMMM Do YYYY, h:mm:ss a"));
        //timeline.setWindow(start, end, {animation: false});
    } else {
        console.log("> Not ready");
    };
  });


});



// Template.kenTime.onRendered(function() {
//
//
//   var subscription = this.subscribe('events')
//
// this.autorun(function () {
//   if (subscription.ready()) {
//     var windowStart=moment(Session.get('picky')).valueOf();
//     var windowEnd=moment(Session.get('picky')).add(7, 'days').valueOf();
//     // console.log("> Recived");
//     // results=Events.find().fetch();
//     //
//     // for (i=0; i <= 4; i++){
//     //       results[i]["group"] = i+2;
//     //       results[i]["id"]=i+2;
//     // };
//     //
//     // var data = new vis.DataSet();
//     //
//     // data.add(results);
//
//     var data = new vis.DataSet([
//       {
//         id: 1,
//         start: moment(new Date()) - 60 * 1000,
//         end: moment(new Date()),
//         content: 'Dynamic event 1',
//         group: "1"
//       },
//       {
//         id: 2,
//         start: moment(new Date()) + 10 * 1000,
//         end: moment(new Date()) + 60 * 1000,
//         content: 'Dynamic event 2',
//         group: "2"
//       },
//       {
//         id: 3,
//         start: moment(new Date()) - 320 * 1000,
//         end: moment(new Date()) + 180 * 1000,
//         content: 'Dynamic event 3',
//         group: "3"
//       },
//       {
//         id: 4,
//         start: moment(new Date()) + 60 * 1000,
//         end: moment(new Date()) + 180 * 1000,
//         content: 'Dynamic event 4',
//         group: "4"
//       },
//       {
//         id: 5,
//         start: moment(new Date()) - 10 * 1000,
//         end: moment(new Date()) + 10 * 1000,
//         content: 'Dynamic event 5',
//         group: "5"
//       },
//       {
//         id: 6,
//         start: moment(new Date()) - 320 * 1000,
//         end: moment(new Date()),
//         content: 'Dynamic event 6',
//         group: "6"
//       },
//     ]);
//
//  var groups = new vis.DataSet([
//     {id: 1, content: 'Sponsered Event'},
//     {id: 2, content: 'Event 1'},
//     {id: 3, content: 'Event 2'},
//     {id: 4, content: 'Event 3'},
//     {id: 5, content: 'Event 4'},
//     {id: 6, content: 'Event 5'}
//   ]);
//
//   var options = {
//     showCurrentTime: true
//   };
//
//   timeline.addCustomTime(moment(picky));
//
//   timeline.setWindow(windowStart, windowEnd, {animation: false});
//
//
//
//       // var start = moment(Session.get('picky') - 20 * 60 * 1000);
//       // var end   = moment(Session.get('picky') + 20 * 60 * 1000);
//       //
//       // //var start = new Date((new Date()).getTime() - 2 * 60 * 1000);
//       // //var end   = new Date((new Date()).getTime() + 3 * 60 * 1000);
//       // console.log("Start Window: ", moment(start).format("dddd, MMMM Do YYYY, h:mm:ss a"));
//       // console.log("End Window", moment(end).format("dddd, MMMM Do YYYY, h:mm:ss a"));
//       //timeline.setWindow(start, end, {animation: false});
//
//
//
//
//
// } else {
//       console.log("> Not ready");
//    }
//
// });
//
// });
