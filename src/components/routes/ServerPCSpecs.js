import { Container, ListGroup } from "react-bootstrap"; 

export default function ServerPCSpecs() {
    return (
        <Container className="d-flex w-100 p-3 mx-auto flex-column justify-content-center position-relative">
            <h1>Info</h1>
            <p className="text-muted pb-3">Information regarding the PC hosting the IA Minecraft server, plugins & datapacks for the <br />server, and other things related to the IA Minecraft server will be found below. </p>
            <main className="overflow-auto">
                <h3>Server PC Specs</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light"><b>CPU:</b> 2x AMD Opteron 6220 8-Core</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light"><b>GPU:</b> Integrated Graphics</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light"><b>RAM:</b> 32GB <i>(server memory)</i></ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light"><b>PSU:</b> Dual 770W <i>(redundant)</i></ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">
                        <dl>
                            <dt>Storage: </dt>
                            <dd>128GB SATA SSD</dd>
                            <dd>4x 500GB 7200RPM HDD</dd>
                        </dl>
                    </ListGroup.Item>
                </ListGroup>
                <h3>Add-ons</h3>
                <h5>Plugins</h5>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Floodgate</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Geyser</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">SinglePlayerSleep</ListGroup.Item>
                </ListGroup>
                <h5>Datapacks</h5>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Anti-Enderman Grief v1.1.0</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Armor Statues v2.1.8</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Cheap Bundles v1.0.0</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Custom Nether Portals v2.3.2</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Double Shulker Shells v1.3.0</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Fast Leaf Decay v2.0.3</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">More Mob Heads v2.9.2</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Player Head Drops v1.1.0</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Silence Mobs v1.1.0</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Thunder Shrine v1.1.0</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Unlock All Recipes v2.0.1</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Villager Death Messages v1.2.1</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#212529", borderColor: "white" }} className="text-light">Wandering Trades v1.5.0</ListGroup.Item>
                </ListGroup>
            </main>
        </Container>
    ); 
}