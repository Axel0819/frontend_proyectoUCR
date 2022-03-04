import { Container } from "../layouts/Container";

export function Divider() {
    return (
        <Container>
            <div className="flex justify-content-center divider px-3">
                <hr />
            </div>
        </Container>
    )
}
