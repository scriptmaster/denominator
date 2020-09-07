import {
  opine,
  React,
  ReactDOMServer,
} from "./deps.ts";

import App from "./app.tsx";

const app = opine();
const browserBundlePath = "/browser.js";

const js =
  `
  import React from "https://dev.jspm.io/react@16.13.1";
  import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
  const App = ${App};
  ReactDOM.hydrate(React.createElement(App), document.body);
  `;

const html =
  `<html><head><script type="module" src="${browserBundlePath}"></script><style>* { font-family: Helvetica; }</style></head><body>${
    (ReactDOMServer as any).renderToString(<App />)
  }</body></html>`;

app.use(browserBundlePath, (req, res, next) => {
  res.type("application/javascript").send(js);
});

app.use("/", (req, res, next) => {
  res.type("text/html").send(html);
});

app.listen({ port: 7035 }); // 70/35 = 2

console.log("React SSR App listening on port 7035");
