export const filterData = (data, searchText, searchFields) => {
    if (!searchText) {
      return data;
    }
  
    return data.filter((item) =>
      searchFields.some((field) =>
        item[field].toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  export const convertDate =(str)=> {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
   
    // return [date.getFullYear(), mnth, day].join("-");
    return [day, mnth, date.getFullYear() ].join("/");
  }
  export const convertDate2 =(str)=> {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
   
    // return [date.getFullYear(), mnth, day].join("-");
    return [mnth,day, date.getFullYear() ].join("/");
  }

// import { useState } from 'react';

// const useSearchFilter = (data, searchFields) => {
//   const [searchText, setSearchText] = useState('');

//   const handleSearch = (value) => {
//     setSearchText(value);
//   };

//   const filteredData = searchText
//     ? data.filter((item) =>
//         searchFields.some(
//           (field) =>
//             item[field].toLowerCase().includes(searchText.toLowerCase())
//         )
//       )
//     : data;

//   return { searchText, handleSearch, filteredData };
// };

// export default useSearchFilter;
