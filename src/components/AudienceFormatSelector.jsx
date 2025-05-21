import React from "react";

const audienceOptions = ["General", "Team", "Client", "Kids", "Technical"];

const formatOptions = ["Paragraph", "Bullets", "Steps", "Q&A", "Code"];

const AudienceFormatSelector = ({
  audience,
  setAudience,
  format,
  setFormat,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-800">Audience & Format</h2>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Who is this for?
        </label>
        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          {audienceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Preferred format
        </label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          {formatOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AudienceFormatSelector;
