import React, { useEffect, useState } from "react";

const MockResponse = ({
  mood,
  goal,
  selectedAI,
  selectedTask,
  audience,
  format,
}) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0); // Triggers regeneration

  useEffect(() => {
    if (!goal) return;

    setLoading(true);

    const timeout = setTimeout(() => {
      let moodIntro = "";
      switch (mood) {
        case "confused":
        case "overwhelmed":
          moodIntro = "Let's break this down calmly.";
          break;
        case "motivated":
          moodIntro = "Sounds like you're ready to go!";
          break;
        case "tired":
          moodIntro = "We'll keep it short and clear.";
          break;
        case "relaxed":
          moodIntro = "We’ll take a light, exploratory approach.";
          break;
        case "creative":
          moodIntro = "Here’s something to spark ideas:";
          break;
        default:
          moodIntro = "Here's a suggestion based on your input:";
      }

      const body = `
[Task: ${selectedTask}]
Audience: ${audience}
Format: ${format}
AI Assistant: ${selectedAI}

"${goal}"

${moodIntro}
[ This is a placeholder response that simulates what the AI might return. ]
`;

      setResponse(body.trim());
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [goal, mood, selectedAI, selectedTask, audience, format, version]);

  if (!goal) return null;

  const handleRegenerate = () => {
    setVersion((v) => v + 1); // Triggers useEffect
  };

  return (
    <div className="p-4 mt-8 text-sm whitespace-pre-wrap bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-indigo-600">
          {selectedAI.charAt(0).toUpperCase() + selectedAI.slice(1)}’s Mock
          Response
        </h3>
        <button
          onClick={handleRegenerate}
          className="px-2 py-1 text-xs text-gray-600 border rounded-md hover:bg-gray-100"
        >
          Regenerate
        </button>
      </div>
      {loading ? (
        <p className="italic text-gray-500">Thinking...</p>
      ) : (
        <p className="text-gray-700">{response}</p>
      )}
    </div>
  );
};

export default MockResponse;
