export default function ProductCards() {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        <div className="border p-4 rounded-lg">
          <img src="a.jp" alt="Product 1" className="w-full h-auto" />
          <h3 className="mt-2">Product_1</h3>
          <p className="mt-1 text-gray-600">18K Gold</p>
          <span className="block mt-2 font-semibold">$25.00</span>
          <button className="mt-3 w-full bg-yellow-400 p-2 rounded-md">Add to Cart</button>
        </div>
        <div className="border p-4 rounded-lg">
          <img src="b.jpg" alt="Product 2" className="w-full h-auto" />
          <h3 className="mt-2">Product_2</h3>
          <p className="mt-1 text-gray-600">Vintage Art</p>
          <span className="block mt-2 font-semibold">$40.00</span>
          <button className="mt-3 w-full bg-yellow-400 p-2 rounded-md">Add to Cart</button>
        </div>
        <div className="border p-4 rounded-lg">
          <img src="c.jpg" alt="Product 3" className="w-full h-auto" />
          <h3 className="mt-2">Product_3</h3>
          <p className="mt-1 text-gray-600">Handmade</p>
          <span className="block mt-2 font-semibold">$70.00</span>
          <button className="mt-3 w-full bg-yellow-400 p-2 rounded-md">Add to Cart</button>
        </div>
        <div className="border p-4 rounded-lg">
          <img src="d.jpg" alt="Product 4" className="w-full h-auto" />
          <h3 className="mt-2">Product_4</h3>
          <p className="mt-1 text-gray-600">Pottery</p>
          <span className="block mt-2 font-semibold">$55.00</span>
          <button className="mt-3 w-full bg-yellow-400 p-2 rounded-md">Add to Cart</button>
        </div>
      </section>
    );
  }
  