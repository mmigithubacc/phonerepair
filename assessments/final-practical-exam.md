# Final Practical Exam

**Course:** Cellphone Repair Technician Training
**Duration:** 4 hours • **Individual** — one candidate per bench, no pair work, no coaching
**Total:** 100 points • **Pass: ≥ 70 points AND zero critical safety violations**
**Weight:** 30% of final grade. Passing this exam is **mandatory** for certification regardless of overall average.

---

## 1. Trainer instructions — before exam day

### Bench setup (one candidate per bench)
Each bench gets the full standard kit, laid out identically:

- ESD mat + wrist strap + strap tester (deliberately include **one dead strap or cord in the box** at random benches — candidates must catch it with the tester)
- Precision driver kit (PH000/PH00, Pentalobe P2/P5, Tri-point Y000, Torx T3–T6), plastic pry tools, picks, suction cup, plastic + metal spudger, ESD tweezers
- Magnetic project mat + marker, heat gun or heating pad, IPA ≥ 99%, adhesive strips/B-7000
- Multimeter, USB ammeter, known-good charger + cable
- Soldering station, solder, flux, wick, pump, sponge/brass wool, fume extractor, safety glasses, practice board + wire for S3
- Blank intake forms, job sheets, pens
- Sand-filled battery bin and fire extinguisher accessible to the room; first-aid kit visible

### Devices and faults (prepare in advance, keep the fault list secret)
- **S1 pool:** one functioning donor phone per candidate plus the matching new part (screen or battery). Prepare lot-draw slips: "SCREEN" or "BATTERY" (roughly half/half). Verify each donor phone fully works and photograph its condition — you will compare after the exam.
- **S2 pool:** one "mystery fault" phone per candidate with ONE planted fault. Good plants: lint packed in the charging port; battery drained below cutoff / known-bad battery fitted; display connector partly unseated (no image, phone boots); known-bad charging cable placed in the box with the phone; speaker unplugged; SIM reader flex disconnected. Record each phone's planted fault on the examiner sheet before the exam.
- **S3:** per candidate — two wire ends to splice (stranded, pre-cut) and a through-hole practice board (min. 6 joints).
- Label every device with the bench number. Have 1–2 spare devices ready for hardware failures that are not the candidate's fault.

### Running the exam
- Brief all candidates together (10 min): stations, timing, the critical-violation list (read it aloud), and that S4 questions come **during** their work.
- Suggested timing inside the 4 h: S1 ≈ 120 min • S2 = 30 min strict • S3 ≈ 40 min • S4 woven throughout • S5 assessed continuously + 15 min final cleanup. The candidate manages their own order for S1/S3 unless you schedule S2 slots.
- Examiners circulate silently. Answer no technical questions. Intervene ONLY for safety — an intervention for a critical hazard is itself a critical violation (see §4).
- Score with the sheet in §5, one per candidate.

---

## 2. Candidate brief (read aloud / hand out)

You have 4 hours and five scored stations. Work alone. Manage your own time; the 30-minute diagnosis slot (S2) is called by the examiner. During your work an examiner will ask you five spoken questions (S4) — answer and keep working. You are being scored continuously on documentation, bench discipline, and cleanup (S5). **Any critical safety violation fails the exam immediately, regardless of points.** Testing before sealing is part of the job — a sealed phone that doesn't work is a failed repair, not bad luck.

---

## 3. Stations & scoring rubrics

### S1 — Full repair job (40 pts)

Draw a slip by lot: **screen replacement** or **battery replacement** on your functioning donor phone. Perform it as a complete customer job: intake → ESD setup → repair → test protocol → QC → job sheet.

| # | Criterion | Pts |
|---|---|---|
| 1.1 | Intake form completed as for a real customer: device model identified exactly, reported "fault," pre-existing damage noted **with photos**, terms signed | 4 |
| 1.2 | ESD workstation built and **verified with the strap tester** before opening the device; strap worn on skin throughout board-level work | 4 |
| 1.3 | Correct opening: guide-consulted where unfamiliar, correct drivers chosen and seated (no slips/strips), heat in the 80–100 °C range for adhesive, picks depth-limited over battery/flex areas | 6 |
| 1.4 | **Battery disconnected first** after opening, before any other connector | 4 |
| 1.5 | Screw mapping maintained; connectors released correctly (plastic tools, straight up, latches flipped on ZIF); flexes handled without creasing | 6 |
| 1.6 | Part replaced correctly (battery: pull-tabs low and slow / safe adhesive release, no bending, no metal under battery; screen: clean removal, parts transfer done, new part seated fully) | 6 |
| 1.7 | **Test before sealing**: power on, display + touch to all corners, cameras, speaker/mic, buttons, sensors, charging with ammeter reading noted | 5 |
| 1.8 | Reassembly complete: zero leftover screws, correct screws in correct holes, seals/adhesive fitted, device cosmetically clean | 3 |
| 1.9 | Job sheet/QC record: work done, part tier used, test results, warranty note — written so another tech could pick up the file | 2 |
| | **S1 total** | **40** |

