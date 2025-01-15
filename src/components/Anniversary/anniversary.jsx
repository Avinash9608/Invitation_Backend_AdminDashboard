import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CalendarDays, MapPin, User, Clock, Send } from "lucide-react";
import axios from "axios"; // Import Axios for API calls
import "./anniversary.css"; // Assuming CSS file named App.css

const AnniversaryInvitationApp = () => {
  const [step, setStep] = useState(1);
  const [invitationDetails, setInvitationDetails] = useState({
    celebrantNames: "",
    anniversaryType: "Wedding",
    venue: "",
    date: "",
    time: "",
    additionalDetails: "",
  });
  const [generatedInvitation, setGeneratedInvitation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvitationDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const submitInvitation = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://invitationcardbackend.onrender.com/api/anniversaryinvitations",
        invitationDetails
      );

      // Set the generated invitation from the server response
      setGeneratedInvitation(response.data.invitation);
      setStep(5); // Move to the final step
    } catch (error) {
      console.error("Error submitting invitation:", error);
      setErrorMessage(
        error.response?.data?.message || "Failed to send invitation data."
      );
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="step-container"
          >
            <h2 className="step-title">
              <User className="icon" /> Celebrant Details
            </h2>
            <div className="input-group">
              <input
                type="text"
                name="celebrantNames"
                value={invitationDetails.celebrantNames}
                onChange={handleInputChange}
                placeholder="Names of Celebrants (e.g. John & Mary)"
                className="input-field"
              />
              <select
                name="anniversaryType"
                value={invitationDetails.anniversaryType}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="Wedding">Wedding Anniversary</option>
                <option value="Dating">Dating Anniversary</option>
                <option value="Other">Other Celebration</option>
              </select>
            </div>
            <button onClick={nextStep} className="btn-next Ani_button">
              Next <Send className="icon-small" />
            </button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="step-container"
          >
            <h2 className="step-title">
              <MapPin className="icon" /> Venue Details
            </h2>
            <div className="input-group">
              <input
                type="text"
                name="venue"
                value={invitationDetails.venue}
                onChange={handleInputChange}
                placeholder="Venue Name and Address"
                className="input-field"
              />
            </div>
            <div className="button-group">
              <button onClick={prevStep} className="btn-previous Ani_button">
                Previous
              </button>
              <button onClick={nextStep} className="btn-next Ani_button">
                Next <Send className="icon-small" />
              </button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="step-container"
          >
            <h2 className="step-title">
              <CalendarDays className="icon" /> Date and Time
            </h2>
            <div className="input-group">
              <input
                type="date"
                name="date"
                value={invitationDetails.date}
                onChange={handleInputChange}
                className="input-field"
              />
              <input
                type="time"
                name="time"
                value={invitationDetails.time}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div className="button-group">
              <button onClick={prevStep} className="btn-previous Ani_button">
                Previous
              </button>
              <button onClick={nextStep} className="btn-next Ani_button">
                Next <Send className="icon-small" />
              </button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="step-container"
          >
            <h2 className="step-title">
              <Heart className="icon" /> Additional Details
            </h2>
            <div className="input-group">
              <textarea
                name="additionalDetails"
                value={invitationDetails.additionalDetails}
                onChange={handleInputChange}
                placeholder="Any additional information or special instructions"
                className="textarea-field"
              />
            </div>
            <div className="button-group">
              <button onClick={prevStep} className="btn-previous Ani_button">
                Previous
              </button>
              <button
                onClick={submitInvitation} // API Call here
                className="btn-next Ani_button"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Generate Invitation"}{" "}
                <Send className="icon-small" />
              </button>
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="final-invitation"
          >
            <div className="heart-icon">
              <Heart
                size={48}
                fill="currentColor"
                className="pulse-animation"
              />
            </div>
            <h1 className="final-title">
              {invitationDetails.anniversaryType} Celebration
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="invitation-content"
            >
              <p className="celebrant-names">
                {invitationDetails.celebrantNames}
              </p>

              <div className="event-details">
                <div className="event-item">
                  <CalendarDays className="icon-small" />{" "}
                  {invitationDetails.date}
                </div>
                <div className="event-item">
                  <Clock className="icon-small" /> {invitationDetails.time}
                </div>
              </div>

              <div className="location">
                <h2 className="location-title">Location</h2>
                <p>{invitationDetails.venue}</p>
              </div>

              {invitationDetails.additionalDetails && (
                <div className="additional-details">
                  <h2>Additional Details</h2>
                  <p>{invitationDetails.additionalDetails}</p>
                </div>
              )}

              <button
                onClick={() => window.print()}
                className="btn-print Ani_button"
              >
                Print Invitation
              </button>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <motion.div
        className="app-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {renderStep()}
      </motion.div>
    </div>
  );
};

export default AnniversaryInvitationApp;
