function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold text-red-500">
          NexStream
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>Home</li>
          <li>Trending</li>
          <li>Categories</li>
          <li>Upload</li>
        </ul>

        <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;