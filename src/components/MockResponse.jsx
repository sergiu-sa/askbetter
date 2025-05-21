import React, { useEffect, useState } from "react";

const MockResponse = ({ mood, goal, selectedAI }) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!goal) return;

    setLoading(true);

    const timeout = setTimeout(() => {
      let opening = "";
      switch (mood) {
        case "confused":
        case "overwhelmed":
          opening = "Let’s take this step-by-step.";
          break;
        case "motivated":
          opening = "Great — let’s get to work.";
          break;
        case "tired":
          opening = "Let’s keep this simple and low effort.";
          break;
        case "relaxed":
          opening = "We can explore this at your pace.";
          break;
        case "creative":
          opening = "Here’s a spark to get you going.";
          break;
        default:
          opening = "Here’s what I suggest:";
      }

      setResponse(
        `${opening} Based on your request to "${goal}", here’s how ${selectedAI} might respond:\n\n[ This is a placeholder AI response. Actual integration coming soon. ]`
      );
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [goal, mood, selectedAI]);

  if (!goal) return null;

  return (
    <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow p-4 text-sm whitespace-pre-wrap">
      <h3 className="font-semibold text-indigo-600 mb-2">
        {selectedAI.charAt(0).toUpperCase() + selectedAI.slice(1)}'s Mock
        Response
      </h3>
      {loading ? (
        <p className="text-gray-500 italic">Thinking...</p>
      ) : (
        <p className="text-gray-700">{response}</p>
      )}
    </div>
  );
};

export default MockResponse;
