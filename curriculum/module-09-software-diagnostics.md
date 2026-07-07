# Module 9 — Software Troubleshooting & Diagnostics

**Duration:** Day 5 · morning — ≈1 h theory + ≈1.25 h practical + quiz *(section timings below are full-depth; run at a brisk pace to fit)*
**Slides:** [slides/module-09-software-diagnostics.html](slides/module-09-software-diagnostics.html)
**Practical:** [practicals/practical-09-software-diagnostics.md](practicals/practical-09-software-diagnostics.md)
**Videos:** see Module 9 section of [resources/videos.md](resources/videos.md)
**Images:** [resources/images/diagnostic-flowchart.svg](resources/images/diagnostic-flowchart.svg)

## Learning objectives
By the end of this module, students can:
1. Run a structured intake interview (what happened, when, after what event) and use
   `diagnostic-flowchart.svg` to separate hardware from software faults.
2. Apply the **backup-first ethic** before any destructive step, every time.
3. Use the Android toolbox: safe mode, recovery mode (wipe cache / factory reset),
   forced restart combos; know that OEM flash tools (Odin, fastboot) exist and what they do.
4. Use the iPhone toolbox: force restart combos, Recovery mode vs DFU restore via computer.
5. Diagnose storage-full and rogue-app battery-drain issues; triage update loops and
   boot loops (software restore first, then suspect hardware).
6. State the FRP/iCloud Activation Lock rules and refuse lock-bypass work without hesitation.

## Materials
- Laptop/PC per 1–2 benches with USB cables and iTunes/Finder + Android tools installed
  (see trainer guide shared equipment); internet access for restores if possible.
- Prepared fault-station phones from the course fault log (see PRACTICAL): a rogue-app
  phone, a storage-stuffed phone, a phone needing a recovery-mode reset, and one
  **hardware-fault red herring** (e.g. a Module 6 phone with a lint-packed port).
- Printed copies of `diagnostic-flowchart.svg` per bench; intake forms (Module 10's
  form works — preview it here).
- List of dial codes / test-menu shortcuts for the bench phone models; a diagnostic
  app installed on at least one Android per bench.

## Session plan

### 1. Recap & quiz review (10 min) — slides 1–2
- 3 quick questions from Module 8 (first-response script, why rice fails, new-battery rule).
- Hook: "Half the phones brought to a repair shop have nothing physically wrong with
  them. Today is how you fix those in minutes — and which jobs you must refuse."

### 2. Intake questioning & the flowchart (20 min) — slides 3–7
- The three golden questions: **what happened, when did it start, after what event** —
  an update? a drop? a new app? Liquid? The answer usually names the fault category.
- Show `diagnostic-flowchart.svg`: symptoms branch into hardware-shaped (started after
  a drop, one component dead, physical damage) vs software-shaped (started after an
  update/app, slowdowns, crashes, boot loops) — with cross-checks, because a boot loop
  can be either.
- **BACKUP FIRST:** before any destructive step — factory reset, restore, reflash —
  back up if the phone allows it, and get the customer's explicit OK in writing when
  data will be lost. A repaired phone with lost photos is a failed repair.

### 3. The Android toolbox (25 min) — slides 8–14
- **Safe mode:** boots with third-party apps disabled — if the problem vanishes, a
  third-party app is guilty; uninstall the newest suspects. Demo the button combo live.
- **Recovery mode:** the mini-OS outside Android — wipe cache partition (safe, try it
  first) vs factory reset (destructive — backup first).
- **Forced restart combos** for a frozen phone (varies by brand; keep a cheat sheet).
- ▶ **Video 9.1** (Android recovery mode & factory reset — see videos.md).
- **OEM flash tools exist:** Odin (Samsung), fastboot (Google/others) reflash the OS
  itself — the fix for a corrupted system. Demo level only today: know the names, know
  when it's the answer, learn the tool for your market's dominant brand after the course.

### 4. The iPhone toolbox (20 min) — slides 15–19
- **Force restart** combo (press-release volume up, press-release volume down, hold
  side button) — first move on any frozen iPhone.
