# Trullo

## Installation
1. Klona repo: `git clone <repo-url>`
2. Gå till projektmappen: `cd trullo`
3. Installera beroenden: `npm install`
4. Starta servern: `npm run dev`

## API Endpoints
- **POST /api/users/register**: Registrera en ny användare
- **POST /api/users/login**: Logga in en användare
- **GET /api/users/me**: Hämta inloggad användares profil
- **PUT /api/users/me**: Uppdatera inloggad användares profil
- **DELETE /api/users/me**: Ta bort inloggad användare

- **POST /api/tasks**: Skapa en ny uppgift
- **GET /api/tasks**: Hämta alla uppgifter
- **PUT /api/tasks/:id**: Uppdatera en uppgift
- **DELETE /api/tasks/:id**: Ta bort en uppgift