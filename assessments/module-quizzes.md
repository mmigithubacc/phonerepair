# Module Quizzes (1–10)

**How to run these quizzes**

- One quiz at the end of each module (see each module's session plan, "Quiz" step).
- **Time:** 10 minutes per quiz. **Closed book** — tools down, notes away, phones face-down.
- **Pass mark: 7/10.** Quizzes count for **20% of the final grade** (average of all 10).
- **Failed a quiz?** The student retakes it at the start of the **next session** (trainer may swap in the spare variant questions from the answer-key notes). The retake score replaces the fail for pass/fail purposes; record both scores in the grade book.
- Read each question fully — many are scenarios where more than one answer is "sort of" true. Pick the **best next action**.
- Answer key (with a one-line why) is at the end of this file. **Do not print the key section on student copies.**

---

## Quiz 1 — Workshop Safety, Tools & ESD

**Q1.1** You're removing a phone's bottom screws and the screwdriver starts to slip in the screw head. What do you do next?
a) Press harder and turn faster before the head strips
b) Stop, check you have the correct bit type and the largest size that fits, then press down firmly and try again
c) Switch to pliers to grip the screw from outside
d) Apply a drop of oil to the screw and continue

**Q1.2** Why does an ESD wrist strap cord contain a 1 MΩ resistor?
a) To make the strap discharge static faster
b) To stop the strap from magnetizing tools
c) To limit current so the wearer isn't electrocuted if they touch a live voltage while grounded
d) To filter radio interference from the phone

**Q1.3** A student says: "I felt no shock, so I can't have caused ESD damage." What's wrong with this?
a) Nothing — if you feel no shock, no discharge happened
b) Humans only feel discharges above roughly 3,000 V, but many phone ICs are damaged below 100 V — most ESD damage is invisible and can kill the board slowly (latent damage)
c) ESD only matters in winter
d) ESD only damages batteries, not chips

**Q1.4** What sequence causes lithium-ion thermal runaway in a repair shop?
a) Overcharging → fuse blows → battery drains
b) Puncture or bend → internal short → rapid heating → fire that water won't easily stop
c) Cold bench → condensation → rust
d) Static discharge → battery memory effect

**Q1.5** You open a customer phone and find the battery visibly swollen. Correct response?
a) Press it gently flat so it fits back in
b) Charge it to 100% to test capacity before deciding
c) Stop work; never press, charge, or pry it; move it to the sand-filled battery bin and inform the senior/trainer
d) Puncture it in a controlled way to release the gas

**Q1.6** Which driver do you reach for on the two external bottom screws of most iPhones?
a) Phillips PH000
b) Torx T5
c) Pentalobe (P2/P5)
d) Tri-point Y000

**Q1.7** Tri-point Y000 screws are most commonly found:
a) On Android back covers
b) Inside iPhones (e.g. securing brackets)
c) Only on laptops
d) On charging cables

**Q1.8** Why is 70% household alcohol NOT acceptable for cleaning phone boards, while ≥ 99% IPA is?
a) 70% smells worse
b) 70% contains ~30% water, which stays behind and causes shorts and corrosion
c) 99% is cheaper
d) 70% dissolves solder

**Q1.9** Target surface temperature when heating a phone to soften screen adhesive:
a) 40–50 °C
b) 80–100 °C
c) 150–200 °C
d) 250–300 °C

**Q1.10** Your wrist strap tester shows FAIL at the start of the session. What do you do?
a) Work anyway — the mat alone is enough
b) Wear the strap anyway; a partly working strap is better than nothing
c) Do not start work; swap the strap or cord and retest until it passes
d) Wet your wrist to improve contact and skip the retest

---

## Quiz 2 — Mobile Phone Anatomy & Components

**Q2.1** Which component is the phone's "brain" — CPU, GPU and often RAM stacked in one package?
a) PMIC
b) SoC (System on a Chip)
c) Baseband
d) Charging IC

**Q2.2** A phone has Wi-Fi and apps working fine but no cellular signal at all ("No Service"). Which component family is the prime suspect?
a) The SoC
b) The baseband (modem) circuit and its antennas
c) The display driver
d) The speaker amplifier

**Q2.3** What does the PMIC do?
a) Stores photos
b) Distributes and regulates power rails from the battery to every other circuit
c) Processes the camera image
d) Amplifies the earpiece

**Q2.4** A ZIF (zero insertion force) connector is opened by:
a) Pulling the flex cable straight out with force
b) Flipping/lifting its small locking latch first, then sliding the flex out gently
c) Heating it to 100 °C
d) Cutting the flex and re-soldering

**Q2.5** Press-fit (board-to-board) connectors, like most battery and display connectors, should be disconnected with:
a) Metal spudger levered under the middle
b) A plastic spudger or fingernail lifting evenly from under the connector's edge, straight up
c) Tweezers gripping the cable
d) A drop of IPA to loosen the glue

**Q2.6** The small round coax cables running the length of the phone usually carry:
a) Battery power
b) Antenna/RF signals
c) Display data
d) Speaker audio

