# 🎵 StageReady

> A collaborative rehearsal platform for musicians and singers with personalized, real-time part assignments.

---

## 📋 Overview

StageReady helps performance groups coordinate rehearsals by providing each performer with a personalized view of their assigned parts. Managers upload lyrics line-by-line and assign specific lines to performers, while singers and musicians see only what's relevant to them during practice.

**Three user roles:**
- 🎤 **Singers** - View assigned lyrics with clear visual indicators
- 🎸 **Musicians** - See chord progressions alongside vocal cues  
- 👔 **Managers** - Upload content and assign parts to performers

---

## 🎨 HCI Design Principles

### Visual Design

**Color Coding System:**
- 🟢 **Green** - Solo parts assigned to current user
- 🔴 **Red** - Chorus or group sections
- 🔵 **Blue** - Duet or collaborative sections
- ⚫ **Grey** - Other performers' parts (reduced emphasis)

**Key Design Decisions:**
- ✅ Large, readable text (16px minimum) for stage lighting
- ✅ Consecutive assigned lines automatically grouped
- ✅ Cue system shows next entry point
- ✅ High contrast for glanceability during performance
- ✅ Mobile-first, portrait orientation optimized

### ♿ Accessibility
- Text labels accompany all color indicators
- Clear visual hierarchy with section headers
- Support for different screen sizes
- Semantic design (not color-dependent only)

---

## 💻 Technical Stack

**Frontend:**
- React Native (Expo)
- NativeWind (Tailwind CSS for React Native)
- JavaScript

**Backend:**
- Firebase Firestore (NoSQL)
- Real-time listeners for live updates

**Key Dependencies:**
```
expo: ~54.0.10
react-native: 0.81.4
nativewind: ^4.2.1
firebase: latest
```

---

## 🗄️ Database Structure

### Firestore Collections

**songs collection:**
```javascript
{
  title: string,
  artist: string,
  createdAt: timestamp,
  lines: [string]  // Array of lyric lines
}
```

**songs/{songId}/assignments subcollection:**
```javascript
{
  name: string,
  role: "singer" | "musician",
  assignedLines: [number],  // Array indices of assigned lines
  instrument?: string
}
```

**Design approach:**
- Each lyric line stored as array element
- Array index serves as line number
- Assignments reference line indices only
- Frontend groups consecutive lines automatically

See `DATABASE_STRUCTURE.md` for complete documentation.

---

## ✨ Features

**Singer Interface:**
- View assigned lyrics with color coding
- Automatic grouping of consecutive lines
- Next cue display
- Real-time updates when assignments change
- Clear distinction between your parts and others

**Database Integration:**
- Real-time Firestore listeners
- Line-by-line lyrics storage
- Individual performer assignments
- Support for multiple performers per song

**Planned:**
- Manager interface for uploads and assignments
- Musician interface with chord progressions
- User authentication
- Multiple song management

---

## 🚀 Quick Start

### 📦 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo Go app on your mobile device

### 📥 Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/StageReady.git
cd StageReady/frontend
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm start
```

For different WiFi networks:
```bash
npx expo start --tunnel
```

**4. Run on your device**

**📱 iOS:**
- Open Camera app
- Scan the QR code
- Tap notification to open in Expo Go

**🤖 Android:**
- Open Expo Go app
- Scan QR code from the app

---

## 📁 Project Structure

```
StageReady/
├── frontend/
│   ├── src/
│   │   ├── screens/
│   │   │   └── SingerScreen.js
│   │   ├── services/
│   │   │   └── firebase.js
│   │   └── components/
│   ├── App.js
│   ├── global.css
│   ├── tailwind.config.js
│   ├── babel.config.js
│   ├── metro.config.js
│   └── package.json
└── README.md
```

---

## 🐛 Troubleshooting

**Styles not appearing:**
```bash
npx expo start --clear
```
Check `tailwind.config.js` includes correct content paths.

**Firebase connection errors:**
- Verify Firebase config in `src/services/firebase.js`
- Check Firestore rules are in test mode
- Verify network connectivity

**Expo Go version mismatch:**
- Update Expo Go from App Store/Play Store
- Or upgrade project: `npm install expo@latest`

**Metro bundler issues:**
```bash
rm -rf node_modules
npm install
npx expo start --clear
```

---

## 🤝 Contributing

This is an academic HCI project. Contributions focused on improving user experience and accessibility are welcome.

---

## License

Educational use only

---

## 📚 Documentation

- 📖 Database Structure: See `DATABASE_STRUCTURE.md`
- 🎨 Design Sketches: See `files/sketching.md`

---

Built with React Native, Expo, NativeWind, and Firebase
