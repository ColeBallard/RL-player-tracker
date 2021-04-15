const Crawler = require('crawler');

const c = new Crawler({
    maxConnections: 10,
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;

            console.log($('.recent-matches .main .sessions table:first-child .timeago').text());
        }
        done();
    }
});

// Replace with steam profile number you want to use
// go to https://steamidfinder.com/ and find the number associated with the steam profile
const steamProfileNum = '';

c.queue(`https://rocketleague.tracker.network/rocket-league/profile/steam/${steamProfileNum}/overview`);