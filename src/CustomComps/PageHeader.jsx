/* eslint-disable react/prop-types */
import React from 'react'

const PageHeader = (props) => {
  return (
    <div className="page-header">
    <div className="page-title">
        <h4>{props.header}</h4>
        <h6>{props.subHeader}</h6>
    </div>
</div>
  )
}

export default PageHeader