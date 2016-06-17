
process.env.MAIL_URL = "smtp://pigeonplan@gmail.com:g3VbS2Hx9H-aHx-2pZaT_A@smtp.mandrillapp.com:587/";

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