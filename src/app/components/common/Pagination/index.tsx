export const Pagination = () => {
  return (
    <div className="flex justify-end mt-4">
      <nav className="inline-flex -space-x-px text-sm rounded-md shadow-sm border border-gray-300 overflow-hidden">
        <button className="px-3 py-2 bg-white text-gray-500 hover:bg-gray-100">
          Previous
        </button>
        <button className="px-3 py-2 bg-indigo-600 text-white">1</button>
        <button className="px-3 py-2 bg-white text-gray-500 hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-2 bg-white text-gray-500 hover:bg-gray-100">
          Next
        </button>
      </nav>
    </div>
  );
};
