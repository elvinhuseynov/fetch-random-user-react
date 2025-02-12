import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* TODO: Burada API-dən gələcək istifadəçi məlumatları göstəriləcək */}
        <div className="flex justify-center mb-4">
          <img
            id="user-image"
            src="https://via.placeholder.com/150"
            alt="İstifadəçi Şəkli"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <h2 id="user-name" className="text-xl font-bold text-center mb-2">
          Ad Soyad
        </h2>
        <p id="user-email" className="text-gray-600 text-center mb-2">
          email@example.com
        </p>
        <p id="user-phone" className="text-gray-600 text-center">
          +1234567890
        </p>
        <div className="mt-4 flex justify-center">
          <button
            id="new-user-btn"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Yeni İstifadəçi
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

