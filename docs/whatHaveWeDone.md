# 🐳 Projet – Déploiement, Dockerisation & CI/CD
### Boulogne Yanis - Rafidison Timéo 

## 📦 Architecture Docker

### Backend & Frontend
- Dockerfiles séparés pour le **backend** et le **frontend**
- Tests et exécution en local afin de valider le bon fonctionnement
- Build des images Docker et push vers **Docker Hub**

---

## 🖥️ Déploiement sur Serveur OVH

L’objectif est de mettre en place un déploiement plus avancé qu’avec Render, via un **serveur OVH (VPS)**.

### Étapes :
1. Récupération des images Docker depuis Docker Hub  
2. Installation et configuration de Docker & Docker Compose sur le VPS  
3. Mise en place d’un `docker-compose.yml` liant :
   - backend  
   - frontend  
   - nginx  
4. Configuration du fichier `nginx.conf` pour le routage des requêtes et des ports  
5. Démarrage de l’infrastructure :

```bash
docker compose up -d
```

6. Vérification du bon fonctionnement de l’application en ligne

---

## 🔀 Reverse Proxy – Nginx

- Utilisation de **Nginx** comme reverse proxy
- Routage des requêtes HTTP vers :
  - le frontend
  - l’API backend
- Centralisation de l’accès via un seul point d’entrée

---

## ✅ Validation en local

Avant toute mise en production :
- Lancement de l’infrastructure en local avec Docker Compose
- Vérification de la communication frontend ↔ backend
- Vérification du routage via Nginx

---

## 🔁 CI/CD – GitHub Actions

Mise en place d’une pipeline CI/CD automatisée :

### Pipeline
- Lancement des tests
- Build des images Docker
- Push des images sur Docker Hub
- Déploiement automatique sur le serveur OVH

---

## 🏷️ Gestion des releases

- Création automatique d’une release lorsque le nom du tag suit le format :

```
V[0-9]*
```

Exemples :
- V1
- V1.0
- V2.1.3

---

## 📘 Storybook

- Génération automatique d’un **Storybook**
- Sert à :
  - documenter les composants UI
  - visualiser les états des composants
  - améliorer la maintenabilité du frontend
- Build intégré à la pipeline CI/CD
