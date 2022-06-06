import { Container } from "react-bootstrap"; 

export default function SeasonInfo() {
    return (
        <Container className="text-center d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center align-items-center position-relative">
            <main className="text-center px-3 overflow-auto">
                <div>
                    <p className="lead text-muted">Info about the current season can be found here in the future... </p> 
                </div>
            </main>
        </Container>
    ); 
}