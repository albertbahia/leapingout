// ---Require depedencies----
import s3Creds from '../s3Creds';
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

S3.config = {
  key: process.env.S3_KEY || s3Creds.key,
  secret: process.env.S3_SECRET || s3Creds.secret,
  bucket: process.env.S3_BUCKET || s3Creds.bucket
}