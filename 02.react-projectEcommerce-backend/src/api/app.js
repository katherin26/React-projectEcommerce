const express = require("express");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
//const cors = require("cors"); //This is used for cross origin requests

/*NOTE: Adding Routes for the signin and register, we can do that by requiring routes. */
const authRoutes = require("./routes/auth.js");

const app = express();

//NOTE: Using Twilio Api. We are going to set up one more route, we are going to do this using webhooks.
//stream is going to trigger a specific endpoint on our server and then we're going to send a message, that
//end point is going to be app.post and inside we can set up our route which is going to be simply /.
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioClient = require("twilio")(accountSid, authToken);

app.use(awsServerlessExpressMiddleware.eventContext());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*NOTE: We are ready to create our first route and that's going to be app.get and is going to be a root route.*/
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//Twilio route
app.post("/", (req, res) => {
  const { message, user: sender, type, members } = req.body;

  if (type === "message.new") {
    members
      .filter((member) => member.user_id !== sender.id)
      .forEach(({ user }) => {
        if (!user.online) {
          twilioClient.messages
            .create({
              body: `You have a new message from ${message.user.fullName} - ${message.text}`,
              messagingServiceSid: messagingServiceSid,
              to: user.phoneNumber,
            })
            .then(() => console.log("Message sent!"))
            .catch((err) => console.log(err));
        }
      });

    return res.status(200).send("Message sent!");
  }
  return res.status(200).send("Not a new message request");
});

/*NOTE: ADD ROUTES */
app.use("/auth", authRoutes);

module.exports = app;
