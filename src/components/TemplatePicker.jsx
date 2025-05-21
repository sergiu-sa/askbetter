import React from "react";
import { Mail, Lightbulb, Code, MessageCircle, Megaphone } from "lucide-react";

const templates = [
  {
    id: "complaint",
    label: "Complaint Email",
    icon: Mail,
    values: {
      selectedTask: "email",
      tone: 75,
      urgency: 70,
      complexity: 50,
      audience: "Client",
      format: "Paragraph",
      goal: "Write a firm but respectful email about a delayed delivery",
      mood: "frustrated",
    },
  },
  {
    id: "idea",
    label: "Idea Generator",
    icon: Lightbulb,
    values: {
      selectedTask: "idea",
      tone: 60,
      urgency: 40,
      complexity: 60,
      audience: "Team",
      format: "Bullets",
      goal: "Brainstorm creative ways to promote a new product",
      mood: "creative",
    },
  },
  {
    id: "debug",
    label: "Code Help",
    icon: Code,
    values: {
      selectedTask: "code",
      tone: 50,
      urgency: 60,
      complexity: 75,
      audience: "Technical",
      format: "Steps",
      goal: "Fix an issue where form data isn't saving in React",
      mood: "focused",
    },
  },
  {
    id: "feedback",
    label: "Give Feedback",
    icon: MessageCircle,
    values: {
      selectedTask: "custom",
      tone: 40,
      urgency: 50,
      complexity: 60,
      audience: "Team",
      format: "Paragraph",
      goal: "Give constructive feedback on a teammate's design proposal",
      mood: "motivated",
    },
  },
  {
    id: "ad",
    label: "Ad Copy",
    icon: Megaphone,
    values: {
      selectedTask: "writing",
      tone: 80,
      urgency: 80,
      complexity: 30,
      audience: "General",
      format: "Bullets",
      goal: "Write a short ad for a new eco-friendly water bottle",
      mood: "relaxed",
    },
  },
];

const TemplatePicker = ({ applyTemplate }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-800">Try a Template</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {templates.map(({ id, label, icon: Icon, values }) => (
          <button
            key={id}
            onClick={() => applyTemplate(values)}
            className="flex flex-col items-center justify-center p-4 text-sm text-gray-700 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-md"
          >
            <Icon size={24} className="mb-1" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplatePicker;
