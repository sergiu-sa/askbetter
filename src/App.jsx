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
import SaveTemplateForm from "./components/SaveTemplateForm";
import SavedTemplates from "./components/SavedTemplates";
import SettingsPanel from "./components/SettingsPanel";
import { useTheme } from "./context/ThemeContext";

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

  const { theme, toggleTheme, accentColor, fontSize } = useTheme();

  const [savedTemplates, setSavedTemplates] = useState(() => {
    const stored = localStorage.getItem("askbetterTemplates");
    return stored ? JSON.parse(stored) : [];
  });

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

  const handleSaveTemplate = (template) => {
    const updated = [...savedTemplates, template];
    setSavedTemplates(updated);
    localStorage.setItem("askbetterTemplates", JSON.stringify(updated));
  };

  const handleDeleteTemplate = (id) => {
    const updated = savedTemplates.filter((t) => t.id !== id);
    setSavedTemplates(updated);
    localStorage.setItem("askbetterTemplates", JSON.stringify(updated));
  };

  const currentSettings = {
    selectedTask,
    tone,
    urgency,
    complexity,
    audience,
    format,
    goal,
    mood: selectedMood,
  };

  return (
    <div
      className={`min-h-screen px-4 py-8 transition-colors duration-300 bg-background text-primary dark:bg-gray-900 dark:text-white ${
        fontSize === "sm"
          ? "text-sm"
          : fontSize === "lg"
          ? "text-lg"
          : "text-base"
      }`}
    >
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">AskBetter ✨</h1>
        <p className="mt-2 text-gray-600">A human interface for AI</p>
      </header>

      <div className="flex justify-end max-w-2xl gap-2 mx-auto mb-4">
        <button
          onClick={() => setProMode(!proMode)}
          className={`px-3 py-1 text-sm text-${accentColor}-600 border border-${accentColor}-500 rounded-full hover:bg-${accentColor}-50`}
        >
          {proMode ? "Switch to Quick Mode" : "Switch to Pro Mode"}
        </button>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <main className="max-w-2xl p-6 mx-auto space-y-8 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-xl">
        <SettingsPanel />

        <MoodSelector
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />

        <TemplatePicker applyTemplate={applyTemplate} />

        <SaveTemplateForm
          currentSettings={currentSettings}
          onSave={handleSaveTemplate}
        />

        <SavedTemplates
          templates={savedTemplates}
          onApply={applyTemplate}
          onDelete={handleDeleteTemplate}
        />

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
