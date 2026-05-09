<template>
 <div class="card-container">
    <TransitionGroup 
        name="card"
        tag="div"
        class="card-container">
        <NotificaitonCard
          v-for="notfication in notfications"
          :key="notfication.id"
          :variant="notfication.variant"
        >
          {{ notfication.message }}
        </NotificaitonCard>
    </TransitionGroup>
  </div>


 

  <div class="auth-container">
    <div class="login-card">
        <h1>Registrar</h1>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nome</label>
            <input  v-model="user.name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="nome sobrenome">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input  v-model="user.email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="inputPassword5" class="form-label">Senha</label>
            <input v-model="user.password" type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
        </div>
        <div class="d-grid gap-3 d-md-flex justify-content-between">
            <button @click="register" class="btn w-100" type="button">
                Registrar
            </button>
        
            <button @click="router.push('/login')" class="btn btn-primary w-100" type="button">
                Login
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService.js';
import NotificaitonCard from '../components/NotificationCard.vue'
import { ref } from 'vue';
import router from '@/router';



    export default{
        name: 'RegisterView',

        components: {NotificaitonCard},

        setup(){

            let user = ref({
                name: '',
                email: '',
                password: ''
            })
            
            let notfications = ref([])
        
            const notficationMessage = ref('')

            const addNotfication = (cardClass, message) => {
                
                const id = Date.now()

                notfications.value.push({
                    id,
                    message: message,
                    variant: cardClass
                })

                setTimeout(() => {
                notfications.value = notfications.value.filter(t => t.id !== id)
                }, 3000)

            }


            const register = async () => {
                try{
                    const response = await UserService.register(user.value)

                    console.log(response)

                    addNotfication('success', 'registrado com sucesso')

                    setTimeout(() => {router.push('/login')},1000)

                }catch(error){

                    addNotfication('fail', error.response?.data || 'registro falhou')

                }
                
                
            }

            return{
                notficationMessage,
                notfications,
                register,
                user,
                router,
                
    
            }

        }



    }

</script>
    
<style>
body {
  background: rgb(18, 18, 22);
  font-family: 'Inter', sans-serif;
  /* Fundo com gradiente para realçar o efeito glass */
  background-image:
    radial-gradient(ellipse at 20% 30%, rgba(0, 0, 0, 0.25) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 70%, rgba(224, 224, 224, 0.2) 0%, transparent 60%);
  min-height: 100vh;
}

.card-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
}

.auth-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 420px;
  padding: 40px;
  border-radius: 28px;
  color: white;
  animation: fadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  /* Liquid Glass */
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(32px) saturate(180%);
  -webkit-backdrop-filter: blur(32px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.25),
    inset 0 -1px 1px rgba(0, 0, 0, 0.12);
}

/* Linha de brilho no topo do card */
.login-card::before {
  content: '';
  display: block;
  height: 1px;
  width: 60%;
  margin: 0 auto 32px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
  border-radius: 999px;
}

.form-label {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  margin-bottom: 8px;
}

input.form-control {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: white;
  border-radius: 14px;
  padding: 14px 16px;
  transition: all 0.25s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

input.form-control::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

input.form-control:focus {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.45);
  box-shadow:
    0 0 0 3px rgba(255, 255, 255, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
  outline: none;
}

.d-grid {
  margin-top: 25px;
}

.btn {
  border: none;
  border-radius: 14px;
  padding: 12px 22px;
  font-weight: 600;
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);

  /* Glass base */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Botão Registrar */
.btn:first-child {
  background: rgba(255, 255, 255, 0.14);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

.btn:first-child:hover {
  background: rgba(255, 255, 255, 0.22);
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(255, 255, 255, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

/* Botão Login (primary) */
.btn-primary {
  background: rgba(255, 255, 255, 0.18);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.26);
  transform: translateY(-2px);
  box-shadow:
    0 12px 28px rgba(255, 255, 255, 0.12),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.forgot-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 8px;
  transition: color 0.25s ease, transform 0.25s ease;
}

.forgot-link:hover {
  color: rgba(255, 255, 255, 0.95);
  transform: translateX(3px);
}

.forgot-link::after {
  content: '';
  display: block;
  width: 0%;
  height: 1px;
  margin-top: 3px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  transition: width 0.3s ease;
}

.forgot-link:hover::after {
  width: 100%;
}
</style>