**Q2.7** What are the metal covers soldered over groups of chips on the logic board for?
a) Decoration
b) EMI shielding (blocking electromagnetic interference) and some physical protection
c) Extra battery capacity
d) Water sealing

**Q2.8** Flex cables should be handled by:
a) Folding them sharply so they fit better
b) Pulling them by the ribbon to unseat connectors
c) Handling by the stiffened connector end, never creasing, and lifting connectors straight up
d) Rolling them tightly around tweezers

**Q2.9** Before ordering parts, you must identify the exact phone model. The most reliable way is:
a) Guessing from the phone's color and size
b) The model number in Settings/About (or printed on the SIM tray / back / bezel), cross-checked against the part listing
c) Asking the customer what they think it is
d) All parts are interchangeable within a brand, so it doesn't matter

**Q2.10** Which of these is a *sensor* you'd expect near the earpiece at the top of the display?
a) Proximity sensor (turns the screen off against your cheek)
b) PMIC
c) Charging IC
d) Vibration motor

---

## Quiz 3 — Disassembly & Reassembly

**Q3.1** You've been asked to open a phone model you've never worked on. First step?
a) Heat it and start prying — all phones are similar
b) Find and read/watch a teardown guide for that exact model before touching it (guide-first rule)
c) Remove all visible screws and shake it
d) Ask the customer how to open it

**Q3.2** What is the FIRST thing you disconnect once you're inside any phone?
a) The display connector
b) The battery connector
c) The charging port flex
d) The camera

**Q3.3** Why disconnect the battery first?
a) To save battery charge
b) So no circuit is live while you work — preventing shorts and damage when you disconnect or reconnect anything else
c) Because the battery blocks access to the screws
d) It's optional on Android phones

**Q3.4** You reassemble a phone and put a long screw in a short screw's hole. Classic result?
a) Nothing — screws are interchangeable
b) The screw can pierce or press into the board underneath, cutting traces ("long-screw damage") and potentially killing the phone
c) The phone gets heavier
d) Better grounding

**Q3.5** Which habit prevents Q3.4?
a) Screw mapping: laying screws out on a magnetic mat / labelled diagram matching each hole
b) Using only short screws everywhere
c) Leaving out any screw you're unsure about
d) Gluing screws in place

**Q3.6** The safest way to disconnect a press-fit connector is:
a) Lever with a metal spudger against the board
b) Use a plastic spudger under the connector's edge and pop it straight up, working from a corner
c) Pull the flex cable at 45°
d) Heat it with the heat gun first

**Q3.7** While routing a flex cable back into place, you notice it must make a sharp bend. You should:
a) Crease it firmly so it stays
b) Follow its original factory fold lines and routing — never make new sharp creases
c) Cut a notch to relieve stress
d) Replace it with a wire

**Q3.8** You've finished the repair and the back cover is ready to glue on. What comes first?
a) Seal it — testing can wait until the glue cures
b) Test the phone (power on, screen, touch, cameras, speaker, charging...) BEFORE sealing
c) Give it back and tell the customer to test at home
d) Charge it overnight sealed

**Q3.9** After reassembly you have one screw left over. Correct response?
a) Keep it in the spare-parts jar — probably not important
b) Reopen the phone and find its hole — a leftover screw means the screw map failed
c) Tape it to the back of the phone
d) Assume the factory added an extra

**Q3.10** A connector won't pop loose with light plastic-spudger pressure. Best next move?
a) Push much harder in the same spot
b) Switch to a metal pry tool for leverage
c) Stop and re-check: is there a hidden screw, bracket, or latch still holding it? Force is never the answer
d) Pull the cable instead

---

## Quiz 4 — Screen & Display Replacement

**Q4.1** A dropped phone shows the image fine but has "ink blots" and spreading black patches. Untouched glass, image bleeding. Which layer failed?
a) Just the glass
b) The LCD/OLED panel underneath
c) The battery
d) The backlight cable only

**Q4.2** A customer's OLED phone shows a ghost image of the keyboard permanently faded into the display. This is:
a) Water damage
b) Burn-in — a wear characteristic of OLED panels
c) A software bug fixed by reset
d) ESD damage

**Q4.3** Most modern phone screens are "fused assemblies." This means:
a) Glass, touch layer, and display panel are laminated into one part, so you normally replace the whole assembly, not just the glass
b) The screen is welded to the frame
c) The screen contains a fuse you can replace
d) The screen can't be replaced at all

**Q4.4** Rank the usual quality order of replacement screens, best first:
a) Aftermarket → refurbished → pulled → OEM
b) OEM → pulled (original, used) → refurbished → aftermarket
c) Pulled → aftermarket → OEM → refurbished
d) They are all identical

**Q4.5** During screen removal, where must you NOT insert your pick deeply?
a) Along the top edge
b) Along the edges over the battery and over flex cables — depth-limit the pick to a few millimetres
c) At the corners
d) Anywhere — depth never matters

