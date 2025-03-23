import ProductCards from './ProductCard';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/banner.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white pt-24">
          <h1 className="text-4xl font-bold">Find Handmade, Vintage, and Unique Goods</h1>
          <button className="mt-6 p-3 bg-yellow-400 text-black rounded-md">Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold">Browse by Category</h2>
        <div className="flex justify-around mt-6 flex-wrap">
          <div className="w-1/3 p-4">
            <img src="g.jpg" alt="Category 1" className="w-full h-auto" />
            <h2 className="mt-2">Category 1</h2>
          </div>
          <div className="w-1/3 p-4">
            <img src="/category2.jpg" alt="Category 2" className="w-full h-auto" />
            <h3 className="mt-2">Category 2</h3>
          </div>
          <div className="w-1/3 p-4">
            <img src="/category2.jpg" alt="Category 2" className="w-full h-auto" />
            <h3 className="mt-2">Category 3</h3>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <div className="border p-4 rounded-lg">
            <img src="/item1.jpg" alt="Item 1" className="w-full h-auto" />
            <p className="mt-2">Item 1 Description</p>
            <span className="block mt-2 font-semibold">$50.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <img src="/item2.jpg" alt="Item 2" className="w-full h-auto" />
            <p className="mt-2">Item 2 Description</p>
            <span className="block mt-2 font-semibold">$30.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <img src="/item2.jpg" alt="Item 3" className="w-full h-auto" />
            <p className="mt-2">Item 3 Description</p>
            <span className="block mt-2 font-semibold">$80.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <img src="/item2.jpg" alt="Item 4" className="w-full h-auto" />
            <p className="mt-2">Item 4 Description</p>
            <span className="block mt-2 font-semibold">$60.00</span>
          </div>
        </div>
      </section>

      <ProductCards />
    </div>
  );
}
