# Module 5 — Battery & Power Issues

**Duration:** Day 3 · morning — ≈1 h theory + ≈1.25 h practical + quiz *(section timings below are full-depth; run at a brisk pace to fit)*
**Slides:** [slides/module-05-battery-power.html](slides/module-05-battery-power.html)
**Practical:** [practicals/practical-05-battery-power.md](practicals/practical-05-battery-power.md)
**Videos:** see Module 5 section of [resources/videos.md](resources/videos.md)
**Images:** [resources/images/battery-safety.svg](resources/images/battery-safety.svg), [resources/images/charging-circuit.svg](resources/images/charging-circuit.svg)

## Learning objectives
By the end of this module, students can:
1. Explain how a lithium-ion cell works: ~3.0–4.4 V range, capacity in mAh, and why
   cycles wear it out.
2. Recognize battery-health symptoms (fast drain, shutdowns under load, swelling,
   percentage jumps) and read health data on iOS and Android.
3. Remove and replace a glued battery safely — plastic tools only, never bend.
4. Trace the charging chain (charger → cable → port → charging IC → PMIC → battery)
   and diagnose a no-power phone step by step with ammeter and multimeter.
5. Decide when a power fault is board-level and must be referred out.
6. Debunk the common battery myths customers repeat.

## Materials
- 1 donor phone per pair with a replaceable battery + replacement battery and adhesive.
- 3 planted-fault diagnosis stations: (A) dead battery, (B) bad cable, (C) lint-packed
  charging port — plus known-good charger, cable, and battery for swaps.
- USB ammeter and multimeter per bench; IPA + tweezers; safety glasses; battery bin
  ready; fire extinguisher visible (re-point at it — this is the battery module).
- Printed diagnostic flowchart matching `charging-circuit.svg`.

## Session plan

### 1. Recap & quiz review (10 min) — slides 1–2
- 3 quick questions from Module 4 (test-before-sealing items, quality tiers).

### 2. How lithium-ion works (15 min) — slides 3–7
- One cell: nominal 3.7–3.85 V, **~3.0 V empty to ~4.4 V full** — outside that range
  the phone (or the cell) protects itself. Capacity = **mAh**; a 4,000 mAh battery at
  80% health behaves like a 3,200 mAh one.
- **Cycle wear:** every full charge-discharge cycle ages the chemistry; 500–800 cycles
  ≈ 80% health. Heat and deep discharge accelerate it.
- Revisit `battery-safety.svg` from Module 1 — the rules haven't changed: never
  puncture, bend, or pry with metal; swollen = battery bin.
- ▶ **Video 5.3** (battery health explained — see videos.md).

### 3. Reading battery health & symptoms (15 min) — slides 8–11
- Symptom set: fast drain, **random shutdowns under load** (camera/games — voltage sag),
  swelling (screen lifting is often the first sign), and **% jumps** (80 → 40 → dead).
- **iOS:** Settings → Battery → Battery Health (maximum capacity + peak performance).
- **Android:** varies — dial codes like `*#*#4636#*#*` on some models, manufacturer
  care apps, or third-party apps (AccuBattery-style measured capacity).
- Aftermarket-battery caveat: iPhones show "Service"/non-genuine messages after battery
  swaps — same customer conversation as Module 4's screens.

### 4. Safe removal & replacement (20 min) — slides 12–16
- ▶ **Video 5.1** (battery replacement walkthrough — see videos.md).
- Open → **battery disconnect first** (yes, before removing the battery itself).
- **Adhesive pull-tabs:** pull low and slow, parallel to the phone body, rolling around
  a spudger if long. Snapped tab → **IPA drip** under the battery, wait, lift gently.
- Stubborn battery: more IPA and patience, **plastic-only tools**, pry only where the
  guide says, **never bend the pouch**. A bent battery goes in the bin, not the phone.
- Fit: new adhesive/tabs, connect battery **last**, then post-repair test: boots,
  charges (watch the ammeter), reaches 100%, health reads as new.

### 5. The charging chain & no-power diagnosis (25 min) — slides 17–24
- Show `charging-circuit.svg`: **charger → cable → port → charging IC → PMIC → battery**,
  feeding the Module 2 block diagram (power in → PMIC → SoC → display/radios).
- Any link can fail; diagnosis = swap or measure each link cheapest-first:
  1. **Visual check:** port lint (most common "fault" in the shop!), bent pins,
     liquid indicators, board burns.
  2. **Known-good swaps:** charger, cable, then battery.
  3. **USB ammeter:** ~0 A = no path (port/cable/board); 0.05–0.2 A stuck low =
     board or battery not accepting charge; 0.5–2 A+ = charging normally.
  4. **Multimeter on battery terminals:** < 3.0 V = over-discharged (may recover with
     slow charge); 3.5–4.4 V = battery has charge, look elsewhere; 0 V = dead cell or
     blown protection.
- **Triage the "dead" phone:** no-power (no reaction at all) vs **no-display** (it
  vibrates/rings/shows charge current — screen fault, Module 4) vs **boot-loop**
  (logo cycles — often software, Module 9).
- **Refer out:** no current draw with known-good everything, burnt smell, shorted PMIC,
  liquid-damage boards → micro-soldering specialist (Module 7 explains why).
- ▶ **Video 5.2** (diagnosing a phone that won't turn on — see videos.md). Pause at each
  measurement and ask the class to predict the reading.

### 6. Battery myths & customer talk (5 min) — slides 25–26
- "Overnight charging ruins it" — no; charging stops at full (heat is the real enemy).
- "Drain to 0% to calibrate" — harmful on li-ion; occasional full cycle only to fix a
  wildly wrong % gauge, not as routine.
- Give customers the true advice: avoid heat, avoid 0%, any certified charger is fine.

### 7. Trainer demo & practical setup (5 min) — slides 27–28
- Demo a battery pull with tabs + IPA on the overhead camera; walk the flowchart once.

### 8. PRACTICAL (3 h)
Run [practicals/practical-05-battery-power.md](practicals/practical-05-battery-power.md):
- Part 1 — **battery replacement** on the donor phone per pair: mapped screws, battery
  disconnect sign-off, tab/IPA removal, new adhesive, post-repair charge test.
- Part 2 — **no-power diagnosis stations** with planted faults: (A) dead battery,
  (B) bad cable, (C) dirty port. Pairs rotate; each writes findings on the diagnostic
  flowchart sheet: symptom → measurements → conclusion → fix → verified.
- Rubric rewards *method* (correct order, readings written down) over lucky guesses.
- Bench cleanup inspection ends the session; all pulled batteries to the trainer for
  inspection before disposal decisions.

### 9. Quiz (10 min)
Module 5 quiz from [assessments/module-quizzes.md → Quiz 5](assessments/module-quizzes.md#quiz-5-battery-power-issues).

## Homework
- Check the battery health of your own phone and one family member's; note capacity,
  cycle count if shown, and what you would advise as a technician.
- Watch Video 6.1 (charging-port replacement) before Module 6.

## Common trainer pitfalls
- This module has the highest fire risk of the course: pre-check every donor battery
  for swelling yourself, and re-brief bin + extinguisher before the practical starts.
- Students lever under batteries with the metal spudger the second a tab snaps —
  stage the IPA bottle at every bench so the right move is the easy move.
- Don't plant subtle faults at the stations; beginners need clean, unambiguous
  signal-chain wins. Save trick faults for Module 9.
- Watch for students skipping the ammeter and guessing — require written readings on
  the flowchart sheet before they may swap parts.