*Deductions within S1:* stripped screw −2 each (max −4); leftover screw −3; retest required because a function was missed −2.

### S2 — Diagnosis under time (20 pts) — 30 minutes strict

The examiner hands you a mystery-fault phone and starts the clock. Reach a correct, justified diagnosis with documented evidence. You do NOT need to repair it. Stop at 30 minutes and hand in your diagnosis sheet.

| # | Criterion | Pts |
|---|---|---|
| 2.1 | Systematic approach: history/symptom check, trivial causes ruled out first (charger, cable, lint, forced restart, flashlight test) before teardown | 5 |
| 2.2 | Safe handling throughout (ESD, battery disconnect first if opened) | 3 |
| 2.3 | Measurements taken and **written down**: ammeter current, battery voltage, continuity checks — actual numbers, not "seemed fine" | 5 |
| 2.4 | Correct diagnosis (matches the planted fault) | 5 |
| 2.5 | Justification: the written reasoning links the evidence to the conclusion and states the recommended repair + rough quote category | 2 |
| | **S2 total** | **20** |

*Partial credit on 2.4:* wrong final call but correct fault *area* with sound reasoning = 2/5. A correct guess with no supporting evidence scores 2.4 but zero on 2.3/2.5.

### S3 — Soldering task (15 pts)

At the soldering bench: (a) strip and splice two stranded wires (inline splice, soldered, insulated), and (b) solder the through-hole joints on the practice board (min. 6). Joints are inspected under magnification.

| # | Criterion | Pts |
|---|---|---|
| 3.1 | Setup & technique: iron at 300–380 °C, tip tinned and cleaned, flux used, heat applied to the work not just the solder, fume extraction positioned | 4 |
| 3.2 | Splice: mechanically sound before soldering, fully wetted, no stray strands, insulated (heat-shrink/tape) | 4 |
| 3.3 | Through-hole joints: shiny concave cones, full wetting of pad and lead, no cold/dry joints, no bridges (examiner probes suspicious joints; may ask candidate to correct one bridge with wick/pump) | 5 |
| 3.4 | Iron discipline: always in the stand when not in hand, never passed hand-to-hand, cool-down before leaving the bench | 2 |
| | **S3 total** | **15** |

### S4 — Safety & knowledge spot-check (15 pts) — oral, during work

The examiner asks **5 random questions** from the bank below (or equivalents) while the candidate works, spread across the session. 3 pts per fully correct answer; 1–2 pts for partially correct; 0 for wrong or dangerous. Note the questions asked on the score sheet.

Question bank (choose 5, vary between candidates):
1. Recite the 8 workshop safety rules (or any 4 the examiner picks).
2. Why is there a 1 MΩ resistor in your wrist strap cord?
3. What is thermal runaway and what two shop mistakes trigger it?
4. Why disconnect the battery first?
5. What do you do if a screw starts to slip?
6. What is long-screw damage and how does your screw map prevent it?
7. Why must you test before sealing?
8. What's the correct response to a battery that starts smoking on your bench?
9. Why is 70% alcohol not acceptable on boards?
10. What is the charging chain, in order?
11. When do you refer a job to a micro-soldering specialist?
12. A customer asks you to bypass an activation lock — what do you say?
13. What target temperature for adhesive heating, and what happens if you exceed it?
14. Why does a water-damaged phone get a new battery?
15. What must you disclose before fitting a non-genuine iPhone screen?

| # | Criterion | Pts |
|---|---|---|
| 4.1–4.5 | Five questions × 3 pts | 15 |
| | **S4 total** | **15** |

### S5 — Professionalism (10 pts) — assessed continuously