**Q4.6** "Parts transfer" during a screen replacement means:
a) Shipping the old screen back to the supplier
b) Moving small components (earpiece, sensors, brackets, plates) from the old screen to the new one when the new part doesn't include them
c) Copying the customer's data
d) Swapping the battery at the same time

**Q4.7** The correct moment to fully test the new screen (display, touch corners-to-corners, sensors) is:
a) After the adhesive has fully cured
b) Connected but BEFORE sealing the phone — power on and test while it's still openable without destroying new adhesive
c) One week later
d) Never — new parts are always good

**Q4.8** After a third-party screen replacement on a recent iPhone, the customer may see a "non-genuine display" warning and lose True Tone. What must you do?
a) Hide it — they probably won't notice
b) Nothing; it's impossible to know in advance
c) Warn the customer BEFORE the repair that Apple parts serialization causes this, and record that they accepted it
d) Bypass Apple's software — there's an app for that

**Q4.9** You power-on test a new screen before sealing and one corner doesn't respond to touch. You should:
a) Seal it anyway; touch usually "settles in"
b) Blame the customer's fingers
c) Re-seat the display connectors and retest; if it persists, the new part is faulty — replace it under supplier warranty before sealing
d) Reduce the price and hand it back

**Q4.10** Which sequence is correct for removal of a glued screen?
a) Pry cold with a metal spudger, then heat
b) Heat edges to ~80–100 °C, suction cup to lift a gap, insert pick, slice adhesive around the perimeter respecting depth limits, then disconnect battery before display connectors — following the guide for that model
c) Freeze the phone to crack the glue
d) Pour IPA over the screen and wait

---

## Quiz 5 — Battery & Power Issues

**Q5.1** A healthy single-cell li-ion phone battery operates roughly between:
a) 1.2 V and 1.5 V
b) 3.0 V (empty) and 4.2–4.4 V (full)
c) 5 V and 9 V
d) 12 V always

**Q5.2** Which set of symptoms most suggests a worn-out battery rather than a software problem?
a) One app crashes repeatedly
b) Sudden shutdowns at 20–40%, percentage jumping, phone only staying on while plugged in, battery health below ~80%
c) No SIM detected
d) Cracked glass

**Q5.3** The correct way to remove a battery held by adhesive pull-tabs:
a) Pry under it with a metal spudger
b) Heat it with the iron
c) Pull each tab slowly and steadily at a low angle, keeping it flat so it doesn't snap; if a tab breaks, use IPA/gentle heat and a plastic card — never metal, never bend the battery
d) Lever it out quickly by one corner

**Q5.4** Recite the charging chain in order:
a) Battery → PMIC → charger
b) Charger → cable → port → charging IC → PMIC → battery
c) Port → charger → battery → cable
d) Cable → battery → port → PMIC

**Q5.5** A phone won't charge. Your USB ammeter shows 0.00 A with a known-good charger and cable. What have you just eliminated?
a) Nothing
b) The charger and cable — the fault is now downstream: port, charging IC/PMIC, or battery
c) The battery only
d) The screen

**Q5.6** A phone shows no sign of life. Before declaring it "dead," you shine a flashlight at an angle across the screen and see a faint image. Diagnosis?
a) True no-power fault
b) It's actually powered on — this is a no-display/backlight problem, not a no-power problem
c) Water damage
d) Dead battery for sure

**Q5.7** A phone repeatedly shows the logo, restarts, shows the logo again. This pattern is called:
a) No-power
b) Boot loop — could be software (corrupt OS) or hardware (failing battery/board) — and needs systematic isolation
c) Burn-in
d) Ghost touch

**Q5.8** With a known-good charger/cable, the ammeter reads a steady 0.05 A on a phone that should draw ~1.5 A. Reasonable interpretation?
a) Charging perfectly
b) The phone is barely drawing current — suspect port (inspect/clean first), then charging IC path
c) The ammeter is always wrong
d) The screen is faulty

**Q5.9** Why does a replacement battery need its adhesive/mounting done properly rather than left loose?
a) Purely cosmetic
b) A loose battery can flex, get punctured or fatigued by movement — a safety and reliability risk
c) It changes the voltage
d) Loose batteries charge faster

**Q5.10** Customer says "my phone died and now nothing happens." First cheap checks before opening it?
a) Order a new motherboard
b) Try known-good charger + cable, check the port for lint, leave on charge 15–30 min, try a forced restart — rule out the trivial causes first
c) Open it immediately and reflow the board
d) Factory reset from recovery

---

## Quiz 6 — Charging Ports, Buttons & Small-Part Repairs

**Q6.1** The #1 real-world cause of "my phone won't charge / the cable falls out" is:
a) A blown charging IC
b) Pocket lint compacted at the bottom of the charging port
c) Water damage
d) A bad battery

**Q6.2** The safe way to clean lint from a charging port:
a) A steel sewing needle, firmly
b) Power off; use a plastic/wooden pick or ESD-safe non-metal tool, scrape gently along the back wall away from the pins, finish with short bursts of air — never metal, never poking the pins
c) Wash it under the tap
d) A magnet to pull the lint out

