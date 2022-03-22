import classNames from 'classnames';
import React from 'react'
import { useActiveElement } from '../../../hooks/useActiveElement';
import { types } from '../../../types/types';

export function OptionsSearch({ dispatch }) {

    const { active, handleFocus, handleBlur } = useActiveElement()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const input = e.target[0]
        if(!input.value) return

        const value = input.value

        dispatch({
            type: types.searchSetQ,
            payload: [value]
        })
    }

    const classSearchContainer = classNames('flex', 'align-items-center', 'search__bar', 'text-font-abel', 'gap-20', 'flex-row-reverse', {
        'activeElement': active
    });

    return (
        <div className={classSearchContainer}>
            <form id="form-search" onSubmit={handleOnSubmit}>
                <input onFocus={handleFocus} onBlur={handleBlur} type="text" placeholder="Buscar..." />
            </form>
            <button type="submit" form="form-search" className="btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}
