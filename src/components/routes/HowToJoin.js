import { Container } from "react-bootstrap"; 

export default function HowToJoin() {
    return (
        <Container className="d-flex w-100 h-100 p-3 mx-auto flex-column position-relative">
            <main className="px-3 overflow-auto">
                <h1>How to Join</h1>
                <div className="text-center">
                    <h4><b>IP:</b> 76.213.140.100</h4>
                    <h4><b>Port:</b> 28899</h4>
                    <br /><br /> 
                    <p className="fst-italic">In order to join, you must agree to the following form: </p>
                    <iframe width="640px" height= "480px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__T54nCZURDE5UlNNWTdQWVpVMTA4M0dNMTlPTDMwSS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: "none", maxWidth:"100%", maxHeight:"100vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen></iframe>
                </div>
            </main>
        </Container>
    ); 
}