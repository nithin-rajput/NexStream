function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#111] text-white p-5 border-r border-gray-800">
      <ul className="space-y-5 text-lg">
        <li className="hover:text-red-500 cursor-pointer">🏠 Home</li>
        <li className="hover:text-red-500 cursor-pointer">🔥 Trending</li>
        <li className="hover:text-red-500 cursor-pointer">🎬 Shorts</li>
        <li className="hover:text-red-500 cursor-pointer">📺 Subscriptions</li>

        <hr className="border-gray-700" />

        <li className="hover:text-red-500 cursor-pointer">📂 Library</li>
        <li className="hover:text-red-500 cursor-pointer">🕒 History</li>
        <li className="hover:text-red-500 cursor-pointer">❤️ Liked Videos</li>
      </ul>
    </aside>
  );
}

export default Sidebar;