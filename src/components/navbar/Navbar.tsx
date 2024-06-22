import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <a>ThePlotPPT</a>
        </div>

        <div className="flex space-x-4">
          <a className="hover:text-gray-400">Home</a>

          <a className="hover:text-gray-400">About Us</a>
        </div>

        <div className="space-x-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
