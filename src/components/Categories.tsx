const categories = [
  "All",
  "Gaming",
  "Music",
  "Coding",
  "Anime",
  "Movies",
  "Sports",
  "News",
  "Technology",
  "Education",
];

function Categories() {
  return (
    <div className="flex gap-3 overflow-x-auto py-6 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          className="whitespace-nowrap rounded-full bg-[#272727] px-5 py-2 text-sm font-medium hover:bg-red-600 transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;