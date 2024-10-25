// import React, { useState } from "react";
// import "./App.css"; // CSS file with styles

// function App() {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <div className="App">
//       <div className="form">
//         <h1>Welcome to My App</h1>
//         <p>This is some content.</p>
//         <button onClick={togglePopup}>Show Popup</button>
//       </div>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Congratulations!</h2>
//             <p>You have won something!</p>
//             <button onClick={togglePopup}>Close Popup</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Navbar from './Pages/Navbar/Navbar'
import Hero from './Pages/Hero/Hero'
import DashboardMain from './Pages/Dashboard/DashboardMain/DashboardMain'
import YtSection from './Pages/YtSection/YtSection'
import SupplierFind from './Pages/FindYou/SupplierFind'
import BuyersPost from './Pages/BuyerPost/Buyers/Buyers'

function App() {
  const videoId = "i8tgRHXx4oQ";
  return (
    <div>
      {/* <Page></Page> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <DashboardMain></DashboardMain>
      <YtSection videoId={videoId}></YtSection>
      <SupplierFind></SupplierFind>
      <BuyersPost></BuyersPost>
    </div>
  )
}

export default App

