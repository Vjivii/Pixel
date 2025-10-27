# PixelArt Camera PWA

A Progressive Web App that lets you take pixel art photos instantly on your iPhone.

## Features

- 📷 Real-time pixel art camera effect (see the effect live!)
- 📱 Works offline after first visit
- 💾 Saves photos to Photos app using Web Share API
- ⚡ No app store needed - add to home screen
- 🎨 Adjustable pixelation effect
- 🔄 No mirroring - photos look correct

## How to Use

### On iPhone:

**First Time Setup (Internet Required):**
1. Open Safari and navigate to this website
2. Wait for the app to load (service worker will cache for offline)
3. Tap the **Share** button (square with arrow)
4. Select **Add to Home Screen**
5. Open the app from your home screen
6. Grant camera permissions when prompted

**Now It Works Offline:**
- Go to airplane mode if you want
- Open the app from your home screen
- Works without internet! 🎉

### Using the App:

1. Point your camera at the subject
2. See the live pixel art effect in real-time
3. Tap the white button to capture
4. Choose "Save to Photos" in the share sheet
5. Your photo is saved! Check the Photos app

## Technical Details

- **Service Worker**: Enables offline functionality
- **Camera API**: Uses `getUserMedia` for camera access
- **Canvas API**: Applies pixelation effect in real-time
- **PWA Manifest**: Configured for iOS home screen installation

## Browser Support

Works on:
- Safari (iOS 11.3+)
- Chrome (Android)
- Other modern browsers supporting Camera API and Service Workers
