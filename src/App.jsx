import React, { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import GoalInput from "./components/GoalInput";
import RefinementSliders from "./components/RefinementSliders";
import PromptPreview from "./components/PromptPreview";
import AISelector from "./components/AISelector";
import MockResponse from "./components/MockResponse";
import TaskTypeSelector from "./components/TaskTypeSelector";



const App = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [goal, setGoal] = useState("");
  const [tone, setTone] = useState(50);
  const [urgency, setUrgency] = useState(30);
  const [complexity, setComplexity] = useState(50);
  const [selectedAI, setSelectedAI] = useState("chatgpt");
  const [selectedTask, setSelectedTask] = useState("custom");


  return (
    <div className="min-h-screen px-4 py-8 bg-background text-primary">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">AskBetter ✨</h1>
        <p className="mt-2 text-gray-600">A human interface for AI</p>
      </header>

      <main className="max-w-2xl p-6 mx-auto space-y-8 bg-white shadow-md rounded-xl">
        <MoodSelector
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
        
        <TaskTypeSelector
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
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

        <AISelector 
         selectedAI={selectedAI} 
         setSelectedAI={setSelectedAI} 
        />

        <MockResponse 
         mood={selectedMood} 
         goal={goal} 
         selectedAI={selectedAI} 
        />
      </main>

      <footer className="mt-10 text-sm text-center text-gray-400">
        © 2025 AskBetter — All rights reserved.
      </footer>
    </div>
  );
};

export default App;
