import React, { useState, createContext } from "react";


interface Data {
    SiteType: string,
    PageStyle: string,
    ButtonStyle: string,
    NavBarStyle: string,
    LoaderStyle: string,
    Color1: string,
    Color2: string
}

export const ChosenDataContext = createContext <any>(null);


export const ChosenDataProvider: React.FC = (props) => {
    const [Data,setData] = useState ({

        SiteType: "none",
        PageStyle: "none",
        ButtonStyle: "none",
        NavBarStyle: "none",
        LoaderStyle: "none",
        Color1: "none",
        Color2: "none"

    })

    return(
        <div> 
            <ChosenDataContext.Provider value={[Data, setData]}>
                {props.children}
            </ChosenDataContext.Provider>
        </div>
    )
}

