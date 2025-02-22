import React from 'react';
import CEO from "../assets/CEO.png";
import CTO from "../assets/CTO.png";
import designer from "../assets/designer.png";
import developer from "../assets/developer.png";
import { useState } from 'react';
import TeamList from './Teamchild';

const Team = () => {
    const [teams, setTeams] = useState([
        { image: CEO, names: 'Peg Legge', title: 'CEO', id: 1 },
        { image: CTO, names: 'Richard Guerra', title: 'CTO', id: 2 },
        { image: designer, names: 'Alexandra Stolz', title: 'DESIGNER', id: 3 },
        { image: developer, names: 'Janet Bray', title: 'DEVELOPER', id: 4 }
    ]);
    return (
        <section>
            <TeamList teams={teams}/>
        </section>
    );
}

export default Team;