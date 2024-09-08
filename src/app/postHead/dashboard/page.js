'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function PostOfficeHeadDashboard() {
    const router=useRouter();
  const [alerts, setAlerts] = useState([
    { id: 1, title: 'Waste Disposal Issue', status: 'Pending', date: '2024-09-01' },
    { id: 2, title: 'Broken Bin Lid', status: 'Resolved', date: '2024-09-02' },
  ]);

  const handleSendAlert = () => {
    // Logic to send a new alert
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Post Office Head Dashboard</h1>
        <div className="flex items-center">
          <span className="mr-4">Welcome, Head</span>
          <button className="bg-red-500 px-4 py-2 rounded">Logout</button>
        </div>
      </nav>
      <div className="flex flex-1">
        <aside className="bg-gray-200 w-64 p-4">
          <ul>
            <li className="mb-2">
              <a href="#overview" className="block p-2 bg-blue-600 text-white rounded">Overview</a>
            </li>
            <li className="mb-2">
              <a href="#compliance" className="block p-2 bg-blue-600 text-white rounded">Compliance</a>
            </li>
            <li className="mb-2">
              <a onClick={()=>router.push('/postHead/alerts')} href="#alerts" className="block p-2 bg-blue-600 text-white rounded">Alerts</a>
            </li>
            <li className="mb-2">
              <a onClick={()=>router.push('/postHead/reportsPage')} href="#reports" className="block p-2 bg-blue-600 text-white rounded">Reports</a>
            </li>
            <li className="mb-2">
              <a href="#staff" className="block p-2 bg-blue-600 text-white rounded">Staff</a>
            </li>
            <li className="mb-2">
              <a href="#settings" className="block p-2 bg-blue-600 text-white rounded">Settings</a>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-4">
          {/* Overview Section */}
          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                <p>80% Completed</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Alerts</h3>
                <p>5 Active Alerts</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Reports</h3>
                <p>10 Pending Reports</p>
              </div>
            </div>
          </section>

          {/* Compliance Management */}
          <section id="compliance" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Compliance Management</h2>
            {/* Add compliance details, metrics, and actions here */}
          </section>

          {/* Alerts Management */}
          <section id="alerts" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Alerts Management</h2>
            <div className="mb-4">
              <button
                onClick={handleSendAlert}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Send New Alert
              </button>
            </div>
            <table className="w-full bg-white border border-gray-300 rounded shadow">
              <thead>
                <tr>
                  <th className="p-2">Title</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map(alert => (
                  <tr key={alert.id}>
                    <td className="p-2">{alert.title}</td>
                    <td className="p-2">{alert.date}</td>
                    <td className="p-2">{alert.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Report Management */}
          <section id="reports" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Report Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Pending Reports</h3>
                {/* List of pending reports */}
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Resolved Reports</h3>
                {/* List of resolved reports */}
              </div>
            </div>
          </section>

          {/* Staff Management */}
          <section id="staff" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Staff Management</h2>
            {/* Add staff list, roles, performance metrics, and communication tools here */}
          </section>

          {/* Settings and Configuration */}
          <section id="settings" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            {/* Add settings and configuration options here */}
          </section>
        </main>
      </div>
    </div>
  );
}

export default PostOfficeHeadDashboard;
