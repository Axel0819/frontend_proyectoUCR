
export function Options({setOpenFilter}) {
    return (
        <div className="my-4">
            <button onClick={() => setOpenFilter(s => !s)} className="btn btn-primary">Filtro</button>
        </div>
    )
}
