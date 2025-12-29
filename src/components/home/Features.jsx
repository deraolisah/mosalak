// src/components/Features.jsx
// import { ShieldCheckIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Features = () => {
  return (
    <section className="py-16 bg-linear-to-r from-gray-50 to-blue-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Why Mosalak */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              {/* <ShieldCheckIcon className="w-10 h-10 text-green-500" /> */}
              <h3 className="text-2xl font-bold">Why Mosalak</h3>
            </div>
            <p className="text-gray-500 text-lg mb-6">
              We are known for high quality work and money back guarantee
            </p>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis 
              aliquet ante. Phasellus vel sodales tortor, id consequat risus.
            </p>
            <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition">
              Join now
            </button>
          </div>

          {/* Right Column - Community */}
          <div className="bg-linear-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              {/* <UsersIcon className="w-10 h-10 text-white" /> */}
              <h3 className="text-2xl font-bold">Join a vibrant community moving forward together.</h3>
            </div>
            <p className="text-white/90 mb-8 text-lg">
              A community built for everyone, hire, work, sell, and grow in one place.
            </p>
            <div className="flex items-center justify-between">
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
                Join Community
              </button>
              {/* <RocketLaunchIcon className="w-12 h-12 opacity-80" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;