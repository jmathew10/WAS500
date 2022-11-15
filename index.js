const port = 3000;
const http = require("http");
const httpStatusCodes = require("http-status-codes");
const router = require("./router");
const fs = require("fs");
const path = require("path");

const plainTextContentType = {
  "Content-Type": "text/plain",
};
const htmlContentType = {
  "Content-Type": "text/html",
};
const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

// GET /about - return the about.html file
router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});

router.get("/books.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/books.html", res);
});

router.get("/book1-details.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book1-details.html", res);
});

router.get("/book2-details.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book2-details.html", res);
});

router.get("/book3-details.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book3-details.html", res);
});

router.get("/contact.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/contact.html", res);
});

router.get("/honesty.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/honesty.html", res);
});

router.get("/survey.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/survey.html", res);
});


router.get("/public/images/book1.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, "image/jpeg");
  customReadFile(req.url, res);
});

router.get("/public/images/book2.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, "image/jpeg");
  customReadFile(req.url, res);
});

router.get("/public/images/book3.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, "image/jpeg");
  customReadFile(req.url, res);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});

http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);