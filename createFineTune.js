import { openai } from "./api.js";

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: "file-63nmcqf2njhUc6tDEVM1sb7b",
      model: "davinci",
    });
    console.log("response: ", response);
  } catch (err) {
    console.log("error: ", err.response.data.error);
  }
}

createFineTune();
