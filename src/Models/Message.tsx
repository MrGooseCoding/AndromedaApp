import AccountType from "./Account"

type MessageType = {
    id: number
    author: AccountType,
    content: string,
    time: string
}

export default MessageType