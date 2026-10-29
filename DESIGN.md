---
name: Luminar Optical Care
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e4850'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7881'
  outline-variant: '#bec8d2'
  surface-tint: '#006591'
  primary: '#006591'
  on-primary: '#ffffff'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#89ceff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#00677f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a9ce'
  on-tertiary-container: '#003846'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#b6ebff'
  tertiary-fixed-dim: '#47d6ff'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e60'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-precision optometry, clinical trustworthiness, and contemporary aesthetic innovation. Designed for ophthalmic clinics, designer optical boutiques, and patient-first vision diagnostics, the visual language merges clinical clarity with avant-garde digital craft.

The aesthetic fuses crisp **Minimalism** with tactile **Soft Claymorphism** and refined **Glassmorphic** lens effects. Surfaces mimic ultra-pure optical glass and anti-reflective lenses: pure white backdrops, soft atmospheric depth, and luminous cyan accents that invoke laser precision, optical refraction, and visual restoration. The interface conveys pristine cleanliness, cutting-edge technology, and approachable medical professionalism.

## Colors

The palette establishes an ultra-luminous light theme driven by pristine ophthalmic cleanliness and high-contrast optical legibility:

- **Primary (`#0ea5e9`) & Tertiary (`#00d2ff`)**: Represent laser optics, biometric retinal clarity, and vital fluid hydration. Used for primary focus elements, interactive status triggers, active states, and focal vision indicators.
- **Secondary (`#0f172a`)**: Deep structural navy that anchors primary typography, frame silhouettes, and strong interface boundaries, ensuring high contrast against pure light surfaces.
- **Canvas & Surfaces**: Anchored in clinical pure white (`#ffffff`) and cool frosted mist (`#f8fafc` / `#f1f5f9`), layered with translucent glass washes (`rgba(255, 255, 255, 0.75)`).
- **Accents & States**: Emerald (`#10b981`) for confirmed diagnostic appointments and vision metrics; Amber (`#f59e0b`) for UV protection warnings; Coral Rose (`#f43f5e`) for optical alerts.

## Typography

The typographic strategy pairs the geometric, sculpted humanism of **Plus Jakarta Sans** for headlines and callouts with the utilitarian neutrality of **Inter** for technical prescription values, medical body copy, and catalog specs.

- **Headlines**: High-contrast, geometric curves echoing circular pupil shapes and eyewear rims. Tight letter spacing (`-0.02em`) creates an editorial, premium medical feel.
- **Body & Data**: Inter maintains supreme legibility across dense diopter metrics, cylindrical axes, and clinical schedules, even at compact sizes.
- **Labels & Badges**: Set in Plus Jakarta Sans SemiBold/Bold with uppercase letter spacing (`+0.04em`) for clear category labeling (e.g., "FILTRO LUZ AZUL", "PROGRESIVOS").

## Layout & Spacing

The layout embraces expansive negative space to symbolize 20/20 vision clarity and optical focus:

- **Grid Architecture**: A 12-column responsive fluid grid on desktop (`>1024px`) with `1.5rem` gutters and a maximum bounded width of `1280px`. Tablets (`768px - 1023px`) utilize an 8-column grid with `1rem` gutters. Mobile (`<768px`) condenses to a single or 4-column layout with `1rem` margins.
- **Breathing Room**: Vertical pacing employs spacious sections (`space-xl` to double `space-xl`) between diagnostic modules, catalog carousels, and patient intake sections, avoiding visual strain and clutter.

## Elevation & Depth

Depth in this system simulates lens refraction, polished acetate, and clay-like tactile cushioning:

- **Soft Claymorphism**: Achieved using dual-offset directional lighting. Elevated components combine a soft lower shadow (`0 10px 25px -5px rgba(15, 23, 42, 0.06)`) with a subtle internal top highlight (`inset 0 1px 1px 0 rgba(255, 255, 255, 0.95)`), producing a sculptured, organic surface touch.
- **Optical Glassmorphism**: Cards representing lens materials, AR coatings, or overlay menus feature frosted translucency (`background: rgba(255, 255, 255, 0.8)`, `backdrop-filter: blur(16px)`), reinforced by a subtle perimeter line (`border: 1px solid rgba(226, 232, 240, 0.8)`).
- **Luminous Bloom**: Active or focused elements emit a subtle cyan optical glare (`box-shadow: 0 0 20px -3px rgba(0, 210, 255, 0.35)`).

## Shapes

The geometric architecture is built on continuous smooth curves (`roundedness: 2`), reflecting the organic contours of ocular anatomy, spectacle frame radii, and ergonomic medical hardware.

Standard controls and interactive buttons leverage `0.75rem` to `1rem` (`rounded-lg`) corner radii. Lens comparison cards and featured visual showcases adopt generous `1.5rem` (`rounded-xl`) curves. Search pills, filter tags, and visual status chips feature full pill-shaped rounds (`9999px`) for touchable, friendly guidance.

## Components

### Buttons
- **Primary**: Gradient background transition from `#0ea5e9` to `#00d2ff` with deep `#0f172a` text or crisp pure white, soft top inner shine, and a diffuse cyan drop shadow. Smooth hover elevation with micro-lift (`translateY(-1px)`).
- **Secondary**: Frosted white surface (`#ffffff`) with a hairline border (`#e2e8f0`) and dark navy text (`#0f172a`), gaining an ethereal sky-blue border tint on hover.
- **Ghost/Tertiary**: Flat transparent background with `#0ea5e9` typography and subtle background tint on press.

### Eyewear & Lens Cards
Constructed with clinical perfection: a pure white or glass base with subtle outer stroke (`rgba(15, 23, 42, 0.05)`). Contains a dedicated staging pad with ultra-soft clay shadows to showcase frame silhouettes and lens tints cleanly.

### Diopter & Optical Input Fields
Inputs incorporate clear step controls, high-contrast numeric values in `Inter`, generous internal padding, and an inset background wash (`#f8fafc`). The active state triggers a crisp focus ring with a `2px` cyan refraction glow.

### Prescription Chips & Filter Badges
Pill-shaped toggles (`rounded-full`) that display polarization, blue-light block percentages, or frame sizes. Active chips transition from quiet slate borders to luminous cyan fill with deep navy typographic clarity.

### Diagnostic Sliders & Prescription Selectors
Tactile circular thumbs with dual-layer clay shadows that slide across frosted progress tracks, offering tactile, millimeter-precise feedback for pupillary distance (PD) measurements and prescription tuning.