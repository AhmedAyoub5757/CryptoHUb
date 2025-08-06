import React, { useState } from 'react';

// Mock data for the cryptocurrency table. In a real application, this would be fetched from an API.
const cryptoData = [
  {
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '114,267',
    priceAlt: '₿ 8,989',
    marketCap: '2.27 T',
    volume: '1.02 B',
    volumeAlt: '₿ 8,989',
    change: '+14.02%',
    changeType: 'positive',
    logo: 'https://placehold.co/40x40/FF9900/ffffff?text=B', // Placeholder image URL
  },
  {
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: '3,657.51',
    priceAlt: 'XLM 8,923.26',
    marketCap: '447.58 B',
    volume: '655.61 M',
    volumeAlt: 'ETH 179K',
    change: '-5.25%',
    changeType: 'negative',
    logo: 'https://placehold.co/40x40/62688F/ffffff?text=E',
  },
  {
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: '1.011',
    priceAlt: 'USDC 1,000',
    marketCap: '68.98 B',
    volume: '2.32 B',
    volumeAlt: 'USDT 23.0 B',
    change: '+0.45%',
    changeType: 'positive',
    logo: 'https://placehold.co/40x40/25966B/ffffff?text=T',
  },
  {
    rank: 4,
    name: 'Binance Coin',
    symbol: 'BNB',
    price: '761.53',
    priceAlt: '₿ 0.0067',
    marketCap: '128.04 B',
    volume: '70.23 M',
    volumeAlt: 'BNB 92K',
    change: '+6.27%',
    changeType: 'positive',
    logo: 'https://placehold.co/40x40/F3BA2F/ffffff?text=B',
  },
  {
    rank: 5,
    name: 'USDC',
    symbol: 'USDC',
    price: '1.011',
    marketCap: '29.62 B',
    volume: '129.25 M',
    volumeAlt: 'USDC 127.91 M',
    change: '+0.53%',
    changeType: 'positive',
    logo: 'https://placehold.co/40x40/2775CA/ffffff?text=U',
  },
  {
    rank: 6,
    name: 'XRP',
    symbol: 'XRP',
    price: '3.039',
    priceAlt: 'USDC 3.032',
    marketCap: '141.55 B',
    volume: '107.26 M',
    volumeAlt: 'XRP 35.30 M',
    change: '+25.49%',
    changeType: 'positive',
    logo: 'https://placehold.co/40x40/23292F/ffffff?text=X',
  },
];

// Helper component for the sparkline chart. This uses a simple SVG for demonstration.
const Sparkline = ({ data }) => {
  // Mock data for the sparkline chart
  const points = '0,15 10,5 20,10 30,0 40,8 50,2 60,12 70,6 80,10 90,4 100,15';
  return (
    <svg viewBox="0 0 100 20" className="w-20 h-10">
      <polyline
        fill="none"
        stroke="#16a34a" // Green for positive change, can be dynamic
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};

// Main App component
const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Last 24H');

  const periods = ['Last 1h', 'Last 24H', 'Last 7d', 'Last 30d'];

  return (
    <div className="min-h-screen bg-white font-sans p-1 md:p-2 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-7 gap-2 items-center p-2 text-xs font-bold uppercase tracking-wider text-white bg-[#606060] border-b border-gray-400">
          <div className="col-span-1">Rank</div>
          <div className="col-span-2">Name</div>
          <div className="col-span-1 text-right">Price</div>
          <div className="col-span-1 text-right">Market Cap</div>
          <div className="col-span-1 text-right">Volume</div>
          
          {/* Dropdown for Last 24h */}
          <div className="relative col-span-1 flex justify-end">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-end w-full text-white focus:outline-none"
            >
              <span className="mr-1">{selectedPeriod}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg z-10">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => {
                      setSelectedPeriod(period);
                      setDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                  >
                    {period}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {cryptoData.map((crypto) => (
            <div
              key={crypto.rank}
              className="grid grid-cols-7 gap-2 items-center p-2 hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Rank */}
              <div className="col-span-1 text-sm text-gray-500 font-medium">{crypto.rank}</div>

              {/* Name */}
              <div className="col-span-2 flex items-center">
                <img
                  src={crypto.logo}
                  alt={`${crypto.name} logo`}
                  className="w-6 h-6 rounded-full mr-2 border-2 border-gray-200"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#2e7ad0]">{crypto.name}</span>
                  <span className="text-xs text-gray-500">[{crypto.symbol}]</span>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-1 flex flex-col items-end">
                <span className="text-sm font-semibold">${crypto.price}</span>
                {crypto.priceAlt && (
                  <span className="text-xs text-gray-400">{crypto.priceAlt}</span>
                )}
              </div>

              {/* Market Cap */}
              <div className="col-span-1 text-sm text-right font-medium text-gray-700">
                ${crypto.marketCap}
              </div>

              {/* Volume */}
              <div className="col-span-1 flex flex-col items-end">
                <span className="text-sm font-medium">${crypto.volume}</span>
                {crypto.volumeAlt && (
                  <span className="text-xs text-gray-400">{crypto.volumeAlt}</span>
                )}
              </div>

              {/* Last 24h */}
              <div className="col-span-1 flex items-center justify-end">
                <span
                  className={`text-sm font-semibold mr-2 ${
                    crypto.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {crypto.change}
                </span>
                <Sparkline />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
