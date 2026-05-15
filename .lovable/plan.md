The previous logo generation baked the grey transparency-checkerboard into the PNG instead of producing a real transparent background, so it shows as a grey rectangle behind the logo in the header.

### Fix
Regenerate `src/assets/logo-borgo.png` using `imagegen--generate_image` with `transparent_background: true` (the dedicated transparent-background path, more reliable than edit_image for true alpha):
- Gold fern leaf on the left, same size/color as current
- "Borgo" in elegant script + "MUSOLINO" in serif capitals, both in cream/ivory (#f5f0e0)
- Small gold diamond ornaments + thin gold rule
- Tagline "FOREST EXPERIENCE" in the same cream/ivory
- Truly transparent PNG (real alpha channel, no checkerboard pattern)

No other files change — `Header.tsx` already imports the logo correctly.