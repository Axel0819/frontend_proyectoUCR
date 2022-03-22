import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

//geting numbers applieds on filter
export default function useGetNumbersFilters() {
    const { searchState } = useContext(SearchContext)

    const getNumberFilters = () => {
        let count = 0

        for (const key in searchState) {
            if (Object.hasOwnProperty.call(searchState, key)) {
                if (key !== 'q') {
                    count += searchState[key].length;
                }
            }
        }

        return count
    }

    return {
        filtersApplied: getNumberFilters(),
        isEmpty: getNumberFilters() === 0
    }
}
