import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./Birthday.css"; // Link to your CSS file for styles

const BirthdayInvitation = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "Jessica Edwards",
    time: "10:00 am",
    date: "6.17.18",
    place: "Serenity Park",
    address: "823 S Broadway, Happy Town, USA",
    contact: "867-5309",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log the form data

    try {
      const response = await fetch(
        "https://invitationcardbackend.onrender.com/api/birthdayinvitation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json(); // Get the error message from the response
        throw new Error(errorData.message || "Failed to save invitation");
      }

      setFormVisible(false);
      alert("Invitation saved successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the invitation.");
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFillColor(0, 66, 92); // Background color
    doc.rect(0, 0, 210, 297, "F"); // Full A4 background

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");

    doc.setFontSize(14);
    doc.text(
      "Join us to celebrate the birthday of",
      105,
      40,
      null,
      null,
      "center"
    );

    doc.setFontSize(20);
    doc.setTextColor(235, 101, 162); // Pinkish color
    doc.text(formData.name, 105, 60, null, null, "center");

    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text(formData.time, 105, 80, null, null, "center");

    doc.setFontSize(16);
    doc.setTextColor(241, 176, 198);
    doc.text(formData.date, 105, 100, null, null, "center");

    doc.setFontSize(14);
    doc.setTextColor(183, 101, 153);
    doc.text(formData.place, 105, 120, null, null, "center");

    doc.setFontSize(12);
    doc.text(formData.address, 105, 140, null, null, "center");

    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text(
      `RSVP to save your slice of cake. For more information, call ${formData.contact}`,
      105,
      160,
      null,
      null,
      "center"
    );

    doc.save("Birthday_Invitation.pdf");
  };

  return (
    <div id="outerShell">
      {formVisible ? (
        <div className="birthday_form-container">
          <form onSubmit={handleSubmit} className="birthday_invitation-form">
            <h2>Birthday Invitation Form</h2>

            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Time:
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Place:
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Contact:
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
            </label>

            <button type="submit">Generate Invitation</button>
          </form>
        </div>
      ) : (
        <div id="infoBox">
          <ul>
            <li id="top" className="whiteText">
              Join us to celebrate the birthday of
            </li>
            <li id="name">{formData.name}</li>
            <li className="whiteText">{formData.time}</li>
            <li id="date">{formData.date}</li>
            <li id="place">{formData.place}</li>
            <li className="whiteText">{formData.address}</li>
            <li className="whiteText padding">
              RSVP to save your slice of cake.
            </li>
            <li className="whiteText padding">
              For more information, call {formData.contact}
            </li>
          </ul>
          <button onClick={generatePDF} className="download-btn">
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default BirthdayInvitation;
