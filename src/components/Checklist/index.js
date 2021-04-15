const Checklist = ({data}) => {
    return (
        <div>
            <ul>
                {data && data.map((item, i) => (
                    <li key={i}>{item.name}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Checklist;