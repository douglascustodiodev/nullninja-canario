# nullninja-canario

App cobaia do **deploy canário** da NullNinja.

De 6 em 6 horas a plataforma constrói e publica este repositório, confere que a
URL responde, e apaga o app. É a única checagem que responde a pergunta que os
outros monitores não respondem:

> se um cliente criar um app agora, sobe?

Todos os outros monitores olham apps que **já existem** — uptime, disco,
certificado, fila. Quando o `nixpacks` sumiu da máquina, tudo que já estava no ar
continuou no ar, os painéis ficaram verdes, e o defeito só apareceu quando um
cliente tentou publicar.

Este repositório é de propósito o menor app possível: cada rodada é um build de
verdade, concorrendo por memória com apps de cliente na mesma máquina.

**Não use isto como exemplo de projeto.** Ele existe só para ser construído e
jogado fora, quatro vezes por dia.
