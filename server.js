import http from 'http';
import express from 'express';
import { profileEnd } from 'console';

const app = express();

app.get('/api/v1/calcula_frete/', function(request, response) {
    console.log(request.query)
    const altura = parseInt(request.query.altura);
    const largura = parseInt(request.query.largura);
    const comprimento = parseInt(request.query.comprimento);
    const peso = parseInt(request.query.peso);
    const valor = parseInt(request.query.valor);
    const distancia = parseInt(request.query.distancia);



    const peso_cubico = altura * largura  * comprimento * 300;
    const peso_referencia = (peso_cubico > peso) ? peso_cubico : peso;

    const taxa_despacho = 54;
    const taxa_frete = valor * 0.3;

    response.json({
       valor_frete: (peso_referencia * 0.5) + taxa_despacho + taxa_frete 
    });
});

const server = http.createServer(app);

server.listen(8000, function() {
    console.log('Servidor iniciado na porta: 8000');
});
