import classNames from 'classnames'
import Flags from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next'

export function TranslateModal({closeModal, setMenuIsOpen}) {
    const { t, i18n } = useTranslation('components/translateModal')

    const handleChangeLanguage = (lenguage) => { // es or en
        //localStorage.setItem('lenguaje', lenguage)

        //cambiar el esquema del refresh
        //window.location.reload()
        i18n.changeLanguage(lenguage)
        closeModal()
        setMenuIsOpen(menu => menu && false )
    }

    const btnClass = (lenguage) => classNames('btn', 'btn-lenguage', 'text-font-abel', 'btn-font-size-24', {
        'btn-lenguage-active': i18n.language === lenguage
    })

    return (
        <div className="flex gap-40 my-3 justify-content-center">

            <div className="flex flex-column gap-40 align-items-center container__flag__es">
                <div className="container__flag">
                    <Flags.ES style={{ height: '100%' }} title="Spain" />
                </div>

                <button 
                    className={btnClass('es')}
                    onClick={() => handleChangeLanguage('es')}
                >{ t('es') }</button>
            </div>

            <div className="flex flex-column gap-40 align-items-center container__flag_au">
                <div className="container__flag">
                    <Flags.AU style={{ height: '100%' }} title="Australia" />
                </div>

                <button 
                    className={btnClass('en')}
                    onClick={() => handleChangeLanguage('en')}
                >{ t('en') }</button>
            </div>

        </div>
    )
}
