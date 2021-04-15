const Crawler = require('crawler');

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
  // send sms or email then stop crawling for 30 minutes
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

// Replace with steam profile number you want to use
// go to https://steamidfinder.com/ and find the number associated with the steam profile
const steamProfileNum = '76561199067131143';

const q = () => { 
  c.queue(`https://rocketleague.tracker.network/rocket-league/profile/steam/${steamProfileNum}/overview`);
};

q();

setInterval(q, 60*1000);

module.exports = c;