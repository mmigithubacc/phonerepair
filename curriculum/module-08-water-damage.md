# Module 8 — Water Damage & Corrosion Treatment

**Duration:** 1.5 h theory + 3 h practical
**Slides:** `slides/module-08-water-damage.html`
**Practical:** `practicals/practical-08-water-damage.md`
**Videos:** see Module 8 section of `resources/videos.md`
**Images:** `resources/images/water-damage-flowchart.svg`

## Learning objectives
By the end of this module, students can:
1. Explain what liquid actually does to a powered phone: immediate shorts plus ongoing
   electrolytic corrosion — and why salt water and sugary drinks are far worse than fresh water.
2. Give a customer the correct first-response instructions and debunk the rice myth.
3. Locate and read liquid contact indicators (LCI stickers).
4. Execute the full treatment protocol from `water-damage-flowchart.svg`, including
   IPA bath, ultrasonic cleaning, and inspection under magnification.
5. Recognize corrosion (green/white fuzz, blackened pads) and know what it means for prognosis.
6. Set honest customer expectations: no guarantees, data-recovery-first, quote accordingly.

## Materials
- Pre-dunked donor boards: trainer dunks working donor boards in **salt water several
  days before class** so real corrosion forms (one board per pair, plus one spare).
- 99% IPA in shallow trays, soft brushes (ESD-safe), ultrasonic cleaner with proper
  cleaning solution (shared unit), paper towels, air blower.
- Magnification per bench; the demo-bench microscope or overhead camera for group inspection.
- Phones with visible LCI stickers (SIM slot / battery bay) for the identification exercise.
- Safety glasses and gloves for the cleaning stations; ventilation for IPA use.
- Cameras (students' own phones) for before/after documentation.

## Session plan

### 1. Recap & quiz review (10 min) — slides 1–2
- 3 quick questions from Module 7 (temperatures, flux, joint types).
- Collect homework: two tools/skills the micro-solderer used that we didn't cover.

### 2. What liquid actually does (15 min) — slides 3–7
- Two separate killers:
  1. **Immediate shorts** while powered — water bridges live pads; damage happens in seconds.
  2. **Ongoing electrolytic corrosion** — with the battery connected, tiny currents keep
     flowing through the wet board, eating traces and pads *for days after* the phone "dried out."
- Liquids ranked: fresh water < dirty water < sugary drinks/juice (sticky, conductive
  residue) < **salt water** (aggressively conductive and corrosive — hours matter).
- ▶ **Video 8.3** (why rice doesn't work / corrosion explained — see videos.md).
- **The rice myth:** rice does nothing about corrosion or mineral residue; at best it
  slowly dries the outside while corrosion eats the board inside. Its real cost is
  **wasting the critical first 48 hours** during which treatment works best.

### 3. Correct first response & LCIs (15 min) — slides 8–11
- The script every student must know by heart for the customer on the phone:
  **power off now, do not charge, do not press power to "check if it works",**
  remove the SIM tray (an opening for drainage/airflow), get it to a technician —
  opened and battery-disconnected — ASAP.
- Why "checking" kills phones: each power-on while wet is another chance to short.
- **LCI stickers:** white normally, red/pink after liquid contact. Locations: inside
  the SIM slot, on the board, in the battery bay. Uses: confirming liquid contact on
  intake (customers often don't mention it) and understanding warranty implications.

### 4. The treatment protocol (25 min) — slides 12–18
- Walk `water-damage-flowchart.svg` step by step — this is the practical's map:
  1. **Teardown** immediately (Module 3 skills).
  2. **Disconnect battery** first, as always.
  3. **Remove EMI shields where possible** — corrosion hides under them.
  4. **99% IPA bath + brush:** IPA displaces water, dissolves residue, evaporates clean.
  5. **Ultrasonic cleaner** with proper solution: board only — never the battery,
     never assembled phones; cavitation scrubs under chips where brushes can't reach.
  6. **Dry** thoroughly (air, gentle warmth, time).
  7. **Inspect under magnification;** brush and re-clean any remaining corrosion.
  8. **Reassemble with a NEW battery** — water-exposed lithium batteries are suspect
     (possible internal damage, swelling later); the old one goes to the battery bin.
  9. **Test** the full function checklist.
- ▶ **Video 8.1** (water damage treatment full walkthrough — see videos.md).
- ▶ **Video 8.2** (ultrasonic cleaning demo — see videos.md). Live demo on the shared
  unit if time allows; otherwise the video carries it and the practical is hands-on.

### 5. Reading corrosion & talking to customers (15 min) — slides 19–23
- Recognizing corrosion: **green/white fuzz** on connectors and component legs,
  **blackened or missing pads**, dull traces. Show real macro photos on the slides,
  then the demo board under the microscope/overhead camera.
- **Success-rate honesty:** water treatment is triage, not a guaranteed repair. Fresh
  water treated fast = good odds; salt water after a week = poor odds. Never promise.
- **Customer conversation:** "no fix, no promise" — quote a treatment fee, not a repair
  fee; ask what matters more, the phone or the data, and adopt a **data-recovery-first
  mindset** (a board that boots once may be a rescue window for photos, not a fixed phone).
- **Why "it works now" can still fail later:** corrosion already started continues in
  humid air; a treated phone can die weeks later. Warranty on water treatment: none —
  put it in writing (Module 10 covers the paperwork).

### 6. Recap & practical setup (10 min) — slides 24–25
- Teach-back: one student recites the customer first-response script; another walks
  the flowchart from memory.
- Assign boards; glasses and gloves on at the cleaning stations.

### 7. PRACTICAL (3 h)
Run `practicals/practical-08-water-damage.md` on the pre-dunked donor boards:
- Step 1: photograph the board (before shots), locate and record LCI state.
- Step 2: full protocol per the flowchart — teardown, battery disconnect, shield
  removal where possible, IPA bath + brushing, ultrasonic cycle (benches rotate
  through the shared cleaner), dry.
- Step 3: inspect under magnification; photograph remaining/removed corrosion
  (after shots) and mark affected areas on a board sketch.
- Step 4: write a **customer-facing outcome report**: what was found, what was done,
  prognosis, and the no-guarantee warranty statement — graded for honesty and clarity.
- Grade with the rubric; bench cleanup inspection (IPA sealed, cleaner drained per
  its manual) ends the session.

### 8. Quiz (10 min)
Module 8 quiz from `assessments/module-quizzes.md`.

## Homework
- Practice the first-response script on a friend or family member playing a panicked
  customer; refine your wording.
- Watch Video 9.1 (Android recovery mode & factory reset) before Module 9 — just
  watch, noticing which steps destroy data and which don't.

## Common trainer pitfalls
- Dunk the donor boards **days** ahead, in salt water — a board dunked the night
  before shows no convincing corrosion and the lesson falls flat.
- Students will want to power boards on "to see if it still works" mid-protocol —
  that instinct is exactly the customer mistake; call it out every time.
- Never let a battery near the ultrasonic cleaner, and check tank levels/solution
  before class; a dry-run ruins the transducer.
- Don't teach the protocol as a guaranteed fix — grade the outcome report hardest on
  expectation-setting, because overpromising is the real-world failure mode.
- Rice believers will push back; let Video 8.3 and the corroded boards make the
  argument rather than debating from authority.
