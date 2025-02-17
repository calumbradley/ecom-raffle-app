const ProgressBar = ({ sold, total }) => {
  const percentage = (sold / total) * 100;

  return (
    <div className="w-full p-4 border border-gray-200 rounded-lg">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-palette-primary h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Sold Percentage and Tickets Sold Marker */}
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>{percentage.toFixed(0)}% Sold</span>
        <span>
          {sold}/{total} Tickets Sold
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
