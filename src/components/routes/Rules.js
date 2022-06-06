import { Container } from "react-bootstrap"; 

export default function Rules() {
    return (
        <Container className="d-flex w-100 h-100 p-3 mx-auto flex-column justify-content-center align-items-center position-relative">
            <main className="overflow-auto">
                <h1>Rules</h1>
                <ol style={{ fontSize: "larger" }}>
                    <li>No griefing. </li>
                    <li>No anarchy. </li>
                    <li>No harassment. </li>
                    <li>If what you're doing even <i>might</i> be questionable, <br />ask an admin before doing it. </li>
                    <li>Have fun! </li>
                </ol>
            </main>
        </Container>
    ); 
}