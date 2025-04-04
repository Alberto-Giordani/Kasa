# KASA

KASA est un projet web développé avec **React** et **Vite**. L'application offre une plateforme intuitive pour la visualisation d'annonces immobilières, avec une navigation fluide et interactive grâce à des composants modulaires et un style moderne réalisé en SCSS.


## Table des matières

- [Introduction](#introduction)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)


## Introduction

Le projet **Kasa Giordani** vise à fournir une solution conviviale pour la recherche et la visualisation d'annonces immobilières. Grâce à React, l'expérience utilisateur est fluide et réactive, tandis que Vite permet une configuration et une compilation rapides.

## Technologies utilisées

- **React** – pour la gestion de l'interface utilisateur
- **Vite** – comme outil de construction 
- **SCSS** – pour le style modulaire
- **ESLint** – pour garantir un code propre et cohérent

## Installation

Pour cloner et installer le projet en local :

1. **Clonez le repository :**
   ```
   git clone https://github.com/votre-username/kasa_giordani.git
   cd kasa_giordani
   ```

2. **Installez les dépendances :**
    ```
    npm install
    ```

3. **Démarrez le serveur de développement :**
    ```
    npm run dev
    ```

L'application sera disponible à l'adresse http://localhost:5173 (ou à l'URL indiquée dans le terminal).


## Utilisation
- Accueil : Affiche la liste des annonces disponibles.

- Détail d'annonce : En cliquant sur une annonce, vous accédez à une page avec des informations détaillées.

- À propos : Une page décrivant le projet et les valeurs qui le sous-tendent.

- Erreur 404 : Une page personnalisée pour les chemins non trouvés.


## Structure du projet

Le projet est organisé de manière modulaire :

- public/ – fichiers statiques et ressources publiques.

- src/

    - assets/ – images et ressources graphiques.

    - components/ – composants React réutilisables (Header, Footer, Card, etc.).

    - data/ – fichiers JSON contenant les données des annonces et autres informations.

    - pages/ – différentes pages de l'application (Accueil, Détail d'annonce, À propos, etc.).

    - Router/ – configuration des routes pour la navigation.

---

![Créé par Alberto Giordani](./src/assets/images/créé-par-alberto-giordani.svg)