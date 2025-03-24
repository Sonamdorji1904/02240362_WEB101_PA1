'use client';
import { useState } from 'react';

export default function SellOnEtsy() {
  const [formData, setFormData] = useState({
    shopName: '',
    productTitle: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Your product has been listed (Demo only)');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Sell on Etsy</h1>
      <p className="text-gray-600 mb-6">Create your shop and list your first product</p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 shadow-md rounded-md">
        <div className="mb-4">
          <label className="block text-gray-700">Shop Name</label>
          <input
            type="text"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Product Title</label>
          <input
            type="text"
            name="productTitle"
            value={formData.productTitle}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 p-3 rounded-md font-bold"
        >
          List Product
        </button>
      </form>
    </div>
  );
}
