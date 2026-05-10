"use client";

import { useState } from "react";
import Button from "./Buttons";

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
          <Button
            onClick={() => setIsExpanded(true)}
            style="default"
          >
            Continue reading
          </Button>
        </div>
      )}

      {isExpanded && shouldTruncate && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => setIsExpanded(false)}
            style="default"
          >
            Show less
          </Button>
        </div>
      )}
    </div>
  );
}