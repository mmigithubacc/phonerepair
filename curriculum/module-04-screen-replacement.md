# Module 4 — Screen & Display Replacement

**Duration:** Day 2 · afternoon — ≈1 h theory + ≈1.25 h practical + quiz *(section timings below are full-depth; run at a brisk pace to fit)*
**Slides:** [slides/module-04-screen-replacement.html](slides/module-04-screen-replacement.html)
**Practical:** [practicals/practical-04-screen-replacement.md](practicals/practical-04-screen-replacement.md)
**Videos:** see Module 4 section of [resources/videos.md](resources/videos.md)
**Images:** [resources/images/screen-layers.svg](resources/images/screen-layers.svg)

## Learning objectives
By the end of this module, students can:
1. Name the layers of a screen stack (cover glass / digitizer / LCD or OLED / frame)
   and explain LCD vs OLED failure signatures.
2. Distinguish fused from separable assemblies and choose the right replacement strategy.
3. Compare part quality tiers (OEM / pulled-original / refurbished / aftermarket
   incell-OLED) and explain price and warranty consequences to a customer.
4. Remove glued and frame-mounted screens without collateral damage.
5. Transfer small parts, re-apply adhesive correctly, and **test before sealing**.

## Materials
- 1 powered donor phone per pair + a matching replacement screen (aftermarket is fine).
- Sample parts to pass around: cracked-glass-working-LCD, dead OLED with green-line
  fault, separated digitizer, examples of two quality tiers side by side.
- Heating pad/heat gun, suction cups, picks, pre-cut adhesive + adhesive tape + B-7000,
  safety glasses.
- Printed test protocol checklist (from the practical worksheet), one per bench.

## Session plan

### 1. Recap & quiz review (10 min) — slides 1–2
- 3 quick questions from Module 3 (battery-first, ZIF handling, test-before-sealing).
- Spot-check two students' homework checklists.

### 2. The screen stack (15 min) — slides 3–7
- Show `screen-layers.svg`: **cover glass → touch digitizer → LCD or OLED panel → frame.**
- **LCD vs OLED:** LCD has a backlight and survives glass cracks with an ugly-but-working
  image; OLED pixels emit their own light, and a cracked OLED shows **green/pink lines
  and spreading black blobs** — pass around the sample panels.
- **Fused vs separable:** most modern assemblies are fused (glass laminated to panel) —
  glass-only replacement needs lamination machines, so shops replace the full assembly.
- ▶ **Video 4.3** (screen quality tiers / OLED vs LCD explained — see videos.md).

### 3. Part quality tiers & the money conversation (15 min) — slides 8–11
- Tiers: **OEM/service-pack** (best, priciest) → **pulled original** (from donor phones)
  → **refurbished** (original panel, new glass) → **aftermarket** (incell LCD copies of
  OLED phones; cheapest — thicker, dimmer, weaker touch).
- Quality drives price *and* your warranty risk: a cheap panel that fails in a week
  costs you the redo plus the customer. Quote tiered prices; let the customer choose.
- iPhone caveat introduced here, tested later: non-genuine screens trigger
  "Important Display Message" warnings and can lose **True Tone** (serialization).
  Customers must be told *before* the repair, not after.

### 4. Removal procedures (20 min) — slides 12–17
- **Glued screens:** heat the perimeter to **80–100 °C** surface, suction cup to lift a
  gap, pick in, work around the perimeter. Slide notes carry the danger map: **watch the
  flex cable positions** (usually one edge is off-limits for deep picks).
- ▶ **Video 4.1** (glued screen replacement walkthrough — see videos.md). Pause at the
  cable-danger moments and quiz: "why did the pick stop there?"
- **Frame-mounted (many Androids):** the screen is reached from the back — remove back
  cover, battery disconnect, then push the assembly out of the frame or replace
  screen+frame as a unit.
- ▶ **Video 4.2** (frame-mounted/Android screen replacement — see videos.md).
- Both routes obey Module 3 law: open → **battery disconnect** → then the screen.

### 5. Fitting the new screen (15 min) — slides 18–22
- **Transfer small parts** from old to new assembly: earpiece mesh, proximity sensor
  brackets, backplates, camera foam. A forgotten proximity bracket = customer's cheek
  hangs up calls — the classic comeback.
- **Adhesive re-application:** pre-cut adhesive (best fit) vs adhesive tape (cut to
  shape) vs **B-7000 glue** (thin bead, clamp, cure time — don't gas up the camera lens).
  Clean all old adhesive with IPA first.
- **Common failures to avoid:** torn backlight flex on LCDs (dark screen, phone alive),
  dust sealed under the glass (clean with air + microfiber immediately before closing).

### 6. TEST BEFORE SEALING (10 min) — slides 23–25
- The protocol, in order, adhesive still unpeeled: power on → **touch grid** (drag icon
  over every screen zone) → **dead pixels** (full-white and full-black image) →
  **brightness range** → **proximity sensor** (call + hand over earpiece) → earpiece
  audio → front camera unobstructed.
- iPhone: check for the non-genuine display warning and True Tone; explain serialization
  to the class — it's a policy limit, not a skill failure.
- Only after every line passes: peel adhesive, seal, clamp.

### 7. Trainer demo & practical setup (5 min) — slides 26–27
- Demo one full replacement on the overhead camera, narrating the test protocol.

### 8. PRACTICAL (3 h)
Run [practicals/practical-04-screen-replacement.md](practicals/practical-04-screen-replacement.md):
- **Each pair replaces the screen on a powered donor phone**, both students performing
  at least removal or refit end-to-end.
- Mandatory: screw map, battery disconnect (trainer sign-off), small-parts transfer,
  **full test protocol before sealing** (trainer witnesses the checklist).
- Grade with the rubric (graded stations: opening damage, cable handling, parts
  transfer, adhesive work, test protocol, final function).
- Bench cleanup inspection ends the session.

### 9. Quiz (10 min)
Module 4 quiz from [assessments/module-quizzes.md → Quiz 4](assessments/module-quizzes.md#quiz-4-screen-display-replacement).

## Homework
- Price a screen replacement for one popular local model in two quality tiers (part
  cost + your labor); bring the numbers — Module 10 builds on them.
- Watch Video 5.1 (battery replacement walkthrough) before Module 5.

## Common trainer pitfalls
- Students seal before testing the moment you stop watching — physically hold the
  adhesive liners at the trainer desk until the checklist is signed.
- Overheating: beginners park the heat gun in one spot and cook the OLED. Heating pads
  are safer; if using guns, enforce constant motion.
- The proximity bracket is the most-forgotten small part — make it a named rubric line.
- Don't let pairs split into "one does everything, one watches"; swap roles at the
  midpoint bell.
