import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';

import vis from 'vis';

// =======================================================================
Template.datePick.onCreated(function() {
    // 1. Initialization
    var instance = this;
    // initialized the reactive variables
    instance.loadedTime = new ReactiveVar(moment());
    instance.wantTime = new ReactiveVar(moment());
});
// =======================================================================
Template.datePick.onRendered(function() {
    // 1. Initialization
    var instance = this;

    var loadedTime = instance.loadedTime.get();

    // 2. AutoRun
    // rerun when the reactive variables changes
    instance.autorun(function() {

        var wantTime = instance.wantTime.get();
        //console.log("Want Time: " + moment(wantTime).format("MM-DD-YY, hh:mma"))

        var subscriptionEvent = instance.subscribe('top5', moment(wantTime).valueOf());

        if (subscriptionEvent.ready()) {
            var subscriptionVenue1 = instance.subscribe('venues', (Events.find().fetch()[0].eventVenueId));
            var subscriptionVenue2 = instance.subscribe('venues', (Events.find().fetch()[1].eventVenueId));
            var subscriptionVenue3 = instance.subscribe('venues', (Events.find().fetch()[2].eventVenueId));
            var subscriptionVenue4 = instance.subscribe('venues', (Events.find().fetch()[3].eventVenueId));
            var subscriptionVenue5 = instance.subscribe('venues', (Events.find().fetch()[4].eventVenueId));
        }

        // if subscription is ready
        if (instance.subscriptionsReady()) {
            //console.log("> Subscribed to: " + moment(wantTime).format("MM-DD-YY, hh:mma"))
            instance.loadedTime.set(wantTime);
            console.log("> Loaded: " + moment(instance.loadedTime.get()).format("MM-DD-YY, hh:mma"))

            //=======Timeline=======
            let top5Events = Events.find().fetch();

            let showEvents = [];

            for (i = 0; i <= 4; i++) {
                showEvents.push({
                    start: moment(top5Events[i].eventStartDate._i),
                    end: moment(top5Events[i].eventEndDate._i),
                    content: top5Events[i].eventName,
                    group: (i + 2),
                    id: (i + 2)
                });
            };

            let showVenues = Venues.find().fetch();

            let venueLinkOne = "<a href='/venues/" + top5Events[0].eventVenueId + "'>" + showVenues[0].venueName + "</a>",
                venueLinkTwo = "<a href='/venues/" + top5Events[1].eventVenueId + "'>" + showVenues[1].venueName + "</a>",
                venueLinkThree = "<a href='/venues/" + top5Events[2].eventVenueId + "'>" + showVenues[2].venueName + "</a>",
                venueLinkFour = "<a href='/venues/" + top5Events[3].eventVenueId + "'>" + showVenues[3].venueName + "</a>",
                venueLinkFive = "<a href='/venues/" + top5Events[4].eventVenueId + "'>" + showVenues[4].venueName + "</a>";

            //Past Background Colors
            showEvents.push({
                start: 0,
                end: moment(),
                content: 'Past',
                id: 'A',
                type: 'background'
            });

            // DATA
            var data = new vis.DataSet();
            //GROUP
            var groups = new vis.DataSet([{
                // id: 1,
                //
                // content: 'Sponsored Event'
            // }, {
                id: 2,

                content: venueLinkOne
            }, {
                id: 3,

                content: venueLinkTwo
            }, {
                id: 4,

                content: venueLinkThree
            }, {
                id: 5,

                content: venueLinkFour
            }, {
                id: 6,

                content: venueLinkFive
            }]);
            // Options are already declared

            var windowStart = moment(instance.loadedTime.get());
            var windowEnd = moment(instance.loadedTime.get()).add(5, 'hours').valueOf();

            timeline.setGroups(groups);
            timeline.setItems(showEvents);
            timeline.setWindow(windowStart, windowEnd, {
                 animation: false
            });

        } else {
            console.log("> Subscribing to: " + moment(wantTime).format("MM-DD-YY, hh:mma"))
        }

    });
    var container = document.getElementById('top5Timeline');
    var data = new vis.DataSet();
    //OPTIONS
    var options = {
        height: '300px',
        showCurrentTime: true,
        zoomable: false,
        //zoomMin: 36000000,
        orientation: {axis: 'top'},
        stack: false,
        //rollingMode: true,
        //start: new Date(),
        //end: moment(start).add(3, 'hours').valueOf(),
        format:{
          minorLabels: {
           millisecond:'SSS',
           second:     's',
           minute:     'HH:mm a',
           hour:       'hh:mm a',
           weekday:    'ddd D',
           day:        'D',
           month:      'MMM',
           year:       'YYYY'
         },
         majorLabels: {
           millisecond:'HH:mm:ss',
           second:     'D MMMM HH:mm',
           minute:     'ddd D MMMM',
           hour:       'ddd D MMMM',
           weekday:    'MMMM YYYY',
           day:        'MMMM YYYY',
           month:      'YYYY',
           year:       ''
         }
       }
    };

    var timeline = new vis.Timeline(container, data, options);

    //********************
    //Options from datetimepicker
    $('#datepicker').datetimepicker({
        defaultDate: loadedTime,
        minDate: moment().subtract(1, 'year'),
        //sideBySide: true
        format: 'MMMM DD, YYYY'
    });

    //Options from datetimepicker
    $('#timepicker').datetimepicker({
        defaultDate: loadedTime,
        //minDate: moment(current).subtract(1, 'year'),
        //sideBySide: true
        format: 'LT'
    });
    //********************
    // Update Date/Time
    $('#datepicker').on("dp.hide", function(e) {
        //console.log('New Date: ', moment(getDateTime()).format("MM-DD-YY, hh:mma"))
        instance.wantTime.set(getDateTime());
    });

    $('#timepicker').on("dp.hide", function(e) {
        //console.log('Triggered time change: ' + e.date)
        instance.wantTime.set(getDateTime());
    });
    //********************
    var getDateTime = function() {

        let newDate = $('#datepicker').data('DateTimePicker').date();
        let newTime = $('#timepicker').data('DateTimePicker').date();

        //console.log("Date: " + moment(newDate).format("MM-DD-YY, hh:mma"))
        //console.log("Time: " + moment(newTime).format("MM-DD-YY, hh:mma"))

        let year = moment(newDate).get('year');
        let month = moment(newDate).get('month');
        let date = moment(newDate).get('date');
        let hour = moment(newTime).get('hour');
        let min = moment(newTime).get('minute');

        var newDateTime = moment().set({
            'year': year,
            'month': month,
            'date': date,
            'hour': hour,
            'minute': min
        });

        console.log('New Date: ', moment(newDateTime).format("MM-DD-YY, hh:mma"))

        return newDateTime;
    };
});

// =======================================================================
Template.datePick.onDestroyed(function() {

});
// =======================================================================
Template.datePick.helpers({

});
// =======================================================================
Template.datePick.events({

});
// =======================================================================
