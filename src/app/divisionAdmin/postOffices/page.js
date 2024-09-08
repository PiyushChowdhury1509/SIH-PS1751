'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import 'tailwindcss/tailwind.css';
import L from 'leaflet';
import ChatDialog from '@/components/chatBox';

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
);

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const postOffices = [
  { id: 1, name: "Post Office 1", lat: 28.6139, lng: 77.2090, reports: 5 },
  { id: 2, name: "Post Office 2", lat: 28.6299, lng: 77.2086, reports: 12 },
  { id: 3, name: "Post Office 3", lat: 28.6127, lng: 77.2295, reports: 20 },
];

function getMarkerColor(reports) {
  if (reports < 10) return 'green';
  if (reports < 20) return 'orange';
  return 'red';
}

function DivisionalOfficeDashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedPostOffice, setSelectedPostOffice] = useState(null);

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setSelectedPostOffice(null); // Clear selected post office when closing chat
  };

  const handleMarkerClick = (postOffice) => {
    setSelectedPostOffice(postOffice);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Divisional Office Dashboard</h1>
      </header>

      <div className="flex-1 flex">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#post-offices" className="text-xl">Post Offices</a>
              </li>
              <li className="mb-4">
                <a href="#alerts" className="text-xl">Alerts</a>
              </li>
              <li className="mb-4">
                <a href="#reports" className="text-xl">Reports</a>
              </li>
              <li className="mb-4">
                <a href="#communication" className="text-xl">Communication</a>
              </li>
              <li className="mb-4">
                <a href="#settings" className="text-xl">Settings</a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <section id="post-offices" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Post Offices</h2>
            <MapContainer center={[28.6139, 77.2090]} zoom={13} style={{ height: "400px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {postOffices.map((office) => (
                <Marker
                  key={office.id}
                  position={[office.lat, office.lng]}
                  icon={new L.Icon({
                    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${getMarkerColor(office.reports)}.png`,
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41]
                  })}
                >
                  <Popup>
                    <div>
                      <strong>{office.name}</strong><br />
                      Reports: {office.reports}<br />
                      <button
                        onClick={() => handleMarkerClick(office)}
                        className="text-blue-600 mt-2"
                      >
                        View Details
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </section>

          <section id="alerts" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Alerts</h2>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Active Alerts</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post Office</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Replace with dynamic content */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Post Office 1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Issue Description</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-09-01</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="reports" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Reports</h2>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Submitted Reports</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post Office</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Replace with dynamic content */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-09-01</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Post Office 1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Report Description</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Resolved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>

      {isChatOpen && <ChatDialog onClose={handleCloseChat} selectedPostOffice={selectedPostOffice} />}
    </div>
  );
}

export default DivisionalOfficeDashboard;
