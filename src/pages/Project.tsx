import { useParams } from "react-router-dom";
import projects from "../projects.json"

const Project = () => {
    debugger;
    const { id } = useParams();
    const numericId = Number(id);

    const PROJECT = projects.find(p => p.id === numericId);

    return <div id="HomeBody">
        <h1 id="HomeHeader">{PROJECT?.name}</h1>
        <p id="HomeDesc">{PROJECT?.["description:"]}</p>
    </div>
}

export default Project;