import classNames from 'classnames';
import useGetNumbersFilters from '../../../hooks/useGetNumbersFilters';
import { types } from '../../../types/types';

export function OptionsFilter({openFilter, setOpenFilter, dispatch}) {
    const { isEmpty, filtersApplied } = useGetNumbersFilters()

    const classFilterBtn = classNames('text-font-abel', 'btn', 'btn-filter', {
        'activeElement': openFilter
    })

    const classFilterBtnR = classNames('text-font-abel', 'btn', 'btn-filter', {
        'activeElement': !isEmpty
    })

    const handleRemove = () => {
        dispatch({
            type: types.searchRemoveFilters
        })
    }

    return (
        <>
            <button className={classFilterBtn} onClick={() => setOpenFilter(isOpen => !isOpen)}>
                <i className="fa-solid fa-filter mr-2"></i>
                Filtrar
            </button>
            <button className={classFilterBtnR} onClick={handleRemove} disabled={isEmpty}>
                ({filtersApplied}) Remover filtros
            </button>
        </>
    )
}
