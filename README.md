# 📅 Conference Platform: Next.js 15 & React 19

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![SEO](https://img.shields.io/badge/SEO-Google_Indexed-4285F4?logo=google&logoColor=white)](https://developers.google.com/search)
[![Open Graph](https://img.shields.io/badge/Social-Open_Graph-E4405F)](https://ogp.me/)

> **Live Demo:** [https://conferencia-estaca-ayacucho.vercel.app/](https://conferencia-estaca-ayacucho.vercel.app/)

## 📖 Overview

A modern web platform designed for the **Ayacucho Stake Conference (Sept 2025)**.

Unlike traditional Single Page Applications (SPAs), this project utilizes **Next.js 15** to leverage **Server-Side Rendering (SSR)**. This ensures perfect indexing by search engines (Google) and instant initial load times, serving as the central engagement hub for the event.

## 🚀 Key Technical Features

### 1. 🔍 SEO & Open Graph Strategy (Google Ranking)

- **SEO-First Architecture:** Robust implementation of the **Next.js Metadata API** in `layout.tsx`.
- **Discoverability:** Optimized with semantic `keywords` ("Conferencia", "Fe", "Ayacucho") and descriptions, achieving organic ranking in Google for related terms.
- **Social Optimization:** Full configuration of the **Open Graph (OG)** protocol. Sharing the link on WhatsApp/Facebook generates a rich card with a custom image, title, and locale (`es_PE`).

### 2. ⚛️ Bleeding Edge Tech Stack (Next.js 15 + React 19)

- **Performance:** Powered by **Turbopack** for instant HMR.
- **Font Optimization:** Integration of `next/font/google` (Lato, DM Serif, Great Vibes) to eliminate Layout Shifts (CLS) and improve **Core Web Vitals**.
- **SSR:** Server-rendered content ensures 100% crawlability by bots.

### 3. 🎨 Client-Side Asset Generation

- **Feature:** "Custom Invitation" generator.
- **Tech:** Integrates **`html2canvas`** to capture user input and render high-quality downloadable assets (JPG/PNG) directly in the browser, reducing server load.

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.2 (App Router)
- **Core:** React 19.1.0 & TypeScript
- **SEO:** Next.js Metadata API & Open Graph
- **Fonts:** `next/font` (Zero layout shift)
- **Libraries:** html2canvas, canvas-confetti, SweetAlert2

## 📂 Project Structure

```text
src/
├── app/              # Next.js 15 App Router
│   ├── layout.tsx    # ⚙️ SEO: Metadata & Fonts Config
│   ├── page.tsx      # Landing Page (SSR)
│   └── components/   # React 19 Components
├── public/           # Static Assets (OG Images, Logos)
└── styles/           # Tailwind & CSS Modules
```

## 🧪 How to Run

1. Clone the repository:

```bash
git clone https://github.com/huderdcv/stake-conference-nextjs15.git
```

2. Install dependencies:

```bash
npm install
```

3. Run with Turbopack:

```bash
npm run dev
# Executes: next dev --turbopack
```
