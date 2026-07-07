# Module 7 — Soldering & Micro-Soldering Fundamentals

**Duration:** 2 h theory + 4 h practical
**Slides:** `slides/module-07-soldering.html`
**Practical:** `practicals/practical-07-soldering.md`
**Videos:** see Module 7 section of `resources/videos.md`
**Images:** `resources/images/soldering-joints.svg`

## Learning objectives
By the end of this module, students can:
1. Work at a soldering station safely: fume extraction, safety glasses, iron discipline,
   and correct temperature selection (300–350 °C leaded, 330–380 °C lead-free).
2. Care for an iron tip (tinning, cleaning) and explain what flux actually does.
3. Describe wetting and identify a good joint vs cold, dry, and bridged joints by sight.
4. Solder through-hole components, tin and splice wires, and desolder with wick and pump.
5. Perform simple surface-mount work (drag soldering, tweezer technique on two-pad parts)
   and explain the jumper-wire concept for lifted pads.
6. State the realistic scope of this module and know when to refer board-level IC work out.

## Materials
- Temperature-controlled soldering station per bench (rotate benches if shared), fume
  extractor or strong ventilation, safety glasses for everyone.
- Solder (Sn63/Pb37 recommended for learners, or lead-free), flux (paste + pen),
  desoldering wick, solder sucker/pump, brass tip cleaner, sponge, IPA for flux cleanup.
- Solder practice kits: through-hole practice boards, SMD practice boards with a pin
  header footprint and two-pad (resistor-size) parts, hookup wire, heat-shrink.
- Magnification per bench (loupe, headband magnifier, or microscope at the demo bench).
- Hot-air station at the demo bench only (trainer demo — not a student tool today).
- Scrap donor boards for supervised exploration at the end.

## Session plan

### 1. Recap & quiz review (10 min) — slides 1–2
- 3 quick questions from Module 6 (charging chain order, port mounting types, gaskets).
- Frame the day: "Module 6 ended where parts unplug. Today starts where parts are
  *soldered* — and honesty about how far one module can take you."

### 2. Soldering safety (15 min) — slides 3–6
- **Fumes:** the smoke is burning flux, not lead — but it is a respiratory irritant.
  Extractor on, or work at the extraction point; never hover your face over the joint.
- **Glasses:** solder spits, wick springs, clipped leads fly. Glasses on, always.
- **Iron discipline** (trainer-guide rule 7): iron lives in its holder, never laid on
  the bench, never passed hand-to-hand; grab only the handle. 350 °C does not look hot.
- No food/drink; wash hands after handling leaded solder.

### 3. The iron, the tip, and the flux (20 min) — slides 7–12
- Iron anatomy: element, tip, station with temperature control. Why dial-less irons
  frustrate learners — temperature stability is what a "station" buys you.
- Temperatures: **300–350 °C for leaded, 330–380 °C for lead-free.** Hotter is not
  faster — it oxidizes the tip and cooks pads off boards.
- **Tip care:** tin the tip on first heat and before storage; clean on brass (not a
  soaking-wet sponge that thermal-shocks the tip); a black unwettable tip cannot
  transfer heat. Demo: dead oxidized tip vs shiny tinned tip trying to melt solder.
- **What flux actually does:** removes the invisible oxide layer so molten solder can
  bond to metal, and helps heat flow. Rule of the day: *when in doubt, add flux.*
  The rosin core in solder wire is flux — but rework always needs extra.

### 4. Anatomy of a joint (20 min) — slides 13–17
- **Wetting:** solder flows and grips clean hot metal, forming a smooth concave fillet.
- Walk through `soldering-joints.svg`: **good joint** (shiny cone/volcano shape) vs
  **cold joint** (dull, lumpy, ball sitting on the pad — pad or pin never got hot),
  **dry/disturbed joint** (cracked, moved while solidifying), **bridged joints**
  (solder shorting two pads — flux + wick fixes it).
- ▶ **Video 7.1** (soldering basics for beginners — see videos.md).
- The universal technique: iron touches **pad and pin together**, wait ~1 s, feed
  solder into the joint (not onto the iron), remove solder, remove iron. 2–3 s total.

### 5. Through-hole, wires & desoldering (25 min) — slides 18–23
- ▶ **Video 7.2** (through-hole + wire soldering technique — see videos.md).
- Live demo under the overhead camera: through-hole resistor (bend, insert, solder,
  clip), tinning stranded wire, splicing two wires (twist, solder, heat-shrink —
  slide the heat-shrink on *first*, everyone forgets).
- **Desoldering:** wick + flux pressed with the iron to soak solder up; spring pump
  for through-hole holes. Patience beats force — a pad pulled off with a component
  turns a repair into board surgery.

### 6. Surface-mount intro & the honest ceiling (20 min) — slides 24–29
- **Drag soldering:** flux the pin row, load the tip, drag slowly — surface tension
  does the work; wick the bridges after.
- **Tweezer technique** for two-pad parts: tack one pad, place the part with tweezers,
  reflow, then solder the second pad properly and revisit the first.
- **Hot air basics** (trainer demo only): even heating, why nearby plastic connectors
  melt, and why practice boards come first — a $2 practice board absorbs the mistakes
  a customer's board cannot.
- **Jumper-wire concept:** a lifted/torn pad can be bypassed with fine enameled wire
  from the trace to the pin — know it exists, respect that it is advanced.
- ▶ **Video 7.3** (intro to phone board micro-soldering — aspirational viewing — see videos.md).
- **Realistic scope:** this module makes you competent at wires, through-hole, and
  simple SMD. Reballing, charging-IC swaps, and CPU work are a further specialization
  with a microscope and months of practice. A professional knows when to say
  "this goes to my board-level partner" — build that referral relationship (Module 10).

### 7. Recap & practical setup (10 min) — slides 30–31
- Teach-back: one student explains flux to the class; another lists the four joint
  types from `soldering-joints.svg` and how to spot each.
- Assign stations; glasses on before irons come out of holders.

### 8. PRACTICAL (4 h)
Run `practicals/practical-07-soldering.md` with the solder practice kits:
- Station A: tin the iron, then tin 5 wire ends; splice two wires with heat-shrink.
- Station B: populate a through-hole practice board (10+ joints per student).
- Station C: desolder 5 of your own through-hole joints cleanly with wick, then
  re-solder them.
- Station D: drag-solder a pin header on the SMD practice board; fix any bridges
  with flux and wick.
- **Graded joint inspection under magnification:** trainer scores each student's
  joints against the rubric (wetting, fillet shape, no bridges, no cooked pads).
- Bench cleanup inspection ends the session — cold irons, tinned tips, wick and
  clippings binned.

### 9. Quiz (10 min)
Module 7 quiz from `assessments/module-quizzes.md`.

## Homework
- Re-watch Video 7.3 and write down two tools/skills the micro-solderer used that we
  did not cover — bring the list next session.
- Watch Video 8.1 (water damage treatment full walkthrough) before Module 8 — just
  watch, noticing the order: power off → teardown → clean → then test.

## Common trainer pitfalls
- Don't let students crank temperature to "make it work faster" — most bad joints come
  from a dirty tip or missing flux, not low heat. Check the tip before the dial.
- Enforce the holder rule ruthlessly; the first bench burn usually happens while a
  student turns to talk with the iron in hand.
- Students starve joints of solder out of caution or blob them out of panic — the
  magnified inspection, done mid-session and not just at the end, corrects both early.
- Don't demo hot air and then leave the station where students can reach it; today it
  is a preview, not a tool.
- Don't soften the scope message: a fresh graduate attempting a customer's charging IC
  after one module is the most expensive overconfidence in this trade.
