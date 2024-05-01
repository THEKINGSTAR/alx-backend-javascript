function welcoming() {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (input) => {
    const trimmedInput = input.trim();
    if (process.stdin.isTTY) {
      console.log(`Your name is: ${trimmedInput}`);
      process.stdin.pause();
    } else {
      console.log('This important software is now closing');
    }
  });
}

module.exports = welcoming;

welcoming();
