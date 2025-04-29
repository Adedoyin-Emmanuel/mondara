import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { FimidaraEndpoints } from "fimidara";

const fimidara = new FimidaraEndpoints({
  authToken: process.env.FIMIDARA_AUTH_TOKEN as string,
});


/**
 * 
 * Let's me create a file. I'm not sure you can create a file without creating a folder first.
 * But then, let's try.
 */

const file = await fimidara.files.uploadFile({
    fileId: uuidv4(),
    
})
