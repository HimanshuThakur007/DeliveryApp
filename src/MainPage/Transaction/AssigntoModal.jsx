// /* eslint-disable react/prop-types */
// import React from 'react';
// import InputSelect from '../../CustomComps/InputSelect';

// const AssigntoModal = ({handleSelectChange,data}) => {
//   return (
//     <>
//     <div
//           className="modal fade"
//           id="assignto"
//           tabIndex={-1}
//           aria-labelledby="assignto"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Assign</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">×</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//            {/* Inside the component where handleSelectChange is called */}
// {data.map((item, rowIndex) => (

//   <InputSelect
//     // onChange={onChange}
//     onChange={(selectedOption) => handleSelectChange(selectedOption, selectName, setSelectedValues, rowIndex)}
//   />
// ))}

//               {/* <InputSelect
//                   label="Transport"
//                   options={options}
//                   value={value}
//                   onChange={onChange}
//                   // options={props.transportList}
//                   // value={props.selectedValues.transport}
//                   // onChange={(selectedOption) =>
//                   //   props.handleSelectChange(
//                   //     selectedOption,
//                   //     "transport",
//                   //     props.setSelectedValues
//                   //   )
//                   // }
//                 /> */}
//               </div>
//               <div className="modal-footer">
//                 {/* <button type="button" className="btn btn-submit">
//                   Submit
//                 </button> */}
//                 <button
//                   type="button"
//                   className="btn btn-cancel"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//     </>
//   )
// }

// export default AssigntoModal