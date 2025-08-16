import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { GiDeliveryDrone, GiCrown } from "react-icons/gi";
import { BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom"; // ✅ Added import

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Client");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-green-100 to-green-200 p-6">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Section */}
        <div className="hidden md:flex md:w-1/2 relative">
          {/* Background Image */}
          <img
            src="/images/foody.jpeg"
            alt="HomeMeal Illustration"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay with Text */}
          <div className="absolute inset-0 flex flex-col justify-center p-10 bg-black/50 text-yellow-400">
            <Link to="/"> {/* ✅ Made clickable to go home */}
              <h1 className="text-4xl font-bold mb-4 cursor-pointer hover:underline">
                HomeMeal
              </h1>
            </Link>
            <h2 className="text-3xl font-semibold leading-snug text-white">
              Your kitchen. <br />
              Your table. <br />
              Your role.
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          {/* Sign In / Sign Up Toggle */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsSignUp(false)}
              className={`px-6 py-2 font-medium rounded-md ${
                !isSignUp ? "bg-yellow-400 text-black" : "text-gray-600"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`px-6 py-2 font-medium rounded-md ${
                isSignUp ? "bg-yellow-400 text-black" : "text-gray-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* User Role Icons */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            <div
              onClick={() => setSelectedRole("Client")}
              className={`flex flex-col items-center p-3 rounded-lg cursor-pointer ${
                selectedRole === "Client" ? "bg-yellow-100" : "bg-gray-50"
              }`}
            >
              <BsBagFill
                className={`text-2xl ${
                  selectedRole === "Client" ? "text-yellow-500" : "text-gray-400"
                }`}
              />
              <span className="text-sm mt-1">Client</span>
            </div>
            <div
              onClick={() => setSelectedRole("Chef")}
              className={`flex flex-col items-center p-3 rounded-lg cursor-pointer ${
                selectedRole === "Chef" ? "bg-yellow-100" : "bg-gray-50"
              }`}
            >
              <MdRestaurantMenu
                className={`text-2xl ${
                  selectedRole === "Chef" ? "text-yellow-500" : "text-gray-400"
                }`}
              />
              <span className="text-sm mt-1">Chef</span>
            </div>
            <div
              onClick={() => setSelectedRole("Delivery")}
              className={`flex flex-col items-center p-3 rounded-lg cursor-pointer ${
                selectedRole === "Delivery" ? "bg-yellow-100" : "bg-gray-50"
              }`}
            >
              <GiDeliveryDrone
                className={`text-2xl ${
                  selectedRole === "Delivery"
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
              />
              <span className="text-sm mt-1">Delivery</span>
            </div>
            <div
              onClick={() => setSelectedRole("Admin")}
              className={`flex flex-col items-center p-3 rounded-lg cursor-pointer ${
                selectedRole === "Admin" ? "bg-yellow-100" : "bg-gray-50"
              }`}
            >
              <GiCrown
                className={`text-2xl ${
                  selectedRole === "Admin" ? "text-yellow-500" : "text-gray-400"
                }`}
              />
              <span className="text-sm mt-1">Admin</span>
            </div>
          </div>

          {/* Auth Form */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Hungry? Let's fix that.
          </h3>
          <form className="space-y-4">
            {isSignUp && (
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full focus:outline-none"
                />
              </div>
            )}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              {isSignUp ? "Order Now" : "Login"}
            </button>
          </form>

          {/* Extra Links */}
          <p className="text-center text-sm text-gray-600 mt-6">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <span
                  className="text-yellow-500 cursor-pointer hover:underline"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </span>
              </>
            ) : (
              <>
                Don’t have an account yet?{" "}
                <span
                  className="text-yellow-500 cursor-pointer hover:underline"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
