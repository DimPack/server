const http = require("http");
const fs = require("fs");
const PORT = 3000;
const users = [];
//req, res - обєкти
const server = http.createServer((req, res) => {
    const {method, url} = req;
    if (method === 'GET') {

        if (url === '/') {
            fs.readFile("./views/index.html", { encoding: "utf8" }, (err, data) => {
                if (err) {
                  console.log(err);
                  return;
                }
                res.end(data);
              });
              return;
        }
        if (url === '/about') {
            fs.readFile("./views/adout.html", { encoding: "utf8" }, (err, data) => {
                if (err) {
                  console.log(err);
                  return;
                }
                res.end(data);
              });
              return;
        }
        if (url === '/contact') {
            fs.readFile("./views/contact.html", { encoding: "utf8" }, (err, data) => {
                if (err) {
                  console.log(err);
                  return;
                }
                res.end(data);
              });
              return;
        }
    }
    if (method === 'POST') {
        if (url === '/users') {
            let jsonStr = '';
            req.on('data', (chunk)=>{
                jsonStr += chunk;
            })
            req.on('end', ()=>{
                const user = JSON.parse(jsonStr);
                delete user.password;
                user.id = Date.now();
                users.push(user);
                res.end(JSON.stringify(user));
                console.log(users);
            })
            return;
        }
    }
    fs.readFile("./views/404.html", { encoding: "utf8" }, (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      }); 
});
server.listen(PORT, () => {
  console.log("server start at port " + PORT);
});
//1025 -
