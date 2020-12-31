import React, { useState, createContext } from "react";

interface Data {
    Name: string,
    Email: string,
    Phone: number,

    SiteType: string,
    PageStyle: string,
    ButtonStyle: string,
    NavBarStyle: string,
    LoaderStyle: string,
    Color1: string,
    Color2: string,

    MainTheme: string,
    Details: string,
    DomainOptions: string[],
    DomainExtension: string,

    SiteChosenPrice: number
    PaymentMethod: string,
    TransactionId: number
}


export const ChosenDataContext = createContext <any>(null);


export const ChosenDataProvider: React.FC = (props) => {
    const [Data, setData] = useState<Data>({
      Name: "awaiting...",
      Email: "awaiting...",
      Phone: 0,

      SiteType: "awaiting...",
      PageStyle: "awaiting...",
      ButtonStyle: "awaiting...",
      NavBarStyle: "awaiting...",
      LoaderStyle: "awaiting...",
      Color1: "awaiting...",
      Color2: "awaiting...",

      MainTheme: "awaiting...",
      Details: "awaiting...",
      DomainOptions: ["awaiting...", "awaiting...","awaiting..."],
      DomainExtension: "awaiting...",

      SiteChosenPrice: 0,
      PaymentMethod: "awaiting...",
      TransactionId: 0,
    });

    return(
        <div> 
            <ChosenDataContext.Provider value={[Data, setData]}>
                {props.children}
            </ChosenDataContext.Provider>
        </div>
    )
}

