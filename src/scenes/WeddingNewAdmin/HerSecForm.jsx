// import React, { useState } from "react";

// const WeddingForm = () => {
//   const [formData, setFormData] = useState({
//     brideName: "",
//     groomName: "",
//     brideImageUrl: "",
//     groomImageUrl: "",
//     weddingDate: "",
//     weddingLocation: "",
//     brideDescription: "",
//     groomDescription: "",
//     eventDetails: [
//       {
//         type: "",
//         title: "",
//         timeStart: "",
//         timeEnd: "",
//         date: "",
//         description: "",
//       },
//     ],
//     storyDetails: [{ title: "", date: "", description: "", image: "" }],
//     galleryData: [{ image: "", photosCount: "", title: "" }],
//   });

//   const [step, setStep] = useState(1);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleNestedInputChange = (e, section, subsection) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => {
//       const updatedEventDetails = { ...prevState[section] };
//       updatedEventDetails[subsection] = {
//         ...updatedEventDetails[subsection],
//         [name]: value,
//       };
//       return {
//         ...prevState,
//         [section]: updatedEventDetails,
//       };
//     });
//   };

//   const handleAddEvent = () => {
//     setFormData((prevState) => ({
//       ...prevState,
//       eventDetails: [
//         ...prevState.eventDetails,
//         {
//           type: "",
//           title: "",
//           timeStart: { hours: "", minutes: "" },
//           timeEnd: { hours: "", minutes: "" },
//           date: "",
//           description: "",
//         },
//       ],
//     }));
//   };

//   const handleAddStory = () => {
//     setFormData((prevState) => ({
//       ...prevState,
//       storyDetails: [
//         ...prevState.storyDetails,
//         { title: "", date: "", description: "", image: "" },
//       ],
//     }));
//   };

//   const handleAddGallery = () => {
//     setFormData((prevState) => ({
//       ...prevState,
//       galleryData: [
//         ...prevState.galleryData,
//         { image: "", photosCount: "", title: "" },
//       ],
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Client-side validation to ensure all required fields are present in the storyDetails array
//     const invalidStories = formData.storyDetails.filter((story) => {
//       return !story.title || !story.date || !story.description || !story.image;
//     });

//     if (invalidStories.length > 0) {
//       alert("Please ensure all fields are filled out for each story.");
//       return; // Prevent submission if validation fails
//     }

//     try {
//       const response = await fetch(
//         "https://invitationcardbackend.onrender.com/api/wedding",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Form submitted successfully:", data);
//         alert("Wedding form submitted successfully!");
//       } else {
//         const errorData = await response.json();
//         console.error("Error submitting form:", errorData);
//         alert(
//           "There was an error submitting the form. Please check the server logs for details."
//         );
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert(
//         "There was an error submitting the form. Please check the server logs for details."
//       );
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
//       <h2 className="text-3xl mb-4 text-center">Wedding Details Form</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Basic Info Fields */}
//         {step === 1 && (
//           <>
//             <div className="mb-4">
//               <label
//                 htmlFor="brideName"
//                 className="block text-lg font-semibold"
//               >
//                 Bride Name
//               </label>
//               <input
//                 type="text"
//                 id="brideName"
//                 name="brideName"
//                 value={formData.brideName}
//                 onChange={handleInputChange}
//                 className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="groomName"
//                 className="block text-lg font-semibold"
//               >
//                 Groom Name
//               </label>
//               <input
//                 type="text"
//                 id="groomName"
//                 name="groomName"
//                 value={formData.groomName}
//                 onChange={handleInputChange}
//                 className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="brideImageUrl"
//                 className="block text-lg font-semibold"
//               >
//                 Bride Image URL
//               </label>
//               <input
//                 type="text"
//                 id="brideImageUrl"
//                 name="brideImageUrl"
//                 value={formData.brideImageUrl}
//                 onChange={handleInputChange}
//                 className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="groomImageUrl"
//                 className="block text-lg font-semibold"
//               >
//                 Groom Image URL
//               </label>
//               <input
//                 type="text"
//                 id="groomImageUrl"
//                 name="groomImageUrl"
//                 value={formData.groomImageUrl}
//                 onChange={handleInputChange}
//                 className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="p-2 bg-blue-500 rounded"
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <div className="mb-4">
//               <label
//                 htmlFor="weddingDate"
//                 className="block text-lg font-semibold"
//               >
//                 Wedding Date
//               </label>
//               <input
//                 type="date"
//                 id="weddingDate"
//                 name="weddingDate"
//                 value={formData.weddingDate}
//                 onChange={handleInputChange}
//                 className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="weddingLocation"
//                 className="block text-lg font-semibold"
//               >
//                 Wedding Location
//               </label>
//               <input
//                 type="text"
//                 id="weddingLocation"
//                 name="weddingLocation"
//                 value={formData.weddingLocation}
//                 onChange={handleInputChange}
//                 className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="brideDescription"
//                 className="block text-lg font-semibold"
//               >
//                 Bride Description
//               </label>
//               <textarea
//                 id="brideDescription"
//                 name="brideDescription"
//                 value={formData.brideDescription}
//                 onChange={handleInputChange}
//                 className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="groomDescription"
//                 className="block text-lg font-semibold"
//               >
//                 Groom Description
//               </label>
//               <textarea
//                 id="groomDescription"
//                 name="groomDescription"
//                 value={formData.groomDescription}
//                 onChange={handleInputChange}
//                 className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="p-2 bg-gray-500 rounded"
//               >
//                 Back
//               </button>
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 class
//                 Name="p-2 bg-blue-500 rounded"
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}

