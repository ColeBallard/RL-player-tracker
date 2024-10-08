# RL Player Tracker

## Description
Receive an SMS notification when a rocket league player goes online.

## Usage

1. Clone the respository.
```shell
git clone https://github.com/ColeBallard/rl-player-tracker
```

2. Install npm packages.
```shell
cd rl-player-tracker
npm install
```

3. Create a free Twilio account [here](https://www.twilio.com/try-twilio) and get a free trial Twilio Phone Number.

4. Create .env file.
```shell
touch .env
```

5. Add the following to the .env file.
```sh
TWILIO_ACCOUNT_SID='YOURACCOUNTSID'
TWILIO_AUTH_TOKEN='YOURAUTHTOKEN'
RECIPIENT_PHONE_NUMBER='+19999999999'
TWILIO_PHONE_NUMBER='+19999999999'
RLTRACKER_PROFILE_URL='https://rocketleague.tracker.network/rocket-league/profile/steam/76561198446567626/overview'
```

6. Run the crawler.
```sh
node crawler.js
```

You will get a text message whenever that rocket league player plays a competitive ranked game.

## Contribution
If you have an idea or want to report a bug, please create an issue.

## **[Contact](https://github.com/ColeBallard/coleballard.github.io/blob/main/README.md)**
