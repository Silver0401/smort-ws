import React from "react";

// Pages

import About from "./../components/DataCenter/About";
import Support from "./../components/DataCenter/Support";
import SideBar from "./../components/DataCenter/SideBar";

const DataCenter = ()  => {
    return(
        <div className="DataCenterPage">

            <About/>

            <Support/>

            <SideBar/>

        </div>
    )
}

export default DataCenter