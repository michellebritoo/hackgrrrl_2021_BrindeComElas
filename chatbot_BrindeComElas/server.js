const http = require("http");

const express = require("express");

const twilio = require("twilio");

const random = require("random");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/", function (req, res) {

    // console.log('Info-Mens', req.body);

    textoMensagem = req.body.Body

    if (textoMensagem.toLowerCase().includes('olá') || textoMensagem.toLowerCase().includes('ola') || textoMensagem.toLowerCase().includes('oi')) {

        res.contentType('text/xml');
        res.send(`<Response>
        <Message>

        Olá ${req.body.ProfileName}, seja bem vinda a Comunidade #DeixaElaBeber!

        Este é um ambiente seguro e respeitoso, que une fabricantes e consumidoras com uma paixão em comum: uma brejinha gelada! (além de outras bebidas).

        Então aproveite esse espaço para tirar dúvidas e compartilhar experîencias.

        A qualquer momento, eu Chatbot, posso te ajudar no que for preciso ou te direcionar a uma fabricante!

        Eai, vamos começar?
        </Message>
        </Response>`);

    } 

    if (textoMensagem.toLowerCase().includes('tchau')) {

        res.contentType('text/xml');
        res.send(`<Response>
        <Message>

        Que pena que está partindo! Espero ter ajudado e proporcionado um ótima experiência.

        Não hesite em me chamar novamente quando precisar! ;) 

        </Message>
        </Response>`);

    }


    if (textoMensagem.toLowerCase().includes('obrigada')) {

        res.contentType('text/xml');
        res.send(`<Response>
        <Message>

        Fico feliz em ajudar :D

        </Message>
        </Response>`);

    }


    if (textoMensagem.toLowerCase().includes('dicas')) {

        res.contentType('text/xml');
        res.send(`<Response>
        <Message>

        Necessita de dicas? Temos uma página web para te ajudar: https://brindecomelas.netlify.app/html/blog.html

        </Message>
        </Response>`);

    }

    const lojas = ["Breja Mineira", "Cachaça da Terra", "Vinhos Crizeiro do Sul", "Cerveja do Oriente", "Cachaça Tônica"];

    const porcentagemDesconto = ["5%", "7%", "10%", "12%", "15%", "21%"];

    if (textoMensagem.toLowerCase().includes('promoção') || textoMensagem.toLowerCase().includes('desconto')) {

        const randomLojas = Math.floor(Math.random() * lojas.length);
        const randomDesconto = Math.floor(Math.random() * porcentagemDesconto.length);

        //console.log(randomLojas, lojas[randomLojas]);

        res.contentType('text/xml');
        res.send(`<Response>
        <Message>

        Está atrás de um descontinho? Olha que coincidência: a ${lojas[randomLojas]} está com ${porcentagemDesconto[randomDesconto]} de desconto em todas as bebidas. Aproveite!!!!

        Confira em: https://brindecomelas.netlify.app/

        </Message>
        </Response>`);

    }

    const bebidas = ["Cerveja Artesanal", "Vinho Artesanal", "Cachaça Artesanal"];

    if (textoMensagem.toLowerCase().includes('recomendação') || textoMensagem.toLowerCase().includes('sugestão')) {

        const randomLBebidas = Math.floor(Math.random() * bebidas.length);


        res.contentType('text/xml');
        res.send(`<Response>
        <Message>

        Hoje está um belo dia para provar/experimentar ${bebidas[randomLBebidas]}...

        </Message>
        </Response>`);

    }

    const fabricantes = ["Cândida Rosa (Breja Mineira) - 31 40028922", "Fernanda Nogueira (Cachaça da Terra) - 21 40028922",
        "Gabrielly Helena (Vinhos Crizeiro do Sul)- 73 40028922", "Michelle Brito (Cerveja do Oriente) - 92 40028922", "Virna Oliveira (Cachaça Tônica) 11 40028922"];

    if (textoMensagem.toLowerCase().includes('fabricantes') || textoMensagem.toLowerCase().includes('vendedoras') ||
    textoMensagem.toLowerCase().includes('fabricante') || textoMensagem.toLowerCase().includes('vendedora')) {

        const randomFabricantes = Math.floor(Math.random() * fabricantes.length);
        const randomFabricantes2 = Math.floor(Math.random() * fabricantes.length - randomFabricantes);

        res.contentType('text/xml');
        res.send(`<Response>
        <Message>

        Neste momento temos as seguintes fabricantes online:

        ${fabricantes[randomFabricantes]}
        ${fabricantes[randomFabricantes2]}

        Chame elas para conversar, afinal, elas não mordem rsrs.

        </Message>
        </Response>`);

    } else {
        res.contentType('text/xml');
        res.send(`<Response>
        <Message>

        Desculpa, não compreendi. Pode por favor repetir?

        </Message>
        </Response>`);
    }

});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
