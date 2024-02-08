// import React from "react";
// import { Route, withRouter } from "react-router-dom";

// import routerService from "../../Router";
// import UserHeader from "./UserHeader";
// import Footer from "../../EntryFile/Footer";
// import '../css/layout.css'



// const UserLayout =(props)=> {
//   const { match } = props;
   
//     return (
//       <>
//         <div className="main-wrapper " style={{height:'100vh', overflow:'y-scroll'}}>
//          <div className="user-header overflow-hidden">
//          <UserHeader />
//          </div>
//           <div className="content-box mb-5" >
//             {routerService &&
//               routerService.map((route, key) => 
//               {
                  
//                   return ( <Route
//                     key={key}
//                     path={`${match.url}/${route.path}`}
//                     component={route.component}
//                   />)
//                 }
               
//               )}
             
//           </div>
          
      

//           <div className="user-footer">
//             <Footer />
//           </div>
//         </div>
//         <div className="sidebar-overlay"></div>
//       </>
//     );
// }


// export default withRouter(UserLayout);


// // import React from "react";
// // import { Route, withRouter } from "react-router-dom";

// // import routerService from "../../Router";
// // import UserHeader from "./UserHeader";
// // import Footer from "../../EntryFile/Footer";
// // import '../css/layout.css'



// // const UserLayout =(props)=> {
// //     const { match } = props;
   
// //     return (
// //       <>
// //         <div className="main-wrapper " style={{height:'100vh', overflow:'y-scroll'}}>
// //          <div className="user-header overflow-hidden">
// //          <UserHeader />
// //          </div>
// //           <div className="content-box mb-5" >
// //             {routerService &&
// //               routerService.map((route, key) => 
// //               {
                  
// //                   return ( <Route
// //                     key={key}
// //                     path={`${match.url}/${route.path}`}
// //                     component={route.component}
// //                   />)
// //                 }
               
// //               )}
             
// //           </div>
          
// //           <div className="user-footer">
// //             <Footer />
// //           </div>
// //         </div>
// //         <div className="sidebar-overlay"></div>
// //       </>
// //     );
// // }

// // // export default withRouter(UserLayout);
// // export default withRouter(UserLayout);
