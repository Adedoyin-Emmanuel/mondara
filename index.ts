import { FimidaraEndpoints } from "fimidara";

const fimidara = new FimidaraEndpoints({
  authToken: process.env.FIMIDARA_AUTH_TOKEN as string,
});
