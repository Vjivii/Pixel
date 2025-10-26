# PixelArt Camera PWA

A Progressive Web App that lets you take pixel art photos instantly on your iPhone.

## Features

- 📷 Real-time pixel art camera effect
- 📱 Works offline after first load
- 💾 Saves photos directly to your phone
- ⚡ No app store needed - add to home screen
- 🎨 Instant pixelation effect

## How to Use

### On iPhone:

1. Open Safari and navigate to this website
2. Tap the **Share** button (square with arrow)
3. Select **Add to Home Screen**
4. Open the app from your home screen
5. Grant camera permissions when prompted
6. Start taking pixel art photos!

### Development:

1. Start a local server:
   ```bash
   python -m http.server 8000
   ```
   or
   ```bash
   npx serve .
   ```

2. Open `http://localhost:8000` in your browser

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
