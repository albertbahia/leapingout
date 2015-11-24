// Accounts.ui.config({
//     passwordSignupFields: 'USERNAME_AND_EMAIL',
// });
Accounts.ui.config({
  requestPermissions: {},
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  extraSignupFields: [{
    fieldName: 'userFirstName',
    fieldLabel: 'First Name',
    inputType: 'text',
    visible: true,
    validate: function(value, errorFunction) {
      if (!value) {
        errorFunction('Please write your first name');
      } else {
        return true;
      }
    }
  }, {
    fieldName: 'userLastName',
    fieldLabel: 'Last Name',
    inputType: 'text',
    visible: true
  }, {
    fieldName: 'userGender',
    fieldLabel: 'Gender',
    inputType: 'radio',
    radioLayout: 'vertical',
    data: [{
      id: 1,
      label: 'Male',
      value: 'm'
    }, {
      id: 2,
      label: 'Female',
      value: 'f',
      checked: 'checked'
    }],
    visible: true
  }, {
    fieldName: 'userBirthday',
    fieldLabel: 'Birthday',
    inputType: 'text',
    visible: true
  }, {
    fieldName: 'userTerms',
    fieldLabel: 'I accept the terms and conditions',
    inputType: 'checkbox',
    visible: true,
    saveToProfile: false,
    validate: function(value, errorFunction) {
      if (value) {
        return true;
      } else {
        errorFunction('You must accept the terms and conditions.');
      }
    }
  }]
});
