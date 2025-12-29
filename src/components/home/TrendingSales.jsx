// src/components/TrendingSales.jsx
// import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const TrendingSales = () => {
  const products = [
    {
      title: 'Gaming Laptop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'N850,000',
      seller: 'TechHub NG',
      color: 'from-blue-100 to-cyan-100',
      tag: 'Hot'
    },
    {
      title: 'Designer Handbag',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'N850,000',
      seller: 'TechHub NG',
      color: 'from-pink-100 to-rose-100',
      tag: 'New'
    },
    {
      title: 'Coffee Machine',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'N850,000',
      seller: 'HomeGoods',
      color: 'from-amber-100 to-orange-100',
      tag: 'Sale'
    },
    {
      title: 'Electric Scooter',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      price: 'N850,000',
      seller: 'TechHub NG',
      color: 'from-green-100 to-emerald-100',
      tag: 'Trending'
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="section-title"> Trending Sales </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow overflow-hidden transition duration-300 transform hover:-translate-y-1 relative">
              {/* Product Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${
                  product.tag === 'Hot' ? 'bg-red-500' :
                  product.tag === 'New' ? 'bg-blue-500' :
                  product.tag === 'Sale' ? 'bg-orange-500' : 'bg-green-500'
                }`}>
                  {product.tag}
                </span>
              </div>
              
              {/* Product Image Placeholder */}
              <div className={`h-48 bg-linear-to-r ${product.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {/* <div className="text-4xl font-bold text-white/20">{product.title.charAt(0)}</div> */}
                    {/* <div className="text-sm text-white/50 mt-2">Product Image</div> */}
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <div className="flex items-center space-x-1">
                    {/* <CheckBadgeIcon className="w-5 h-5 text-green-500" /> */}
                    {/* <span className="text-sm text-gray-500">Escrow Protected</span> */}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{product.seller}</span>
                  {/* <button className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full hover:opacity-90 transition">
                    View Details
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSales;