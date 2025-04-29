import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { FimidaraEndpoints } from "fimidara";

const fimidara = new FimidaraEndpoints({
  authToken: process.env.FIMIDARA_AUTH_TOKEN as string,
});

/**
 *
 * Let's me create a file. I'm not sure you can create a file without creating a folder first.
 * But then, let's try. Lol It isn't possible. Let's create a folder first then.
 */

// const folder = await fimidara.folders.addFolder({
//   description: "This is a test folder",
//   folderpath: "temi",
// });

//console.log(JSON.stringify(folder, null, 2));

// const workspaceRootname = "temi";

// const file = await fimidara.files.uploadFile({
//   data: fs.readFileSync("./assets/emma.jpg"),
//   size: fs.statSync("./assets/emma.jpg").size,
//   filepath: `${workspaceRootname}/Temi`,
//   description: "A picture of Emma",
// });

// console.log(JSON.stringify(file, null, 2));

const files = await fimidara.files.getFileDetails({
  fileId: "file000_pFD1-usV5KmEhn9QDlj1I",
});

console.log(JSON.stringify(files, null, 2));
