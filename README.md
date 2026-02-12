# Valentine's Day Website 💕

A fun, interactive Valentine's Day website where the "NO" button runs away when clicked!

## Features

- ✨ Animated floating hearts
- 📷 Polaroid-style image frames
- 🎯 YES button that shows success message
- 🏃 NO button that moves around when clicked
- 💚 Beautiful sage green and pink color scheme
- 📱 Mobile responsive

## Setup Instructions

### Step 1: Navigate to the project folder
```bash
cd valentines-day-app
```

### Step 2: Start the development server
```bash
npm start
```

The website will automatically open in your browser at `http://localhost:3000`

## Customization Guide

### Adding Your Own Images

1. Place your images in the `src` folder (e.g., `src/image1.jpg`, `src/image2.jpg`)

2. In `src/App.js`, import your images at the top:
```javascript
import image1 from './image1.jpg';
import image2 from './image2.jpg';
```

3. Replace the image placeholders (around lines 55-67):
```javascript
{/* Left polaroid */}
<div className="polaroid polaroid-left">
  <div className="polaroid-image">
    <img src={image1} alt="Memory 1" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
  </div>
</div>

{/* Right polaroid */}
<div className="polaroid polaroid-right">
  <div className="polaroid-image">
    <img src={image2} alt="Memory 2" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
  </div>
</div>
```

### Changing Colors

Edit `src/App.css`:

**Background gradient:**
```css
.container {
  background: linear-gradient(135deg, #ffd1dc 0%, #ffe4e9 100%);
  /* Change #ffd1dc and #ffe4e9 to your preferred colors */
}
```

**Question card background:**
```css
.question-card {
  background: rgba(118, 185, 160, 0.9);
  /* Change to your color */
}
```

**YES button:**
```css
.btn-yes {
  background: rgba(78, 150, 130, 0.9);
  /* Change to your color */
}
```

**NO button:**
```css
.btn-no {
  background: rgba(100, 120, 110, 0.8);
  /* Change to your color */
}
```

**Hearts color:**
```css
.heart {
  color: rgba(255, 105, 180, 0.3);
  /* Change to your color */
}
```

### Changing the Question

In `src/App.js`, find line ~71:
```javascript
<h1 className="question-text">WILL YOU BE MY GIRLFRIEND?</h1>
```

Change to whatever you want!

### Changing Success Message

In `src/App.js`, find lines ~26-29:
```javascript
<h1 className="success-text">🎉 Yay! 🎉</h1>
<p className="success-message">I knew you'd say yes! 💕</p>
```

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build` folder that you can host on any web server.

## Project Structure

```
valentines-day-app/
├── public/
├── src/
│   ├── App.js         # Main component
│   ├── App.css        # Styles
│   └── index.js       # Entry point
├── package.json
└── README.md
```

## Tips

- The NO button moves faster each time it's clicked
- On mobile devices, the polaroid images are hidden for a cleaner look
- You can add more images by creating more polaroid divs

Enjoy! 💝
