# Expo 54 Blank Template

This project was created with **Expo SDK 54** using the **Blank
Template**. It provides a minimal starting point to build cross-platform
mobile apps for **iOS**, **Android**, and **Web**.

## 🚀 Getting Started

**Install dependencies:**\
npm install

**Start the development server:**\
npx expo start

This opens Expo Dev Tools, where you can run the app on Android
Emulator, iOS Simulator (macOS only), or physical devices using Expo Go.

## 📂 Project Structure

-   App.js --- Root component\
-   app.json --- Expo app configuration\
-   package.json --- Project metadata and dependencies\
-   assets/ --- Images, fonts, and static resources

## 🛠️ Scripts

-   npm start --- Starts Expo Dev Server\
-   npm run android --- Runs the app on Android\
-   npm run ios --- Runs the app on iOS (macOS only)\
-   npm run web --- Runs the app in a web browser

## 📦 Dependencies (Expo SDK 54)

Included by default:\
- expo\
- react\
- react-native

Install additional Expo APIs (example):\
npx expo install expo-camera expo-location

## 🔧 Environment Variables

You can configure environment variables using `.env` files.

**Example .env:**\
EXPO_PUBLIC_API_URL=https://example.com

**Use it in your code:**\
process.env.EXPO_PUBLIC_API_URL

## 📄 Building for Production

**Classic Expo Build:**\
npx expo build:android\
npx expo build:ios

**EAS (recommended):**\
npx eas build --platform android\
npx eas build --platform ios

Make sure `eas.json` is configured.

## 📘 Useful Links

-   Expo Docs: https://docs.expo.dev\
-   SDK 54 Release Notes: https://blog.expo.dev\
-   Expo Discord: https://chat.expo.dev
