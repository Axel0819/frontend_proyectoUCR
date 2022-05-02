import { appImages } from "../../helpers/appImages"

export default function LoadApp() {

    return (
        <div className="load__app">
            <object style={{
                animationDelay: '.2s'
            }} data={ appImages('./logoVector.svg') } aria-label="Load image" />
        </div>
    )
}