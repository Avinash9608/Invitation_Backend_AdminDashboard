import React, { useState, useEffect } from "react";
import mysong from "../../assets/mp3/song.mp3";
import "./Wedding.css";
import { jsPDF } from "jspdf"; // Add jsPDF for PDF generation

const WeddingInvitation = () => {
  const [brideName, setBrideName] = useState("Sonali");
  const [groomName, setGroomName] = useState("Gagan");
  const [weddingDate, setWeddingDate] = useState("29 November 2020");
  const [venue, setVenue] = useState("Ashirwad Garden, Ratu, Ranchi");
  const [contactNumber, setContactNumber] = useState("+91 8210050314");
  const [formVisible, setFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    weddingDate: "",
    venue: "",
    contactNumber: "",
  });

  useEffect(() => {
    const audio = document.getElementById("my_audio");
    audio.play().catch((error) => {
      console.error("Auto-play issue: ", error);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBrideName(formData.brideName || brideName);
    setGroomName(formData.groomName || groomName);
    setWeddingDate(formData.weddingDate || weddingDate);
    setVenue(formData.venue || venue);
    setContactNumber(formData.contactNumber || contactNumber);
    setFormVisible(false);

    try {
      const response = await fetch(
        "https://invitationcardbackend.onrender.com/save-invitation/save-invitations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          console.error("API endpoint not found.");
          alert("API endpoint not found. Please try again.");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log(data.message); // Handle success message
      } else {
        // Handle error if the response is not JSON
        console.error("Expected JSON response but got:", contentType);
        alert("Failed to save the invitation. Please try again.");
      }
    } catch (error) {
      console.error("Error saving wedding invitation:", error.message);
      alert(
        "An error occurred while saving the wedding invitation. Please try again."
      );
    }
  };
  const generatePDF = () => {
    const doc = new jsPDF();

    // Set background color and add the wedding gif as background image
    doc.setFillColor(255, 255, 255); // White background for PDF
    doc.rect(0, 0, 210, 297, "F"); // A4 size page (210mm x 297mm)

    // Add Background image (Wedding gif as a background in PDF, it could be an image or color)
    doc.addImage(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-594540-png.png", // Add your image or GIF URL
      "PNG",
      0,
      0,
      210,
      297
    );

    // Set text styling to match the page's style
    doc.setTextColor(78, 75, 67); // Dark color for text
    doc.setFont("helvetica", "normal");

    // Header text: Bride and Groom names
    doc.setFontSize(24);
    doc.setTextColor(197, 133, 104); // Dark gold for names
    doc.text(brideName, 105, 60, null, null, "center");
    doc.text("&", 105, 80, null, null, "center");
    doc.text(groomName, 105, 100, null, null, "center");

    // Additional wedding details like date and venue
    doc.setFontSize(16);
    doc.setTextColor(78, 75, 67); // Dark color
    doc.text(
      "Be part of our happily ever after on",
      105,
      130,
      null,
      null,
      "center"
    );

    // Wedding Date
    doc.setFontSize(18);
    doc.setTextColor(197, 133, 104); // Dark gold for date
    doc.text(`FRIDAY, ${weddingDate}`, 105, 160, null, null, "center");

    // Venue Information
    doc.setFontSize(16);
    doc.text(venue, 105, 180, null, null, "center");

    // "Dinner and Dancing to follow"
    doc.setFontSize(14);
    doc.setTextColor(197, 133, 104); // Dark gold
    doc.text(
      "Join Us for a Grand Celebration Afterward",
      105,
      220,
      null,
      null,
      "center"
    );

    // Footer with RSVP details
    doc.setFontSize(12);
    doc.setTextColor(78, 75, 67); // Dark color for footer
    doc.text(
      "Your response will help us plan better—please reply soon!",
      105,
      240,
      null,
      null,
      "center"
    );

    // Save the PDF with a file name
    doc.save("Wedding_Invitation.pdf");
  };

  return (
    <>
      <div className="wedding_petal">
        <span></span>
        <span></span>
        <span></span>
        {/* Repeat for other petals */}
      </div>
      {formVisible ? (
        <div className="wedding_form-container">
          <form onSubmit={handleSubmit} className="wedding_invitation-form">
            <h2>Wedding Invitation Form</h2>
            <label>
              Bride's Name:
              <input
                type="text"
                name="brideName"
                value={formData.brideName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Groom's Name:
              <input
                type="text"
                name="groomName"
                value={formData.groomName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Wedding Date:
              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Venue:
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Contact Number:
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Generate Invitation</button>
          </form>
        </div>
      ) : (
        <div className="wedding_petal">
          <span></span>
          {/* Other spans omitted for brevity */}
        </div>
      )}
      <div className={`WeddingMid ${formVisible ? "blurred" : ""}`}>
        <div className="sakura-falling"></div>
        <img
          src="https://i.imgur.com/dGOOfnA.png"
          alt="image-top-right"
          className="top-right-decoration"
        />
        <img
          src="https://i.imgur.com/t6ffnbn.png"
          alt="image-top-left"
          className="top-left-decoration"
        />
        <section id="media"></section>
        <div className="wrap">
          <div className="title">
            <h1>{brideName}</h1>
            <h2>&</h2>
            <h1>{groomName}</h1>
            <h3>"Bound by Love, Ready for Forever"</h3>
            <p>
              on <span className="date">{weddingDate}</span>, At{" "}
              <span className="place">{venue}</span>
            </p>
          </div>
        </div>
        <div id="time">
          <span>Bless the married couple for a happy life!</span>
        </div>
        <p className="dance-med">"An Evening of Delight Awaits!"</p>
        <div className="wedding_actions">
          <a
            href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
              venue
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="wedding_venue">SEE THE VENUE</div>
          </a>
          <button onClick={generatePDF} className="wedding_venue">
            DOWNLOAD INVITATION CARD
          </button>
        </div>
        <p className="wedding_footer">
          Can't wait to celebrate the auspicious moment of our family with you!{" "}
          <br />
          Just a ping away for any queries: <span>{contactNumber}</span>
        </p>
        <div className="music">
          <audio src={mysong} id="my_audio" loop="loop"></audio>
        </div>
        <p className="happiness">
          Join us in our happiness!
          <br />
          <a
            href="https://twitter.com/Vinit_Shahdeo"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </p>
      </div>
    </>
  );
};

export default WeddingInvitation;
