/* eslint-disable react/prop-types */
import React from 'react'
import TrackingPage from './TrackingPage'

const TrackingComp = () => {
  const data =  [
    {
    name:"Himanshu Thakur",
    time:"10:12:15 AM",
    status:"Assigned",
    sName: "Himanshu",
    address:"Noida",
    latitude:28.626630,
    longitude:77.365470
  },
    {
    name:"Vivek",
    time:"10:12:15 AM",
    status:"Delivered",
    sName: "Himanshu",
    address:"Noida",
    latitude:28.606960,
    longitude:77.368980
  },
    {
    name:"Shrey",
    time:"10:12:15 AM",
    status:"Pending",
    sName: "Himanshu",
    address:"Noida",
    latitude:28.589149,
    longitude:77.304688
  },
    {
    name:"Akhilesh",
    time:"10:12:15 AM",
    status:"Completed",
    sName: "Himanshu",
    address:"Noida",
    latitude:28.626630,
    longitude:77.365470
  },
]
  const [displayCardData,setDisplayCardData] = React.useState(data[0])

// React.useEffect(() => {
//   // Set default displayCardData to the first element of the data array
//   if (data.length > 0) {
//     setDisplayCardData(data[0]);
//   }
// }, [data]);

const showDataHandler=(item,index)=>{
  console.log('ind',item,index)
  setDisplayCardData(item)
}
  return (
    <React.Fragment>
        <TrackingPage data={data} showDataHandler={showDataHandler} displayCardData={displayCardData}/>
    </React.Fragment>
  )
}

export default TrackingComp