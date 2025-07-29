# 🖼️ SmartArtHub – AI-Powered Art Critique Platform

SmartArtHub is a full-stack cloud-native application that allows users to upload artwork and receive feedback using Generative AI (Claude/OpenAI). It showcases skills in microservices architecture, Angular, Spring Boot, AWS, DevOps, and AI integration.

---

## 🚀 Features
- Upload and manage artworks (Angular frontend)
- Store artwork files in AWS S3
- Analyze artwork using Claude/OpenAI APIs
- Microservices: User, Artwork, Feedback
- GitHub Copilot-assisted development
- CI/CD via GitHub Actions

---

## 🧱 Tech Stack
| Layer | Tools |
|-------|-------|
| Frontend | Angular 17, TypeScript |
| Backend | Java 17, Spring Boot, REST APIs |
| Cloud | AWS S3, EC2 / ECS (Fargate), Route53, CloudWatch |
| AI | Claude or OpenAI APIs |
| CI/CD | GitHub Actions, Docker |
| DB | MongoDB (NoSQL), Redis (optional), PostgreSQL (optional) |

---

## 🧭 Architecture
```
Angular ↔ API Gateway ↔ Spring Boot Microservices
               ↘ AWS S3 (Image Storage)
               ↘ Claude/OpenAI (AI Feedback)
               ↘ MongoDB/Redis (Metadata Cache)
```

---

## 📦 Microservices Overview
- `user-service`: Handles user profiles and settings
- `artwork-service`: Manages image uploads, S3 storage, metadata
- `feedback-service`: Connects to Claude/OpenAI to analyze art

---

## 🧠 Claude/OpenAI Integration
Feedback service sends:
```json
{
  "imageUrl": "https://s3.amazonaws.com/your-bucket/art1.jpg",
  "title": "Morning Mist"
}
```
And receives:
```json
"The composition is well-balanced, with a calm use of color and a soft atmospheric effect. Consider highlighting contrast near the focal point."
```

You can connect to:
- **Claude** via API Gateway or Bedrock (AWS)
- **OpenAI** via `https://api.openai.com/v1/chat/completions`

Prompt template:
```
Analyze this artwork and provide creative feedback:
Title: {{title}}
URL: {{imageUrl}}

Focus on color use, composition, emotion, and style.
```

---

## ⚙️ CI/CD with GitHub Actions
Sample Workflow:
```yaml
name: Build and Deploy
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
      - name: Build
        run: mvn clean install
```

Add Docker build + push and ECS deployment stages as needed.

---

## 🐳 Docker + ECS Deployment
### Backend
- Build Docker images for each service
- Push to AWS ECR
- Deploy via ECS Fargate

### Frontend
- Use NGINX container or deploy to S3 (static site hosting)

---

## 📄 License
Open for portfolio or case study use. Not for resale or commercial redistribution.

---

## ✨ Author
Helen Jenifer – Aspiring AI-Powered Cloud Solutions Architect