| # | Criterion | Pts |
|---|---|---|
| 5.1 | Documentation habit: intake form, diagnosis sheet, and job sheet legible, complete, and honest (including any mistakes made and corrected) | 4 |
| 5.2 | Bench discipline: organized bench, screws mapped at all times, tools returned to place, no drinks/food at the bench, IPA capped | 3 |
| 5.3 | Cleanup: end-of-exam bench inspection — tools accounted for, mat clean, waste (adhesive, solder dross, wipes) disposed correctly, devices returned labeled | 3 |
| | **S5 total** | **10** |

---

## 4. Critical safety violations — AUTOMATIC FAIL

Any ONE of the following ends in a failed exam, whatever the point score. Announce this list in the briefing and post it in the room. The candidate may finish the session for practice, but the exam is recorded as **FAIL — critical violation**, and they retake the practical exam at the next opportunity after remedial coaching.

1. **Prying at or under a battery with a metal tool** (spudger, screwdriver, tweezers), or bending/puncturing a battery.
2. **Working on a live board after warning** — continuing to disconnect/connect components or work at board level with the battery connected after being told once.
3. **Unsafe soldering-iron handling** — iron left hot outside its stand, passed hand-to-hand, used near IPA spill, or waved while gesturing.
4. **Faking test results** — recording a test as passed that was not performed or did not pass; falsifying any reading or document.
5. Charging, pressing, or attempting to refit a swollen/damaged battery; disposing of a battery anywhere but the battery bin.
6. Any action requiring the examiner to physically intervene to prevent injury or fire.

Honest self-reported mistakes (e.g. "I cracked this flex, here's what happened") are **point deductions, not violations** — integrity is exactly what this list protects.

---

## 5. Examiner score sheet

**Candidate:** ______________________ **Bench #:** ____ **Date:** ____________
**S1 job drawn (circle):** SCREEN / BATTERY **S2 device & planted fault:** ______________________

| Station | Item | Max | Score | Notes |
|---|---|---|---|---|
| S1 | 1.1 Intake form + photos | 4 | | |
| S1 | 1.2 ESD setup verified | 4 | | |
| S1 | 1.3 Opening technique | 6 | | |
| S1 | 1.4 Battery disconnected first | 4 | | |
| S1 | 1.5 Screw map + connectors + flex | 6 | | |
| S1 | 1.6 Part replacement quality | 6 | | |
| S1 | 1.7 Test before sealing | 5 | | |
| S1 | 1.8 Reassembly complete | 3 | | |
| S1 | 1.9 Job sheet / QC record | 2 | | |
| **S1** | **Subtotal (less deductions: ____)** | **40** | | |
| S2 | 2.1 Systematic approach | 5 | | |
| S2 | 2.2 Safe handling | 3 | | |
| S2 | 2.3 Documented readings | 5 | | |
| S2 | 2.4 Correct diagnosis | 5 | | |
| S2 | 2.5 Justification + quote | 2 | | |
| **S2** | **Subtotal** | **20** | | |
| S3 | 3.1 Setup & technique | 4 | | |
| S3 | 3.2 Splice | 4 | | |
| S3 | 3.3 Through-hole joints | 5 | | |
| S3 | 3.4 Iron discipline | 2 | | |
| **S3** | **Subtotal** | **15** | | |
| S4 | Q1: ______________________ | 3 | | |
| S4 | Q2: ______________________ | 3 | | |
| S4 | Q3: ______________________ | 3 | | |
| S4 | Q4: ______________________ | 3 | | |
| S4 | Q5: ______________________ | 3 | | |
| **S4** | **Subtotal** | **15** | | |
| S5 | 5.1 Documentation | 4 | | |
| S5 | 5.2 Bench discipline | 3 | | |
| S5 | 5.3 Cleanup inspection | 3 | | |
| **S5** | **Subtotal** | **10** | | |
| | **TOTAL** | **100** | | |

**Critical safety violations observed:** ☐ NONE ☐ YES — item #____ , time ____ , description: ______________________________________

**Result (circle):**  **PASS** (≥ 70 AND no critical violation)  /  **FAIL — points**  /  **FAIL — critical violation**

**Examiner name & signature:** ______________________ **Second examiner (if any):** ______________________

Transfer the result to the certification checklist (`assessments/certification-checklist.md`). Retake policy: one retake of the full practical exam after remedial practice, scheduled by the trainer; the retake score stands.
