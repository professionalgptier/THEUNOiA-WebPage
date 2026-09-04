# THEUNOiA — Background Resources

Curated backgrounds matching the brand palette (navy `#0A1B37`, gold `#CBA96B`, terracotta `#C06B3E`, beige `#B7AA9A`, ivory `#F3EFE6`) and the ocean/depth theme.

---

## 🌊 Deep Ocean / Underwater Photography (Free, Unsplash)

Perfect for the **Hero**, **Ocean Theory**, and **Behind the Name** sections.

| Link | Description |
|---|---|
| [unsplash.com/s/photos/deep-ocean](https://unsplash.com/s/photos/deep-ocean) | Deep blue ocean shots — light rays, abstract water |
| [unsplash.com/s/photos/underwater-dark](https://unsplash.com/s/photos/underwater-dark) | Dark underwater environments |
| [unsplash.com/s/photos/ocean-surface-dark](https://unsplash.com/s/photos/ocean-surface-dark) | Moody ocean surface shots |
| [unsplash.com/s/photos/caustic-light-water](https://unsplash.com/s/photos/caustic-light-water) | Caustic light patterns on water |
| [unsplash.com/s/photos/dark-blue-abstract](https://unsplash.com/s/photos/dark-blue-abstract) | Abstract dark blue textures |
| [unsplash.com/s/photos/dark-navy-waves](https://unsplash.com/s/photos/dark-navy-waves) | Dark navy wave textures |

> [!TIP]
> Search for "dark ocean", "underwater abstract", or "deep blue water" on Unsplash. All images are **free for commercial use**, no attribution required.

---

## 🎨 Abstract & Fluid Art (Free)

Perfect for **section dividers** and **decorative backgrounds**.

| Link | Description |
|---|---|
| [unsplash.com/s/photos/dark-blue-gold-fluid](https://unsplash.com/s/photos/dark-blue-gold-fluid) | Navy + gold fluid art |
| [unsplash.com/s/photos/dark-blue-gold-abstract](https://unsplash.com/s/photos/dark-blue-gold-abstract) | Abstract dark blue & gold textures |
| [unsplash.com/s/photos/dark-marble-gold](https://unsplash.com/s/photos/dark-marble-gold) | Dark marble with gold veins |
| [unsplash.com/s/photos/liquid-gold-dark](https://unsplash.com/s/photos/liquid-gold-dark) | Liquid gold on dark backgrounds |
| [pexels.com/search/dark%20blue%20abstract](https://www.pexels.com/search/dark%20blue%20abstract/) | Dark blue abstract (Pexels) |
| [pexels.com/search/underwater%20dark](https://www.pexels.com/search/underwater%20dark/) | Underwater dark (Pexels) |

---

## 🌊 SVG Wave Generators (Create Custom Waves)

Generate custom SVG wave dividers matching the brand colors. Export and use as section separators.

| Tool | Link | Best For |
|---|---|---|
| **Get Waves** | [getwaves.io](https://getwaves.io/) | Simple wave section dividers |
| **Haikei** | [haikei.app](https://haikei.app/) | Layered waves, blobs, gradients, stacked waves |
| **SVG Wave** | [svgwave.in](https://svgwave.in/) | Multi-layer animated waves |
| **Shape Dividers** | [shapedivider.app](https://www.shapedivider.app/) | Section shape dividers |

> [!IMPORTANT]
> Use the brand colors when generating: Navy `#0A1B37`, Navy Deep `#060f22`, Gold `#CBA96B` with low opacity for subtle layering.

---

## ✨ CSS Animated Gradient Backgrounds

Drop-in CSS for animated gradient backgrounds matching the palette:

### Navy-Gold Animated Gradient (for Hero/CTA)
```css
.animated-gradient {
  background: linear-gradient(-45deg, #060f22, #0A1B37, #1a2d4d, #0A1B37);
  background-size: 400% 400%;
  animation: gradient-shift 20s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Navy-Gold-Terracotta Animated Gradient (for special sections)
```css
.brand-gradient {
  background: linear-gradient(-45deg, #060f22, #0A1B37, #1a2d4d, #192a40);
  background-size: 400% 400%;
  animation: brand-shift 25s ease infinite;
}

/* Gold accent glow overlay */
.brand-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(203,169,107,0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 80%, rgba(192,107,62,0.05) 0%, transparent 50%);
  pointer-events: none;
}
```

---

## 🎥 Video Backgrounds (Free)

For hero sections or fullscreen backgrounds. Use as `<video>` or convert to WebM.

| Link | Description |
|---|---|
| [pexels.com/search/videos/dark%20ocean](https://www.pexels.com/search/videos/dark%20ocean/) | Dark ocean video clips |
| [pexels.com/search/videos/underwater%20light](https://www.pexels.com/search/videos/underwater%20light/) | Underwater light ray videos |
| [videezy.com (water caustic)](https://www.videezy.com/free-video/water-caustic) | Water caustic effect loops |
| [vecteezy.com (dark ocean 4K)](https://www.vecteezy.com/free-videos/dark-ocean) | Dark ocean 4K stock videos |
| [coverr.co](https://coverr.co/) | Free website video backgrounds |

> [!TIP]
> For video backgrounds, compress to WebM format and keep under 5MB for good performance. Use the `poster` attribute with a static image fallback.

---

## 🔧 Pattern & Texture Tools

Generate subtle textures to layer over solid backgrounds.

| Tool | Link | Best For |
|---|---|---|
| **Hero Patterns** | [heropatterns.com](https://heropatterns.com/) | Subtle SVG repeat patterns |
| **Pattern Monster** | [pattern.monster](https://pattern.monster/) | Geometric SVG patterns |
| **Grainy Gradients** | [csshero.org/mesher](https://csshero.org/mesher/) | Mesh gradient generator |
| **Noise & Texture** | [noiseandgradient.com](https://www.noiseandgradient.com/) | Noisy gradient backgrounds |
| **Transparent Textures** | [transparenttextures.com](https://www.transparenttextures.com/) | Subtle overlay textures |

---

## 📋 Recommended Per Section

| Section | Background Approach |
|---|---|
| **Hero** | Keep the OceanCanvas animation + layer a subtle dark ocean photo underneath as a `poster` fallback |
| **Behind the Name** | Subtle navy with a faint gold mesh gradient overlay |
| **Ocean Theory** | Current radial gradient (`#060f22 → #030811`) + add a faint underwater photo with `opacity: 0.1` |
| **Pillars** | Current navy with glass-card styling — add a subtle hero pattern overlay |
| **Stats** | Current gradient (`#0A1B37 → #12294f`) works well — could add faint particle texture |
| **Team Teaser** | Ivory/beige section — could use a subtle warm linen texture from Transparent Textures |
| **CTA** | Navy-to-beige gradient — consider a subtle wave SVG divider from GetWaves |
| **Footer** | Keep solid beige — matches brand guide |
