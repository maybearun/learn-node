const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/file1.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  console.log(first);
  readFile("./content/subfolder/file2.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    console.log(second);
    writeFile(
      "./content/subfolder/file3.txt",
      ` this is the result of async file write is`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return null;
        }
        console.log(result);
      }
    );
  });
});
