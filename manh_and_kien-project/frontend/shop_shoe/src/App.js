import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white p-4 text-center text-xl font-bold">
        Shoe Shop
      </header>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Product 1 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/200"
            alt="Nike Shoes"
            className="w-full h-48 object-cover"
          />
          <h2 className="mt-2 text-lg font-semibold">Nike Air Max</h2>
          <p className="text-gray-600">$120</p>
          <button className="mt-3 bg-black text-white px-4 py-2 rounded">
            Thêm vào giỏ
          </button>
        </div>

        {/* Product 2 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/200"
            alt="Adidas Shoes"
            className="w-full h-48 object-cover"
          />
          <h2 className="mt-2 text-lg font-semibold">Adidas Ultraboost</h2>
          <p className="text-gray-600">$150</p>
          <button className="mt-3 bg-black text-white px-4 py-2 rounded">
            Thêm vào giỏ
          </button>
        </div>

        {/* Product 3 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/200"
            alt="Puma Shoes"
            className="w-full h-48 object-cover"
          />
          <h2 className="mt-2 text-lg font-semibold">Puma RS-X</h2>
          <p className="text-gray-600">$100</p>
          <button className="mt-3 bg-black text-white px-4 py-2 rounded">
            Thêm vào giỏ
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        © 2025 Shoe Shop
      </footer>
    </div>
  );
}

export default App;
