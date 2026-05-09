<template>
 
  <div class="nav">
    <ul>
      <li @click="router.push('/home')">Comprar</li>
      <li @click="router.push('/vender')">Vender</li>
      <li @click="router.push('/admin')">Administrar</li>
      <li>
        <button class="btn" @click="logout">logout</button>
      </li>
    </ul>
  </div> 

</template>

<script>

import router from '@/router';
import AuthService from '@/services/AuthService';


export default {
  name: 'NavComponent',
 
 
  setup() {

    
  
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

    return{logout, router}
  },

  
}
</script>


css

<style scoped>
.nav {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 150px;
  height: 100vh;
  padding: 20px;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  color: white;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(32px) saturate(180%);
  -webkit-backdrop-filter: blur(32px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.25),
    inset 0 -1px 1px rgba(0, 0, 0, 0.12);
}

ul {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0;
}

li {
  width: 100%;
}

li:not(:has(button)) {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

li:not(:has(button)):hover {
  transform: translateX(6px);
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

.btn {
  width: 100%;
  margin-top: 400px;
  border-radius: 16px;
  padding: 14px 18px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  color: white;
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);

  background: rgba(255, 80, 80, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 100, 100, 0.25);
  box-shadow:
    0 4px 16px rgba(255, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
}

.btn:hover {
  background: rgba(255, 50, 50, 0.35);
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(255, 0, 0, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 100, 100, 0.4);
}
</style>