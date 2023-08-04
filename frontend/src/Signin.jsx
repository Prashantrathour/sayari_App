import React from 'react'





const SigninForm = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Signin</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" required />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Signin</button>
          </form>
        </div>
      </div>
    );
  };



  export default SigninForm