// pages/communication.js
import Link from 'next/link';

const postOffices = [
  { id: 1, name: "Post Office 1", reports: 5 },
  { id: 2, name: "Post Office 2", reports: 12 },
  { id: 3, name: "Post Office 3", reports: 20 },
];

export default function Communication() {
  return (
    <div className="min-h-screen p-8">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Communication Dashboard</h1>
      </header>

      <main className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Post Offices</h2>
        <div className="bg-white p-4 rounded shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post Office</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reports</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {postOffices.map((office) => (
                <tr key={office.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{office.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{office.reports}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href={`/divisionAdmin/communication/chat/${office.id}`} passHref>
                      Chat
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
