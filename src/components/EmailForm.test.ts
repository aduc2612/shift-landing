/**
 * EmailForm validation logic — run with: npx tsx src/components/EmailForm.test.ts
 * ponytail: only the regex is testable without a DOM; state transitions are
 * verified visually during dev. Revisit if a lightweight DOM runner is added.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";

// Mirror the regex from EmailForm.svelte (line 12)
function validateEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

describe("validateEmail", () => {
  it("rejects empty string", () => {
    assert.equal(validateEmail(""), false);
  });

  it("rejects string without @", () => {
    assert.equal(validateEmail("foobar"), false);
  });

  it("rejects string without domain", () => {
    assert.equal(validateEmail("foo@"), false);
  });

  it("rejects string without TLD", () => {
    assert.equal(validateEmail("foo@bar"), false);
  });

  it("rejects string with spaces", () => {
    assert.equal(validateEmail("foo @bar.com"), false);
  });

  it("accepts valid email", () => {
    assert.equal(validateEmail("user@example.com"), true);
  });

  it("accepts email with subdomain", () => {
    assert.equal(validateEmail("user@mail.example.co.uk"), true);
  });

  it("accepts email with plus addressing", () => {
    assert.equal(validateEmail("user+tag@example.com"), true);
  });
});
