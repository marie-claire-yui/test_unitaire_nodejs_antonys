# Exemple de création de tests unitaire
**Utilisation de mocha, chai et d'une base de données sqlite**

#### Mocha et Chai

Mocha et Chai sont des bibliothèques JavaScript populaires utilisées pour écrire et exécuter des tests unitaires et des tests d'intégration dans des environnements Node.js. Ces bibliothèques vous permettent de structurer vos tests de manière organisée, d'écrire des assertions pour vérifier le comportement attendu de votre code, et d'exécuter ces tests pour garantir la qualité de votre application.

Voici une brève description de chaque bibliothèque :

1. **Mocha** :
   - Mocha est un framework de test JavaScript flexible et extensible.
   - Il fournit une structure pour l'écriture de tests, permettant d'organiser les tests en suites (groupes) et les assertions.
   - Mocha peut être utilisé avec différentes bibliothèques d'assertions, et Chai est l'une d'entre elles.

2. **Chai** :
   - Chai est une bibliothèque d'assertions pour les tests en JavaScript.
   - Il fournit des styles d'assertions flexibles et lisibles pour vérifier les comportements attendus de votre code.
   - Chai prend en charge plusieurs styles d'assertions, y compris BDD (should/expect) et TDD (assert).

En combinant Mocha et Chai, vous pouvez créer des tests unitaires et d'intégration structurés, lisibles et fiables pour votre code JavaScript, qu'il s'agisse de code côté serveur (Node.js) ou côté client (navigateur).

**Arborescence des fichiers pour la bonne pratique**

Organisation des tests dans un projet Node.js.

```
project-folder/
├── src/
│   ├── your-code-files.js
├── test/
│   ├── test-your-code-files.js
├── node_modules/
├── package.json
└── mocha.opts
```

Voici une explication de chaque élément de cette structure :

- **`src/`** : Ce dossier contient vos fichiers de code source que vous souhaitez tester. Vous devrez écrire les fonctions, les classes ou les modules à tester dans ces fichiers.

- **`test/`** : C'est ici que vous stockerez vos fichiers de tests. Chaque fichier de test correspond généralement à un fichier de code source et contiendra les tests pour ce fichier. Vous devrez également configurer Mocha dans ce dossier.

- **`node_modules/`** : C'est le dossier où les dépendances de votre projet (comme Mocha, Chai, etc.) sont installées.

- **`package.json`** : Le fichier `package.json` contient les métadonnées de votre projet, ainsi que les informations sur les dépendances et les scripts. Vous pouvez y configurer des scripts pour exécuter vos tests plus facilement.

- **`mocha.opts`** : Ce fichier (facultatif) peut être utilisé pour configurer des options de ligne de commande pour Mocha. Par exemple, vous pouvez configurer des options pour les rapports, les interfaces de test, etc.

**Exemple de contenu du `package.json` :**

```json
{
  "name": "test-unitaire",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha test/*.js"
  },

  "keywords": [],
  "author": "votre nom",
  "license": "MIT",
  "devDependencies": {
    "chai": "^4.3.7",
    "mocha": "^10.2.0",
    "sqlite3": "^5.1.6"
  }
}


```

Dans cet exemple, le script `"test"` exécute tous les fichiers `.js` dans le dossier `test/` à l'aide de Mocha.

**Exemple de contenu de `test/test-your-code-files.js` :**

Exemple d'utilisation de Mocha et Chai :
```javascript
const { expect } = require('chai');
// Supposons que math.js contienne des fonctions à tester
// la fonction add et la fonction multiply
const { add, multiply } = require('../src/math'); 

describe('Math Functions', () => {
    it('should correctly add two numbers', () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it('should correctly multiply two numbers', () => {
        const result = multiply(4, 5);
        expect(result).to.equal(20);
    });
});
```

Cet exemple illustre comment Mocha et Chai peuvent être utilisés pour écrire et exécuter des tests. Les assertions Chai, comme `expect`, sont utilisées pour vérifier le comportement attendu de vos fonctions.

Cette structure vous permet de séparer proprement votre code source de vos fichiers de tests, ce qui facilite la maintenance et l'organisation de votre projet. 

**Création du projet et installation des dépendances**

Par simplicité on utilise une base de données sqlite. 

```javascript
npm init -y
npm install sqlite3 mocha chai --save-dev
```
#### Illustration pour les codes du dépot
**Éxecuter le test pour une fonction**
vérifie 2+3=5 de la fonction math qui additionne deux chiffres.
```javascript
npx mocha test/test-maths.js
```

**Éxecuter le test pour vérifier la base de données**
vérifie si il y a bien deux entrées dans la base de données et vérifie que les adresses email contiennent un "@" et "."
```javascript
npx mocha test/test-database.js
```

**Éxecuter le test qui test une classe**
vérifie les deux méthodes de la classe Calculator, à savoir une addition et une soustraction. 
```javascript
npx mocha test/test-calculator.js
```

**Effectuer tous les tests**
Vous pouvez créer des fichiers de test pour chaque module que vous souhaitez tester et exécuter les tests à l'aide de la commande `npm test`.