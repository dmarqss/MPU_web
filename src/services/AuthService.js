import api from './Axios.js'

export default {
    async postLogin(data){
        const response = await api.post('login', data)

        const token = response.data.token

        localStorage.setItem('token', token)

        return response.data
    },


    logout(){
        localStorage.removeItem('token')
    },

    getToken(){
        return localStorage.getItem('token')
    },

    isAuthenticated(){
        return !!localStorage.getItem('token')
    }
}