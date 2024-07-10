import List from "./List"

const Person = ({name, job, avatar, skills}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{job}</h3>
            <img src={avatar} alt=""/>
            {skills && skills.length > 0 && (
                <>
                    <List skills={skills} />
                </>
            )}
        </div>
    )
}

export default Person