//         {/* Main Ceremony Section */}
//         {step === 3 && (
//           <>
//             {formData.eventDetails.map((event, index) => (
//               <div key={index} className="mb-4">
//                 <h3 className="text-2xl font-semibold">Event {index + 1}</h3>
//                 <label
//                   htmlFor={`eventType${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Type:
//                 </label>
//                 <input
//                   type="text"
//                   id={`eventType${index}`}
//                   name="type"
//                   value={event.type}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedEvents = [...prevState.eventDetails];
//                       updatedEvents[index].type = e.target.value;
//                       return { ...prevState, eventDetails: updatedEvents };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`eventTitle${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Title:
//                 </label>
//                 <input
//                   type="text"
//                   id={`eventTitle${index}`}
//                   name="title"
//                   value={event.title}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedEvents = [...prevState.eventDetails];
//                       updatedEvents[index].title = e.target.value;
//                       return { ...prevState, eventDetails: updatedEvents };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`eventDate${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Date:
//                 </label>
//                 <input
//                   type="date"
//                   id={`eventDate${index}`}
//                   name="date"
//                   value={event.date}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedEvents = [...prevState.eventDetails];
//                       updatedEvents[index].date = e.target.value;
//                       return { ...prevState, eventDetails: updatedEvents };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`eventTimeStart${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Start Time:
//                 </label>
//                 <input
//                   type="time"
//                   id={`eventTimeStart${index}`}
//                   name="timeStart"
//                   value={event.timeStart}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedEvents = [...prevState.eventDetails];
//                       updatedEvents[index].timeStart = e.target.value;
//                       return { ...prevState, eventDetails: updatedEvents };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`eventTimeEnd${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   End Time:
//                 </label>
//                 <input
//                   type="time"
//                   id={`eventTimeEnd${index}`}
//                   name="timeEnd"
//                   value={event.timeEnd}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedEvents = [...prevState.eventDetails];
//                       updatedEvents[index].timeEnd = e.target.value;
//                       return { ...prevState, eventDetails: updatedEvents };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`eventDescription${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Description:
//                 </label>
//                 <textarea
//                   id={`eventDescription${index}`}
//                   name="description"
//                   value={event.description}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedEvents = [...prevState.eventDetails];
//                       updatedEvents[index].description = e.target.value;
//                       return { ...prevState, eventDetails: updatedEvents };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={handleAddEvent}
//               className="w-full py-3 bg-green-500 text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Add Event
//             </button>
//             <button
//               type="button"
//               onClick={handleBack}
//               className="p-2 bg-gray-500 rounded"
//             >
//               Back
//             </button>
//             <button
//               type="button"
//               onClick={handleNext}
//               className="p-2 bg-blue-500 rounded"
//             >
//               Next
//             </button>
//           </>
//         )}

//         {/* Story Section */}

