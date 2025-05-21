import React, { useState } from "react";

const SaveTemplateForm = ({ onSave, currentSettings }) => {
  const [templateName, setTemplateName] = useState("");

  const handleSave = () => {
    if (!templateName.trim()) return;

    const newTemplate = {
      id: Date.now(),
      name: templateName.trim(),
      values: { ...currentSettings },
    };

    onSave(newTemplate);
    setTemplateName("");
  };

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-medium text-gray-800">Save Your Template</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          placeholder="Name your template"
          className="flex-grow p-2 text-sm border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SaveTemplateForm;
