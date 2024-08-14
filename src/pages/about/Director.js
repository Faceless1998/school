import React from 'react'
import financeImage from './../../assets/file.png';
import "./Director.css"
export const Director = () => {
  return (
    
    <div className="finance-courses">
    <div className="image-container">
      <img src={financeImage} alt="Personal Finance" />
    </div>
    <div className="text-container">
      <h2>ა(ა)იპ ქ. ბათუმის წმინდა ანდრია პირველწოდებულის სახელობის გიმნაზია<br /></h2>
      <h1>დირექტორი</h1>
      <h1>დეკანოზი იაკობი (ბენიძე)</h1>
      <h1>+995-593-27-12-34</h1>
    </div>
  </div>

  )
}
