

const sendMessage = () => {
    let msg = prompt("Enter message: ")
}

const MessageButton = () => {
    return (
        <button onClick={sendMessage}>Contact me</button>
    )
}

export { MessageButton }