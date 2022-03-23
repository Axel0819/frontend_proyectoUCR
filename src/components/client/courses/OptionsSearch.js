import classNames from 'classnames';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useActiveElement } from '../../../hooks/useActiveElement';
import { useForm } from '../../../hooks/useForm';
import { types } from '../../../types/types';

export function OptionsSearch({ dispatch }) {
    const navigate = useNavigate()
    const [values, handleInputChange] = useForm({
        search: ''
    })

    const { active, handleFocus, handleBlur } = useActiveElement()

    const classSearchContainer = classNames('flex', 'align-items-center', 'search__bar', 'text-font-abel', 'gap-20', 'flex-row-reverse', {
        'activeElement': active
    });

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // const input = e.target[0]
        if (!values.search) return

        // const value = input.value

        dispatch({
            type: types.searchSetQ,
            payload: [values.search]
        })
    }

    useEffect(() => {
        if (!values.search) {
            dispatch({
                type: types.searchSetQ,
                payload: []
            })
        }
    }, [navigate, values.search, dispatch])

    return (
        <div className={classSearchContainer}>
            <form id="form-search" onSubmit={handleOnSubmit}>
                <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    name="search"
                    value={values.search}
                    type="text"
                    placeholder="Buscar..."
                    autoComplete='off'
                />
            </form>
            <button type="submit" form="form-search" className="btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}
