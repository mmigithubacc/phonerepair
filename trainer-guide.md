# Trainer Guide — Running the Cellphone Repair Course

This guide tells you how to prepare the workshop, run each session, and keep the
class safe and effective. Read it fully before Day 1.

## 1. Workshop setup

### Room
- One workbench per 2 students; benches at least 120 × 60 cm with good overhead lighting.
- A projector or large TV for the slide decks and videos, visible from every bench.
- A trainer demo bench at the front — ideally with an overhead camera (a phone on a
  gooseneck mount pointed at your hands, mirrored to the projector) so students can
  watch close-up work.
- Ventilation for soldering sessions (Module 7): open windows + fume extractors,
  or run soldering near an extraction point.
- A metal "battery bin" (sand-filled or fireproof container) for swollen/damaged batteries,
  plus a Class D-capable or ABC fire extinguisher and a first-aid kit, both visible.

### Per-bench equipment (2 students share)
| Item | Qty | Notes |
|---|---|---|
| ESD mat + grounding point | 1 | Connected to true earth ground |
| ESD wrist straps | 2 | Test weekly with a strap tester |
| Precision screwdriver kit | 1 | PH000/PH00, Pentalobe P2/P5, Torx T3–T6, Tri-point Y000, flathead 1.5 mm |
| Plastic pry tools, picks, opening cards | 1 set | Replace when worn |
| Metal + plastic spudgers | 2 | |
| ESD tweezers (straight + curved) | 2 | |
| Suction cup / opening pliers | 1 | |
| Heat gun (or heating pad) | 1 | Heating pad is safer for beginners |
| Magnetic project mat + screw tray | 1 | Screw-mapping is mandatory from Module 3 |
| Isopropyl alcohol ≥ 99% + brushes | 1 | Small labeled bottle |
| Multimeter | 1 | With continuity beeper |
| USB power meter / ammeter | 1 | For charging diagnostics |
| Practice/donor phones | 2–3 | Mix of Android (removable-frame) and iPhone-style (glued) |
| Safety glasses | 2 | Mandatory for battery and heat work |

### Shared equipment
- Soldering stations (temperature-controlled) — 1 per bench for Module 7, can rotate.
- Fume extractors, solder (Sn63/Pb37 or lead-free), flux, desoldering wick/braid, tip cleaner.
- Ultrasonic cleaner (for Module 8) — one shared unit is enough.
- DC bench power supply with current display (very useful for power diagnostics; optional).
- Laptop/PC with USB cables for Module 9 (software flashing/backup demos).
- Spare parts stock per module: screens, batteries, charging-port flex/boards, adhesive kits.

### Where to get practice phones cheaply
Buy broken/locked phones in bulk from local repair shops, online marketplaces, or
e-waste recyclers. Phones do NOT need to work — Modules 2–3 only need intact hardware.
For Modules 4–6 you need at least some phones that power on.

## 2. How each session runs

Each training day covers two modules (morning and afternoon block, ~2.5 h each). Every module follows the same rhythm — the lesson plans in `curriculum/` script this
out per module:

1. **Recap & quiz review** (10 min) — 3 quick questions from last module.
2. **Theory with slides** (≈45–60 min) — open the module's deck from `slides/` in a
   browser. Keys: **→/←** navigate, **N** toggles trainer notes, **F** fullscreen,
   **Home/End** jump. Speaker notes on each slide tell you what to say, what to ask,
   and when to play a video.
3. **Video segments** — links and timestamps are in [resources/videos.md](resources/videos.md) and marked
   in each lesson plan. Preview every video before class; download offline copies if
   your internet is unreliable.
4. **Trainer demonstration** (15–30 min) — do the repair once on the demo bench,
   narrating each step, before students touch tools.
5. **Practical lab** — hand out the worksheet from `practicals/`. Circulate; don't
   touch students' phones unless safety requires it — guide with words first.
6. **Grading & cleanup** (15 min) — grade with the rubric while students clean benches.
   Bench inspection is part of the grade from Module 1 onward.
7. **Quiz** (10 min) — from [assessments/module-quizzes.md](assessments/module-quizzes.md).

## 3. Non-negotiable safety rules (enforce from Day 1)

1. Wrist strap on and connected whenever a device is open.
2. Battery disconnected before ANY other internal work — every time, no exceptions.
3. Safety glasses on for battery removal, heat work, and soldering.
4. Never pry, bend, or puncture a lithium battery. Swollen battery → trainer takes over,
   battery goes to the battery bin.
5. No food or drink on benches.
6. Heat gun on a stand when not in hand; unplugged after use.
7. Soldering iron in its holder always; never passed hand-to-hand.
8. Damaged/hot batteries never go in normal trash.

Post these on the wall. A student who repeatedly violates safety rules should not
be certified regardless of skill.

## 4. Teaching tips

- **Show, then do, then teach-back.** After your demo, have one student re-explain the
  steps to the class before labs start. Errors surface cheaply this way.
- **Screw discipline is the #1 beginner failure.** Enforce magnetic-mat screw mapping
  ruthlessly in Modules 3–4; it prevents "long screw damage" (screws driven through
  the board) — a repair-killing mistake.
- **Let students break the practice phones.** A snapped flex cable on a $5 donor phone
  is the cheapest lesson you will ever teach. Debrief every breakage with the class
  (no blame — "what would have prevented this?").
- **Pace by the slowest safe student**, not the fastest. Fast finishers become bench
  assistants — teaching others cements their own skill.
- **Keep a fault log.** When a practice phone develops a new fault, label it — it
  becomes diagnostic material for Module 9.
- **Phones vary.** Slides teach general procedure; always demo on the exact model your
  students will practice on, checking a model-specific guide (e.g. ifixit.com) first.

## 5. Course admin

- Take attendance every session; require ≥ 80% attendance for certification.
- Keep each student's graded rubrics — they feed the 30% practical grade.
- Day 5 afternoon ends with the final exams — compressed variant per the course overview, or the full-length exams in `assessments/` if you add a 6th day — then certificates
  using [assessments/certification-checklist.md](assessments/certification-checklist.md).
