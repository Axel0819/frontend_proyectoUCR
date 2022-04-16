import { Container } from "../layouts/Container";

export function Divider() {
    return (
        <div className="divider load-hidden">
            
            <Container>
                <div className="flex justify-content-center divider px-3">
                    <hr />
                </div>
            </Container>
        
        </div>
    )
}
