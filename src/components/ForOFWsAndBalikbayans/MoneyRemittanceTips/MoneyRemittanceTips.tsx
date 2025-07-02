import React from "react";

const MoneyRemittanceTips: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              FINANCIAL GUIDANCE
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              MONEY REMITTANCE TIPS
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Essential tips for Overseas Filipino Workers (OFWs) on sending money home safely and efficiently.
            Learn about the best services, fees, and exchange rates.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img src="/gallery-1.jpg" alt="Bank Transfers" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Banks
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bank Transfers</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Secure & Reliable
              </div>
            </div>
          </div>

          {/* Card 2 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img src="/gallery-2.jpg" alt="Online Services" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Online
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Online Remittance</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Fast & Convenient
              </div>
            </div>
          </div>

          {/* Card 3 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img src="/gallery-3.jpg" alt="Money Transfer Agents" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Agents
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Money Transfer Agents</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Wide Network
              </div>
            </div>
          </div>

          {/* Card 4 (Horizontal - spans below Card 3) */}
          <div className="md:col-start-3 relative bg-gray-100 rounded-lg shadow-lg overflow-hidden md:row-start-2 md:col-span-1 group">
            <div className="flex flex-col md:flex-row">
              <img src="/gallery-4.jpg" alt="Exchange Rates" className="w-full md:w-1/2 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6 flex-1">
                <div className="absolute top-4 left-4 md:static md:mb-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                  Rates
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Exchange Rates</h3>
                <div className="flex items-center text-yellow-500 text-sm">
                  <span className="mr-1">⭐</span> Get the Best Value
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyRemittanceTips;
