# Les Polypodes boilerplate

***


## Installation

`cd integration`

`npm install`

## Grunt task

***

`grunt` est la task par default, elle génère le contenu du dossier `./dist` puis lance un watch couplé avec un browser_sync.

`grunt build` génère un dossier dist en version `prod`, c'est à dire minifié/optimisé.

`grunt cms` lance la task `grunt build` et copy ensuite les css du dist dans le dossier du cms utilisé. Pour spécifier le path en question, il faut modifier le fichier `polypodes.json`

## Git add/commit/push

***

Dans le dossier integration, entrer la commande ci-dessous dans le terminal :

`make m='changed div color to blue' b=master`

qui est équivalente à 

`cd .. && git add --all && git commit -m 'the commit message' && git push origin thebranche`

l'opérateur `&&` permet de chainer des commandes, si la commande cd .. n'aboutie pas alors les autres commandes ne seront pas exécutées. il existe aussi l'opérateur `||` qui exécute les autres commandes même si la première n'aboutie pas.

