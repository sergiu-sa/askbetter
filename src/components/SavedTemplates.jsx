import React from "react";
import { Bookmark, Trash2 } from "lucide-react";

const SavedTemplates = ({ templates, onApply, onDelete }) => {
  if (!templates.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-800">
        Your Saved Templates
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className="relative p-4 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-md"
          >
            <button
              onClick={() => onApply(template.values)}
              className="flex flex-col items-center w-full text-sm text-gray-700"
            >
              <Bookmark size={22} className="mb-1" />
              {template.name}
            </button>
            <button
              onClick={() => onDelete(template.id)}
              className="absolute text-gray-400 top-1 right-1 hover:text-red-500"
              title="Delete template"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedTemplates;
