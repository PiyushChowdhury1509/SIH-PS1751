'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

function PostOfficeDashboard() {
  const router=useRouter()
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Post Office Dashboard</h1>
        <div className="flex items-center">
          <span className="mr-4">Welcome, User</span>
          <button className="bg-red-500 px-4 py-2 rounded">Logout</button>
        </div>
      </nav>
      <div className="flex flex-1">
        <aside className="bg-gray-200 w-64 p-4">
          <ul>
            <li className="mb-2">
              <a href="#dashboard" className="block p-2 bg-blue-600 text-white rounded">Dashboard</a>
            </li>
            <li className="mb-2">
              <a href="#compliance" className="block p-2 bg-blue-600 text-white rounded">Compliance</a>
            </li>
            <li className="mb-2">
              <a onClick={()=>router.push('/staffAlerts')} href="#alerts" className="block p-2 bg-blue-600 text-white rounded">Alerts</a>
            </li>
            <li className="mb-2">
              <a onClick={()=>router.push('/staffReports')} href="#reports" className="block p-2 bg-blue-600 text-white rounded">Reports</a>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-4">
          <section id="dashboard" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
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
          <section id="compliance" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Compliance</h2>
            <div className="bg-white p-4 rounded shadow mb-6">
              <h3 className="text-xl font-semibold mb-2">Compliance Status</h3>
              <p>80% Completed</p>
              <p>20 Non-compliant Instances</p>
            </div>
            <div className="bg-white p-4 rounded shadow mb-6">
              <h3 className="text-xl font-semibold mb-2">Compliance Activities</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular Cleaning</li>
                <li>Waste Segregation</li>
                <li>Energy Conservation</li>
                <li>Water Conservation</li>
                <li>Green Initiatives</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Activity Status</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular Cleaning: <span className="text-green-500">Completed</span></li>
                <li>Waste Segregation: <span className="text-yellow-500">In Progress</span></li>
                <li>Energy Conservation: <span className="text-red-500">Not Started</span></li>
                <li>Water Conservation: <span className="text-green-500">Completed</span></li>
                <li>Green Initiatives: <span className="text-yellow-500">In Progress</span></li>
              </ul>
            </div>
          </section>
          <section id="alerts" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Alerts</h2>
            <p>Active alerts and notifications will be displayed here.</p>
          </section>
          <section id="reports">
            <h2 className="text-2xl font-bold mb-4">Reports</h2>
            <p>Reports submitted by staff will be displayed here.</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PostOfficeDashboard;