**Q6.3** "Substitution diagnosis" for small parts means:
a) Guessing which part failed
b) Temporarily connecting a known-good part (speaker, port flex, button flex) to see if the symptom disappears before committing to the repair
c) Replacing every part at once
d) Substituting the customer's phone for a loaner

**Q6.4** Why does it matter whether a charging port is on a replaceable flex/sub-board or soldered directly to the main board?
a) It doesn't
b) Flex/sub-board ports are a plug-in replacement any trained tech can do; soldered ports need (micro)soldering skills and equipment — it changes difficulty, price, and who should do the job
c) Soldered ports never fail
d) Flex ports are always waterproof

**Q6.5** You replace a charging-port sub-board and afterwards the customer reports people can't hear them on calls. Most likely explanation?
a) Coincidence — unrelated
b) The sub-board also carries the primary microphone (and often speaker contacts) — a connection wasn't seated or the new sub-board is faulty; retest everything the sub-board carries
c) The SIM card was damaged
d) The customer is holding it wrong

**Q6.6** On many recent iPhones, swapping the camera (like the screen or battery) can trigger warnings or lost features because of:
a) Voltage differences
b) Parts serialization — components are paired to the board in software
c) Magnetism
d) The camera being glued

**Q6.7** When you open a water-resistant phone, the factory seal/gasket adhesive is destroyed. What must you do?
a) Nothing — the seal survives opening
b) Fit new sealing adhesive on reassembly AND tell the customer the phone should no longer be trusted as water-resistant
c) Wrap the phone in tape
d) Only reseal if the customer asks

**Q6.8** A power button feels dead. Before quoting a button replacement, you should check:
a) Whether it's the button flex/mechanism or actually a software freeze / board issue — e.g. does the phone respond to charger connection, does the button click, substitution-test the flex
b) The warranty sticker color
c) The SIM tray
d) Screen brightness

**Q6.9** After ANY small-part repair, the minimum test routine before sealing is:
a) Just power on
b) Test the replaced function AND everything you disturbed on the way in (mic, speakers, sensors, buttons, charging, Wi-Fi/signal)
c) Testing after sealing is fine
d) Let the customer test it

**Q6.10** A customer's speaker is quiet and crackly. Cheapest first fix attempt?
a) Replace the logic board
b) Gently clean the speaker mesh of dust/lint (and check settings/software), since blocked mesh is common — then substitution-test a known-good speaker if unchanged
c) New battery
d) Update the OS twice

---

## Quiz 7 — Soldering & Micro-Soldering Fundamentals

**Q7.1** Typical soldering iron temperature range for phone repair work:
a) 150–200 °C
b) 300–380 °C
c) 450–500 °C
d) 700 °C+

**Q7.2** What does flux actually do?
a) Glues the joint mechanically
b) Cleans oxide off the metal surfaces and helps the solder flow and wet properly
c) Cools the joint
d) Colors the solder

**Q7.3** "Wetting" describes:
a) Solder flowing smoothly and bonding to the metal surface, spreading into a thin adherent layer
b) Cleaning the board with water
c) Cooling the iron in a sponge
d) A failed joint

**Q7.4** A good through-hole solder joint looks like:
a) A dull grey ball
b) A shiny, smooth, concave cone ("volcano") gripping pad and lead
c) A large blob covering three pads
d) A cracked ring around the lead

**Q7.5** A joint is dull, grainy, and cracks when the lead is wiggled. It was likely moved while cooling or soldered too cold. This is a:
a) Bridged joint
b) Cold/dry joint — reheat with flux until it flows properly
c) Perfect joint
d) Wetted joint

**Q7.6** Solder has connected two neighbouring pins that should be separate. Name and first fix?
a) Cold joint — add more solder
b) Bridge — add flux and drag it away with the clean iron tip, or remove excess with desoldering wick
c) Wetting — leave it
d) Burn-in — replace the chip

**Q7.7** Wick (braid) vs pump: which pairing is right?
a) Wick for fine cleanup of small amounts of solder from pads; pump for sucking larger volumes out of through-holes
b) Pump for pads only; wick for through-holes only
c) They're interchangeable in all cases
d) Neither removes solder

**Q7.8** "Drag soldering" is used for:
a) Single through-hole joints
b) Soldering rows of fine-pitch pins by dragging a flux-loaded tip along them in one pass
c) Removing shields
d) Battery terminals

**Q7.9** Fume safety when soldering means:
a) Fumes are harmless — they're just steam
b) Position a fume extractor or fan so flux smoke is pulled away from your face; ventilate the room; don't lean over the joint
c) Hold your breath during each joint
d) Solder outdoors only

**Q7.10** A customer's phone needs a torn ZIF socket replaced on the logic board — fine-pitch, hot-air work under a microscope. You've done a two-day soldering intro. Right call?
a) Attempt it — how hard can it be?
b) Refer it to a micro-soldering specialist; know the boundary of your skills and equipment — that's professionalism, not failure
c) Glue the socket with B-7000
d) Tell the customer it's unfixable by anyone

