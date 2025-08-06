import React from 'react';

// Custom color palette for the timeline elements
const customPurple = '#6a67d0';

// Mock data for the timeline events.
const timelineEvents = [
  {
    id: 1,
    date: 'May 2024',
    title: 'TEAM FORMATION',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.',
    position: 'right', // Content on the right, date on the left
  },
  {
    id: 2,
    date: 'Jun 2024',
    title: 'PROJECT CONCEPT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.',
    position: 'left', // Content on the left, date on the right
  },
  {
    id: 3,
    date: 'Jul 2024',
    title: 'Ico Begins',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.',
    position: 'right',
  },
  {
    id: 4,
    date: 'Aug 2024',
    title: 'Public crowdsale',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.',
    position: 'left',
  },
  {
    id: 5,
    date: 'Sep 2024',
    title: 'Testing data',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.',
    position: 'right',
  },
  {
    id: 6,
    date: 'Oct 2024',
    title: 'Official Release',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur.',
    position: 'left',
  },
];

const Timeline = ({ events }) => {
  return (
    
    <div className="relative w-full max-w-4xl mx-auto py-12 " id="roadmap">
      <h2 className="text-4xl font-bold text-center text-gray-800 font-sans mb-4">The Roadmap</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna.
      </p>
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-[1100px] w-0.5" style={{ backgroundColor: customPurple }}></div>

      {events.map((item) => (
        <div key={item.id} className="flex relative items-center mb-16">
          {item.position === 'left' ? (
            <>
              {/* Left side content */}
              <div className="w-1/2 pr-8 text-right">
                <div className="p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
              {/* Right side date circle and connector line */}
              <div className="w-1/2 pl-8 flex items-center justify-start">
                {/* Horizontal line extending from the circle to the center line */}
                <div className="w-20 h-0.5 absolute left-1/2 top-1/2" style={{ backgroundColor: customPurple }}></div>
                <div className="w-24 h-24 rounded-full border-2 flex items-center justify-center relative z-10" style={{ borderColor: customPurple, backgroundColor: 'white' }}>
                  <span className="text-lg font-bold" style={{ color: customPurple }}>{item.date}</span>
                </div>
              </div>
              {/* Central dot on the vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white" style={{ borderColor: customPurple }}></div>
            </>
          ) : (
            <>
              {/* Left side date circle and connector line */}
              <div className="w-1/2 pr-8 flex items-center justify-end">
                {/* Horizontal line extending from the circle to the center line */}
                <div className="w-20 h-0.5 absolute right-1/2 top-1/2" style={{ backgroundColor: customPurple }}></div>
                <div className="w-24 h-24 rounded-full border-2 flex items-center justify-center relative z-10" style={{ borderColor: customPurple, backgroundColor: 'white' }}>
                  <span className="text-lg font-bold" style={{ color: customPurple }}>{item.date}</span>
                </div>
              </div>
              {/* Right side content */}
              <div className="w-1/2 pl-8 text-left">
                <div className="p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
              {/* Central dot on the vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white" style={{ borderColor: customPurple }}></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex items-center justify-center p-8">
      <Timeline events={timelineEvents} />
    </div>
  );
};

export default App;
