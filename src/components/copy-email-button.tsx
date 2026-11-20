"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyFailed(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyFailed(true);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="border border-[#bdd0c1] bg-white/80 text-[#344e3f] px-5 py-3 rounded-lg text-sm font-medium hover:bg-white transition cursor-pointer"
        aria-live="polite"
      >
        {copied ? "Copied email ✓" : "Copy email"}
      </button>
      {copyFailed && (
        <span role="status" className="text-xs text-[#8b3a31] self-center">
          Could not copy email. Use the Email me link instead.
        </span>
      )}
    </>
  );
}
