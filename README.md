# Task Manager — Frontend

Interface front-end développée en **React (TypeScript)** pour interagir avec une **API REST Task Manager**. Permet de créer, consulter, modifier et supprimer des tâches, avec gestion des statuts et des dates de suivi, via **Axios**.

> Projet personnel, développé pour approfondir React/TypeScript et l'intégration avec une API REST. Sert aussi d'outil d'organisation personnelle au quotidien.

## Fonctionnalités

- ✅ Opérations CRUD complètes sur les tâches (créer, lire, modifier, supprimer)
- 📅 Tri des tâches par date d'échéance (les plus urgentes en premier)
- 🔌 Communication avec l'API via Axios
- 🔐 Authentification (en cours d'implémentation)

## Stack technique

| Côté | Techno |
|------|--------|
| Front-end | React, TypeScript, Vite |
| Requêtes HTTP | Axios |
| Linting | oxlint |
| Back-end (repo séparé) | Node.js / Express |

## Architecture

Le projet est en deux dépôts distincts :
- **`task-manager`** *(ce repo)* — l'interface front-end
- **`task-manager-api`** — Express/Node.js, expose l'API REST consommée par ce front

## Installation

```bash
# Cloner le repo
git clone https://github.com/JadeHanonge/task-manager.git
cd task-manager

# Installer les dépendances
npm install

# Configurer les variables d'environnement
# (créer un .env avec l'URL de l'API back-end)

# Lancer en développement
npm run dev
```

L'application nécessite que l'API back-end (Express) tourne en parallèle pour fonctionner correctement.

## Statut du projet

Projet en développement actif. L'authentification est en cours d'implémentation ; certaines parties de l'interface sont encore à finaliser visuellement.

## Auteure

**Jade Hanonge**
[GitHub](https://github.com/JadeHanonge)