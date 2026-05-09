"use client";

import { useState } from "react";

type HistoricalContextPreviewProps = {
  text: string;
  previewLength?: number;
};

export default function HistoricalContextPreview({
  text,
  previewLength = 150,
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
          <div className="" />
        )}
      </div>

      {!isExpanded && shouldTruncate && (
        <div className="relative flex m-3 justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="rounded-full bg-(--color-text) px-4 py-2 text-sm font-bold text-(--color-surface) shadow-md"
          >
            Continue reading
          </button>
        </div>
      )}

      {isExpanded && shouldTruncate && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="rounded-full bg-(--color-yellow) px-4 py-2 text-sm font-bold text-(--color-text) shadow-md"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
}