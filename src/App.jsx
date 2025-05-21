import React, { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import GoalInput from "./components/GoalInput";
import RefinementSliders from "./components/RefinementSliders";
import PromptPreview from "./components/PromptPreview";
import AISelector from "./components/AISelector";
import MockResponse from "./components/MockResponse";
import TaskTypeSelector from "./components/TaskTypeSelector";
import AudienceFormatSelector from "./components/AudienceFormatSelector";
import TemplatePicker from "./components/TemplatePicker";






const App = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [goal, setGoal] = useState("");
  const [tone, setTone] = useState(50);
  const [urgency, setUrgency] = useState(30);
  const [complexity, setComplexity] = useState(50);
  const [selectedAI, setSelectedAI] = useState("chatgpt");
  const [selectedTask, setSelectedTask] = useState("custom");
  const [audience, setAudience] = useState("General");
  const [format, setFormat] = useState("Paragraph");
  const [proMode, setProMode] = useState(false);

  const applyTemplate = (template) => {
    setSelectedTask(template.selectedTask);
    setTone(template.tone);
    setUrgency(template.urgency);
    setComplexity(template.complexity);
    setAudience(template.audience);
    setFormat(template.format);
    setGoal(template.goal);
    setSelectedMood(template.mood);
  };
  


  return (
    <div className="min-h-screen px-4 py-8 bg-background text-primary">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">AskBetter ✨</h1>
        <p className="mt-2 text-gray-600">A human interface for AI</p>
      </header>
      <div className="flex justify-end max-w-2xl mx-auto mb-4">
        <button
          onClick={() => setProMode(!proMode)}
          className="px-3 py-1 text-sm text-indigo-600 border border-indigo-500 rounded-full hover:bg-indigo-50"
        >
          {proMode ? "Switch to Quick Mode" : "Switch to Pro Mode"}
        </button>
      </div>

      <main className="max-w-2xl p-6 mx-auto space-y-8 bg-white shadow-md rounded-xl">
        <MoodSelector
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />

        <TemplatePicker applyTemplate={applyTemplate} />

        <TaskTypeSelector
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />

        {proMode && (
          <AudienceFormatSelector
            audience={audience}
            setAudience={setAudience}
            format={format}
            setFormat={setFormat}
          />
        )}

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

        <MockResponse mood={selectedMood} goal={goal} selectedAI={selectedAI} />
      </main>

      <footer className="mt-10 text-sm text-center text-gray-400">
        © 2025 AskBetter — All rights reserved.
      </footer>
    </div>
  );
};

export default App;
