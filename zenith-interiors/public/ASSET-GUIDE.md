# 📁 Zenith Interiors - Asset Organization Guide

## 🗂️ Folder Structure

```
zenith-interiors/
├── public/
│   ├── logo/                    # Logo Zenith Studio
│   └── images/
│       ├── hero/                # Hero Section Assets
│       ├── services/            # 3 Service Package Icons
│       ├── process/             # 4 Process Step Icons
│       ├── features/            # Feature Overlays & Mockups
│       ├── testimonials/        # Client Photos
│       ├── portfolio/           # Portfolio Images (existing)
│       ├── projects/            # Project Images (existing)
│       ├── team/                # Team Photos (existing)
│       └── logos/               # Partner Logos (existing)
```

---

## 🏷️ File Naming Convention

### 1. **Logo Folder** (`public/logo/`)

| File Name | Description |
|-----------|-------------|
| `zenith-logo-gold.png` | Main logo with gold color (transparent background preferred) |
| `zenith-logo-white.png` | White version for dark backgrounds |
| `zenith-logo-black.png` | Black version for light backgrounds |

---

### 2. **Hero Folder** (`public/images/hero/`)

| File Name | Description | Usage |
|-----------|-------------|-------|
| `hero-texture-slate.jpg` | Dark slate texture background | Hero section background |
| `hero-gradient-overlay.png` | Gradient overlay (optional) | Layered over texture |

---

### 3. **Services Folder** (`public/images/services/`)

**3 Main Service Package Icons:**

| File Name | Description | Service Package |
|-----------|-------------|-----------------|
| `icon-blueprint-scroll.jpg` | Blueprint/scroll illustration | Brand Architecture Blueprint |
| `icon-ai-chip.jpg` | AI processor/chip illustration | AI Concierge Implementation |
| `icon-building-structure.jpg` | Building/structure illustration | Full System Integration |

**Recommended Size:** 400x400px minimum, square aspect ratio

---

### 4. **Process Folder** (`public/images/process/`)

**4 Process Step Icons (Cropped & Optimized):**

| File Name | Description | Process Step |
|-----------|-------------|--------------|
| `process-1-diagnosis.jpg` | Magnifying glass icon | Step 1: Diagnosis |
| `process-2-strategy.jpg` | Blueprint scroll icon | Step 2: Strategy |
| `process-3-ai-system.jpg` | Robot head/gear icon | Step 3: AI System |
| `process-4-launch.jpg` | Rocket icon | Step 4: Launch |

**Recommended Size:** 200x200px, square, transparent background if possible

---

### 5. **Features Folder** (`public/images/features/`)

| File Name | Description | Usage |
|-----------|-------------|-------|
| `feature-kitchen-overlay.jpg` | Kitchen set with blueprint lines | Feature showcase overlay |
| `feature-multi-device.jpg` | iPad & iPhone mockup | Responsive design showcase |
| `feature-dashboard.jpg` | Dashboard screenshot (optional) | Admin panel preview |

**Recommended Size:** 1200x800px minimum for hero features

---

### 6. **Testimonials Folder** (`public/images/testimonials/`)

**Client Photos (Already Exist):**

| File Name | Client Name | Company |
|-----------|-------------|---------|
| `maya.png` | Ibu Maya Wulandari | Maya's Design Lab |
| `roni.png` | Bapak Roni Susanto | PT. Karya Graha Utama |
| `dadang.png` | Kang Dadang Permana | Dapur Juara Custom |

**New Naming Convention (if renaming):**
- `client-maya-wulandari.jpg`
- `client-roni-susanto.jpg`
- `client-dadang-permana.jpg`

**Recommended Size:** 300x300px, square, professional headshot

---

## 📋 Asset Checklist

### ✅ **Priority 1 - Essential Assets**
- [ ] `zenith-logo-gold.png` - Main logo
- [ ] `hero-texture-slate.jpg` - Hero background
- [ ] `icon-blueprint-scroll.jpg` - Service 1 icon
- [ ] `icon-ai-chip.jpg` - Service 2 icon
- [ ] `icon-building-structure.jpg` - Service 3 icon

### ✅ **Priority 2 - Process Icons**
- [ ] `process-1-diagnosis.jpg` - Magnifying glass
- [ ] `process-2-strategy.jpg` - Blueprint
- [ ] `process-3-ai-system.jpg` - Robot/gear
- [ ] `process-4-launch.jpg` - Rocket

### ✅ **Priority 3 - Feature Showcases**
- [ ] `feature-kitchen-overlay.jpg` - Kitchen blueprint
- [ ] `feature-multi-device.jpg` - Device mockup

### ✅ **Priority 4 - Testimonials** (Already Done)
- [x] `maya.png` - Maya Wulandari
- [x] `roni.png` - Roni Susanto
- [x] `dadang.png` - Dadang Permana

---

## 🎨 Image Optimization Guidelines

### **Format Recommendations:**
- **Logos**: PNG with transparency
- **Icons**: PNG or SVG (vector preferred)
- **Photos**: JPG (optimized, 80-85% quality)
- **Illustrations**: PNG or WebP

### **Size Guidelines:**
- **Logos**: Max 100KB
- **Icons**: Max 50KB each
- **Hero Images**: Max 500KB
- **Feature Images**: Max 300KB
- **Testimonial Photos**: Max 100KB

### **Tools for Optimization:**
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

---

## 🔧 Usage in Code

### **Example: Using Logo**
```tsx
<img src="/logo/zenith-logo-gold.png" alt="Zenith Studio" />
```

### **Example: Using Service Icon**
```tsx
<img src="/images/services/icon-blueprint-scroll.jpg" alt="Brand Architecture" />
```

### **Example: Using Process Icon**
```tsx
<img src="/images/process/process-1-diagnosis.jpg" alt="Diagnosis Step" />
```

### **Example: Using Testimonial Photo**
```tsx
<img src="/images/testimonials/maya.png" alt="Maya Wulandari" />
```

---

## 📝 Notes

1. **Consistent Naming**: Always use lowercase with hyphens (kebab-case)
2. **Descriptive Names**: File names should describe the content
3. **SEO Friendly**: Use keywords in file names when possible
4. **Version Control**: Keep original high-res files in a separate backup folder
5. **WebP Support**: Consider creating WebP versions for better performance

---

## 🚀 Next Steps

1. Download/generate required assets
2. Rename files according to this convention
3. Optimize images for web
4. Place in appropriate folders
5. Update component imports if needed

---

**Last Updated**: November 23, 2025  
**Maintained by**: Zenith Studio Development Team
