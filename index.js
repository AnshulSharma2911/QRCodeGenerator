import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Please Enter Your URL", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFileSync("URL.txt", url);
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
      console.log("qr successfully generated");
    }
  });
