const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateCompletion(prompt) {
  if (prompt.length < 10) {
    return "message must be at least 10 characters 😀";
  }
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.9,
    max_tokens: 100,
  });
  console.log(completion.data);
  return completion.data.choices[0].text;
  //   res.status(200).json({ result: completion.data.choices[0].text });
}

module.exports = { generateCompletion };
