# Les Polypodes boilerplate

***

## Installation

`cd integration`

`npm install`


## Git add/commit/push

***

Dans le dossier integration, entrer la commande ci-dessous dans le terminal :

`make m='changed div color to blue' b=master`

qui est équivalente à 

`cd .. && git add --all && git commit -m 'the commit message' && git push origin thebranche`

l'opérateur `&&` permet de chainer des commandes, si la commande cd .. n'aboutie pas alors les autres commandes ne seront pas exécuté. il existe aussi l'opérateur `||` qui exécute les autres commande même si la première n'aboutie pas.

