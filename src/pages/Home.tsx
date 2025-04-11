import { Link } from "react-router-dom";
import projects from "../projects.json"

const Home = () => {
    const recommendedProjects = projects;

    return <div id="HomeBody">
        <h1 id="HomeHeader">My portfolio</h1>
        <p id="HomeDesc">This is my portfolio, I recommend you check out this projects out</p>
        {recommendedProjects.map(p => {
            return <Link to={"/project/" + p.id}>
                <h4>{p.name}</h4>
                <img src=""/>
            </Link>
        })}
    </div>
}

export default Home;