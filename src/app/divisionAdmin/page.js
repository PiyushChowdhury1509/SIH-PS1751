'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const postOffices = [
  { id: 1, name: "Post Office A", complianceRate: "85%", activeAlerts: 2 },
  { id: 2, name: "Post Office B", complianceRate: "78%", activeAlerts: 4 },
];

const alerts = [
  { id: 1, office: "Post Office A", issue: "Improper waste disposal", date: "2024-09-01", status: "Pending" },
  { id: 2, office: "Post Office B", issue: "Non-compliance with green practices", date: "2024-09-02", status: "Resolved" },
];

const reports = [
  { id: 1, office: "Post Office A", reportDate: "2024-09-01", description: "Waste management issues", photos: ["photo1.jpg"], videos: ["video1.mp4"] },
  { id: 2, office: "Post Office B", reportDate: "2024-09-02", description: "Green practices not followed", photos: ["photo2.jpg"], videos: ["video2.mp4"] },
];

function DivisionalOfficeDashboard() {
  const router=useRouter();
  const [selectedPostOffice, setSelectedPostOffice] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Divisional Office Dashboard</h1>
        <div className="flex items-center">
          <span className="mr-4">Welcome, Divisional Head</span>
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
              <a onClick={()=>router.push('/divisionAdmin/postOffices')} href="#postOffices" className="block p-2 bg-blue-600 text-white rounded">Post Offices</a>
            </li>
            <li className="mb-2">
              <a href="#alerts" className="block p-2 bg-blue-600 text-white rounded">Alerts</a>
            </li>
            <li className="mb-2">
              <a href="#reports" className="block p-2 bg-blue-600 text-white rounded">Reports</a>
            </li>
            <li className="mb-2">
              <a href="#communication" className="block p-2 bg-blue-600 text-white rounded">Communication</a>
            </li>
            <li className="mb-2">
              <a href="#settings" className="block p-2 bg-blue-600 text-white rounded">Settings</a>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-4">
          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Total Post Offices</h3>
                <p>{postOffices.length}</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Total Alerts</h3>
                <p>{alerts.length}</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Total Reports</h3>
                <p>{reports.length}</p>
              </div>
            </div>
          </section>
          
          <section id="postOffices" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Post Offices</h2>
            <div className="bg-white p-4 rounded shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Alerts</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {postOffices.map((office) => (
                    <tr key={office.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{office.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{office.complianceRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{office.activeAlerts}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-900">
                        <button onClick={() => setSelectedPostOffice(office)}>View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          <section id="alerts" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Alerts</h2>
            <div className="bg-white p-4 rounded shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Office</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {alerts.map((alert) => (
                    <tr key={alert.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alert.office}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.issue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alert.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          <section id="reports" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Reports</h2>
            <div className="bg-white p-4 rounded shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Office</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reports.map((report) => (
                    <tr key={report.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.reportDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-900">
                        <button onClick={() => alert(`Viewing report ${report.id}`)}>View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          <section id="communication" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Communication</h2>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Send Notification</h3>
              <form>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter subject" />
                <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Message</label>
                <textarea rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter message"></textarea>
                <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow-sm hover:bg-blue-700">Send</button>
              </form>
            </div>
          </section>
          
          <section id="settings">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Update Settings</h3>
              <form>
                <label className="block text-sm font-medium text-gray-700 mb-2">Division Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter division name" />
                <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Contact Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter contact email" />
                <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow-sm hover:bg-blue-700">Update</button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DivisionalOfficeDashboard;

