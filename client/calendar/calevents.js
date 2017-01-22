let isPast = function(data) {
    let today = moment().format();
    return moment(today).isAfter(data);
};

Template.calevents.onCreated(function() {
    let template = Template.instance();
    template.subscribe('YoEvents');
})

Template.calevents.onRendered(function() {

    $('#events-calendar').fullCalendar({

      defaultView: 'agendaDay',
      defaultDate: moment().now,
      nowIndicator: true,

      //
      // header: {
      //     left: 'prev',
      //     center: 'title',
      //     right: 'next'
      // },

      header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listWeek'
			},
			//navLinks: true, // can click day/week names to navigate views
			//editable: true,
			eventLimit: true, // allow "more" link when too many events

        //Gathering Events to Display on Calendar
        events(start, end, timezone, callback) {
            let data = Calevents.find().fetch().map(function(event) {
                event.editable = !isPast(event.start);
                return event;
            });

            if (data) {
                callback(data);
            };
        },
        //Changing the Way Events Are Shown on the Calendar
        eventRender(event, element) {
            element.find('.fc-content').html(
                `<h4>${event.title}</h4>
                 <p class="guest-count">${event.guests} Guests</p>
                 <p class="type-${event.type}">#${event.type}</p>
                `
            );
        },
        //When User Drag and Drop Events to Another Day
        eventDrop(event, delta, revert) {
            let date = event.start.format();
            if (!isPast(date)) {
                let update = {
                    _id: event._id,
                    start: date,
                    end: date
                };

                Meteor.call('editEvent', update, function(error) {
                    if (error) {
                        Bert.alert(error.reason, 'danger');
                    }
                });
            } else {
                revert();
                Bert.alert('Sorry, you can\'t move items to the past!', 'danger');
            }
        },

        //When user clicks on the Day
        dayClick(date) {
            Session.set('eventModal', {
                type: 'add',
                date: date.format()
            });
            $('#add-edit-event-modal').modal('show');
        },
        //When user clicks on the Event
        eventClick(event) {
            Session.set('eventModal', {
                type: 'edit',
                event: event._id
            });
            $('#add-edit-event-modal').modal('show');
        },
        //=======
        //Blank Functions that needs to be added in the future
        //=======

        //When user mouse-over event
        eventMouseover(event) {

        }


    });

    Tracker.autorun(function() {
        Calevents.find().fetch();
        $('#events-calendar').fullCalendar('refetchEvents');
    })

});
