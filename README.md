# Jeremiah Onyije - Personal Website

A minimal, modern, and responsive personal website featuring profile information and call-to-action buttons.

## Features

- **Dark, Minimalistic Design**: Modern dark theme (#121212) with professional aesthetic
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop devices
- **Profile Section**: 
  - Circular profile photo at the top
  - Large, bold name display
  - Professional description in light gray
- **Call-to-Action Buttons**: 
  - "View CV" button (white background, dark text)
  - "Send Email" button (transparent with border, white text)
- **Centered Layout**: All content centered vertically and horizontally

## Setup Instructions

1. **Profile Photo**:
   - The profile photo is already set to `jeremiah-onyije-profile.jpg`
   - Make sure this image file is in the same directory as `index.html`
   - The image will be automatically cropped to a circle and resized to 180px

2. **Add Your CV/Resume**:
   - Place your CV PDF in the project root directory
   - Name it `resume.pdf` (or update the filename in `index.html`)

3. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

## Customization

- **Colors**: Edit the CSS variables in `styles.css` (lines 8-14)
  - `--dark-bg`: Main background color (default: #121212)
  - `--text-white`: Primary text color (default: #ffffff)
  - `--text-gray`: Secondary text color (default: #b3b3b3)
- **Content**: Edit the name in `index.html` (line 23) and profile text (lines 28-30)
- **Contact Email**: Update the mailto link in `index.html` (line 37)
- **CV Link**: Update the CV filename in `index.html` (line 34)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for all screen sizes
- Graceful degradation for older browsers

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript for interactions
├── README.md           # This file
├── jeremiah-onyije-profile.jpg # Profile photo (already configured)
└── resume.pdf          # Your CV/Resume (to be added)
```

## Design Notes

- **Dark Theme**: Professional dark background with white and gray text
- **Circular Photo**: 180px circular profile photo with subtle border
- **Typography**: Large, bold name (2.5rem) with subtle letter spacing
- **Button Styles**: Primary button is white with dark text, secondary is transparent with white text
- **Centered Layout**: Content is centered both vertically and horizontally
- The profile photo will display a placeholder icon if the image is not found
- The email button opens the user's default email client
- The CV button opens the PDF in a new tab

