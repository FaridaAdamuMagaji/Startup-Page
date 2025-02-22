import { motion } from "framer-motion";

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
                        <motion.div
                            className="team p-4 bg-white rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div className="designer" whileHover={{ scale: 1.1 }}>
                                <img
                                    className="designer rounded-full w-24 h-24 object-cover"
                                    src={team.image}
                                    alt={team.title}
                            />
                            </motion.div>
                            <p className="names text-lg font-semibold mt-2">{team.names}</p>
                            <p className="titles text-gray-500">{team.title}</p>
                        </motion.div>
                    </div>
                
                ))}
            </div>
            <div className="last">
            <motion.button
                        className="more px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
                        whileHover={{ scale: 1.1, backgroundColor: "#74C69D" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#" className="mores">Learn More</a>
                        <a href="#" className="view">Learn More</a>
                    </motion.button>
                
            </div>
        </div>

    );
}

export default TeamList;