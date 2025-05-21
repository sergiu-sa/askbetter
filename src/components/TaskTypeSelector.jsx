import React from "react";
import {
  Mail,
  Lightbulb,
  Code,
  BookOpen,
  Pencil,
  Sparkles,
} from "lucide-react";

const taskTypes = [
  { id: "email", label: "Email", icon: Mail },
  { id: "idea", label: "Idea Generator", icon: Lightbulb },
  { id: "code", label: "Code Help", icon: Code },
  { id: "summary", label: "Summary", icon: BookOpen },
  { id: "writing", label: "Creative Writing", icon: Pencil },
  { id: "custom", label: "Custom", icon: Sparkles },
];

const TaskTypeSelector = ({ selectedTask, setSelectedTask }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-800">
        What type of task is this?
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {taskTypes.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setSelectedTask(id)}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all text-sm border hover:shadow-md ${
              selectedTask === id
                ? "bg-indigo-100 border-indigo-500 text-indigo-700"
                : "bg-white border-gray-200 text-gray-600"
            }`}
          >
            <Icon size={24} className="mb-1" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskTypeSelector;
