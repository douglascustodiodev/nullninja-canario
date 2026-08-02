// App cobaia do deploy canario da NullNinja.
//
// A plataforma constroi e publica este repositorio de 6 em 6 horas para
// responder a unica pergunta que os outros monitores nao respondem: "se um
// cliente criar um app agora, sobe?". Depois de checar a URL, ela apaga o app.
//
// Precisa ser o menor app possivel: cada rodada e um build de verdade,
// concorrendo por memoria com apps de cliente na mesma maquina.
const http = require("node:http");

const PORT = Number(process.env.PORT) || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        ok: true,
        servico: "nullninja-canario",
        caminho: req.url,
        em: new Date().toISOString(),
      })
    );
  })
  .listen(PORT, () => {
    console.log(`canario no ar na porta ${PORT}`);
  });
