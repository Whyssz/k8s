import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/k8s-ingress", (_, res) => {
  const msg = `<h1>Hello k8s-ingress-latest ${os.hostname()}</h1>`;
  console.log(msg);
  res.send(msg);
});

app.get("/k8s-ingress-1", async (_, res) => {
  const msg = `<h1>Hello k8s-ingress-1 ${os.hostname()}</h1>`;
  console.log(msg);
  res.send(msg);
});

app.get("/k8s-ingress-2", async (_, res) => {
  const msg = `<h1>Hello k8s-ingress-2 ${os.hostname()}</h1>`;
  console.log(msg);
  res.send(msg);
});

app.get("/k8s-ingress-3", async (_, res) => {
  const msg = `<h1>Hello k8s-ingress-3 ${os.hostname()}</h1>`;
  console.log(msg);
  res.send(msg);
});

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`);
});
