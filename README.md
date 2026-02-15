<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Sentinel Logistics Group

Professional high-value and sensitive delivery logistics provider specializing in medical supplies, nutraceuticals, special-needs equipment, and specialized transport via an elite, vetted contractor network.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** – build tooling
- **React Router 7** – client-side routing
- **Google Gemini AI** – logistics insights, search grounding, maps grounding, image editing, video generation

## Features

- **Pages**: Home, Services, Careers, Compliance, About, Contact
- **AI Hub** – Partner Intelligence Hub powered by Gemini:
  - Market insights & regulations (Google Search grounding)
  - Service center finder (Google Maps grounding)
  - Image editing for logistics visuals
  - Video generation from images

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)

## Run Locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure API key**  
   Create `.env.local` in the project root and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
   Get a key at [Google AI Studio](https://aistudio.google.com/apikey).

3. **Start dev server**
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Project Structure

```
├── components/     # Layout & shared UI
├── pages/          # Route pages (Home, Services, Careers, Compliance, About, Contact, AIHub)
├── services/       # Gemini AI integration
└── index.html      # Entry HTML
```
