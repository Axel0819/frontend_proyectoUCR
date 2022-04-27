import { useContext } from "react";
import { useSEO } from "../../../hooks/useSEO";
import { SearchContext } from "../../../context/SearchContext";
import { OptionsFilter } from "./OptionsFilter";
import { OptionsSearch } from "./OptionsSearch";

export function Options({ openFilter, setOpenFilter }) {
    const { searchState, dispatch } = useContext(SearchContext)
    const [ query ] = searchState.q

    // el 12 se refiere a la cantidad de resultados encontrados
    const title = !query ? 'Courses' : `${12} resultados de ${query}`

    useSEO({ title })

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
