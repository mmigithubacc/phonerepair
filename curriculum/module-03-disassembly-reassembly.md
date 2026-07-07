# Module 3 — Disassembly & Reassembly

**Duration:** 1.5 h theory + 3 h practical
**Slides:** `slides/module-03-disassembly-reassembly.html`
**Practical:** `practicals/practical-03-disassembly-reassembly.md`
**Videos:** see Module 3 section of `resources/videos.md`
**Images:** `resources/images/phone-anatomy-exploded.svg`

## Learning objectives
By the end of this module, students can:
1. Find and follow a model-specific guide *before* opening any phone.
2. Open glued and clipped phones safely using heat, suction, picks, and cards.
3. Apply screw-mapping discipline on a magnetic mat and explain long-screw damage.
4. State and apply the **battery disconnect first** rule without prompting.
5. Safely disconnect and reconnect press-fit, ZIF, and coax connectors, and handle
   flex cables without tearing them.
6. Fully disassemble a donor Android to the bare frame and reassemble it to working
   order, testing before final sealing.

## Materials
- 1 donor Android per student (removable-frame style preferred for first teardowns).
- Full toolkit + magnetic project mat per bench; heating pad or heat gun; safety glasses.
- Printed screw-map template sheets (grid matching the practical worksheet).
- Each bench's phone looked up on ifixit beforehand by the trainer; demo phone is the
  same model students will strip.

## Session plan

### 1. Recap & quiz review (10 min) — slides 1–2
- 3 quick questions from Module 2 (block diagram, connector types, chip identification).

### 2. Research before you open (10 min) — slides 3–5
- The professional habit: **model-specific guide first, tools second.** Phones vary —
  a technique that works on one model cracks the screen of another.
- Live demo: identify the bench phone's model, open its ifixit guide, skim for
  warnings ("hidden screw under sticker", "cable under battery").
- ▶ **Video 3.1** (full Android disassembly walkthrough — see videos.md). Play in full;
  ask students to call out each tool as it appears.

### 3. Getting in: heat & opening techniques (15 min) — slides 6–10
- **Adhesive vs clip designs:** glued backs/screens need heat + patience; clipped
  designs need picks and courage, not heat.
- Heat: heating pad or heat gun to 80–100 °C surface; keep the gun moving; safety
  glasses on.
- Suction cup lifts a gap → pick enters the gap → cards slide around the perimeter.
  Picks stay shallow: deep insertion cuts cables and battery pouches.
- Where NOT to pry on common models: camera area, fingerprint cable, antenna lines.

### 4. Screw discipline & battery first (15 min) — slides 11–14
- **Screw mapping is mandatory from today** (trainer guide rule). Magnetic mat +
  drawn map matching each screw to its hole.
- **Long-screw damage:** a screw 0.5 mm too long driven into the wrong hole punches
  board layers — the phone dies and the fault is nearly undiagnosable. Tell a war story.
- **BATTERY DISCONNECT FIRST.** The first connector touched after the phone is open is
  the battery's — every time, no exceptions. Live boards + metal tools = shorted PMIC.
- Have the class chant it back. Seriously — they must never forget it.

### 5. Connectors & flex cables (20 min) — slides 15–20
- Demo each on the overhead camera, then replay in slow motion:
  - **Press-fit board-to-board:** pop straight up with a *plastic* spudger from the
    correct side (under the cable end, not the socket); reconnect by aligning and
    pressing until it clicks — never force at an angle.
  - **ZIF:** lift the latch first, then slide the flex out; closed-latch pulling tears
    the cable.
  - **Coax antenna cables:** pop vertically with the spudger tip; they are fragile and
    fiddly to reseat — patience, not force.
- **Flex cables: never pull.** They tear silently; route them exactly as found.
- **EMI shields:** some are clipped (pry gently at the clips), some soldered (leave
  alone — board-level territory, Module 7).
- ▶ **Video 3.3** (common beginner disassembly mistakes — see videos.md). Debrief:
  students list the three mistakes they think they'll make.

### 6. Order of operations & reassembly (15 min) — slides 21–25
- Standard order: heat & open → screws (mapped) → **battery disconnect** → shields →
  connectors → sub-boards → motherboard → small parts → bare frame.
- Photograph every stage — your own photos are the best reassembly guide.
- **Reassembly is the reverse**, with one addition: **test before final sealing.**
  Reconnect battery + display, power on, check screen/touch/buttons — *then* seal.
- ▶ **Video 3.2** (iPhone disassembly walkthrough — see videos.md). Compare with the
  Android video: pentalobe externals, display-first opening, more brackets.

### 7. Trainer demo & practical setup (5 min) — slides 26–27
- Announce the three inspection checkpoints (below). Students may not proceed past a
  checkpoint without trainer sign-off.

### 8. PRACTICAL (3 h)
Run `practicals/practical-03-disassembly-reassembly.md`:
- Trainer demo first: strip the demo phone to bare frame, narrating (20 min).
- Each student performs a **full teardown of a donor Android to the bare frame** with
  a drawn screw map and a photo of every stage, then a **full reassembly**.
- Trainer inspects and signs at 3 checkpoints:
  1. **Battery disconnected** (before anything else is touched),
  2. **Bare frame** (screw map complete, parts laid out in order),
  3. **Reassembled** (powers on, touch works, no leftover screws).
- Leftover screws = automatic rubric deduction. Debrief every broken flex with the
  class, no blame.
- Grade with the rubric; bench cleanup inspection ends the session.

### 9. Quiz (10 min)
Module 3 quiz from `assessments/module-quizzes.md`.

## Homework
- Write your personal "order of operations" checklist from memory; bring it next session.
- Watch Video 4.1 (glued screen replacement walkthrough) before Module 4.

## Common trainer pitfalls
- Don't let a single student skip the battery-disconnect checkpoint "because the phone
  is dead anyway" — the habit is the lesson, not the phone.
- Enforce screw mapping ruthlessly; the first unmapped screw becomes long-screw damage
  in Module 4.
- Beginners lever press-fit connectors from the socket side and rip the socket off the
  board — watch hands during the first disconnections.
- Budget the full 3 h: slow students reassembling under time pressure snap cables.
  Fast finishers become bench assistants, not second-teardown heroes.
