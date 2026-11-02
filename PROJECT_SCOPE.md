# KidduZone (Kiddu) — App Scope & Feature Map

**KidduZone** is a React Native educational app for kids. It combines learning exercises, pronunciation practice, drawing, nursery poems, and a sticker/reward system, with Firebase auth and progress sync.

| | |
|---|---|
| **App name** | Kiddu / KidduZone |
| **Platform** | React Native `0.88` (iOS & Android) |
| **State** | Redux Toolkit + Redux Persist |
| **Backend** | Firebase Auth, Firestore, Crashlytics |
| **Media** | Cloudinary (images & audio), local assets, Lottie |
| **i18n** | English & French (`i18next`) |

---

## 1. Product overview

Kiddu helps children learn through play:

- Interactive **quizzes** (alphabets, numbers, shapes, animals, mixed quiz)
- **Pronunciation** modules with audio / TTS
- **Voice recognition** for alphabet speaking practice
- **Drawing canvas** for freehand sketching
- **Nursery rhyme** music player
- **Stickers & rewards** earned by completing exercises
- **Parent controls**: screen-time limits, profile, premium plans

---

## 2. Navigation architecture

```
NavigationHandler (root)
├── AuthStack          (unauthenticated)
└── BottomStack        (authenticated — 5 tabs)
    ├── HomeNavigator
    ├── PronunciationNavigator
    ├── Canvas
    ├── Rewards
    └── Settings
+ Modal / stack screens (exercises, premium, user guide, under progress)
```

Auth is driven by Firebase `onAuthStateChanged`: logged-in users land on **BottomStack**; others on **AuthStack**.

---

## 3. Screens inventory

### 3.1 Auth stack

| Screen | Purpose |
|--------|---------|
| **Onboarding** | 3 intro slides: Easy learning, Learn with help, Get rewards |
| **Login** | Email/password sign-in |
| **Sign Up** | Account registration |
| **OTP** | OTP entry (defined; wiring may vary) |
| **Profile** | Child name, age, gender, avatar → saved to Firestore |
| **Interests** | Pick kid interests: Alphabets, Numbers, Maths, Shapes, Animals, Games |

### 3.2 Bottom tabs

| Tab | Screen | Purpose |
|-----|--------|---------|
| 🎮 Games / Home | **Home** | Greeting + exercise category list |
| 🗣️ Speak | **Pronunciation hub** | Entry to all pronunciation topics |
| ✏️ Draw | **Canvas** | Sketch pad (draw, eraser, undo, clear, save) |
| 🏆 Rewards | **Rewards** | Collected stickers by category |
| ⚙️ Settings | **Settings** | Profile summary, calendar, menu, screen-time |

### 3.3 Home → exercise screens (root stack)

| Screen | Game / activity |
|--------|-----------------|
| **Alphabet Exercise** | Lesson list (26 letter sets) |
| **Alphabet Exercise Main** | Per-letter practice with **voice recognition** + TTS |
| **Numbers Exercise** | “How many items?” counting quiz (12 rounds) |
| **Shapes Exercise** | Pick the correct shape |
| **Animals Exercise** | Choose the correct animal |
| **Kids Game / Quiz** | Mixed picture quiz (objects, foods, shapes, etc.) |

### 3.4 Pronunciation stack

| Screen | Content |
|--------|---------|
| **Pronunciation** | Category grid (Alphabets, Numbers, Shapes, Animals, Vehicles, Colors, Poems) |
| **Alphabets** | A–Z cards with images + sound playback |
| **Numbers** | Number pronunciation |
| **Shapes** | Shape names (TTS / audio) |
| **Animals** | Animal names + sounds (e.g. Alligator, Gorilla, Elephant, Buffalo…) |
| **Vehicles** | Vehicle names (Ambulance, Police Car, Bus, Truck, etc.) |
| **Colors** | Color names (Red, Blue, Green, Yellow, Orange, Purple, Pink, Black, White) |
| **Poems** | Searchable nursery rhyme list |
| **Poem Music** | Full music player for a selected poem |

### 3.5 Other stack screens

