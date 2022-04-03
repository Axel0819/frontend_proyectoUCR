import { useState } from 'react';
import { SearchBarDebounce } from '../ui/SearchBarDebounce';
import { ItemResultQuery } from './ItemResultQuery';

export function SearchModal({ closeModal }) {
    const [resultCourses, setResultCourses] = useState([])

    const handleSearch = (value) => {
        console.log('se procede a buscar los corsos con sus precios: ', value);
    }

    return (
        <div className="my-4">
            <SearchBarDebounce handleSearch={handleSearch} />

            {/* <div className="mt-3">
                <div className="flex flex-column gap-20">
                    {
                        [1, 2, 3, 4].map(item => (
                            <ItemResultQuery closeModal={closeModal} key={item} />
                        ))
                    }
                </div>
            </div> */}

        </div>
    )
}
