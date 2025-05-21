import React from "react";
import {
  Brain,
  Sparkles,
  Frown,
  RefreshCw,
  Moon,
  Activity,
  Clock,
  Smile,
} from "lucide-react";

const moods = [
  { id: "focused", label: "Focused", icon: Brain },
  { id: "creative", label: "Creative", icon: Sparkles },
  { id: "overwhelmed", label: "Overwhelmed", icon: Frown },
  { id: "confused", label: "Confused", icon: RefreshCw },
  { id: "tired", label: "Tired", icon: Moon },
  { id: "motivated", label: "Motivated", icon: Activity },
  { id: "urgent", label: "Urgent", icon: Clock },
  { id: "relaxed", label: "Relaxed", icon: Smile },
];

const MoodSelector = ({ selectedMood, setSelectedMood }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-800">
        How are you feeling today?
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {moods.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setSelectedMood(id)}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all text-sm border shadow-sm hover:shadow-md ${
              selectedMood === id
                ? "bg-indigo-50 border-indigo-400 text-indigo-700"
                : "bg-white border-gray-200 text-gray-600"
            }`}
          >
            <Icon size={28} className="mb-2" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