| Screen | Purpose |
|--------|---------|
| **Premium** | Subscription plans (1 / 3 / 6 months) |
| **User Guide** | In-app how-to for kids (5 steps) |
| **Under Progress** | Placeholder for unfinished features (e.g. Kids Profile Setting) |

---

## 4. Games & exercises (detail)

### 4.1 Alphabets exercise

- **Entry:** Home → Alphabets
- **Set list:** 26 alphabet lessons with progress
- **Main session:** Shows letter imagery; child speaks the word
- **Tech:** Speech-to-text (`@dev-amirzubair/react-native-voice`), TTS (`react-native-tts`), haptics
- **Feedback:** Success modal / Lottie when pronunciation matches

### 4.2 Numbers exercise

- Prompt: **“How many items?”**
- Shows a random count of images; child picks from multiple options (5 choices)
- Progress bar; ~12 exercises per run
- Correct answers → sticker / reward flow
- Restart prompt when finished

### 4.3 Shapes exercise

- Prompt: select the correct shape among options
- Shapes include: circle, square, rectangle, triangle, hexagon, pentagon, kite
- Lottie celebration on success; stickers on completion
- Progress tracked in Redux + local / Firestore sync patterns

### 4.4 Animals exercise

- Prompt: **“Choose the correct animal?”**
- Random animal options from `AnimalsData`
- Image-based selection with selection status feedback
- Stickers awarded under **Animal Rewards**

### 4.5 Quiz game (Kids Game Exercise)

- Mixed visual quiz using items such as Bus, Banana, Car, Egg, Grapes, Ice Cream, Jet, Kite, Lamp, Mug, Orange, Pencil, Flower, Sea, Circle, Mango, etc.
- Four random options per round; identify the named / shown item
- Progress persisted (AsyncStorage / Firestore)
- Stickers under **Quiz Rewards**

### Shared exercise UX

Across quizzes:

- Custom app bar + progress indicator
- Lottie animations for correct answers
- **Sticker modal** when a reward is unlocked
- **Restart prompt** after completing a set
- Click / UI sound effects
- Offline image fallback via network handler hooks

---

## 5. Pronunciation & audio learning

| Topic | Interaction |
|-------|-------------|
| Alphabets | Tap card → play letter / word audio |
| Numbers | Number audio / TTS |
| Shapes | TTS speak shape name |
| Animals | Cloudinary animal sound files + TTS |
| Vehicles | Image grid + TTS |
| Colors | Color swatches + TTS |
| Poems | Browse list → Poem Music player (play / pause / skip controls) |

**Poem library (examples):** Twinkle Twinkle, Baby Shark, Old McDonald, Five Ducks, Eating Sugar, Humpty Dumpty, Rain Rain Go Away, Ba Ba Black Sheep, Wheels on the Bus.

---

## 6. Drawing (Canvas)

- Freehand sketch canvas (`react-native-sketch-canvas`)
- Tools: stroke width, eraser, undo, clear
- Save drawing as PNG to device documents directory
- “Draw Inside” guided polygon check (point-in-polygon helper)

---

## 7. Rewards & stickers

Rewards are grouped on the Rewards tab:

| Section | Source |
|---------|--------|
| Animal Rewards | Animals exercise |
| Number Rewards | Numbers exercise |
| Shape Rewards | Shapes exercise |
| Quiz Rewards | Kids quiz game |

**Example stickers:** Magic Hat, Bronze Trophy, Chick Reward, Shining Star, Unicorn.

Progress / rewards can sync via Firestore (`fetchRewards`, `awardRewardToUser`).

---

## 8. Settings & parental features

| Feature | Description |
|---------|-------------|
| **Profile display** | Child name, age, gender from Firestore |
| **Calendar** | Activity / date calendar component |
| **Kids Profile Setting** | Planned (currently Under Progress / disabled) |
| **Kid Activity Stats** | Navigates toward premium / unlock flow |
| **User Guide** | Kid-friendly walkthrough |
| **Manage Screen Time** | Limit continuous usage (timer tracks elapsed time; alert around long sessions) |
| **Logout** | Clears Redux exercise/reward/user state and signs out of Firebase |
| **Premium** | Plans: 1 month (400), 3 months (1,100), 6 months (2,000) — currency as configured in app |

