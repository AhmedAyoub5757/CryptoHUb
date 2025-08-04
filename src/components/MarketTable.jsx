import React, { useState } from "react";

const data = [
  {
    rank: 1,
    name: "Bitcoin",
    icon: "🟠",
    price: "$29,453",
    marketCap: "$567B",
    volume: "$35B",
    equivalent: "1.23 BTC",
    change: "+4.5%",
    graph: "📈",
  },
  {
    rank: 2,
    name: "Ethereum",
    icon: "🟣",
    price: "$1,845",
    marketCap: "$222B",
    volume: "$18B",
    equivalent: "9.76 ETH",
    change: "-2.3%",
    graph: "📉",
  },
  {
    rank: 3,
    name: "Tether",
    icon: "🟢",
    price: "$1.00",
    marketCap: "$83B",
    volume: "$45B",
    equivalent: "45.0 USDT",
    change: "+0.1%",
    graph: "📈",
  },
  {
    rank: 4,
    name: "Solana",
    icon: "🟪",
    price: "$24.89",
    marketCap: "$10B",
    volume: "$3.4B",
    equivalent: "136.6 SOL",
    change: "-1.8%",
    graph: "📉",
  },
  {
    rank: 5,
    name: "Ripple",
    icon: "🔵",
    price: "$0.63",
    marketCap: "$29B",
    volume: "$2.1B",
    equivalent: "3.3K XRP",
    change: "+1.9%",
    graph: "📈",
  },
  {
    rank: 6,
    name: "Cardano",
    icon: "🔷",
    price: "$0.39",
    marketCap: "$14B",
    volume: "$980M",
    equivalent: "2.5K ADA",
    change: "-0.9%",
    graph: "📉",
  },
];

const MarketTable = () => {
  const [timeframe, setTimeframe] = useState("24h");

  const timeOptions = ["1h", "24h", "7d", "30d"];

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-24">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">Market Overview</h2> */}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-sm md:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Rank</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Market Cap</th>
              <th className="px-4 py-3 text-left">Volume</th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center gap-2">
                  Last {timeframe}
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="text-sm bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none"
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((coin) => (
              <tr key={coin.rank} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{coin.rank}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <span className="text-xl">{coin.icon}</span>
                  {coin.name}
                </td>
                <td className="px-4 py-3">{coin.price}</td>
                <td className="px-4 py-3">{coin.marketCap}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-1">
                    <span>{coin.volume}</span>
                    <span className="text-gray-500 text-xs md:text-sm">({coin.equivalent})</span>
                    <span
                      className={`text-sm font-semibold ${
                        coin.change.startsWith("-") ? "text-red-500" : "text-green-600"
                      }`}
                    >
                      {coin.change}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-5xl">{coin.graph}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MarketTable;
