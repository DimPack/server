const http = require("http");
const fs = require("fs");
const PORT = 3000;
const server = http.createServer((req, res) => {
    const {method, url} =req;
    if (method === 'GET') {
        if (url === '/') {
            fs.readFile("./views/index.html", { encoding: "utf8" }, (err, data) => {
                if (err) {
                  console.log(err);
                  return;
                }
                res.end(data);
              });
        }
        if (url === '/about') {
            fs.readFile("./views/adout.html", { encoding: "utf8" }, (err, data) => {
                if (err) {
                  console.log(err);
                  return;
                }
                res.end(data);
              });
        }
        if (url === '/contact') {
            fs.readFile("./views/contact.html", { encoding: "utf8" }, (err, data) => {
                if (err) {
                  console.log(err);
                  return;
                }
                res.end(data);
              });
        }
    }
    


  //read index.html
//   res.end("hello from server!");
});
server.listen(PORT, () => {
  console.log("server start at port " + PORT);
});
//1025 -
