# Practical 9 — Software Diagnosis Lab

**Time:** 3 hours (4 mystery stations × ~35 min + ethics gate + grading/cleanup)
**Work in pairs.** One plays technician, the other plays customer (or the trainer does); swap each station.
**Student name:** ______________________  **Date:** ____________

**Two unbreakable rules today:**
**1. BACKUP FIRST — no destructive step (reset, reflash, wipe) without a backup or documented customer waiver.**
**2. CONSENT — the customer signs before any reset, even in roleplay. Practice the habit, not just the fix.**

## How each station works

1. **Intake** — ask the "customer" the standard questions: What exactly happens? Since when? What changed (new app, update, drop, liquid)? Is your data backed up? What's your PIN or will you unlock it for me?
2. **Flowchart** — follow the software diagnostic flow from the module (symptom → simplest cause first → test → escalate).
3. **Fix & verify** — apply the least-destructive fix that works; verify with the customer's own symptom.
4. **Document** — fill your row in the findings table before moving on.

## Station 1 — "It keeps freezing and the battery dies by noon" (35 min)

| Step | Task | Done ✔ |
|---|---|---|
| 1.1 | Intake questions asked and noted (minimum 4) | ☐ |
| 1.2 | Check battery-usage stats — which app is eating it? Note it: ______________ | ☐ |
| 1.3 | Reboot into SAFE MODE — does the problem disappear? Y / N | ☐ |
| 1.4 | Uninstall/disable the suspect app; reboot normally; confirm symptom gone | ☐ |
| 1.5 | Explain to the customer what the app was doing and how to avoid a repeat | ☐ |

## Station 2 — "It's gotten so slow" (30 min)

| Step | Task | Done ✔ |
|---|---|---|
| 2.1 | Intake questions asked and noted | ☐ |
| 2.2 | Check storage: ______ GB free of ______ GB — nearly full? | ☐ |
| 2.3 | With CONSENT, clear caches, offload videos/photos (customer chooses what), remove unused apps | ☐ |
| 2.4 | Confirm free space target reached (≥ 10–15% free) and speed improved | ☐ |
| 2.5 | Nothing deleted without the customer naming it — customer initials: ______ | ☐ |

## Station 3 — "It's stuck on the logo" (40 min)

| Step | Task | Done ✔ |
|---|---|---|
| 3.1 | Intake: when did it start, was an update interrupted, IS THE DATA BACKED UP? | ☐ |
| 3.2 | Try the gentle path first: forced reboot; then cache partition wipe if the model offers it | ☐ |
| 3.3 | Still stuck → factory reset from recovery mode is the remaining option — STOP here | ☐ |
| 3.4 | ✋ MOCK CONSENT FORM (below) filled and signed by the "customer" BEFORE the reset. Trainer confirms this is a test device with nothing to lose — you practice the consent step anyway | ☐ |
| 3.5 | Boot to recovery mode, perform factory reset, verify the phone boots and completes setup | ☐ |

> **Mock consent form**
> I, ______________ (customer), understand a factory reset will ERASE ALL DATA on this phone.
> Backup status: ☐ backed up ☐ backup impossible (phone won't boot) — I accept the loss.
> Signature: ______________ Date: ________ Technician: ______________

## Station 4 — "It won't charge — must be the update" (30 min)

The customer is SURE it's software. Is it?

| Step | Task | Done ✔ |
|---|---|---|
| 4.1 | Intake questions asked — including "does the cable feel loose in the port?" | ☐ |
| 4.2 | Follow the flowchart honestly: before touching settings, do the HARDWARE basics — inspect the port with a light, try a known-good cable, ammeter reading: ______ A | ☐ |
| 4.3 | Root cause found (hint: this station is the red herring — the fix is from Practical 6, not a menu) | ☐ |
| 4.4 | Fix, retest with ammeter: ______ A, and explain to the customer why it was never the update | ☐ |

## Findings table (fill one row per station)

| Station | Symptoms | Questions asked | Tests run | Root cause | Fix | Data protected? ✔ |
|---|---|---|---|---|---|---|
| 1 | | | | | | ☐ |
| 2 | | | | | | ☐ |
| 3 | | | | | | ☐ |
| 4 | | | | | | ☐ |

## 🚦 Ethics gate — answer before grading

A customer brings in a "found" iPhone that shows an activation lock and asks you to
"just bypass it." Write the correct professional response:

______________________________________________________________
______________________________________________________________

*(Trainer key: refuse — activation lock exists to protect a theft victim; bypassing it is
illegal/against policy. Politely decline, explain the lock means the phone belongs to someone
else, and suggest they hand it to the police or return it. Never attempt or refer a bypass.)*

## Grading rubric (trainer)

| Criterion | Points | Score |
|---|---|---|
| Intake questioning (relevant, systematic, at every station) | 15 | |
| Flowchart method followed — simplest cause first, no skipping | 20 | |
| Correct root causes (4 × 5 points) | 20 | |
| Backup/consent discipline (form signed BEFORE reset, nothing wiped unasked) | 20 | |
| Hardware red herring caught at Station 4 | 10 | |
| Ethics answer correct | 10 | |
| Documentation (findings table complete) | 5 | |
| **Total** | **100** | |

Pass ≥ 70. Any destructive step without the signed consent form = consent criterion scored 0.
Offering to bypass the activation lock = automatic fail of this practical and a conduct review.
