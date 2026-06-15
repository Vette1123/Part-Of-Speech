# 📝 Part Of Speech

> A timed quiz that asks one question: noun, verb, adjective, or adverb?

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)

### 🚀 [Try it live →](https://part-of-speech-react.onrender.com)

A small full-stack quiz app for drilling English parts of speech. The React client fetches a shuffled word list from an Express API, gives you 30 seconds per word to pick the right category, then asks the server where your final score ranks against everyone else's.

## ✨ Features
- ⏱️ 30-second per-word countdown with auto-advance when time runs out
- 🎲 Server-side shuffling that guarantees at least one of each part of speech per round
- 📊 Live progress bar and a percentile rank computed against past scores
- 🔔 Toast feedback on submit via `react-toastify`
- 🧭 Three-step flow (Landing → Quiz → Results) driven by a single `AppContext`
- 🎨 Responsive Tailwind UI with Headless UI radio options

## 🛠️ Tech Stack
| Layer | Technology |
| --- | --- |
| Client | React 18, TypeScript, Tailwind CSS, Headless UI, React Icons, Axios, React Toastify |
| Build | Create React App (`react-scripts`) |
| Server | Node.js, Express 4, TypeScript, `ts-node`, Nodemon |
| Data | Local `TestData.json` (word list + score history) |

## 📖 Getting Started

Start the API:

```bash
cd server
yarn
yarn start    # boots ts-node + nodemon on :5000
```

In a second terminal, start the client:

```bash
cd client
yarn
yarn start    # CRA dev server on :3000
```

## 🙌 Credits
Built by [Mohamed Gado](https://mohamedgado.com).
