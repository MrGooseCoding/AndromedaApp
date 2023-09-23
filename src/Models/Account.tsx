type AccountType = {
    id: number
    user: {
        first_name: string,
        username: string
    },
    image: ImageBitmap 
    status: number
}

export default AccountType