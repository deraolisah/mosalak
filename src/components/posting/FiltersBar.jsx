const FiltersBar = () => {
  return (
    <div className="bg-blue-100 border-b px-6 py-3 text-sm">
      <div className="max-w-6xl mx-auto flex gap-6">
        <button className="font-medium">All Category</button>
        <button>Featured selections</button>
        <button>Best Sellers</button>
        <button>Newest Arrivals</button>
      </div>
    </div>
  );
};

export default FiltersBar;