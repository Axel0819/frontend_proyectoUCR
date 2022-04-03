import { Link } from 'react-router-dom'
import { appImages } from '../../../helpers/appImages'

export function LogoCecamm() {
    return (
        <div className="navbar__logo">
            <Link to="/">
                <img width="100%" src={appImages('./logo.png')} alt="Logo CECAMM" />
            </Link>
        </div>
    )
}
