import React from "react";

const RefinementSliders = ({
  tone,
  setTone,
  urgency,
  setUrgency,
  complexity,
  setComplexity,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-800">Refine your request</h2>

      <div>
        <div className="flex justify-between mb-1">
          <label className="font-medium text-sm">Tone</label>
          <span className="text-sm text-gray-500">
            {tone < 25
              ? "Gentle"
              : tone < 50
              ? "Neutral"
              : tone < 75
              ? "Confident"
              : "Authoritative"}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={tone}
          onChange={(e) => setTone(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <label className="font-medium text-sm">Urgency</label>
          <span className="text-sm text-gray-500">
            {urgency < 25
              ? "Reflective"
              : urgency < 50
              ? "Balanced"
              : urgency < 75
              ? "Timely"
              : "Urgent"}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={urgency}
          onChange={(e) => setUrgency(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <label className="font-medium text-sm">Complexity</label>
          <span className="text-sm text-gray-500">
            {complexity < 25
              ? "Simple"
              : complexity < 50
              ? "Moderate"
              : complexity < 75
              ? "Detailed"
              : "Advanced"}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={complexity}
          onChange={(e) => setComplexity(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
      </div>
    </div>
  );
};

export default RefinementSliders;