---

## 9. Core functionalities (cross-cutting)

| Area | Details |
|------|---------|
| **Authentication** | Firebase email/password; session-aware root navigation |
| **User profile** | Username, age, gender, avatar → Firestore `users` |
| **Progress persistence** | Redux Persist + AsyncStorage + Firestore for selected flows |
| **Audio** | Sound context, click SFX, music player context for poems |
| **TTS** | Text-to-speech for words / prompts |
| **Speech recognition** | Microphone permission; alphabet speaking checks |
| **Media CDN** | Cloudinary for remote images & MP3s |
| **Crash reporting** | Firebase Crashlytics |
| **Localization** | EN / FR translation packs |
| **UI polish** | Boot splash, Lottie, FastImage, responsive sizing, tablet layout |
| **Permissions** | Microphone (speech), storage (canvas save) |

---

## 10. User flows (high level)

### First-time user

1. Onboarding slides → Sign up / Login  
2. Create child profile (name, age, gender, avatar)  
3. Select interests  
4. Land on Home with personalized greeting  

### Learning session

1. Home → pick Alphabets / Numbers / Shapes / Animals / Quiz  
2. Complete rounds with visual feedback  
3. Earn sticker → view on Rewards tab  

### Pronunciation session

1. Speak tab → choose topic  
2. Tap items to hear pronunciation or open poems player  

### Creative session

1. Draw tab → sketch → optional save  

### Parent session

1. Settings → screen time, guide, premium, logout  

---

## 11. Data modules (content sources)

| File / module | Content |
|---------------|---------|
| `mainExerciseData.js` | Home exercise categories |
| `kidsGameScreenData.js` | Quiz game items |
| `shapesExerciseData.js` | Shape quiz set |
| `animalsData.js` | Animals for quiz & pronunciation |
| `alphabetsScreenData.js` | Alphabet pronunciation cards |
| `numbersScreenData.js` | Numbers content |
| `shapesScreenData.js` | Shapes pronunciation |
| `vehiclesData.js` | Vehicles |
| `colorsData.js` | Colors |
| `poemsData.js` | Nursery rhymes + audio URLs |
| `soundsListData.js` | Pronunciation hub list |
| `interestsData.js` | Onboarding interests |
| `onBoardingScreenData.js` | Onboarding copy & art |
| `premiumData.js` | Subscription tiers |
| `stickersData.js` | Reward sticker catalog |
| `userGuideData.js` | In-app guide steps |

---

## 12. Tech stack summary

- **UI / nav:** React Navigation (native stack + bottom tabs), Reanimated, Gesture Handler  
- **State:** Redux Toolkit slices — user, timer, rewards, alphabets / numbers / shapes / animals / game exercises  
- **Firebase:** Auth, Firestore, Crashlytics, App  
- **Learning media:** TTS, Voice, Nitro Sound / Audio Record, sketch canvas  
- **Other:** AsyncStorage, NetInfo, Blob Util, FS, Vector Icons, Linear Gradient, Progress indicators  

---

## 13. Out of scope / placeholders

Features present in UI but incomplete or stubbed:

- **Kids Profile Setting** → Under Progress screen  
- **Notifications** on Settings app bar (disabled)  
- **OTP screen** registered in constants; confirm full auth path as needed  
- Premium **Continue** currently dismisses without a live payment gateway integration in the UI flow  

---

## 14. Quick feature checklist

- [x] Onboarding & auth  
- [x] Child profile & interests  
- [x] Home exercise hub  
- [x] Alphabet lessons + voice practice  
- [x] Numbers counting quiz  
- [x] Shapes quiz  
- [x] Animals quiz  
- [x] Mixed kids quiz game  
- [x] Pronunciation topics (7 categories)  
- [x] Poems music player  
- [x] Drawing canvas  
- [x] Rewards / stickers  
- [x] Screen-time management  
- [x] User guide  
- [x] Premium plan UI  
- [x] Logout & state reset  
- [ ] Full kids profile management (in progress)  
- [ ] Live payment / IAP (UI only today)  

---

*Generated from the KidduZone codebase structure (screens, navigation, utils, and Redux modules).*
