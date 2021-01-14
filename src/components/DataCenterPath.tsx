import React, { createContext, useState } from 'react'


export const DataCenterContext = createContext <any>(null)

export const DataCenterPathProvider = (props:any) => {

    const [chosenPath, setChosenPath] = useState <string>("awaiting...")

    return (
        <DataCenterContext.Provider value={[chosenPath, setChosenPath]}>
            {props.children}
        </DataCenterContext.Provider>
    )
}
