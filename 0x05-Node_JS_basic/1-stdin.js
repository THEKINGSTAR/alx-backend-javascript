function welcoming() {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (input) => {
    const trimmedInput = input.trim();
    console.log(`Your name is: ${trimmedInput}`);
    process.stdin.pause();
    console.log('This important software is now closing');
  });
}

module.exports = welcoming;

welcoming();
