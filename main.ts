// One-star review of gravity, written deadpan.
// Candidates considered:
//  1. Sleep: "Sleep: free, essential and non-negotiable, then leaves you tired
//     anyway if you dare to enjoy it past 7am." — true grievance, but the sting
//     lands mid-sentence and the joke is a little broad.
//  2. Monday: "Monday: arrives every week on time, then takes your weekend,
//     your sleep and your patience before 9am." — three grievances crowding
//     one line; the sting is diluted, not a turn.
//  3. Gravity (chosen, revised): "Gravity: holds everything together
//     every single day, then drops your phone face-down the one time its
//     screen is already cracked." — the setup now says what gravity
//     actually does instead of "works ... without complaint", which was
//     filler anthropomorphism (gravity does not "work" a shift). One
//     essential, one sharp true grievance everyone recognises (things
//     fall, and they fall worst when damage is already done), deadpan
//     throughout with no winking and no exclamation, and the sting
//     arrives in the last three words, after the complaint has been
//     read straight.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Gravity: holds everything together every single day, then drops your phone face-down the one time its screen is already cracked.";

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
