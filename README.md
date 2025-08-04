# 🏠 Houseowner Mobile App

Hey there! 👋 This is a simple mobile app that helps simulate a house handover experience. It’s made for homeowners who want to see their house layout, appliances, and also report issues — all from their phone. Cool, right? 😎

---

## 🚀 Getting Started

This app is built with **React Native CLI** (not Expo). Here’s how to run it:

### 1. Clone the Repo & Install Stuff

```bash
git clone https://your-repo-url.git
cd HouseownerApp
npm install
```

### 2. Set Up Android

- Make sure you’ve got Android Studio installed
- Start an emulator or plug in your phone (enable USB debugging)
- Then just run:

```bash
npx react-native run-android
```

> If you're using iOS, you’ll need a Mac + Xcode + some extra steps.

---

## 🧠 How the App Is Structured

We kept things neat and modular, so it's easy to understand:

```
src/
├── assets/         # Images & icons
├── components/     # Buttons, headers, reusable UI parts
├── navigation/     # All screen navigators (tabs + stacks)
├── redux/          # State management using Redux Toolkit
├── screens/        # Each screen lives in its own folder
├── services/       # Placeholder APIs (for now, it’s mocked)
└── utils/          # Any helpers or constants
```

---

## 🛠️ What's Inside

We used a few libraries to make this smooth:

| Library | What It Does |
|--------|---------------|
| `@react-navigation/native` | Handles screen switching and tabs |
| `@reduxjs/toolkit` + `react-redux` | Keeps track of login state and more |
| `@react-native-async-storage/async-storage` | Saves login session & reported issues |
| `@react-native-community/checkbox` | Native checkbox UI |
| `@react-native-picker/picker` | Dropdowns for categories etc. |
| `react-native-maps` | Shows Google Map with your house pinned |

---

## 📱 Screens You'll Find

| Screen | What It Shows |
|--------|----------------|
| SplashScreen | Just a loading screen checking login state |
| LoginScreen | Email/password login with "Remember me" |
| RegisterScreen | Sign up with mock OTP (just pretend 😄) |
| DashboardScreen | Main page with welcome text and nav buttons |
| HousePlanScreen | A static floor plan image |
| AppliancesScreen | List of house appliances |
| ReportIssueScreen | A form to report issues, saved locally |
| ProfileScreen | User info + logout |
| MapScreen | Shows a dummy location on Google Maps |
| ForgotPasswordScreen | Just a placeholder for now |

---

## 🧩 Neat Features

- ✅ Bottom tab bar navigation
- ✅ Login and session saved across launches
- ✅ Form to submit issues with urgency/contact method/etc.
- ✅ Everything is locally stored for now (no real backend)
- ✅ Static floor plan image
- ✅ Simple, clean UI using React Native `StyleSheet`
- ✅ Google Map with a pin 📍

---



Let me know if you want to add screenshots or deploy this to the Play Store one day! 😄