---

## Quiz 8 — Water Damage & Corrosion Treatment

**Q8.1** Water kills phones by two mechanisms. Which pair is correct?
a) Weight and pressure
b) Immediate short circuits while powered, then ongoing electrolytic corrosion that keeps eating the board for days/weeks after
c) Freezing and rust only
d) Softening the glue only

**Q8.2** Why is salt water (or pool/toilet water) worse than clean fresh water?
a) It isn't — water is water
b) Salts/ions make the water far more conductive and much more corrosive, accelerating both shorts and corrosion
c) Salt water is colder
d) Salt blocks the speaker only

**Q8.3** A customer just fished their phone out of a basin. The single most useful instruction to give them over the phone:
a) "Plug it in to see if it still charges"
b) "Power it off now, don't charge it, don't press buttons to test it — bring it in as soon as possible"
c) "Put it in rice for three days, then call back"
d) "Use a hairdryer on hot for 20 minutes"

**Q8.4** What's wrong with the rice trick?
a) Nothing, it's the professional standard
b) Rice barely absorbs internal moisture and does nothing against corrosion; it just wastes the days when treatment would have helped, while damage spreads
c) Rice is too expensive
d) Rice only works with basmati

**Q8.5** LCI stickers inside the phone are for:
a) Decorating the board
b) Liquid Contact Indicators — they turn red/pink on liquid exposure, confirming (to you and to warranty processes) that liquid got in
c) Blocking water entry
d) Grounding the shields

**Q8.6** Proper professional treatment of a water-damaged phone is:
a) Sealed bag with silica gel for a week
b) Full teardown; disconnect battery; inspect; brush-clean corrosion with ≥99% IPA (IPA bath for the board), ideally ultrasonic cleaning of the board; dry fully; reassemble and test
c) Oven at 120 °C
d) Spray contact cleaner into the charging port and hope

**Q8.7** Why does ≥99% IPA get used on wet boards at all — isn't it a liquid?
a) It's magic
b) It's barely conductive, dissolves residues, displaces water, and evaporates fast without leaving water behind
c) It hardens into a protective coat
d) It recharges the battery

**Q8.8** After any significant liquid exposure, the battery should be:
a) Kept if it still holds charge
b) Replaced — a battery that's been wet/shorted is internally compromised and is a delayed fire/failure risk even if it seems fine
c) Baked dry
d) Swapped only if swollen

**Q8.9** The ultrasonic cleaner is used on:
a) The whole assembled phone
b) The bare logic board (and stripped sub-boards) in appropriate cleaning solution — never batteries, never assembled phones
c) The battery
d) The screen assembly

**Q8.10** The phone works after your water treatment. What do you tell the customer?
a) "Good as new, same as before it fell in"
b) The honest prognosis: it works today, but water damage can cause failures weeks or months later; corrosion may resume; no warranty (or a very limited one) on water-damaged boards — back up your data now
c) Nothing — why worry them?
d) "It's now waterproof again"

---

## Quiz 9 — Software Troubleshooting & Diagnostics

**Q9.1** Before ANY software repair procedure (reset, reflash, update), the first step is:
a) Factory reset to get a clean baseline
b) Back up the customer's data (or get their explicit written acknowledgement that data may be lost and backup isn't possible)
c) Remove the SIM
d) Drain the battery to 0%

**Q9.2** An Android phone lags and pops up ads constantly, but boots fine. Booting into **safe mode** helps you determine:
a) The battery health
b) Whether a third-party app is the culprit — safe mode loads only system apps; if the problem disappears, it's an installed app
c) The IMEI
d) Whether the screen is genuine

**Q9.3** The difference between recovery mode and a factory reset is:
a) They're the same thing
b) Recovery mode is a special boot menu (from which you can wipe/update); factory reset is the action of erasing user data back to defaults — you can reach it from settings or from recovery
c) Factory reset repairs the hardware
d) Recovery mode is iPhone-only

**Q9.4** On an iPhone, DFU mode differs from recovery mode because:
a) DFU is a deeper restore state where the device loads no OS/bootloader UI (black screen), letting the computer rewrite firmware completely; recovery still runs the bootloader and shows the connect-to-computer screen
b) DFU is wireless
c) Recovery erases data, DFU never does
d) There is no difference

**Q9.5** In the hardware-vs-software flowchart, which observation points strongly to HARDWARE?
a) Problem disappears in safe mode
b) Problem persists after a clean OS reflash / factory reset
c) Problem started right after installing an app
d) Problem only happens in one app

**Q9.6** A customer brings a "found" phone showing a Google FRP lock / Apple Activation Lock and asks you to remove it. Shop policy?
a) Bypass it — tools exist online
b) NEVER bypass FRP/activation locks. These are anti-theft measures; only the verified owner can remove them with their own credentials/proof of purchase. Decline the job
c) Do it for a premium price
d) Remove the lock but keep the phone's IMEI on file

