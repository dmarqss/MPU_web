<template>
  <NavComponent></NavComponent>
  <PrincipalCard>
    



  </PrincipalCard>

  <div>
    


  </div>



 
</template>

<script>

import AuthService from '@/services/AuthService';
import { useRouter } from 'vue-router'
import NavComponent from '@/components/NavComponent.vue';
import PrincipalCard from '@/components/PrincipalCard.vue';

export default {
  name: 'HomeView',

  components: {NavComponent, PrincipalCard},
  
 
 
  setup() {

    const router = useRouter()
  
    const verifyToken = () => {
      if(!AuthService.isAuthenticated()){
        router.push('/login')
      }
    }

    const logout = () => {
      AuthService.logout()
      router.push('/login')
    }


    verifyToken()

    return{logout}
  },

  
}
</script>


<style>



</style>
