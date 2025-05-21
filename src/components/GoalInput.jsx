import React from "react";

const GoalInput = ({ goal, setGoal }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-800">
        What do you need help with?
      </h2>
      <textarea
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder='e.g. "Help me write a calm but firm message to my landlord."'
        className="w-full p-4 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default GoalInput;
