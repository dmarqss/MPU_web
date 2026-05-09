import api from './Axios.js'

export default{
    async register(data){
        const response = await api.post('user/register', data)
        return response.data
    },

    async forgotPassword(email){
        const response = await api.post('user/forgot-password', null, {
            params:{
                email: email
            }
        })
        return response.data
    },

    async resetPassword(token, newPassword){
        const response = await api.post('user/reset-password', null, {
            params: {
                token: token,
                newPassword: newPassword
            }
        })
        return response.data
    }



}