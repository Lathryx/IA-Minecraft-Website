import { useState } from 'react'; 
import { Container } from "react-bootstrap"; 

export default function HowToJoin() {
    const [copy, setCopy] = useState(false); 

    const handleCopy = () => {
        navigator.clipboard.writeText("76.213.140.100:28899"); 
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 2000); 
    }; 

    return (
        <Container className="d-flex w-100 h-100 p-3 mx-auto flex-column position-relative">
            <h1>How to Join</h1>
            <p className="text-muted pb-3">In order to join the InnovationMC server, please use the following steps! </p>
            <main className="overflow-auto"> 
            {/* px-3 */}
                <div>
                    <ol className="fs-3">
                        <li>Select Mutliplayer</li>
                        <li>Click "Add Server"</li>
                        <li>Copy this IP and port: <span className="fw-bold text-warning" role="button" onClick={handleCopy}>{copy ? "Copied!" : "76.213.140.100:28899"}</span></li>
                    </ol>
                    {/* <h1><b>IP:</b> 76.213.140.100</h1>
                    <h1><b>Port:</b> 28899</h1>
                    <br /><br />  */}
                    {/* <p className="fst-italic">In order to join, you must agree to the following form: </p>
                    <iframe width="640px" height= "480px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__T54nCZURDE5UlNNWTdQWVpVMTA4M0dNMTlPTDMwSS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: "none", maxWidth:"100%", maxHeight:"100vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen></iframe> */}
                </div>
            </main>
        </Container>
    ); 
}