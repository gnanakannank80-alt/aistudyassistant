# AuraStudy // AI Study Assistant Website

A premium, feature-rich, and visually stunning client-side AI Study Assistant built using raw **HTML5, Vanilla CSS3, and modern Javascript (ES6)**. Designed with a dark space cyber aesthetic, featuring glowing glassmorphism, responsive controls, and smooth animation transitions.

---

## Key Modules & Features

### 1. Intelligent Study Dashboard
* **Dynamic Welcome Widget**: Greets you matching the local hours (Morning/Afternoon/Evening) and fetches daily academic quotes.
* **Persistent Stat Tracking**: Tracks total focus minutes, Kanban planner task ratios, AI question counts, and quiz correctness averages (saved securely in `localStorage`).
* **Slick Visualization**: Uses glowing progress rings and statistics graphs.

### 2. Conversational AI Tutor
* **Dual Execution Modes**:
  - **Offline (Simulated Local Mode)**: Instantly processes questions about core academic subjects (Physics, Math, Biology, History, Coding) with pre-cached formatted explainers.
  - **Online (Gemini API Integration)**: Supply your own **Google Gemini API Key** under settings. Requests are routed directly from your browser to Google's endpoints using `gemini-2.5-flash` for genuine dynamic conversations.
* **Style Preset Chips**: Change the AI tutor's voice on the fly:
  - **Standard**: Structured textbook answers.
  - **ELI5**: Simple, jargon-free explanations for quick absorption.
  - **Analogy Master**: Teaches complex math/science using everyday metaphors.
  - **Socratic Guide**: Prompts you with leading questions to help you solve problems yourself.
  - **Exam Prep**: Focuses on structured glossary terms, study outlines, and common trap questions.

### 3. Smart Note Summarizer & Glossary Maker
* Paste lecture notes or chapters to instantly perform offline parse-extractions or call the Gemini API to build:
  - Concise summary bullet points.
  - Key terminology glossaries with exact definitions.
  - Hierarchical concept map trees.
* **Flashcard Auto-Extractor**: Uses the AI to analyze notes and compile a printable study deck of questions and answers.
* **Library Storage**: Save generated notes. Click saved items in the sidebar library to reload them.

### 4. Interactive Quizzer & Flashcard Deck Player
* **Quiz Engine**: Launches custom multiple-choice quizzes with countdown timers, progress bars, and instantaneous visual correctness feedback (green/red highlights) complete with detailed explanations.
* **3D Flashcard Player**: Reviews standard premade decks or custom-built vocabulary flashcards with realistic 3D flipping card animations. Tracks mastery ratings ("Forgot it" vs "Mastered!").

### 5. Pomodoro Focus Timer & Audio Synthesizer
* Customizable Pomodoro periods (Work, Short Break, Long Break) rendered through a circular SVG countdown ring with active scale pulsations.
* **Built-in Ambient Sound Machine**: Uses the **Web Audio API** to generate sound frequencies directly in the browser. Works 100% offline with zero network lag or CORS failures:
  - **Pink Focus Noise**: Smooth wind hiss to block distractions.
  - **Synth Rain Shower**: Modulated crackles resembling wet rainfall.
  - **Deep Focus Drone**: Harmonic chord triad (A-E-A) layered with slow volume oscillation LFOs.
  - Master volume slider to blend audio seamlessly.

### 6. Study Task Kanban Planner
* Organize homework and exam deadlines into columns: **To Do**, **In Progress**, and **Completed**.
* Estimate study Pomodoros, set priority tags (High, Medium, Low), and drag-and-drop or click cards to advance progress.

---

## File Architecture

```text
ai-study/
│
├── index.html     # Application frame, HTML views, and dialog layouts
├── styles.css     # The theme system, animations, and glassmorphism styling
├── app.js         # Navigation, API Fetch, Web Audio Synthesizer, and local storage state
└── README.md      # Project documentation
```

---

## Getting Started

1. **Launch a Local Server**:
   Since the app makes HTTP fetch calls and uses local storage, open the directory in a local web server to avoid CORS browser alerts.
   - Using Python:
     ```bash
     python -m http-server 8080
     ```
   - Using Node:
     ```bash
     npx http-server -p 8080
     ```
2. **Access the Portal**:
   Open `http://localhost:8080` in any modern web browser.
3. **Configure the AI Tutor**:
   Click **Aura Settings** in the bottom-left corner of the navigation bar. Optionally paste a free API Key from [Google AI Studio](https://aistudio.google.com/) to activate real Gemini responses.
