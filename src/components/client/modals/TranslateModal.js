import Flags from 'country-flag-icons/react/3x2'

export function TranslateModal() {
    return (
        <div className="flex gap-40 my-3 justify-content-center">

            <div className="flex flex-column gap-40 align-items-center container__flag__es">
                <div className="container__flag">
                    <Flags.ES style={{ height: '100%' }} title="Spain" />
                </div>

                <button className="btn btn-lenguaje text-font-abel btn-font-size-24">Espanol</button>
            </div>

            <div className="flex flex-column gap-40 align-items-center container__flag_au">
                <div className="container__flag">
                    <Flags.AU style={{ height: '100%' }} title="Australia" />
                </div>

                <button className="btn btn-lenguaje text-font-abel btn-font-size-24">Ingles</button>
            </div>

        </div>
    )
}
