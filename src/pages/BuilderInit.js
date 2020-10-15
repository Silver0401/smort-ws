import React, {useState} from "react";

// Page Components
import BuilderStage1 from "../components/Builder/BuilderStage1"
import BuilderStage2 from "../components/Builder/BuilderStage2"

const BuilderInit = (props) => {

    const [SitePicked, getSite] = useState("none")
    props.Chosen(SitePicked);

    const thingy = (value) => {
        getSite(value)
    }

    return (
      <div className="BuilderPage">

        <BuilderStage1 chosenSite={(coso) => thingy(coso)}/>

        <BuilderStage2 chosenSite={SitePicked}/>

      </div>
    );
}

export default BuilderInit