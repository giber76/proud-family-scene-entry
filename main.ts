// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene (160 chars, one line) to /output/entry.txt.
// Drafted against the published judge brief: a real family on the page,
// heartfelt (affection shown, not told), a light wry turn, one telling
// detail, no wasted word. A grandfather who never says "I love you" spends
// three hours building his granddaughter a bookshelf; his pride is in the
// work, and his verdict on it — "It'll hold." — is the whole scene.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My father has never once said 'I love you.' Last weekend he spent three hours building my daughter a bookshelf, stood back, nodded once, and said, 'It'll hold.'";

if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-280 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
