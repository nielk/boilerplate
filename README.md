# Les Polypodes boilerplate

## Installation

Dans une console :

* `cd integration` pour accéder au dossier racine du projet d’intégration;
* `npm install` permet d’installer les dépendances utilisées par Grunt;
* `grunt` pour effectuer les tâches.

## Gulp

Gulp, comme grunt est un _task runner_ utilisant node, à la différence de grunt gulp utilise les streams et a un syntaxe plus simple, plus d’infos : http://gulpjs.com/

### Comment le lancer ?

`gulp` est la task par default, elle génère le contenu du dossier `./dist` puis lance un watch couplé avec un browser_sync. (Votre navigateur par défaut se lancera avec l’adresse chargée directement)

`gulp cms` copie les assets dans le dossiers du thème du CMS (il faut spécifier le chemin d'accès au thème du CMS dans le fichier gulpjs : buildCMS)

## Grunt

Grunt est un _task runner_ utilisant node, plus d’infos : http://gruntjs.com/

### Comment le lancer ?

`grunt` est la task par default, elle génère le contenu du dossier `./dist` puis lance un watch couplé avec un browser_sync. (Votre navigateur par défaut se lancera avec l’adresse chargée directement)

`grunt build` génère un dossier dist en version `prod`, c'est à dire minifié et optimisé.

`grunt cms` lance la task `grunt build` et copy ensuite les css du dist dans le dossier du cms utilisé. Pour spécifier le path en question, il faut modifier le fichier `polypodes.json`
