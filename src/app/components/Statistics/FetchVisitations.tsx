"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/composables/firebaseClient";


interface Visit {
  ip: string;
  location: string;
  userAgent: string;
  timestamp: string;
  address: object;
}

function VisitsList() {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "visits"));
        const data = querySnapshot.docs.map((doc) => doc.data() as Visit);
        setVisits(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching visits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisits();
  }, []);

  return (
    <div className="w-full min-w-4xl p-4 mx-auto bg-red-400">
      <h1 className="text-xl font-bold mb-4 text-center">Visitor Logs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : visits.length === 0 ? (
        <p>No visits logged yet.</p>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">IP Address</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">User Agent</th>
                <th className="border px-4 py-2">Timestamp</th>
                <th className="border px-4 py-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{visit.ip}</td>
                  <td className="border px-4 py-2">{visit.location}</td>
                  <td className="border px-4 py-2 text-xs break-words">{visit.userAgent}</td>
                  <td className="border px-4 py-2 text-xs break-words">{JSON.stringify(visit.address)}</td>
                  <td className="border px-4 py-2">{new Date(visit.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default VisitsList;