- **Recovery mode restore** via computer (iTunes/Finder): reinstalls iOS, *update*
  option preserves data, *restore* wipes.
- **DFU mode:** deeper than recovery — full reflash including firmware; the last
  software resort before calling it hardware.
- ▶ **Video 9.2** (iPhone recovery/DFU restore — see videos.md).
- Live demo on the demo bench: put an iPhone into recovery, show what the computer
  offers, exit without restoring.

### 5. Common software faults & triage (15 min) — slides 20–23
- **Storage full:** causes slowdowns, crashes, failed updates, even boot issues.
  Check first — it's the "lint of software faults." Clear space, then re-test.
- **Rogue-app battery drain:** battery settings → per-app usage; confirm via safe mode.
  Ties back to Module 5: rule out software before selling a battery.
- **Update loops / boot loops:** software restore first (cache wipe → reset/reflash);
  if a clean OS still loops, suspect hardware (board/storage) and refer or dig deeper.

### 6. ETHICS & LEGAL — the lines you never cross (20 min) — slides 24–28
Deliver this block standing still, no jokes. It is non-negotiable and exam material.
- **FRP/Google lock** and **iCloud Activation Lock** exist to make stolen phones
  worthless. That is their job. **We never bypass them. Ever.**
- Resets and unlocks are performed **only for the verified owner, with their own
  credentials** — the owner signs in, the owner types the password; proof of ownership
  on the intake form.
- **Walk away** from "found phones," "my cousin forgot his password," and every
  lock-removal request. No exceptions for good stories — thieves have the best stories.
- A shop caught fencing or unlocking stolen phones loses its license, its reputation,
  and possibly its owner's liberty. One job is never worth it. (Module 10 covers the
  IMEI checks and red flags for intake.)

### 7. Diagnostic tools & recap (10 min) — slides 29–31
- **Built-in test menus:** Android dial codes (model-specific — e.g. `*#0*#` on many
  Samsungs) and iOS diagnostics; **diagnostic apps** test sensors, touch, speakers,
  cameras in minutes. Demo one full run.
- ▶ **Video 9.3** (phone diagnostic apps & test menus — see videos.md).
- Teach-back: one student recites the backup-first rule and when it applies; another
  states the activation-lock policy in one sentence.

### 8. PRACTICAL (3 h)
Run [practicals/practical-09-software-diagnostics.md](practicals/practical-09-software-diagnostics.md) — diagnosis stations with
planted faults; students do NOT know which station has which fault:
- Station A: phone with a rogue third-party app (solvable via safe mode + uninstall).
- Station B: phone with storage stuffed full (slow, failing updates).
- Station C: phone needing a recovery-mode wipe/reset (trainer plants a corrupted state).
- Station D: **hardware red herring** — looks like software, is actually hardware
  (e.g. lint-packed port "won't charge after update").
- Students rotate through all stations: run the intake questions (trainer or partner
  plays the customer), follow the flowchart, document findings, fix what is fixable,
  and write the diagnosis + recommended action for each.
- Grade with the rubric: correct diagnosis, backup-first observed, flowchart followed,
  red herring caught. Bench cleanup inspection ends the session.

### 9. Quiz (10 min)
Module 9 quiz from [assessments/module-quizzes.md → Quiz 9](assessments/module-quizzes.md#quiz-9-software-troubleshooting-diagnostics).

## Homework
- Find and run your own phone's built-in test menu or a diagnostic app; bring the
  results next session.
- Watch Video 10.1 (starting a phone repair business) before Module 10 — the final
  module builds your shop around everything you've learned.

## Common trainer pitfalls
- Don't plant faults the morning of class — set stations up the day before and verify
  each fault presents as intended; a self-healed fault wrecks a station.
- Students skip intake questions and dive into settings; grade the interview as hard
  as the fix — the flowchart starts with questions, not menus.
- Watch for students factory-resetting before backing up or asking — treat it as a
  failed station even if the fault is "fixed."
- Do not soften the ethics block or let it become a debate about edge cases; the
  answer to every lock-bypass scenario is the same word.
- The red-herring station only works if you keep a straight face — do not hint that
  one station is hardware.
