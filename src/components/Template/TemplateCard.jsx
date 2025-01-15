// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import "./Template.css"; // Custom CSS for styling

// const Template = () => {
//   const [templates, setTemplates] = useState([]); // State to hold dynamic template data
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTemplates = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/templates");
//         setTemplates(response.data); // Update the state with the fetched templates
//       } catch (error) {
//         console.error("Error fetching templates:", error);
//       }
//     };

//     fetchTemplates();
//   }, []); // Empty array means this effect runs only once when the component mounts

//   // Navigate to the appropriate page based on template name
//   const handleCardClick = (template) => {
//     const route = getRouteForTemplate(template.name); // Get the route based on template name
//     navigate(route, { state: { template } }); // Passing the template data to the selected page
//   };

//   // Function to return the route based on the template name
//   const getRouteForTemplate = (templateName) => {
//     switch (templateName) {
//       case "Anniversary Template":
//         return "/anniversaryFrontend";
//       case "Wedding Template":
//         return "/weddingFrontend";
//       case "Birthday Template":
//         return "/birthdayFrontend";
//       case "Dating Template":
//         return "/anniversaryFrontend";
//       default:
//         return "/templateFrontend"; // Default route
//     }
//   };

//   return (
//     <div className="template-container">
//       <h1 className="template-title">Explore Our Templates</h1>
//       <div className="cards-wrapper">
//         {templates.length === 0 ? (
//           <p>Loading templates...</p>
//         ) : (
//           templates.map((template) => (
//             <div
//               key={template._id}
//               className="category-card"
//               onClick={() => handleCardClick(template)}
//             >
//               <img
//                 src={template.fileURL}
//                 alt={template.name}
//                 className="category-image"
//               />
//               <div className="card-content">
//                 <h3 className="category-name">{template.name}</h3>
//                 <p>Category: {template.category}</p>
//                 <p>Price: ${template.price}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Template;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(
          "https://invitationcardbackend.onrender.com/api/templates"
        );
        setTemplates(response.data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };
    fetchTemplates();
  }, []);

  const handleCardClick = (template) => {
    const route = getRouteForTemplate(template.name);
    navigate(route, { state: { template } });
  };

  const getRouteForTemplate = (templateName) => {
    switch (templateName) {
      case "Anniversary Template":
        return "/anniversaryFrontend";
      case "Wedding Template":
        return "/weddingFrontend";
      case "Birthday Template":
        return "/birthdayFrontend";
      case "Dating Template":
        return "/anniversaryFrontend";
      default:
        return "/templateFrontend";
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Explore Our Templates
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {templates.length === 0 ? (
          <p
            style={{
              fontSize: "18px",
              color: "#777",
            }}
          >
            Loading templates...
          </p>
        ) : (
          templates.map((template) => (
            <div
              key={template._id}
              style={{
                position: "relative",
                width: "250px",
                height: "350px",
                borderRadius: "15px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onClick={() => handleCardClick(template)}
            >
              <img
                src={template.fileURL}
                alt={template.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "10px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  opacity: "0",
                  transition: "opacity 0.3s ease",
                }}
                className="template-overlay"
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  {template.name}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  Type: {template.category}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Templates;
