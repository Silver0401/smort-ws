import React, {useState} from "react";

// Page Components
import BuilderStage1 from "../components/Builder/BuilderStage1"
import BuilderStage2 from "../components/Builder/BuilderStage2"

const BuilderInit = (props:any) => {

    const [SitePicked, getSite] = useState("none")
    props.Chosen(SitePicked);

    const thingy = (value:string) => {
        getSite(value)
    }

    return (
      <div className="BuilderPage">

        <BuilderStage1 chosenSite={(coso:string) => thingy(coso)}/>

        <BuilderStage2 chosenSite={SitePicked}/>

      </div>
    );
}

export default BuilderInit