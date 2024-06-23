import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            <img
              src="/logo.png"
              className="mix-blend-multiply cursor-pointer"
              style={{ width: "140px" }}
            />
          </Link>
        </div>

        <div className="flex space-x-4 ml-32">
          <Link
            href="/"
            className="hover:text-gray-700 cursor-pointer font-medium trasnition-all"
            style={{ fontFamily: "Poppins" }}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className="hover:text-gray-700 cursor-pointer font-medium transition-all"
            style={{ fontFamily: "Poppins" }}
          >
            About Us
          </Link>
        </div>

        <div className="space-x-2">
          <a href="https://github.com/0Armaan025/stream2script" target="_blank">
            <button
              className="bg-transparent border-2 border-gray-300 transition-all hover:bg-white text-black font-medium py-2 px-4 rounded"
              style={{ fontFamily: "poppins" }}
            >
              Source code
            </button>
          </a>
          <Link href="/convert">
            <button
              className="bg-[#bdfe52] hover:bg-[#78a432] transition-all text-black font-semibold py-2 px-4 rounded-lg"
              style={{ fontFamily: "Poppins" }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
