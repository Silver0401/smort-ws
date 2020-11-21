import React, { useState, createContext } from "react";


interface Data {
    SiteType: string,
    PageStyle: string,
    ButtonStyle: string,
    NavBarStyle: string,
    LoaderStyle: string,
}

export const ChosenDataContext = createContext <any>([]);


export const ChosenDataProvider: React.FC = (props) => {
    const [Data,setData] = useState <Data[]> ([{

        SiteType: "none",
        PageStyle: "none",
        ButtonStyle: "none",
        NavBarStyle: "none",
        LoaderStyle: "none",

    }])

    return(
        <div>
            <ChosenDataContext.Provider value={[Data, setData]}>
                {props.children}
            </ChosenDataContext.Provider>
        </div>
    )
}

