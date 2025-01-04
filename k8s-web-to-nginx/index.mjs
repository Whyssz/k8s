import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  const helloMessage = `<h1>Hello from the ${os.hostname()}</h1>`;
  console.log(helloMessage);
  res.send(helloMessage);
});

app.get("/nginx", async (_, res) => {
  /** совпадает с названием сервиса
   * @url "nginx" ссылается на название сервиса
   * @port 80 (необходимо проставлять, если эндпоинт указывает не на название сервиса)
  */
  const url = "http://nginx";
  const response = await fetch(url);
  const body = await response.text();
  res.send(body);
});

app.get("/jsonplaeholder", async (_, res) => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(url);
  const body = await response.text();
  res.setHeader("Content-Type", "application/json");
  res.send(body);
});

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`);
});
