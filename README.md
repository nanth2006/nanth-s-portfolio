# Nanthakumar K — Portfolio (React + Node + Express)

Full stack personal portfolio.

## Structure
- `frontend/` — React (Vite) app, glassmorphism UI with glow animations
- `backend/` — Node.js + Express API (contact form endpoint)

## Run locally

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
Runs on http://localhost:5000

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Runs on http://localhost:5173

## Deploy on Vercel
Deploy `frontend` and `backend` as two separate Vercel projects (Root Directory = `frontend` and `backend` respectively).
After backend is deployed, set `VITE_API_URL` in the frontend project's Environment Variables to
`https://<your-backend-url>.vercel.app/api`, for Production/Preview/Development, then redeploy.

Backend on Vercel needs a `vercel.json` if deploying as serverless — for a simple Express app,
a Node.js hosting target (Render, Railway) is simpler than Vercel's serverless functions.
