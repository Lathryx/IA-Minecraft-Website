import { Container } from "react-bootstrap"; 

export default function Info() {
    return (
        <Container className="text-center d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center align-items-center position-relative">
            <main className="text-center px-3 overflow-auto">
                <div>
                    <p className="lead text-muted">Announcements about the InnovationMC server will feed here from Discord... </p> 
                </div>
            </main>
        </Container>
    ); 
}
// <br />Or, announcements will be made here and then streamed to Discord via a webhook. 