**Q9.7** A repeat customer forgot their PIN on their own phone and wants it reset. Correct handling?
a) Refuse forever
b) Verify ownership (ID, proof of purchase, account access), get a signed acknowledgement that a reset erases data, then guide/perform the owner's official reset procedure using their own account credentials
c) Bypass the lock with a flashing box, no questions
d) Guess PINs until it opens

**Q9.8** Built-in diagnostic menus (e.g. dialer codes on many Androids, or manufacturer test apps) are useful because:
a) They unlock the bootloader
b) They run guided hardware self-tests (screen, touch, sensors, speaker, vibration) — fast evidence for hardware-vs-software decisions and for before/after repair testing
c) They erase the phone faster
d) They remove FRP

**Q9.9** A phone boot-loops. The customer has no backup. Before attempting a wipe/restore that would erase data, you should:
a) Just wipe — speed matters
b) Explain the options and risks, attempt data-preserving routes first (e.g. standard recovery/repair-OS update that keeps data), and get the customer's explicit consent for anything destructive
c) Promise the data is 100% safe
d) Remove the battery to save the data

**Q9.10** After a successful OS reflash, the final professional step is:
a) Hand it back immediately
b) Verify the fix (reproduce the original complaint scenario), confirm basic functions, remove your test accounts/files, and help the customer restore their backup
c) Install your favorite apps for them
d) Factory reset it once more for luck

---

## Quiz 10 — Repair Business Skills

**Q10.1** A customer hands over a phone for a screen repair. Before they leave, the intake form must include (among other details):
a) Only their name
b) Reported fault, passcode/test access arrangement, signed terms — and **photos of the phone's pre-existing damage** taken with the customer present
c) Their bank PIN
d) Nothing written — a handshake is faster

**Q10.2** Why photograph pre-existing damage at intake?
a) For social media
b) It protects both sides: the customer can't be blamed for your damage, and you can't be blamed for scratches/dents that were already there
c) Photos are legally required everywhere
d) To upsell a case

**Q10.3** A customer declines the repair after you spent 40 minutes finding the fault. The diagnosis fee exists to:
a) Punish the customer
b) Pay for your diagnostic time whether or not they proceed — typically waived/credited against the repair if they go ahead, and stated up front at intake
c) Cover the cost of rice
d) Replace a warranty

**Q10.4** Sound repair pricing is calculated as:
a) Whatever the customer looks able to pay
b) Parts cost + labor (your time at a rate) + margin (overheads/profit/warranty risk)
c) Parts cost only, to stay cheap
d) Always match the cheapest competitor

**Q10.5** How should part quality tiers relate to your warranty?
a) Same warranty on everything regardless of part quality
b) Match warranty to the part: e.g. longer warranty on OEM/original parts, shorter on aftermarket — and tell the customer the tier + warranty for each price option
c) Never give warranties
d) Warranty only on Fridays

**Q10.6** A phone is unlocked for repair testing. Data privacy means:
a) You may browse photos if you're curious
b) You access only what the repair requires, never copy/share customer data, keep the phone secure while in the shop, and your policy says so in writing
c) Backing up their photos to your own drive "just in case" without asking
d) Privacy only applies to famous customers

**Q10.7** Which combination is a stolen-phone red flag that should stop you buying/repairing without checks?
a) An older person with a cracked screen and a receipt
b) Seller wants cash instantly for a locked phone they "found," doesn't know the passcode, no receipt, price far below market — check the IMEI against blacklist databases before touching it
c) A phone with a worn case
d) Any phone without its original box

**Q10.8** Where do you find the IMEI to check a device's blacklist/lost-stolen status?
a) Only the carrier knows it
b) Dial \*#06#, or check the SIM tray / original box / settings — then run it through an IMEI blacklist checker
c) Written under the battery of all modern phones
d) You can't check IMEIs

**Q10.9** The warranty log's job is to record:
a) Your lunch orders
b) Each repair: date, device/IMEI, fault, part used (and its tier/supplier), price, warranty period — so returning customers and part-quality problems can be handled with facts
c) Only failed repairs
d) Competitor prices

**Q10.10** A customer expects their 5-year-old, twice-water-damaged phone to be "like new" after a cheap screen. Expectation setting means:
a) Promise like-new to win the job
b) Before starting: explain realistically what the repair will and won't fix, known risks (e.g. serialization warnings, battery age, latent water damage), and put it on the intake form
c) Say nothing and handle complaints later
d) Refuse all difficult customers

---
---

# ANSWER KEYS — TRAINER ONLY (do not distribute)

Format: **answer — one-line why.**

## Quiz 1 key

