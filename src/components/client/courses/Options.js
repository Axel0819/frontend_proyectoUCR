import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { OptionsFilter } from "./OptionsFilter";
import { OptionsSearch } from "./OptionsSearch";

export function Options({ openFilter, setOpenFilter }) {
    const { dispatch } = useContext(SearchContext)

    return (
        <div className="my-4 grid grid-nogutter container__options__courses">

            <div className="col-fixed flex justify-content-around options__filter p-2">
                <OptionsFilter openFilter={openFilter} setOpenFilter={setOpenFilter} dispatch={dispatch} />
            </div>

            <div className="col">
                <OptionsSearch dispatch={dispatch}/>
            </div>

        </div>
    )
}
