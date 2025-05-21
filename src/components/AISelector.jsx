import React from "react";
import { Bot, Sparkles, Search, Image, BrainCog } from "lucide-react";

const models = [
  { id: "chatgpt", label: "ChatGPT", icon: Bot },
  { id: "claude", label: "Claude", icon: BrainCog },
  { id: "perplexity", label: "Perplexity", icon: Search },
  { id: "dalle", label: "DALL·E", icon: Image },
  { id: "midjourney", label: "Midjourney", icon: Sparkles },
];

const AISelector = ({ selectedAI, setSelectedAI }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-800">
        Choose your AI assistant
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {models.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setSelectedAI(id)}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all text-sm border hover:shadow-md ${
              selectedAI === id
                ? "bg-indigo-100 border-indigo-500 text-indigo-700"
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

export default AISelector;
