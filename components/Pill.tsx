import React from "react";

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: (label: string) => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  const baseClasses =
    "px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out text-sm font-medium";
  const activeClasses = "bg-blue-600 text-white";
  const inactiveClasses =
    "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800";

  return (
    <button
      onClick={() => onClick && onClick(label)}
      className={`${baseClasses} ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;