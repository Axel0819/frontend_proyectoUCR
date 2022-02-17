import i18 from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

const userLang = navigator.language
const defaultLocale = userLang.substring(0, 2)

i18
.use(initReactI18next)
.use(Backend)
.init({
    lng: defaultLocale,
    fallbackLng: "es",

    interpolation: {
        escapeValue: false
    }
})