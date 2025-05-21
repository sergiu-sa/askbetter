import React, { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import GoalInput from "./components/GoalInput";
import RefinementSliders from "./components/RefinementSliders";
import PromptPreview from "./components/PromptPreview";
import AISelector from "./components/AISelector";
import MockResponse from "./components/MockResponse";


const App = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [goal, setGoal] = useState("");
  const [tone, setTone] = useState(50);
  const [urgency, setUrgency] = useState(30);
  const [complexity, setComplexity] = useState(50);
  const [selectedAI, setSelectedAI] = useState("chatgpt");

  return (
    <div className="min-h-screen bg-background text-primary px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">AskBetter ✨</h1>
        <p className="text-gray-600 mt-2">A human interface for AI</p>
      </header>

      <main className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-8">
        <MoodSelector
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
        <GoalInput goal={goal} setGoal={setGoal} />
        <RefinementSliders
          tone={tone}
          setTone={setTone}
          urgency={urgency}
          setUrgency={setUrgency}
          complexity={complexity}
          setComplexity={setComplexity}
        />
        <PromptPreview
          mood={selectedMood}
          goal={goal}
          tone={tone}
          urgency={urgency}
          complexity={complexity}
        />

        <AISelector selectedAI={selectedAI} setSelectedAI={setSelectedAI} />
        
        <MockResponse
         mood={selectedMood}
         goal={goal}
         selectedAI={selectedAI}
        />
      </main>

      <footer className="mt-10 text-center text-sm text-gray-400">
        © 2025 AskBetter — All rights reserved.
      </footer>
    </div>
  );
};

export default App;
