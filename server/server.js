// ---Require depedencies----
//import s3Creds from '../s3Creds';
// --------------------------

Accounts.emailTemplates.verifyEmail = {
   subject: function(user) {
      return "How to verify email address on " + Accounts.emailTemplates.siteName;
   },
   text: function(user, url) {
       var greeting = (user.profile && user.profile.name) ?
           ("Hello " + user.profile.name + ",") : "Hello,";
       return greeting + "\n"
              + "\n"
              + "To verify your account email, simply click the link below.\n"
              + "\n"
              + url + "\n"
              + "\n"
              + "Thanks.\n";
   }
}

Accounts.onCreateUser(function(options, user) {
  console.log(options);
  console.log(user);
  user.profile = options.profile;
  user.profile.image_url = "http://www.essetinoconnexions.com/wp-content/uploads/2015/08/default.jpg";
  user.profile.userZipCode = "";
  user.profile.userCity = "";
  user.profile.userState = "";
  user.profile.userProfileType  = "";
  user.profile.userStreetAddress = "";
  // user.profile.image =
  return user;
});

if (process.env.NODE_ENV === 'development') {
	S3.config = {
		key: Meteor.settings.S3_KEY,
		secret: Meteor.settings.S3_SECRET,
		bucket: Meteor.settings.S3_BUCKET
	}
} else if (process.env.NODE_ENV === 'production') {
	S3.config = {
		key: process.env.S3_KEY,
		secret: process.env.S3_SECRET,
		bucket: process.env.S3_BUCKET
	}
}

