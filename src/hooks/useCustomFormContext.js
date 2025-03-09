
import {useContext} from "react";
import {CustomFormContext} from "../components/CustomFormContext";

export function useCustomFormContext() {
    const context = useContext(CustomFormContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContext provider");
    }

    return context;
}
