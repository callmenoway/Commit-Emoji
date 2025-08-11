const fs = require("fs");
const emojiMap = require("./emojiMap");

const filePath = process.argv[2]; // commit message file
let msg = fs.readFileSync(filePath, "utf8");

for (const [keyword, emoji] of Object.entries(emojiMap)) {
  if (msg.toLowerCase().startsWith(keyword)) {
    msg = `${emoji} ${msg}`;
    break;
  }
}

fs.writeFileSync(filePath, msg);
