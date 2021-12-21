const { exec } = require('child_process');
require('dotenv').config();

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const airdrop = async (amount) => {
  for (let i = 0; i < amount; i++) {
    console.log('Calling for airdrop');
    exec(
      //ACC_ADDRESS = public address
      //ENV_URL = Solana cluster e.g. https://api.devnet.solana.com

      `solana airdrop 1 ${process.env.ACC_ADDRESS} --url ${process.env.ENV_URL}`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
    await delay(15000);
  }
};

airdrop(10);
