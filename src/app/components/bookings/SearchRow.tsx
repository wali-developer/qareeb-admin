"use client";

export const SearchRow = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
      <div className="relative w-full sm:max-w-sm">
        <input
          type="text"
          placeholder="Search bookings..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        {/* <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" /> */}
      </div>

      <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
        Filter
      </button>
    </div>
  );
};
