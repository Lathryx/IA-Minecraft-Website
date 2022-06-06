import { Container } from "react-bootstrap"; 

export default function Rules() {
    return (
        <Container className="d-flex w-100 h-100 p-3 mx-auto flex-column justigfy-content-center align-igtems-center position-relative">
            <h1>Rules</h1>
            <p className="text-muted pb-3">These are guidelines by which each player on the InnovationMC server should behave in accordance with. <br />By joining the InnovationMC server, you agree to these rules. </p>
            <main className="overflow-auto">
                <ol className="fs-3">
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