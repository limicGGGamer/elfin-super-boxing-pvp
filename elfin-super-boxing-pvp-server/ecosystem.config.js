const os = require('os');

/**
 * COLYSEUS CLOUD WARNING:
 * ----------------------
 * PLEASE DO NOT UPDATE THIS FILE MANUALLY AS IT MAY CAUSE DEPLOYMENT ISSUES
 */

module.exports = {
  apps: [{
    name: "pepe-mm-server",
    script: 'build/index.js',
    time: true,
    watch: false,
    instances: 1,
    exec_mode: 'fork',
    wait_ready: true,
    env_production: {
      PORT: 8080,
      NODE_ENV: "production",
      ENCRYPT_KEY: "cZg4mPgfsX$7F6u$",
      ACCESS_KEY_ID: "AKIAZM5SKNRV54BV4Z6D",
      ACCESS_KEY_SECRET: "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",
      TOPIC_ARN: "arn:aws:sns:ap-southeast-1:646229683307:Brawlers"
    }
  }],
};

