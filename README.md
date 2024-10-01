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

## Redogör vad de olika teknikerna (ex. verktyg, npm-paket, etc.) gör i applikationen
- **Node.js**: Kör JavaScript på serversidan.
- **Express.js**: Förenklar byggandet av API:er och routing.
MongoDB: Lagrar all vår data.
- **Mongoose**: Gör det lättare att interagera med databasen.
- **bcryptjs**: Hashar lösenord för säkerhet.
- **jsonwebtoken**: Hanterar autentisering med JWT.
- **express-validator**: Validerar och sanerar indata.

# Applikationens Översikt

Applikationen är en uppgiftshanteringsplattform där användare kan registrera sig, logga in och hantera sina uppgifter och projekt. 

## Funktioner
- Användare kan skapa, läsa, uppdatera och ta bort uppgifter.
- Användare kan organisera uppgifter i projekt.
- Använder JWT för att skydda rutter och säkerställa att bara inloggade användare kan göra viktiga åtgärder.
- En central felhanterare ger tydliga meddelanden vid problem.