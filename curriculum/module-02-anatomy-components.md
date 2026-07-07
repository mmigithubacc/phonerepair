# Module 2 — Mobile Phone Anatomy & Components

**Duration:** 2 h theory + 2 h practical
**Slides:** `slides/module-02-anatomy-components.html`
**Practical:** `practicals/practical-02-anatomy-components.md`
**Videos:** see Module 2 section of `resources/videos.md`
**Images:** `resources/images/phone-anatomy-exploded.svg`

## Learning objectives
By the end of this module, students can:
1. Name every major smartphone component and explain what it does in one sentence.
2. Point to the key chips on a motherboard: SoC, RAM + storage, PMIC, audio codec,
   baseband/modem, and charging IC.
3. Trace the basic block diagram of a working phone: power in → PMIC → SoC →
   display/radios.
4. Distinguish connector types (board-to-board press-fit vs ZIF) and identify flex cables,
   antennas, and EMI shields on a real board.
5. Identify any phone's exact model and find a model-specific repair guide (ifixit,
   model numbers on the SIM tray, back housing, or in Settings).

## Materials
- 2–3 pre-opened donor phones per bench (backs off, battery disconnected by trainer beforehand).
- One fully stripped phone at the demo bench with components laid out on a labeled mat.
- Printed copies of `phone-anatomy-exploded.svg` (one per bench) + sticky labels for the
  scavenger hunt.
- Magnifying loupe or phone-camera macro per bench for reading chip markings.

## Session plan

### 1. Recap & quiz review (10 min) — slides 1–2
- 3 quick questions from Module 1 (ESD, driver selection, battery rules).
- Random student recites the 8 safety rules (announced as homework last session).

### 2. The exploded phone (20 min) — slides 3–7
- Show `phone-anatomy-exploded.svg` and the real stripped phone side by side.
- Layer by layer: cover glass/display assembly → frame/midframe → battery →
  motherboard/logic board → sub-board (charging port) → back housing.
- ▶ **Video 2.1** (what's inside a smartphone — components tour — see videos.md).
  Pause after each component; ask "what happens to the phone if this part fails?"

### 3. Component-by-component tour (35 min) — slides 8–15
- **Display assembly:** glass + touch digitizer + LCD/OLED panel (detail comes in Module 4).
- **Battery:** lithium-polymer pouch; repeat Module 1 handling rules — never pry with metal.
- **Cameras:** front + rear modules, simple plug-in units on flex connectors.
- **Audio:** earpiece (top, calls), loudspeaker (bottom, media/rings), 2–4 microphones
  (bottom = voice, top/rear = noise cancelling).
- **Vibration motor:** coin/eccentric vs linear "taptic" types.
- **Antennas:** plastic-mounted metal strips + coax cables; why signal drops after a bad reassembly.
- **Sensors:** proximity (screen off at ear), ambient light (auto-brightness),
  accelerometer/gyro (rotation), fingerprint (under-display, side-button, or rear).
- **SIM tray**, **frame/midframe/housing**, and **EMI shields** — metal cans over chips;
  students often mistake them for chips themselves.
- Pass real examples of each around the class while talking.

### 4. The motherboard up close (30 min) — slides 16–21
- ▶ **Video 2.2** (motherboard/logic board close-up tour — see videos.md).
- On the demo board under the overhead camera, point out:
  - **SoC** (System-on-Chip) — CPU + GPU, the "brain"; usually the biggest chip,
    often with RAM stacked on top (package-on-package).
  - **RAM + storage** (eMMC/UFS) — why "storage chip = the phone's memory *and* the
    user's photos"; data recovery implications.
  - **PMIC** (power management IC) — distributes correct voltages everywhere.
  - **Charging IC** — manages current from the port to the battery (Module 5 revisits it).
  - **Audio codec**, **baseband/modem** (calls & data radios).
- Block diagram slide: **power in → PMIC → SoC → display/radios.** Every no-power
  diagnosis in Module 5 walks this chain, so drill it now: "if the PMIC is dead,
  what works?" (nothing).

### 5. Flex cables & connectors (15 min) — slides 22–25
- ▶ **Video 2.3** (flex cables & connectors close-up — see videos.md).
- **Board-to-board press-fit connectors** ("Lego-style") — snap down, pop up; most common.
- **ZIF connectors** (zero insertion force) — flip the latch, slide the flex out; never pull
  against a closed latch.
- Flex cables tear, they don't stretch. Disconnection technique is Module 3's job —
  today is identification only.

### 6. Which phone is this? (10 min) — slides 26–28
- Finding the model: Settings → About; model number on SIM tray, back housing, or under
  the battery; iPhone "A"-numbers.
- Live demo: look up a bench phone's model on ifixit.com and open its teardown guide.
  Rule from the trainer guide: **research the exact model before opening anything.**

### 7. Recap & practical setup (10 min) — slides 29–30
- Teach-back: one student walks the class through the block diagram from memory;
  another names the 5 key motherboard chips.
- Assign benches and hand out worksheets.

### 8. PRACTICAL (2 h)
Run `practicals/practical-02-anatomy-components.md`:
- Station A: open the pre-opened donor phones and identify + label 15 components
  using the sticky labels; trainer verifies against the answer sheet.
- Station B: map a motherboard — sketch the board and mark every connector, naming
  its type (press-fit / ZIF / coax) and what plugs into it.
- Station C: component scavenger hunt — teams race to find "a phone with a rear
  fingerprint sensor", "a coin vibration motor", "an EMI shield covering the SoC", etc.
- Grade with the rubric; bench cleanup inspection ends the session.

### 9. Quiz (10 min)
Module 2 quiz from `assessments/module-quizzes.md`.

## Homework
- Look up your own phone's model on ifixit and read its teardown; bring one surprising
  finding to the next session.
- Watch Video 3.1 (full Android disassembly walkthrough) before Module 3 — just watch,
  noticing the order of steps.

## Common trainer pitfalls
- Don't lecture from slides alone — every component must be seen and held in real
  hardware, or names won't stick.
- Students confuse earpiece with loudspeaker and EMI shields with chips; test exactly
  these in the scavenger hunt.
- Keep batteries disconnected in all donor phones before class — this module comes
  *before* disassembly training, so students must not disconnect/reconnect anything yet.
- Don't skip the block diagram because it "feels abstract" — Module 5 diagnostics
  depends on it.
