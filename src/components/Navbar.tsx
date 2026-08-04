import { FaSearch, FaUpload, FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-red-500 tracking-wide cursor-pointer">
          NexStream
        </h1>

        {/* Search */}
        <div className="hidden md:flex items-center bg-[#1b1b1b] rounded-full px-4 py-2 w-[420px]">
          <FaSearch className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search videos..."
            className="bg-transparent outline-none text-white flex-1"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
            <FaUpload />
            Upload
          </button>

          <FaBell
            size={22}
            className="cursor-pointer hover:text-red-500 transition"
          />

          <FaUserCircle
            size={32}
            className="cursor-pointer hover:text-red-500 transition"
          />

        </div>

      </div>
    </nav>
  );
}

export default Navbar;