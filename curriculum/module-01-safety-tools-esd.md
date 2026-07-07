# Module 1 — Workshop Safety, Tools & ESD

**Duration:** 2 h theory + 2 h practical
**Slides:** `slides/module-01-safety-tools-esd.html`
**Practical:** `practicals/practical-01-safety-tools-esd.md`
**Videos:** see Module 1 section of `resources/videos.md`
**Images:** `resources/images/esd-workstation.svg`, `resources/images/toolkit.svg`, `resources/images/battery-safety.svg`

## Learning objectives
By the end of this module, students can:
1. Explain what ESD (electrostatic discharge) is and why invisible discharges kill electronics.
2. Set up and verify a grounded ESD workstation (mat + wrist strap).
3. Name and correctly select every tool in the standard repair kit, including screwdriver
   types (Phillips, Pentalobe, Torx, Tri-point) and their sizes.
4. State and apply the 8 workshop safety rules, especially lithium battery handling.
5. Respond correctly to a battery fire or swollen battery.

## Materials
- Full toolkit per bench (see trainer guide), ESD mats + straps, strap tester.
- One deliberately swollen battery in a clear fire-safe container (demo only — trainer handles it).
- Balloon + small paper scraps (static demo), or a piezo lighter igniter (spark demo).
- Sand-filled battery bin, fire extinguisher, safety glasses.

## Session plan

### 1. Welcome & course roadmap (15 min) — slides 1–4
- Introductions; ask each student why they joined and what phone faults they've experienced.
- Walk through the 10-module map and how grading/certification works.

### 2. Workshop safety rules (20 min) — slides 5–8
- Present the 8 safety rules. For each, tell a real consequence story (slide notes include examples).
- **Lithium battery safety** is the core: show `battery-safety.svg`; explain thermal
  runaway — puncture/bend → internal short → heat → fire that water won't easily stop.
- ▶ **Video 1.1** (battery puncture demonstration — see videos.md). Debrief: "What two
  mistakes cause this in a repair shop?" (prying under the battery with metal; overheating).
- Demo: show the swollen battery in its container. Explain: never press, never charge,
  straight to the battery bin, sell/store nothing swollen.

### 3. ESD — the invisible killer (25 min) — slides 9–13
- Static demo: rub balloon, pick up paper scraps. You felt nothing — yet that's
  thousands of volts. Humans feel discharge only above ~3,000 V; many phone ICs are
  damaged below 100 V. **Most ESD damage is invisible and kills the board slowly.**
- Show `esd-workstation.svg`: mat → common ground point → wrist strap → earth.
- Demo on the demo bench: connect mat, clip strap, test strap with the tester.
- ▶ **Video 1.2** (ESD explanation & workstation setup). 
- Q&A prompt from notes: "Why is a wrist strap with a broken cord worse than no strap?"
  (false confidence — you *think* you're grounded).

### 4. Know your tools (35 min) — slides 14–20
- Show `toolkit.svg`, then hold up each real tool as it appears on the slide:
  - **Drivers:** Phillips PH000/PH00 (most Android internals), Pentalobe P2/P5
    (iPhone externals), Tri-point Y000 (iPhone internals), Torx T3–T6. Rule:
    *if it slips, it strips* — always the largest driver that fits, press down firmly.
  - **Opening:** suction cup, picks, plastic cards, plastic vs metal spudger
    (metal never near battery or flex cables).
  - **Handling:** ESD tweezers straight vs curved; magnetic mat + screw mapping.
  - **Heat:** heat gun vs heating pad; 80–100 °C surface target for adhesive.
  - **Chemical:** isopropyl alcohol ≥ 99% — why 70% household alcohol is not OK (water content).
  - **Measurement:** multimeter (continuity beep = your best friend), USB ammeter.
- Pass tools around the class while talking.

### 5. Recap & quiz setup (15 min) — slides 21–23
- Teach-back: one student explains ESD setup to the class; another explains driver selection.
- Announce practical; assign benches (pair beginners with any experienced students).

### 6. PRACTICAL (2 h)
Run `practicals/practical-01-safety-tools-esd.md`:
- Station A: set up and verify an ESD workstation from scratch.
- Station B: tool identification race (20 tools, name + use).
- Station C: driver-matching exercise on donor phones (find the right bit without stripping).
- Station D: safety scenario cards (swollen battery, smoking battery, spilled IPA...).
- Grade with the rubric; bench cleanup inspection ends the session.

### 7. Quiz (10 min)
Module 1 quiz from `assessments/module-quizzes.md`.

## Homework
- Memorize the 8 safety rules (recited at random next session).
- Watch Video 1.3 (full teardown preview) before Module 2 — just watch, noticing tools used.

## Common trainer pitfalls
- Don't rush ESD because "nothing visibly breaks" — invisible latent damage is exactly the lesson.
- Don't let students handle the swollen battery, even in its container.
- Check every wrist strap with the tester on day one; dead straps are common out of the box.
