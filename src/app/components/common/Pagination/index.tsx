export const Pagination = () => {
  return (
    <nav className="flex justify-between flex-wrap gap-2 text-sm overflow-hidden mt-10">
      <button className="px-4 py-1.5 bg-white cursor-pointer font-medium text-gray-500 hover:bg-gray-100 rounded-md border border-gray-300">
        Previous
      </button>
      <div className="inline-flex gap-1 sm:gap-3">
        {Array.from({ length: 7 }).map((__, i) => (
          <button
            key={i}
            className={`px-4 py-1.5 hover:bg-gray-100 rounded-lg text-secondary cursor-pointer ${
              i == 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className="px-4 py-1.5 bg-white cursor-pointer font-medium text-gray-500 hover:bg-gray-100 rounded-md border border-gray-300">
        Next
      </button>
    </nav>
  );
};
