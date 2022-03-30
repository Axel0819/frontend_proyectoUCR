import classNames from 'classnames'
import debounce from 'lodash.debounce'
import { useActiveElement } from '../../../hooks/useActiveElement';

export function SearchModal() {

    const { active, handleFocus, handleBlur } = useActiveElement()

    const classSearchContainer = classNames('flex', 'align-items-center', 'search__bar', 'text-font-abel', 'gap-20', 'flex-row-reverse', {
        'activeElement': active
    });

    const handleChange = (e) => {
        const value = e?.target?.value
        if(!value) return 
        console.log(value);

        // Aqui se realiza la busqueda
        // Se tren los cursos encontrados y se guardan en el state
        // Se crea un componente tipo targeta para mostrar
        // los resultados en un contenedor
    }

    const debounceOnChange = debounce(handleChange, 500)

    return (

        <div>

        <div style={{
            height: '45px'
        }}>
            <div className={classSearchContainer}>
                <div className="container__search">
                    <input
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={debounceOnChange}
                        type="text"
                        placeholder="Buscar..."
                        autoComplete="off"
                    />
                </div>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

        <div style={{width: '100%'}}>
            <ul>
                <li>Results</li>
                <li>Results</li>
                <li>Results</li>
                <li>Results</li>
                <li>Results</li>
            </ul>
        </div>
            
        </div>
    )
}
