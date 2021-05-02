const http = require("http");

const express = require("express");

const twilio = require("twilio");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))



app.post("/", function (req, res) {

    console.log('Info-Mens', req.body);

    if (req.body.Body.toLowerCase() == 'olá' || req.body.Body.toLowerCase() == 'ola') {

        res.contentType('text/xml');
        res.send(`<Response>
        <Message>
        Olá
        </Message>
        </Response>`);

    }

    /*
    res.contentType('text/xml');
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
    res.send(`<Response>
    <Message>
    Seja Bem-Vinda a comunidade Brinde Com Elas | Mulheres que Bebem | #DeixaElaBerber
    </Message>
    </Response>`);
    */
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
