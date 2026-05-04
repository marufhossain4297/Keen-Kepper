import { Link, useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="my-35 flex flex-col items-center justify-center px-4">
      
      {/* Card */}
      <div className="bg-white  shadow-[0_0_10px_3px_rgba(0,0,0,0.05),0_0_8px_0px_rgba(0,0,0,0.05)] rounded-2xl p-10 text-center">
        
        {/* 404 */}
        <h1 className="text-7xl font-bold text-green-700">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-3 text-gray-800">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">
          This page seems to have slipped out of your circle.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100"></div>

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <Link to="/" className="btn border-none bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
            Go Home
          </Link>
          <button onClick={() => navigate(-1)} className="btn border-none bg-gray-100 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition">
            Go Back
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-gray-400">
        <span className="font-semibold text-green-700">KeenKeeper</span> — Keep your connections strong
      </p>
    </div>
  );
}