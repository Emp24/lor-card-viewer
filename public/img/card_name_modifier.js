const Path = require("path");
const fs = require("fs");
// const { promises: FS, fstat } = require("fs");
const dir = "./webpCards/";
// const oldPath = Path.join(__dirname, "oldFile.txt");
// const newPath = Path.join(__dirname, "newFile.txt");
function removePng() {
  fs.readdir(dir, (err, files) => {
    files.map((file) => {
      let name = file;
      name = name.replace("s", "");
      console.log(name);
      fs.renameSync(dir + file, dir + name);
    });
  });
}

function removeFullImg() {
  fs.readdir(dir, (err, files) => {
    files.map((file) => {
      let name = file;
      if (name.includes("full")) {
        fs.rmSync(dir + name);
      }
    });
  });
}
removeFullImg();
