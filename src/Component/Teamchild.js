const TeamList = (props) => {
    const teams = props.teams;

    console.log(props, teams);
    return (
        <div>
            <div className="talents">
                <p className="part">TEAMS</p>
                <p className="our">Our Talents</p>
                <p className="dolor">Lorem ipsum, dolor sit amet consectetur<span className="elicit">adipisicing elit.</span><span className="nemo">Suscipit nemo hic quos, ab,</span></p>
            </div>
            <div className="developer">
                {teams.map((team) => (
                    <div key={team.id}>
                        <div className="team">
                            <div className="designer">
                                <img className="designer" src={team.image} alt={team.title}></img>
                            </div>
                            <p className="names">{team.names}</p>
                            <p className="titles">{team.title}</p>
                        </div>
                    </div>
                
                ))}
            </div>
            
            <div className="last">
                <button className="learns">
                    <a className="mores" href="learn more">Learn More</a>
                    <a className="view" href="View More">View Team</a>
                </button>
            </div>
        </div>

    );
}

export default TeamList;