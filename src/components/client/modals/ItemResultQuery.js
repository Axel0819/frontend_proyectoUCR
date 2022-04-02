import { useNavigate } from "react-router-dom"

export function ItemResultQuery({ id = 1234, closeModal }) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`course/${id}`)
        closeModal()
    }

    return (
        // <Link to={`course/${id}`} >
            <div className="item__query" onClick={handleNavigate}>
                <h3 className="py-3 px-2">Primeros auxilios</h3>
            </div>
        // </Link>
    )
}
