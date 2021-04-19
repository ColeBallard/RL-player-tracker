const Crawler = require('crawler');
const twilio = require('twilio');
require('dotenv').config();

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const timeAgoBool = time => {
  if (time.indexOf('seconds') != -1)
    return true;
  else if (time.indexOf('minutes') === 2) {
    if (time.slice(0, 1) > 0 && time.slice(0, 1) <= 5)
      return true;
  }

  return false;
};

const notify = () => {
  console.log('Player online.')
  client.messages.create({
    body: 'Player online.',
    to: process.env.RECIPIENT_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER
  })
  .then(message => console.log(message.sid));
};

const c = new Crawler({
    maxConnections: 10,
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;

            const timeAgo = $('.recent-matches .main .sessions table:first-child .timeago').text();

            console.log(timeAgo)
            if (timeAgoBool(timeAgo))
              notify();
        }
        done();
    }
});

const q = () => { 
  c.queue(process.env.RLTRACKER_PROFILE_URL);
};

q();

setInterval(q, 60*1000);