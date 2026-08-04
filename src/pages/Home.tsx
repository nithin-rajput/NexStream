import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mt-24">
          Upload & Watch Videos
        </h1>

        <p className="text-gray-400 mt-6 text-2xl">
          Your own premium video streaming platform.
        </p>

        <button className="mt-10 bg-red-600 px-8 py-4 rounded-xl text-xl hover:bg-red-700">
          Start Uploading
        </button>
      </main>
    </div>
  );
}

export default Home;