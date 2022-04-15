
export function CardCourse() {
  return (
    <div className="card__course pb-3">
        <div className="card__head mb-3">
            <div className="flex justify-content-end">
                <span className="text-font-abel state__course state__course__open">Abierto</span>
            </div>

            <div className="card__title flex flex-column">
                <h2 className="text-font-abel">Primeros Auxilios</h2>
                <small className="text-font-abel">Curso Modelo OMI 1.20</small>
            </div>
        </div>

        <div className="card__img mb-3">
            <img src="https://picsum.photos/425/200" alt="Imagen de prueba" />
        </div>

        <div className="card__body flex flex-column gap-40">
            <div className="card__body__description">
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, delectus obcaecati ullam ad excepturi dolor quod eaque assumenda accusantium, atque iure quasi aut blanditiis aliquid ea id repellat, adipisci quaerat! lore lore</p>
            </div>
            <div className="card__body__footer">
                <p className="mb-2">Fecha: Enero 2022</p>
                <div className="flex justify-content-between">
                    <p>Horas: 16</p>

                    <div className="flex align-items-center card_more">
                        <p>Ver más</p>
                        <i className="fa-solid fa-arrow-right mt-1"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
