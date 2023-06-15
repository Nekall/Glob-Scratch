![image](https://raw.githubusercontent.com/Nekall/GlobeScratch/main/README/gs-intro.png)
[![image](https://raw.githubusercontent.com/Nekall/GlobeScratch/main/README/gs-btn.png)](https://github.com/Nekall/GlobeScratch#configuration-du-projet-)
![image](https://raw.githubusercontent.com/Nekall/GlobeScratch/main/README/gs-views.png)
___      
      
## Aperçu du parcours utilisateur :      
<img src="https://github.com/Nekall/GlobeScratch/blob/main/README/preview.gif?raw=true"/>
      
# GlobeScratch

### Découvrez GlobeScratch, une application mobile qui donne vie à votre passion pour les voyages ! Inspirée des célèbres Adventure Maps en papier, GlobeScratch vous permet de gratter virtuellement une carte du monde et de marquer les pays que vous avez explorés. Partagez vos aventures, revivez vos souvenirs et conquérez la carte du monde avec GlobeScratch.

## Versions      
- n°1 - Carte de la France      
- n°2 - Carte du monde  

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter les scripts suivants :

```
    npm start : Lance le packager Metro pour démarrer l'application.
    npm run android : Lance l'application sur un émulateur ou un appareil Android connecté.
    npm test : Exécute les tests unitaires à l'aide de Jest.
    npm run lint : Exécute linter ESLint pour vérifier les erreurs de code.
```

## Organisations des dossiers : 
```
- src
  - assets : Ce dossier contient les ressources statiques de l'application, telles que les images, les polices de caractères, les fichiers de style, etc.
  - components : Ce dossier contient les composants réutilisables.
  - navigation : Ce dossier contient les fichiers de configuration et de gestion de la navigation.
  - screens : Ce dossier contient les écrans de votre application.
  - services : Ce dossier contient les services ou les utilitaires utilisés, tels que les services d'API, les fonctions d'authentification, etc.
  - state : Ce dossier contient les fichiers liés à la gestion de l'état global de l'application, en utilisant des bibliothèques telles que Redux ou MobX.
  - styles : Ce dossier contient les fichiers de style globaux.
  - utils : Ce dossier contient les utilitaires ou les fonctions de support utilisés.
- App.js : C'est le point d'entrée principal de l'application.
- index.js : Ce fichier initialise et monte l'application.

```

Dépendances principales

```
    @react-navigation/native-stack : Version ^6.9.12
    react : Version 18.2.0
    react-native : Version ^0.71.8
    react-native-safe-area-context : Version ^4.5.3
    react-native-screens : Version ^3.20.0
    react-native-splash-screen : Version ^3.3.0
```

Dépendances de développement

```
    @babel/core : Version ^7.20.0
    @babel/preset-env : Version ^7.20.0
    @babel/runtime : Version ^7.20.0
    @react-native-community/eslint-config : Version ^3.2.0
    @tsconfig/react-native : Version ^2.0.2
    @types/jest : Version ^29.2.1
    @types/react : Version ^18.0.24
    @types/react-test-renderer : Version ^18.0.0
    babel-jest : Version ^29.2.1
    eslint : Version ^8.19.0
    jest : Version ^29.2.1
    metro-react-native-babel-preset : Version 0.73.9
    prettier : Version ^2.4.1
    react-test-renderer : Version 18.2.0
    typescript : Version 4.8.4
```


## Configuration du projet : 

Pour commencer avec le projet globescratch, suivez ces étapes :

    Clonez le dépôt
    Accédez au répertoire du projet
    Installez les dépendances : npm install
    Lancer le projet : npm run start
    Puis deux solutions s'offre à vous:
        - Emulateur
        - Smartphone 
    NotaBene: cette application disponible uniquement sur Android !