import React, { useState } from "react";

const PromptPreview = ({
  mood,
  goal,
  tone,
  urgency,
  complexity,
  selectedTask,
  audience,
  format,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  const toneContext =
    tone < 25
      ? "a gentle, supportive tone"
      : tone < 50
      ? "a neutral tone"
      : tone < 75
      ? "a confident tone"
      : "a bold, assertive tone";

  const urgencyContext =
    urgency < 25
      ? "for long-term reflection"
      : urgency < 50
      ? "with a balanced pace"
      : urgency < 75
      ? "with some time pressure"
      : "as an urgent matter";

  const complexityContext =
    complexity < 25
      ? "in very simple terms"
      : complexity < 50
      ? "in a straightforward way"
      : complexity < 75
      ? "with some nuance"
      : "with full technical depth";

  const moodContext = mood ? `The user is feeling ${mood}. ` : "";

  const basePrompt = `
${moodContext}Task Type: ${selectedTask}.
Audience: ${audience}.
Preferred Format: ${format}.

The user’s goal is: ${goal}

Please respond in ${toneContext}, ${urgencyContext}, and ${complexityContext}.
`.trim();

  const [customPrompt, setCustomPrompt] = useState(basePrompt);

  const handleCopy = () => {
    navigator.clipboard.writeText(isEditing ? customPrompt : basePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div
      className="p-4 mt-8 space-y-3 border-l-4 rounded-lg shadow-sm"
      style={{
        fontSize: "var(--font-size)",
        color: "var(--text-color)",
        backgroundColor: "var(--background-color)",
        borderLeftColor: "var(--accent-color)",
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold" style={{ color: "var(--accent-color)" }}>
          Generated Prompt
        </h3>
        <div className="flex gap-2 text-xs">
          <button
            onClick={handleToggleEdit}
            className="px-2 py-1 border rounded-md"
            style={{
              color: "var(--text-color)",
              borderColor: "var(--accent-color)",
            }}
          >
            {isEditing ? "View" : "Edit"}
          </button>
          <button
            onClick={handleCopy}
            className="px-2 py-1 border rounded-md"
            style={{
              color: "var(--text-color)",
              borderColor: "var(--accent-color)",
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {isEditing ? (
        <textarea
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          className="w-full h-48 p-3 font-mono text-sm rounded-md shadow-sm resize-vertical"
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
            borderColor: "var(--accent-color)",
            fontSize: "var(--font-size)",
          }}
        />
      ) : (
        <div
          className="p-3 font-mono text-sm leading-relaxed whitespace-pre-wrap border rounded-md"
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
            borderColor: "var(--accent-color)",
            fontSize: "var(--font-size)",
          }}
        >
          {customPrompt}
        </div>
      )}
    </div>
  );
};

export default PromptPreview;
