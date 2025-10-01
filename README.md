# 🎵 StageReady

> A collaborative rehearsal platform that transforms how performance groups prepare together

---

## Overview

StageReady is a mobile application designed to streamline group rehearsals by providing each performer with a personalized, real-time view of their assigned parts. The platform eliminates the confusion of shared sheet music and enables seamless coordination between managers, singers, and musicians.

### How It Works

**For Managers:**
Upload song lyrics line-by-line and assign specific lines to individual performers. Make changes on the fly and see updates reflected instantly across all devices.

**For Singers:**
See only your assigned lyrics with clear visual cues for when to enter. Other performers' parts remain visible but de-emphasized for context.

**For Musicians:**
View chord progressions alongside vocal information, with highlighted sections showing exactly when and where to play.

---

## 🎨 Design Philosophy

### User-Centered Interface

StageReady prioritizes **glanceability** - performers can quickly find their cue without extensive scrolling or searching. The interface is optimized for real-world performance conditions with high-contrast text and minimal distractions.

### Visual Language

**Color-Coded Part Assignment:**
- 🟢 **Green** - Your solo sections
- 🔴 **Red** - Chorus or ensemble parts
- 🔵 **Blue** - Duets or collaborations
- ⚫ **Grey** - Other performers' parts (context only)

**Smart Grouping:**
Consecutive assigned lines automatically merge into coherent sections, reducing visual clutter and making the flow easier to follow.

**Cue System:**
Each performer sees their next entry point clearly marked, with reference to the previous line or section to eliminate confusion during fast-paced rehearsals.

### Mobile-First Design

- Large, readable typography (16px minimum)
- Portrait orientation optimized for one-handed holding
- Touch-friendly interface elements
- Works under various lighting conditions
- Minimal scrolling required during performance

### Accessibility

- Text labels accompany all color indicators
- Clear visual hierarchy with section headers
- Semantic design principles (color is enhancement, not requirement)
- Responsive layouts for different screen sizes

---

## ✨ Features

### Core Functionality

**Real-Time Collaboration:**
- Instant updates when managers modify assignments
- Multiple performers can access the same song simultaneously
- Changes sync across all connected devices

**Line-by-Line Precision:**
- Managers assign individual lyric lines to specific performers
- Flexible arrangement allows any line to go to any performer
- Same line can be assigned to multiple performers (shared sections)

**Intelligent Display:**
- Automatic grouping of consecutive assigned lines
- Visual distinction between your parts and others
- Clear section headers showing performer names
- Next cue indicator for seamless transitions

**Multi-Role Support:**
- Singer interface with lyrics focus
- Musician interface with chord progressions and vocal cues
- Manager dashboard for content upload and assignment

### User Experience

**For Performers:**
- Personalized view showing only relevant information
- Quick visual scanning during live performance
- Context awareness (see what others are doing)
- Rehearsal mode for practice

**For Managers:**
- Simple upload interface for song lyrics
- Drag-and-drop line assignment
- Real-time preview of performer views
- Multi-song management
- Assignment history and version control

**Platform Features:**
- User authentication and role management
- Song library with search and filters
- Export capabilities for offline reference
- Offline mode for rehearsals without internet

---

## 💻 Technology

**Mobile Platform:**
- React Native for cross-platform iOS and Android apps
- Expo framework for streamlined development
- NativeWind (Tailwind CSS) for consistent styling

**Backend:**
- Firebase Firestore for real-time database
- Cloud storage for future file uploads
- Firebase Authentication for user management

**Performance:**
- Optimized for low-latency updates
- Efficient data structure for quick rendering
- Local caching for offline support

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Expo Go app installed on your mobile device
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

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

For devices on different WiFi networks:
```bash
npx expo start --tunnel
```

**4. Open on your device**

**📱 iOS:**
1. Open the Camera app
2. Point at the QR code displayed in terminal
3. Tap the notification that appears
4. App opens in Expo Go

**🤖 Android:**
1. Open the Expo Go app
2. Tap "Scan QR code"
3. Point at the QR code displayed in terminal
4. App loads automatically

---

## 📁 Project Structure

```
StageReady/
├── frontend/
│   ├── src/
│   │   ├── screens/        # Main app screens
│   │   ├── components/     # Reusable UI components
│   │   └── services/       # Firebase and API integration
│   ├── App.js              # Application entry point
│   ├── global.css          # Global styles
│   ├── tailwind.config.js  # Tailwind configuration
│   └── package.json        # Dependencies
└── README.md
```

---

## 🐛 Troubleshooting

**Styles not appearing:**
```bash
npx expo start --clear
```

**Cannot connect to development server:**
- Ensure both computer and phone are on the same WiFi network
- Or use tunnel mode: `npx expo start --tunnel`

**App not loading on device:**
- Update Expo Go app to latest version
- Check that QR code is clearly visible
- Try entering the connection URL manually in Expo Go

**Metro bundler errors:**
```bash
rm -rf node_modules
npm install
npx expo start --clear
```

---

## 🤝 Contributing

StageReady is an HCI research project exploring collaborative interfaces for performance groups. Contributions that enhance user experience, accessibility, or mobile interaction patterns are welcome.

---

## 📄 License

Educational use only - Academic HCI Project

---

**Built with React Native, Expo, NativeWind, and Firebase**

*Designed for performers, by performers*
