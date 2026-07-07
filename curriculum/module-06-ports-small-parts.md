# Module 6 — Charging Ports, Buttons & Small-Part Repairs

**Duration:** 1.5 h theory + 3 h practical
**Slides:** `slides/module-06-ports-small-parts.html`
**Practical:** `practicals/practical-06-ports-small-parts.md`
**Videos:** see Module 6 section of `resources/videos.md`
**Images:** `resources/images/charging-circuit.svg`

## Learning objectives
By the end of this module, students can:
1. Clean a lint-packed charging port safely and verify the fix with a USB ammeter —
   and explain why this is the single most common "broken port" repair.
2. Diagnose a charging fault systematically: charger vs cable vs port vs charging IC,
   using substitution and ammeter readings.
3. Classify a port's mounting type (flex cable, sub-board, or soldered to the main board)
   and state which of the three a beginner can replace.
4. Replace a charging sub-board/flex, loudspeaker, earpiece, microphone, camera module,
   vibration motor, button flex, and SIM reader on common phones.
5. Preserve water-seal gaskets and adhesive during small-part reassembly, and warn the
   customer honestly when a seal cannot be restored.

## Materials
- Donor phones per bench with working charging (trainer packs several ports with lint
  beforehand — press compressed lint in with a toothpick; label these phones).
- Wooden/plastic picks (toothpicks, plastic dental picks — no metal), air blower/canned air,
  IPA ≥ 99% + brushes, USB ammeter + known-good charger and cable per bench.
- Replacement charging sub-boards/flexes and loudspeakers matched to donor models;
  spare gasket/adhesive kits.
- One iPhone with cameras swapped between two units (serialization demo), if available.

## Session plan

### 1. Recap & quiz review (10 min) — slides 1–2
- 3 quick questions from Module 5 (battery safety, charging chain, no-power diagnosis).
- Hook question: "A customer says the port is broken and the cable falls out. What's
  the most likely fault?" Collect guesses; reveal at the end of section 2.

### 2. The lint secret (15 min) — slides 3–6
- **The most common "broken port" is not broken — it's packed with pocket lint.**
  Cable won't click, falls out, or charges only at an angle → suspect lint first.
- Cleaning technique, demoed live under the overhead camera:
  wooden/plastic pick (never metal — shorting pins or bending them ends the port),
  gentle scrape along the back wall, air blower, then IPA on a brush if grime remains.
  Show the shocking amount of felt-like compacted lint that comes out.
- ▶ **Video 6.1** (charging port diagnosis & cleaning — see videos.md).
- Rule: **clean before you quote.** A 2-minute free fix earns a customer for life;
  replacing a port that only needed cleaning is malpractice.

### 3. Diagnosing the charging chain (20 min) — slides 7–12
- Show `charging-circuit.svg`: charger → cable → port → charging IC → battery.
  A charging fault lives at exactly one link — find it, don't guess.
- **Substitution method:** known-good charger, then known-good cable, then test the
  suspect charger/cable on a known-good phone. Two swaps eliminate half the chain.
- **USB ammeter:** plug in-line and read current. Roughly: ~0 A = no connection
  (lint, dead port, dead IC); low/fluctuating = dirty or damaged port/cable;
  normal (device-dependent, often 1–2 A+) = chain is fine, suspect battery or software.
- Wiggle test: current drops when the connector is wiggled → port or cable, not IC.
- Port cleaned, chain substituted, still ~0 A → port replacement, and if a new port
  doesn't fix it → charging IC, which is board-level work (Module 7 explains why we refer out).

### 4. Port mounting types (10 min) — slides 13–15
- **On a flex cable** (most iPhones): port + mic + antenna on one flex — beginner-replaceable.
- **On a sub-board** (most Androids): small daughterboard connected by a board-to-board
  connector or interconnect flex — beginner-replaceable, often the easiest repair in the course.
- **Soldered directly to the main board** (many budget phones, tablets): requires hot-air
  or careful iron work — **Module 7 territory; refer out until trained.**
- Teach students to check ifixit for the model *before* quoting a port job.

### 5. Small parts tour (25 min) — slides 16–22
- ▶ **Video 6.2** (charging port sub-board/flex replacement — see videos.md).
- ▶ **Video 6.3** (speaker/camera/small parts replacement — see videos.md).
- **Loudspeaker:** usually a drop-in module with spring contacts — screws out, swap, done.
- **Earpiece:** smaller, near the top; some sit behind the screen assembly.
- **Microphones:** often live on the charging flex/sub-board — a "mic fault" quote may
  actually be a port-flex job. No sound on calls but OK on speakerphone = bottom mic.
- **Camera modules:** plug-in units on press-fit connectors. **iPhone caveat: newer
  iPhones serialize cameras** — a swapped camera may lose features (e.g. portrait mode)
  or throw warnings. Genuine-part pairing matters; set customer expectations.
- **Vibration motors:** coin types on spring contacts or plugs; linear/taptic units screwed in.
- **Power/volume button flexes:** external button caps press internal flex switches;
  routing is fiddly — photograph before removal.
- **SIM readers:** usually soldered (refer out), but bent tray/pin damage is often the
  real fault — inspect the tray first.

### 6. Gaskets, seals & recap (10 min) — slides 23–25
- Water-resistant phones seal with gaskets and adhesive around ports, buttons, and
  speaker meshes. Torn or re-used seals = lost water resistance.
- Rules: replace adhesive/gaskets where new ones exist; never tell a customer the phone
  is still waterproof after an opening — say "water resistance cannot be guaranteed."
- Teach-back: one student recites the charging-chain diagnosis order; another lists
  the three port mounting types and which is off-limits.

### 7. PRACTICAL (3 h)
Run `practicals/practical-06-ports-small-parts.md`:
- Station A: port cleaning — take a baseline ammeter reading on a lint-packed phone,
  clean with pick/air/IPA, record the before/after readings on the worksheet.
- Station B: replace a charging sub-board or port flex on a donor phone; verify with
  the ammeter afterwards.
- Station C: replace a loudspeaker; test with a ringtone before final reassembly.
- Station D: full function test — charging, both speakers, mics, cameras, all buttons,
  SIM detection — using the checklist; gasket condition noted at reassembly.
- Grade with the rubric; bench cleanup inspection ends the session.

### 8. Quiz (10 min)
Module 6 quiz from `assessments/module-quizzes.md`.

## Homework
- Clean the charging port of your own (or a family member's) phone with a wooden pick;
  report what came out next session.
- Watch Video 7.1 (soldering basics for beginners) before Module 7 — just watch,
  noticing how the iron touches pad and pin together.

## Common trainer pitfalls
- Don't skip the ammeter baseline reading — the before/after numbers are what turn
  "I cleaned it" into evidence-based diagnosis.
- Students will reach for metal tweezers to pick lint; confiscate on sight. One
  shorted or bent pin turns a free fix into a port replacement.
- Prepare the lint-packed phones days ahead and test them yourself — loosely packed
  lint falls out and ruins the exercise.
- Don't let the camera-serialization caveat slide by: a student who swaps iPhone
  cameras without warning the customer will face an angry return.
- Test every phone's charging *before* class; a donor phone with a dead charging IC
  will silently eat a student's entire afternoon.
