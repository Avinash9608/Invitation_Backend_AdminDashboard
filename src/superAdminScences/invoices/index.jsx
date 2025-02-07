import React, { useEffect, useState } from "react";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetch("https://invitationcardbackend.onrender.com/api/enquiry")
      .then((response) => response.json())
      .then((data) => setEnquiries(data))
      .catch((error) => console.error("Error fetching enquiries:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h2 className="text-2xl font-bold text-center">User Enquiries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Message</th>
                <th className="py-3 px-6 text-center">Send Copy</th>
                <th className="py-3 px-6 text-center">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {enquiries.length > 0 ? (
                enquiries.map((enquiry) => (
                  <tr
                    key={enquiry._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">{enquiry.name}</td>
                    <td className="py-3 px-6 text-left">{enquiry.email}</td>
                    <td className="py-3 px-6 text-left truncate max-w-xs">
                      {enquiry.message}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                          enquiry.sendCopy ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {enquiry.sendCopy ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      {new Date(enquiry.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnquiryTable;
