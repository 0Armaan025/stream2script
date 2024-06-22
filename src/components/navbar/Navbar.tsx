import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <img
            src="/logo.png"
            className="mix-blend-multiply cursor-pointer"
            style={{ width: "140px" }}
          />
        </div>

        <div className="flex space-x-4 ml-32">
          <a
            className="hover:text-gray-700 cursor-pointer font-medium trasnition-all"
            style={{ fontFamily: "Poppins" }}
          >
            Home
          </a>

          <a
            className="hover:text-gray-700 cursor-pointer font-medium transition-all"
            style={{ fontFamily: "Poppins" }}
          >
            About Us
          </a>
        </div>

        <div className="space-x-2">
          <button
            className="bg-transparent border-2 border-gray-300 transition-all hover:bg-white text-black font-medium py-2 px-4 rounded"
            style={{ fontFamily: "poppins" }}
          >
            Source code
          </button>
          <button
            className="bg-[#bdfe52] hover:bg-[#78a432] transition-all text-black font-semibold py-2 px-4 rounded-lg"
            style={{ fontFamily: "Poppins" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