//         {step === 4 && (
//           <>
//             {formData.storyDetails.map((story, index) => (
//               <div key={index} className="mb-4">
//                 <h3 className="text-2xl font-semibold">Story {index + 1}</h3>
//                 <label
//                   htmlFor={`storyTitle${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Title:
//                 </label>
//                 <input
//                   type="text"
//                   id={`storyTitle${index}`}
//                   name="title"
//                   value={story.title}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedStories = [...prevState.storyDetails];
//                       updatedStories[index].title = e.target.value;
//                       return { ...prevState, storyDetails: updatedStories };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`storyDate${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Date:
//                 </label>
//                 <input
//                   type="date"
//                   id={`storyDate${index}`}
//                   name="date"
//                   value={story.date}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedStories = [...prevState.storyDetails];
//                       updatedStories[index].date = e.target.value;
//                       return { ...prevState, storyDetails: updatedStories };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`storyDescription${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Description:
//                 </label>
//                 <textarea
//                   id={`storyDescription${index}`}
//                   name="description"
//                   value={story.description}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedStories = [...prevState.storyDetails];
//                       updatedStories[index].description = e.target.value;
//                       return { ...prevState, storyDetails: updatedStories };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`storyImage${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Image URL:
//                 </label>
//                 <input
//                   type="text"
//                   id={`storyImage${index}`}
//                   name="image"
//                   value={story.image}
//                   onChange={(e) => {
//                     setFormData((prevState) => {
//                       const updatedStories = [...prevState.storyDetails];
//                       updatedStories[index] = {
//                         ...updatedStories[index],
//                         image: e.target.value,
//                       };
//                       return { ...prevState, storyDetails: updatedStories };
//                     });
//                   }}
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             ))}

//             <button
//               type="button"
//               onClick={handleAddStory}
//               className="w-full py-3 bg-green-500 text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Add Story
//             </button>
//             <button
//               type="button"
//               onClick={handleBack}
//               className="p-2 bg-gray-500 rounded"
//             >
//               Back
//             </button>
//             <button
//               type="button"
//               onClick={handleNext}
//               className="p-2 bg-blue-500 rounded"
//             >
//               Next
//             </button>
//           </>
//         )}
//         {/* Gallery Section */}

//         {step === 5 && (
//           <>
//             {formData.galleryData.map((gallery, index) => (
//               <div key={index} className="mb-4">
//                 <h3 className="text-2xl font-semibold">Gallery {index + 1}</h3>
//                 <label
//                   htmlFor={`galleryTitle${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Title:
//                 </label>
//                 <input
//                   type="text"
//                   id={`galleryTitle${index}`}
//                   name="title"
//                   value={gallery.title}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedGallery = [...prevState.galleryData];
//                       updatedGallery[index].title = e.target.value;
//                       return { ...prevState, galleryData: updatedGallery };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`galleryPhotosCount${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Number of Photos:
//                 </label>
//                 <input
//                   type="number"
//                   id={`galleryPhotosCount${index}`}
//                   name="photosCount"
//                   value={gallery.photosCount}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedGallery = [...prevState.galleryData];
//                       updatedGallery[index].photosCount = e.target.value;
//                       return { ...prevState, galleryData: updatedGallery };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <label
//                   htmlFor={`galleryImage${index}`}
//                   className="block text-lg font-semibold"
//                 >
//                   Image URL:
//                 </label>
//                 <input
//                   type="text"
//                   id={`galleryImage${index}`}
//                   name="image"
//                   value={gallery.image}
//                   onChange={(e) =>
//                     setFormData((prevState) => {
//                       const updatedGallery = [...prevState.galleryData];
//                       updatedGallery[index].image = e.target.value;
//                       return { ...prevState, galleryData: updatedGallery };
//                     })
//                   }
//                   className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             ))}

//             <button
//               type="button"
//               onClick={handleAddGallery}
//               className="w-full py-3 bg-green-500 text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Add Gallery
//             </button>

//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Submit
//             </button>
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default WeddingForm;


import React, { useState } from "react";
import weddingimgform from "./f98db52c7fca433fb4eda72925480334-removebg-preview.png";

