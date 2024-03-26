// add the game address here and update the contract name if necessary
const gameAddr = '0x0165878A594ca255338adfa4d48449f69242Eb8F';
const contractName = 'Game5';

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  const amount = 10000;
  await game.giveMeAllowance(amount);
  await game.mint(amount);

  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
