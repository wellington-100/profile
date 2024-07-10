

const List = ({ skills }) => {
    const renderSkills = () => {
        const items = []
        for (let i = 0; i < skills.length; i++) {
            items.push(<li key={i}>{skills[i]}</li>)
        }
        return items
    }

    return (
        <ul>
            <p>Skills:</p>
            {renderSkills()}
        </ul>
    )
}

export default List;