const WeddingForm = () => {
  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    brideImageUrl: "",
    groomImageUrl: "",
    weddingDate: "",
    weddingLocation: "",
    brideDescription: "",
    groomDescription: "",
    eventDetails: {
      mainCeremony: {
        title: "",
        timeStart: { hours: "", minutes: "" },
        timeEnd: { hours: "", minutes: "" },
        date: "",
        description: "",
      },
      weddingParty: {
        title: "",
        timeStart: { hours: "", minutes: "" },
        timeEnd: { hours: "", minutes: "" },
        date: "",
        description: "",
      },
    },
    storyDetails: [{ title: "", date: "", description: "", image: "" }],
    galleryData: [{ image: "", photosCount: "", title: "" }],
  });

  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNestedInputChange = (e, section, subsection) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedEventDetails = { ...prevState[section] };
      updatedEventDetails[subsection] = {
        ...updatedEventDetails[subsection],
        [name]: value,
      };
      return {
        ...prevState,
        [section]: updatedEventDetails,
      };
    });
  };

  const handleAddStory = () => {
    setFormData((prevState) => ({
      ...prevState,
      storyDetails: [
        ...prevState.storyDetails,
        { title: "", date: "", description: "", image: "" },
      ],
    }));
  };

  const handleAddGallery = () => {
    setFormData((prevState) => ({
      ...prevState,
      galleryData: [
        ...prevState.galleryData,
        { image: "", photosCount: "", title: "" },
      ],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/wedding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData);
        alert(
          "There was an error submitting the form. Please check the server logs for details."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting the form. Please check the server logs for details."
      );
    }
  };

  return (
    <div className="Wedding_Form_Sec">
      <div className="WeddingFormMid mx-auto  rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl mb-2 text-center">Wedding Template Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Basic Info Fields */}
          {step === 1 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="brideName"
                  className="block text-lg font-semibold"
                >
                  Bride Name
                </label>
                <input
                  type="text"
                  id="brideName"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleInputChange}
                  className="w-full p-3  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 inputForm"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="groomName"
                  className="block text-lg font-semibold"
                >
                  Groom Name
                </label>
                <input
                  type="text"
                  id="groomName"
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="brideImageUrl"
                  className="block text-lg font-semibold"
                >
                  Bride Image URL
                </label>
                <input
                  type="text"
                  id="brideImageUrl"
                  name="brideImageUrl"
                  value={formData.brideImageUrl}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="groomImageUrl"
                  className="block text-lg font-semibold"
                >
                  Groom Image URL
                </label>
                <input
                  type="text"
                  id="groomImageUrl"
                  name="groomImageUrl"
                  value={formData.groomImageUrl}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm "
                  required
                />
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="weddingDate"
                  className="block text-lg font-semibold"
                >
                  Wedding Date
                </label>
                <input
                  type="date"
                  id="weddingDate"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm "
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="weddingLocation"
                  className="block text-lg font-semibold"
                >
                  Wedding Location
                </label>
                <input
                  type="text"
                  id="weddingLocation"
                  name="weddingLocation"
                  value={formData.weddingLocation}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm "
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="brideDescription"
                  className="block text-lg font-semibold"
                >
                  Bride Description
                </label>
                <textarea
                  id="brideDescription"
                  name="brideDescription"
                  value={formData.brideDescription}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm "
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="groomDescription"
                  className="block text-lg font-semibold"
                >
                  Groom Description
                </label>
                <textarea
                  id="groomDescription"
                  name="groomDescription"
                  value={formData.groomDescription}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm "
                  required
                />
                <button
                  type="button"
                  onClick={handleBack}
                  className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24 mr-6"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Main Ceremony Section */}
          {step === 3 && (
            <>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Main Ceremony</h3>
                <label
                  htmlFor="mainCeremonyTitle"
                  className="block text-lg font-semibold"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="mainCeremonyTitle"
                  name="title"
                  value={formData.eventDetails.mainCeremony.title}
                  onChange={(e) =>
                    handleNestedInputChange(e, "eventDetails", "mainCeremony")
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm "
                  required
                />
                <label
                  htmlFor="mainCeremonyDate"
                  className="block text-lg font-semibold"
                >
                  Date:
                </label>
                <input
                  type="date"
                  id="mainCeremonyDate"
                  name="date"
                  value={formData.eventDetails.mainCeremony.date}
                  onChange={(e) =>
                    handleNestedInputChange(e, "eventDetails", "mainCeremony")
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm "
                  required
                />
                {/* Time Start and End */}
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col w-1/2">
                    <label
                      htmlFor="mainCeremonyStartTime"
                      className="block text-lg font-semibold"
                    >
                      Start Time:
                    </label>
                    <input
                      type="time"
                      id="mainCeremonyStartTime"
                      name="timeStart"
                      value={formData.eventDetails.mainCeremony.timeStart}
                      onChange={(e) =>
                        handleNestedInputChange(
                          e,
                          "eventDetails",
                          "mainCeremony"
                        )
                      }
                      className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label
                      htmlFor="mainCeremonyEndTime"
                      className="block text-lg font-semibold"
                    >
                      End Time:
                    </label>
                    <input
                      type="time"
                      id="mainCeremonyEndTime"
                      name="timeEnd"
                      value={formData.eventDetails.mainCeremony.timeEnd}
                      onChange={(e) =>
                        handleNestedInputChange(
                          e,
                          "eventDetails",
                          "mainCeremony"
                        )
                      }
                      className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <label
                  htmlFor="mainCeremonyDescription"
                  className="block text-lg font-semibold"
                >
                  Description:
                </label>
                <textarea
                  id="mainCeremonyDescription"
                  name="description"
                  value={formData.eventDetails.mainCeremony.description}
                  onChange={(e) =>
                    handleNestedInputChange(e, "eventDetails", "mainCeremony")
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm  inputForm "
                  required
                />
                <button
                  type="button"
                  onClick={handleBack}
                  className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {/* Wedding Party Section */}
          {step === 4 && (
            <>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Wedding Party</h3>
                <label
                  htmlFor="weddingPartyTitle"
                  className="block text-lg font-semibold"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="weddingPartyTitle"
                  name="title"
                  value={formData.eventDetails.weddingParty.title}
                  onChange={(e) =>
                    handleNestedInputChange(e, "eventDetails", "weddingParty")
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                  required
                />
                <label
                  htmlFor="weddingPartyDate"
                  className="block text-lg font-semibold"
                >
                  Date:
                </label>
                <input
                  type="date"
                  id="weddingPartyDate"
                  name="date"
                  value={formData.eventDetails.weddingParty.date}
                  onChange={(e) =>
                    handleNestedInputChange(e, "eventDetails", "weddingParty")
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                  required
                />
                {/* Time Start and End */}
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col w-1/2">
                    <label
                      htmlFor="weddingPartyStartTime"
                      className="block text-lg font-semibold"
                    >
                      Start Time:
                    </label>
                    <input
                      type="time"
                      id="weddingPartyStartTime"
                      name="timeStart"
                      value={formData.eventDetails.weddingParty.timeStart}
                      onChange={(e) =>
                        handleNestedInputChange(
                          e,
                          "eventDetails",
                          "weddingParty"
                        )
                      }
                      className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label
                      htmlFor="weddingPartyEndTime"
                      className="block text-lg font-semibold"
                    >
                      End Time:
                    </label>
                    <input
                      type="time"
                      id="weddingPartyEndTime"
                      name="timeEnd"
                      value={formData.eventDetails.weddingParty.timeEnd}
                      onChange={(e) =>
                        handleNestedInputChange(
                          e,
                          "eventDetails",
                          "weddingParty"
                        )
                      }
                      className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <label
                  htmlFor="weddingPartyDescription"
                  className="block text-lg font-semibold"
                >
                  Description:
                </label>
                <textarea
                  id="weddingPartyDescription"
                  name="description"
                  value={formData.eventDetails.weddingParty.description}
                  onChange={(e) =>
                    handleNestedInputChange(e, "eventDetails", "weddingParty")
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                  required
                />
                <button
                  type="button"
                  onClick={handleBack}
                  className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24 mr-6"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24 "
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Story Section */}

          {step === 5 && (
            <>
              {formData.storyDetails.map((story, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-2xl font-semibold">Story {index + 1}</h3>
                  <label
                    htmlFor={`storyTitle${index}`}
                    className="block text-lg font-semibold"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id={`storyTitle${index}`}
                    name="title"
                    value={story.title}
                    onChange={(e) =>
                      setFormData((prevState) => {
                        const updatedStories = [...prevState.storyDetails];
                        updatedStories[index].title = e.target.value;
                        return { ...prevState, storyDetails: updatedStories };
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                    required
                  />
                  <label
                    htmlFor={`storyDate${index}`}
                    className="block text-lg font-semibold"
                  >
                    Date:
                  </label>
                  <input
                    type="date"
                    id={`storyDate${index}`}
                    name="date"
                    value={story.date}
                    onChange={(e) =>
                      setFormData((prevState) => {
                        const updatedStories = [...prevState.storyDetails];
                        updatedStories[index].date = e.target.value;
                        return { ...prevState, storyDetails: updatedStories };
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm "
                    required
                  />
                  <label
                    htmlFor={`storyDescription${index}`}
                    className="block text-lg font-semibold"
                  >
                    Description:
                  </label>
                  <textarea
                    id={`storyDescription${index}`}
                    name="description"
                    value={story.description}
                    onChange={(e) =>
                      setFormData((prevState) => {
                        const updatedStories = [...prevState.storyDetails];
                        updatedStories[index].description = e.target.value;
                        return { ...prevState, storyDetails: updatedStories };
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                    required
                  />
                  <label
                    htmlFor={`storyImage${index}`}
                    className="block text-lg font-semibold"
                  >
                    Image URL:
                  </label>
                  <input
                    type="text"
                    id={`storyImage${index}`}
                    name="image"
                    value={story.image}
                    onChange={(e) =>
                      setFormData((prevState) => {
                        const updatedStories = [...prevState.storyDetails];
                        updatedStories[index].image = e.target.value;
                        return { ...prevState, storyDetails: updatedStories };
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                    required
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddStory}
                className=" py-3 bg-green-500 p-2 rounded hover:bg-red-500 transition duration-300 mt-6 w-24 mr-6"
              >
                Add Story
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24 mr-6"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 bg-gray-500 rounded hover:bg-red-500 transition duration-300 mt-6 w-24 "
              >
                Next
              </button>
            </>
          )}
          {/* Gallery Section */}

          {step === 6 && (
            <>
              {formData.galleryData.map((gallery, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-2xl font-semibold">
                    Gallery {index + 1}
                  </h3>
                  <label
                    htmlFor={`galleryTitle${index}`}
                    className="block text-lg font-semibold"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id={`galleryTitle${index}`}
                    name="title"
                    value={gallery.title}
                    onChange={(e) =>
                      setFormData((prevState) => {
                        const updatedGallery = [...prevState.galleryData];
                        updatedGallery[index].title = e.target.value;
                        return { ...prevState, galleryData: updatedGallery };
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                    required
                  />
                  <label
                    htmlFor={`galleryPhotosCount${index}`}
                    className="block text-lg font-semibold"
                  >
                    Number of Photos:
                  </label>
                  <input
                    type="number"
                    id={`galleryPhotosCount${index}`}
                    name="photosCount"
                    value={gallery.photosCount}
                    onChange={(e) =>
                      setFormData((prevState) => {
                        const updatedGallery = [...prevState.galleryData];
                        updatedGallery[index].photosCount = e.target.value;
                        return { ...prevState, galleryData: updatedGallery };
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                    required
                  />
                  <label
                    htmlFor={`galleryImage${index}`}
                    className="block text-lg font-semibold"
                  >
                    Image URL:
                  </label>
                  <input
                    type="text"
                    id={`galleryImage${index}`}
                    name="image"
                    value={gallery.image}
                    onChange={(e) =>
                      setFormData((prevState) => {
                        const updatedGallery = [...prevState.galleryData];
                        updatedGallery[index].image = e.target.value;
                        return { ...prevState, galleryData: updatedGallery };
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 inputForm  inputForm "
                    required
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddGallery}
                className=" py-3 w-28 bg-green-500 mr-8 text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Gallery
              </button>

              <button
                type="submit"
                className=" py-3 w-24 bg-blue-500 text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => {
    // Submit the form (if it's inside a form element, otherwise trigger form submission manually)
    window.location.href = 'https://invitation-card-weddingpage.vercel.app/';
  }}
              >
                Submit
              </button>
            </>
          )}
        </form>
      </div>
      <div className="ImageSecFormWedding">
        <img src={weddingimgform} alt="" />
      </div>
    </div>
  );
};

export default WeddingForm;

