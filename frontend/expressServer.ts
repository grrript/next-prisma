const express = require("express");

const app = express();

app.all("*", (res: any, req: any) => {
  res.send("<div>Hi Rocks!</div>");
});
