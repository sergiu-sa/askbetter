import React from "react";

const PromptPreview = ({ mood, goal, tone, urgency, complexity }) => {
  if (!goal) return null;

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
      : "as an urgent need";

  const complexityContext =
    complexity < 25
      ? "as simply as possible"
      : complexity < 50
      ? "in straightforward terms"
      : complexity < 75
      ? "with some detail"
      : "in a deep and complex way";

  const moodContext = mood ? `The user is feeling ${mood}. ` : "";

  const fullPrompt = `${moodContext}${goal}. Please respond in ${toneContext}, ${urgencyContext}, and ${complexityContext}.`;

  return (
    <div className="mt-8 p-4 bg-gray-50 border-l-4 border-indigo-500 rounded-lg shadow-sm text-sm text-gray-700 whitespace-pre-wrap">
      <h3 className="font-semibold text-indigo-700 mb-2">Generated Prompt:</h3>
      {fullPrompt}
    </div>
  );
};

export default PromptPreview;
