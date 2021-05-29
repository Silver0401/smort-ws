import React, { useContext, useEffect, useRef } from "react";
import { DataCenterContext } from "./../components/DataCenterPath"
import { motion } from "framer-motion";

// Pages

import About from "./../components/DataCenter/About";
import Support from "./../components/DataCenter/Support";
import SideBar from "./../components/DataCenter/SideBar";


const DataCenter = ()  => {

    const [chosenPath] = useContext(DataCenterContext)

    const DomainRef = useRef <HTMLUListElement>(null)
    const DatesAndPaymentsRef = useRef <HTMLUListElement>(null)
    const TermsAndConditionsRef = useRef <HTMLUListElement>(null)
    const ClientSupportRef = useRef <HTMLUListElement>(null)
    const StyleChangesRef = useRef <HTMLUListElement>(null)
    const SiteUpgradeRef = useRef <HTMLUListElement>(null)

    const AllRefs = {
        DomainRef: DomainRef,
        DatesAndPaymentsRef: DatesAndPaymentsRef,
        TermsAndConditionsRef: TermsAndConditionsRef,
        ClientSupportRef: ClientSupportRef,
        StyleChangesRef: StyleChangesRef,
        SiteUpgradeRef: SiteUpgradeRef,
    }

    useEffect(() => {

        let chosenVariable = DomainRef;

        switch(chosenPath){
            case "Domains":
                chosenVariable = DomainRef
                break
            case "Dates&Payments":
                chosenVariable = DatesAndPaymentsRef
                break
            case "Terms&Conditions":
                chosenVariable = TermsAndConditionsRef
                break
            case "ClientSupport":
                chosenVariable = ClientSupportRef
                break
            case "StyleChanges":
                chosenVariable = StyleChangesRef
                break
            case "SiteUpdates":
                chosenVariable = SiteUpgradeRef
                break
            default:
        }

        
        chosenVariable.current?.scrollIntoView({
            behavior: "auto",
            block: "nearest"
        })

    },[chosenPath])

    return (
      <motion.div
        className="DataCenterPage"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100vw" }}
      >

        <div className="DataContainer">
            <About Refs={AllRefs} />

            <Support Refs={AllRefs} />
        </div>


        <SideBar />
        
      </motion.div>
    );
}

export default DataCenter