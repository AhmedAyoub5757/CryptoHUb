import React, { useState } from 'react';

// Updated mock data with mixed positive/negative trends
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
    sparkline: '0,15 10,5 20,10 30,0 40,8 50,2 60,12 70,6 80,10 90,4 100,15',
    logo: 'https://widget.coinlib.io/static/img/coins/small/btc.png?25799',
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
    sparkline: '0,10 10,12 20,15 30,8 40,6 50,10 60,5 70,3 80,6 90,2 100,0',
    logo: 'https://widget.coinlib.io/static/img/coins/small/eth.png?25799',
  },
  {
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: '1.011',
    priceAlt: 'USDC 1,000',
    marketCap: '68.98 B',
    volume: '-1.12 B',
    volumeAlt: 'USDT 23.0 B',
    change: '-0.45%',
    changeType: 'negative',
    sparkline: '0,12 10,8 20,10 30,4 40,8 50,6 60,10 70,8 80,5 90,7 100,4',
    logo: 'https://widget.coinlib.io/static/img/coins/small/eth.png?25799',
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
    sparkline: '0,5 10,10 20,6 30,8 40,4 50,12 60,10 70,14 80,12 90,15 100,18',
    logo: 'https://widget.coinlib.io/static/img/coins/small/eth.png?25799',
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
    sparkline: '0,8 10,6 20,10 30,12 40,8 50,14 60,10 70,6 80,10 90,8 100,12',
    logo: 'https://widget.coinlib.io/static/img/coins/small/bnb.png?25799',
  },
  {
    rank: 6,
    name: 'XRP',
    symbol: 'XRP',
    price: '3.039',
    priceAlt: 'USDC 3.032',
    marketCap: '141.55 B',
    volume: '-35.30 M',
    volumeAlt: 'XRP 35.30 M',
    change: '-25.49%',
    changeType: 'negative',
    sparkline: '0,14 10,10 20,8 30,12 40,10 50,8 60,4 70,2 80,6 90,4 100,0',
    logo: 'https://widget.coinlib.io/static/img/coins/small/xrp.png?25799',
  },
];

// Sparkline chart component
const Sparkline = ({ data, changeType }) => {
  const strokeColor = changeType === 'positive' ? '#16a34a' : '#dc2626';
  return (
    <svg
      viewBox="0 0 100 20"
      className="w-20 h-10 cursor-pointer"
    >
      <polyline
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        points={data}
      />
    </svg>
  );
};

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Last 24H');
  const periods = ['Last 1h', 'Last 24H', 'Last 7d', 'Last 30d'];

  return (
    <div className="bg-white font-sans p-1 md:p-2 flex items-center justify-center mt-[-20px]">
      <div className="w-full max-w-6xl bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Table Header */}
        <div className="grid grid-cols-7 gap-2 items-center p-4 text-xs font-bold uppercase tracking-wider text-white bg-gray-600">
          <div className="col-span-1">Rank</div>
          <div className="col-span-2">Name</div>
          <div className="col-span-1 text-right">Price</div>
          <div className="col-span-1 text-right">Market Cap</div>
          <div className="col-span-1 text-right">Volume</div>

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
                <img src={crypto.logo} alt={`${crypto.name} logo`} className="w-6 h-6 rounded-full mr-2 border-2 border-gray-200" />
                <span className="text-sm font-semibold text-[#2e7ad0] mr-1">{crypto.name}</span>
                <span className="text-xs text-gray-500">[{crypto.symbol}]</span>
              </div>

              {/* Price */}
              <div className="col-span-1 flex flex-col items-end">
                <span className="text-sm text-gray-800 font-normal">${crypto.price}</span>
                {crypto.priceAlt && <span className="text-xs text-gray-400">{crypto.priceAlt}</span>}
              </div>

              {/* Market Cap */}
              <div className="col-span-1 text-sm text-right text-gray-400">
                ${crypto.marketCap}
              </div>

              {/* Volume */}
              <div className={`col-span-1 flex flex-col items-end ${crypto.volume.startsWith('-') ? 'text-red-500' : 'text-gray-400'}`}>
                <span className="text-sm">{crypto.volume}</span>
                {crypto.volumeAlt && <span className="text-xs text-gray-400">{crypto.volumeAlt}</span>}
              </div>

              {/* Change & Sparkline */}
              <div className="col-span-1 flex items-center justify-end">
                <span className={`text-sm font-semibold mr-2 ${crypto.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {crypto.change}
                </span>
                <Sparkline data={crypto.sparkline} changeType={crypto.changeType} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
