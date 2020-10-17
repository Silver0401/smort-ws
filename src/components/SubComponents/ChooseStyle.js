import React, { useState } from "react";

const ChooseStyle = () => {

  const [PageNumbertoDisplay, setPageNumberToDisplay] = useState(0)
  let PagesList = []

  const ChangePageTo = (direction) => {

    if (direction === "Right" && PageNumbertoDisplay === PagesList.length - 1) setPageNumberToDisplay(0)
    else if (direction === "Right") setPageNumberToDisplay(PageNumbertoDisplay + 1)
    if (direction === "Left" && PageNumbertoDisplay === 0) setPageNumberToDisplay(PagesList.length - 1)
    else if (direction === "Left") setPageNumberToDisplay(PageNumbertoDisplay - 1)
    
  }

  const DisplayPageNumber = (PageNumber) => {

    return(PagesList[PageNumber])
  }

  const CreatePageStyle = (StyleName) => {
    let Page = (
      <div className="Page">
        <span className="StyleName">{StyleName}</span>
        <span className="PageStyle">
          {StyleName}
        </span>
      </div>
    )

    PagesList.push(Page)
  }

  CreatePageStyle("Neuromorphic")
  CreatePageStyle("Animated")
  CreatePageStyle("Parallax")
  CreatePageStyle("Technological")
  CreatePageStyle("Minimalist")
  CreatePageStyle("Minimalist")

  return (
    <div className="PageStylesSection">
      <span className="LeftSection">
        <div onClick={() => ChangePageTo("Left")} className="ArrowBox">
          <div className="Arrow"></div>
        </div>
      </span>

      <div className="MainSection">
        {DisplayPageNumber(PageNumbertoDisplay)}
      </div>

      <span className="RightSection">
        <div onClick={() => ChangePageTo("Right")} className="ArrowBox">
          <div className="Arrow"></div>
        </div>
      </span>
    </div>
  )
};

export default ChooseStyle;
