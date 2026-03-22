# Afit (VitaTrack) – Suivi de poids intelligent

> **“Suivez votre progression, vivez mieux.”**

---

## Description

**Afit** est une application web de suivi de poids permettant aux utilisateurs de visualiser leur évolution dans le temps, d’analyser leurs données corporelles et de mieux comprendre leur progression.

Ce projet constitue la première brique d’un écosystème plus large : **VitaTrack**, une plateforme de suivi santé personnalisée intégrant à terme des fonctionnalités d’intelligence artificielle.

---

## Objectifs

* Suivre son poids de manière simple et efficace
* Visualiser son évolution grâce à des graphiques
* Comprendre ses données (IMC, tendances, progression)
* Aider à atteindre un objectif de poids
* Proposer une base évolutive vers un accompagnement intelligent

---

## Stack technique

* **Frontend** : React (Vite)
* **Backend** : Node.js / Express
* **Base de données** : MySQL
* **Outils prévus** : graphiques dynamiques (Recharts / Chart.js)

---

## Gestion utilisateur

Chaque utilisateur possède un profil contenant :

* Nom / Prénom
* Pseudo
* Email
* Date de naissance
* Taille
* Sexe
* Objectif de poids

---

## Données suivies

* Poids
* Date de la mesure

---

## Fonctionnalités

### Fonctionnalités actuelles / en cours

* Enregistrement du poids
* Date de première mesure
* Nombre de jours depuis le début
* Poids minimum / maximum
* Calcul de l’IMC (sous-poids / normal / surpoids)
* Courbe d’évolution du poids

---

### Fonctionnalités en développement

* Nombre total de mesures
* Évolution sur 7 jours / 30 jours
* Moyenne hebdomadaire / mensuelle
* Calcul automatique de progression

---

### Fonctionnalités avancées (à venir)

* Objectif de poids avec estimation du temps restant
* Analyse intelligente des données
* Suggestions personnalisées

---

## Évolution prévue (VitaTrack)

### Page d’accueil

* Présentation du concept
* Accès aux fonctionnalités principales
* Expérience utilisateur orientée bien-être

---

### Conseils personnalisés

* Recommandations basées sur les données utilisateur
* Conseils d’hygiène de vie
* Contenu pédagogique

---

### Intelligence Artificielle

#### Génération de menus personnalisés

* Adaptés aux intolérances alimentaires
* Compatibles avec différents régimes
* Basés sur les objectifs (perte / prise de poids)
* Personnalisés selon les préférences

#### Analyse des données

* Détection de tendances
* Suggestions adaptées à l’évolution

#### Approche responsable

* Aucun autodiagnostic
* Orientation vers des professionnels si nécessaire
* Accompagnement pédagogique

---

## Structure de la base de données

### Table `users`

```sql
name: string
firstname: string
username: string
email: string
birthday: date
height: integer
gender: string
goal: decimal
```

---

## Design & UI

### Palette moderne (bien-être)

* Vert menthe : `#9EE0C1`
* Bleu doux : `#6FB3CE`
* Beige clair : `#F6F4EF`
* Anthracite : `#2E2E2E`

### Palette minimaliste (professionnelle)

* Bleu nuit : `rgba(26, 42, 58, 1)`
* Turquoise : `rgba(90, 211, 199, 1)`
* Gris clair : `#EDEDED`
* Blanc : `#FFFFFF`

---

### Typographies

* **Montserrat** → moderne
* **Poppins** → lisible
* **Inter** → idéal pour les données
* **Nunito** → style bien-être

---

## État du projet

Projet actuellement en cours de développement.

Ce repository présente une première version fonctionnelle axée sur le suivi du poids, avec une vision d’évolution vers une plateforme santé plus complète.

---

## Vision long terme

**VitaTrack** vise à devenir une plateforme capable de :

* Générer des menus personnalisés
* Prendre en compte les intolérances alimentaires
* Offrir un suivi santé intelligent
* Accompagner les utilisateurs de manière pédagogique

---

## Disclaimer

Ce projet ne remplace pas un avis médical.
Il a pour objectif d’accompagner les utilisateurs, pas de diagnostiquer.

---

## Auteur

**Loriana Diano**
Développeuse Web & Web Mobile

Portfolio : https://loriana.dianoholding.com
LinkedIn : https://www.linkedin.com/in/loriana-diano-33187ba8/

---

## Pourquoi ce projet

Ce projet illustre :

* Une logique métier concrète
* La manipulation de données utilisateur
* La visualisation de données
* Une réflexion produit complète
* Une base évolutive vers l’intelligence artificielle

---

💙 *Merci pour votre visite !*