
// process.env.MAIL_URL = "smtp://pigeonplan@gmail.com:g3VbS2Hx9H-aHx-2pZaT_A@smtp.mandrillapp.com:587/";

//process.env.MAIL_URL = "smtp://mmc228@gmail.com:nCQFyqPblIKKucd1by72JQ@smtp.mandrillapp.com:587/";

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
  // user.profile.image =
  return user;
});

S3.config = {
  key: "AKIAJB2YQKVYF2HSMZSQ",
  secret: "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",
  bucket: "leapingout"
}