| Q | Ans | Why |
|---|-----|-----|
| Q1.1 | b | "If it slips, it strips" — stop, verify bit type/size, press down firmly; never force. |
| Q1.2 | c | The 1 MΩ resistor limits current through your body if you contact live voltage while grounded. |
| Q1.3 | b | Humans feel only >~3,000 V; ICs die below 100 V — latent ESD damage is invisible. |
| Q1.4 | b | Puncture/bend → internal short → heat → self-sustaining fire (thermal runaway). |
| Q1.5 | c | Swollen = never press/charge/pry; sand-filled battery bin, trainer handles it. |
| Q1.6 | c | iPhone external bottom screws are Pentalobe (P2/P5). |
| Q1.7 | b | Tri-point Y000 is used inside iPhones. |
| Q1.8 | b | 70% alcohol leaves ~30% water behind → shorts and corrosion. |
| Q1.9 | b | Adhesive softens at 80–100 °C surface temperature; hotter risks battery/screen damage. |
| Q1.10 | c | Never work with a failed strap; a broken strap gives false confidence — swap and retest. |

## Quiz 2 key

| Q | Ans | Why |
|---|-----|-----|
| Q2.1 | b | The SoC integrates CPU/GPU (and stacked RAM) — the phone's brain. |
| Q2.2 | b | Cellular-only failure points to the baseband/modem and antenna path. |
| Q2.3 | b | The PMIC regulates and distributes power rails to everything. |
| Q2.4 | b | ZIF = flip the latch, then the flex slides out with zero force. |
| Q2.5 | b | Press-fit connectors pop straight up with a plastic tool from the edge. |
| Q2.6 | b | Thin coax cables carry antenna/RF signals. |
| Q2.7 | b | Soldered metal cans are EMI shields (plus some physical protection). |
| Q2.8 | c | Flexes: hold by the stiff end, no new creases, lift connectors straight up. |
| Q2.9 | b | Exact model number (About screen / SIM tray / case markings) drives correct parts ordering. |
| Q2.10 | a | The proximity sensor sits near the earpiece and blanks the screen during calls. |

## Quiz 3 key

| Q | Ans | Why |
|---|-----|-----|
| Q3.1 | b | Guide-first rule: read/watch a model-specific teardown before opening. |
| Q3.2 | b | Battery connector comes off first, always. |
| Q3.3 | b | With the battery off, nothing is live — no shorts while working on connectors. |
| Q3.4 | b | Long-screw damage: the screw pierces board layers and cuts traces. |
| Q3.5 | a | Screw mapping on a magnetic mat/diagram guarantees each screw returns home. |
| Q3.6 | b | Plastic spudger, from the connector edge, straight up. |
| Q3.7 | b | Follow factory fold lines and routing; new sharp creases crack traces. |
| Q3.8 | b | Test before sealing — always. |
| Q3.9 | b | A leftover screw means the map failed; reopen and place it. |
| Q3.10 | c | Resistance means something is still attached — look for hidden screw/bracket, never force. |

## Quiz 4 key

| Q | Ans | Why |
|---|-----|-----|
| Q4.1 | b | Ink blots/bleeding = damaged display panel under intact glass. |
| Q4.2 | b | Ghost images are OLED burn-in. |
| Q4.3 | a | Fused = laminated glass+touch+panel; replace as one assembly. |
| Q4.4 | b | OEM > pulled originals > refurbished > aftermarket, as a general rule. |
| Q4.5 | b | Deep picks over the battery or flexes puncture/cut them — depth-limit the pick. |
| Q4.6 | b | Parts transfer = migrating earpiece/sensors/brackets to the new assembly. |
| Q4.7 | b | Test connected but unsealed — a fault found after sealing wastes adhesive and time. |
| Q4.8 | c | Serialization/True Tone loss must be disclosed and accepted BEFORE the repair. |
| Q4.9 | c | Re-seat, retest, then supplier-warranty the faulty part — never seal a known fault. |
| Q4.10 | b | Heat → suction gap → pick with depth limits → battery disconnected before display flexes. |

## Quiz 5 key

| Q | Ans | Why |
|---|-----|-----|
| Q5.1 | b | Li-ion cell: ~3.0 V empty to 4.2–4.4 V full. |
| Q5.2 | b | Sudden shutdowns, jumping %, plug-only operation, health <80% = worn battery. |
| Q5.3 | c | Pull tabs slowly, low angle; if broken, IPA/heat + plastic card — never metal, never bend. |
| Q5.4 | b | Charger → cable → port → charging IC → PMIC → battery. |
| Q5.5 | b | Known-good charger+cable at 0 A ⇒ fault is downstream (port/IC/PMIC/battery). |
| Q5.6 | b | Faint image under flashlight = phone alive; it's a display/backlight fault. |
| Q5.7 | b | Logo-restart cycle = boot loop; isolate software vs hardware. |
| Q5.8 | b | Tiny draw suggests port contamination/damage first, then charging-IC path. |
| Q5.9 | b | Loose batteries flex and get punctured/fatigued — a safety risk. |
| Q5.10 | b | Rule out charger/cable/lint/empty-battery/forced-restart before any teardown. |

## Quiz 6 key

