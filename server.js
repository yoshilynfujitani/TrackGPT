// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const { Configuration, OpenAIApi } = require("openai");
import { OpenAI } from "openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const openai = new OpenAI({
  apiKey: "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",
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.completions.create({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.choices[0].text);
});

const PORT = 8020;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
