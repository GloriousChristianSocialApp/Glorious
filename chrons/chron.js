const cron = require('cron');
const https = require('https');

const backend_url = '';

const job = new cron.CronJob('*/14 * * * *', function () {
    console.log('restarting server');

    fetch("https://glorious-server.onrender.com");
})