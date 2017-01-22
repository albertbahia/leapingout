Template.addEditEventModal.helpers({
    modalType(type) {
        let eventModal = Session.get('eventModal');

        if (eventModal) {
            return eventModal.type === type;
        }
    },

    modalLabel() {
        let eventModal = Session.get('eventModal');

        if (eventModal) {
            return {
                button: eventModal.type === 'edit' ? 'Edit' : 'Add',
                label: eventModal.type === 'edit' ? 'Edit' : 'Add an'
            };
        }
    },

    selected(v1, v2) {
        return v1 === v2;
    },

    event() {
        let eventModal = Session.get('eventModal');

        if (eventModal) {
            return eventModal.type === 'edit' ?
                //Calevents.findOne(eventModal.event)
                {
                    start: moment(Calevents.findOne(eventModal.event).start).format("YYYY-MM-DD"),
                    end: moment(Calevents.findOne(eventModal.event).end).format("YYYY-MM-DD"),
                    title: Calevents.findOne(eventModal.event).title,
                    type: Calevents.findOne(eventModal.event).type,
                    guests: Calevents.findOne(eventModal.event).guests

                } : {
                    start: moment(eventModal.date).format("YYYY-MM-DD"),
                    end: moment(eventModal.date).format("YYYY-MM-DD")
                };
        }
    }

});

Template.addEditEventModal.events({
    'submit form' (event, template) {
        event.preventDefault();

        let eventModal = Session.get('eventModal'),
            submitType = eventModal.type === 'edit' ? 'editEvent' : 'addEvent',
            eventItem = {
                title: template.find('[name="title"]').value,
                start: template.find('[name="start"]').value,
                end: template.find('[name="end"]').value,
                type: template.find('[name="type"] option:selected').value,
                guests: parseInt(template.find('[name="guests"]').value, 10)
            };

        if (submitType === 'editEvent') {
            eventItem._id = eventModal.event;
        };

        Meteor.call(submitType, eventItem, function(error) {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert(`Event ${ eventModal.type}ed!`, 'success');
                closeModal();
            }
        });

        let closeModal = function() {
            $('#add-edit-event-modal').modal('hide');
            //$('.modal-backdrop').fadeout();
        };
    },

    'click .delete-event' (event, template) {
        let eventModal = Session.get('eventModal');
        if (confirm('Are you sure? This is permanent.')) {
            Meteor.call('removeEvent', eventModal.event, function(error) {
                if (error) {
                    Bert.alert(error.reason, 'danger');
                } else {
                    Bert.alert('Event deleted!', 'sucess');
                    closeModal();
                }
            });
        };
        let closeModal = function() {
            $('#add-edit-event-modal').modal('hide');
            //$('.modal-backdrop').fadeout();
        };
    },




});
