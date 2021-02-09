import axios from 'axios'

const url = "http://localhost:3000"
 
export async function createRequest({nome, email, senha}) {
    return await axios.post(`${url}/users`, {nome, email, senha})
}

export async function findAll() {
    return (await axios.get(`${url}/users/`)).data
}

export async function findById(id) {
    return (await axios.get(`${url}/users/${id}`)).data
}