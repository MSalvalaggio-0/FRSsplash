# FRS Automotive Solutions - Image Assets

This folder contains all image assets for the FRS Automotive Solutions website. All images follow our brand guidelines with a corporate color scheme of navy blue (#0c2340), silver/light gray (#f8f9fa), and accents of red (#c8102e).

## Required Images

### Logo Files
- **logo.png**: Primary color logo with transparent background (200×50px)
- **logo-white.png**: White version of logo for dark backgrounds (200×50px)

### Background Images
- **hero-bg.jpg**: Hero section background (1920×1080px)
  * Professional image of luxury vehicles or corporate automotive setting
  * Dark overlay applied via CSS to ensure text readability
  
- **service-bg.jpg**: Subtle background for services section (1920×1080px)
  * Light, abstract pattern or automotive-related imagery
  * Used with low opacity (3%)

### Content Images
- **expertise.jpg**: Image representing company expertise (800×600px)
  * Professional team in corporate setting or technical automotive operation
  
- **corporate-team.jpg**: Team photo for about section (800×600px)
  * Professional group photo of management team

## Image Implementation

### CSS Usage
Images are referenced in the CSS file at these locations:
- Hero background: `.hero-section` (line 321)
- Services background: `.services-section::before` (line 390)
- Other images are referenced directly in the HTML

### Responsive Considerations
- All images are responsive via CSS `max-width: 100%; height: auto;`
- Hero image uses `background-size: cover;` for proper scaling
- Mobile optimization with appropriate image sizing

## Image Requirements
- All JPG images compressed to 75-85% quality
- All images optimized for Retina displays (2x resolution where possible)
- Maximum file sizes enforced:
  * Hero image: 300KB
  * Content images: 150KB 
  * Service background: 200KB
  * Logo files: 30KB

## Image Acquisition Guidelines
- Use professional stock photography with commercial licensing
- Maintain consistent style across all imagery (corporate, professional)
- Follow color scheme guidelines (navy blue, silver, accents of red)
- Prefer images with neutral backgrounds that work with overlays