| Q | Ans | Why |
|---|-----|-----|
| Q6.1 | b | Compacted pocket lint is the #1 charging complaint cause. |
| Q6.2 | b | Non-metal pick, gentle, away from pins, phone off, finish with air. |
| Q6.3 | b | Substitution = try a known-good part to confirm the fault before selling the repair. |
| Q6.4 | b | Flex/sub-board = plug-in swap; soldered = (micro)soldering job — different skill and price. |
| Q6.5 | b | Charging sub-boards commonly carry the primary mic — retest everything the sub-board carries. |
| Q6.6 | b | Parts serialization pairs cameras (and screens/batteries) to the board on recent iPhones. |
| Q6.7 | b | Reseal with new adhesive AND disclose that factory water resistance is no longer guaranteed. |
| Q6.8 | a | Confirm it's really the button (click, charger-wake, substitution) before quoting. |
| Q6.9 | b | Test the fix plus everything disturbed, before sealing. |
| Q6.10 | b | Blocked mesh is common and free to fix; substitution-test before replacing. |

## Quiz 7 key

| Q | Ans | Why |
|---|-----|-----|
| Q7.1 | b | 300–380 °C covers leaded and lead-free phone work. |
| Q7.2 | b | Flux removes oxides and promotes flow/wetting. |
| Q7.3 | a | Wetting = solder bonding and spreading thinly onto the metal. |
| Q7.4 | b | Good joint = shiny smooth concave cone. |
| Q7.5 | b | Dull/grainy/cracking = cold (dry) joint; reflow with flux. |
| Q7.6 | b | A bridge is cleared with flux + drag or wick. |
| Q7.7 | a | Wick for pads/fine cleanup; pump for volume in through-holes. |
| Q7.8 | b | Drag soldering does fine-pitch pin rows in one fluxed pass. |
| Q7.9 | b | Extract/deflect flux fumes; ventilate; keep your face out of the plume. |
| Q7.10 | b | Referring beyond-your-level board work to a micro-soldering specialist is the professional call. |

## Quiz 8 key

| Q | Ans | Why |
|---|-----|-----|
| Q8.1 | b | Immediate shorts while powered + ongoing electrolytic corrosion afterwards. |
| Q8.2 | b | Ions make liquid far more conductive and corrosive. |
| Q8.3 | b | Power off, don't charge, don't test, come in fast — every hour matters. |
| Q8.4 | b | Rice is a myth: no corrosion treatment, wasted critical days. |
| Q8.5 | b | LCIs turn red/pink on liquid contact — evidence of exposure. |
| Q8.6 | b | Teardown → battery off → IPA (≥99%) brush/bath → ultrasonic (board) → dry → test. |
| Q8.7 | b | ≥99% IPA displaces water, cleans, and evaporates without residue. |
| Q8.8 | b | Wet batteries are compromised — replace after significant liquid exposure. |
| Q8.9 | b | Ultrasonic: bare boards only — never batteries or assembled phones. |
| Q8.10 | b | Honest prognosis: delayed failures possible, limited/no warranty, back up now. |

## Quiz 9 key

| Q | Ans | Why |
|---|-----|-----|
| Q9.1 | b | Backup first — data is usually worth more than the phone. |
| Q9.2 | b | Safe mode disables third-party apps; symptom gone = app is the cause. |
| Q9.3 | b | Recovery is a boot menu; factory reset is the wipe action reachable from it (or settings). |
| Q9.4 | a | DFU = deepest restore, no bootloader UI, full firmware rewrite; recovery shows the connect screen. |
| Q9.5 | b | Surviving a clean reflash/reset means the fault is in the hardware. |
| Q9.6 | b | FRP/Activation Lock is never bypassed — anti-theft; owner-only removal. Decline. |
| Q9.7 | b | Owner-verified reset: ID/proof, signed data-loss consent, official procedure with their credentials. |
| Q9.8 | b | Diagnostic menus give fast guided hardware self-tests for evidence-based decisions. |
| Q9.9 | b | Try data-preserving routes first; destructive steps need explicit informed consent. |
| Q9.10 | b | Verify the fix, clean your traces off the device, restore the customer's backup. |

## Quiz 10 key

| Q | Ans | Why |
|---|-----|-----|
| Q10.1 | b | Intake = fault, access, signed terms, and photos of pre-existing damage with the customer present. |
| Q10.2 | b | Photos protect both parties from disputes about who caused what. |
| Q10.3 | b | The diagnosis fee pays for diagnostic time; usually credited if the repair proceeds; disclosed up front. |
| Q10.4 | b | Price = parts + labor + margin. |
| Q10.5 | b | Warranty length matches part tier, disclosed with each price option. |
| Q10.6 | b | Minimum-necessary access, no copying/sharing, secure storage, written policy. |
| Q10.7 | b | Locked "found" phone + cash urgency + no receipt + too-cheap = check IMEI blacklist, likely decline. |
| Q10.8 | b | \*#06\# (or SIM tray/box/settings) gives the IMEI for blacklist checking. |
| Q10.9 | b | The warranty log ties device, part tier/supplier, and warranty period to each job. |
| Q10.10 | b | Set realistic expectations in writing before starting the work. |
