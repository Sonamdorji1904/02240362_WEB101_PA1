export default function Navbar() {
    return (
      <header>
        <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
          <div className="text-2xl font-bold">
            <a href="#">Etsy</a>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for items, shops, and more..."
              className="p-2 rounded-md w-96"
            />
            <button className="p-2 bg-yellow-400 rounded-md">Search</button>
            <a href="#" className="hover:text-yellow-400">Sign in</a>
            <a href="#" className="hover:text-yellow-400">Sell on Etsy</a>
            <a href="#" className="hover:text-yellow-400">Cart</a>
          </div>
        </nav>
      </header>
    );
  }
  