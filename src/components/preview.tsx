"use client";

import { useState } from "react";

type HistoricalContextPreviewProps = {
  text: string;
  previewLength?: number;
};

export default function HistoricalContextPreview({
  text,
  previewLength = 320,
}: HistoricalContextPreviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > previewLength;
  const previewText = shouldTruncate
    ? `${text.slice(0, previewLength).trim()}...`
    : text;

  return (
    <div className="relative">
      <div className="relative">
        <p className="leading-7">
          {isExpanded || !shouldTruncate ? text : previewText}
        </p>

        {!isExpanded && shouldTruncate && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 mt-20 h-28 rounded-b-2xl bg-linear-to-t from-white via-white/85 to-transparent backdrop-blur-sm" />
        )}
      </div>

      {!isExpanded && shouldTruncate && (
        <div className="absolute z-10 top-2 left-1/2 transform -translate-x-1/2 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="rounded-full bg-black px-4 py-2 text-sm font-bold text-white shadow-md"
          >
            Continue reading to unlock the full historical context.
          </button>
        </div>
      )}

      {isExpanded && shouldTruncate && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="rounded-full bg-(--color-yellow) px-4 py-2 text-sm font-bold text-black shadow-md"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
}