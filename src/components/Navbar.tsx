const navItems = ["Home", "Projects", "Impressions", "About"];

const Navbar = () => {
  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex bg-[#2c2c2c] border border-gray-700 rounded-full p-1 gap-2 px-4">
        {navItems.map((item, i) => (
          <li key={i}>
            <button
              className={`px-4 py-1 rounded-full font-semibold text-sm transition-all ${
                item === "Home"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;