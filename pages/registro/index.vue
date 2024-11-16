<template>
    <div class="flex h-screen items-center justify-center">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>
  
        <v-text-field
          density="compact"
          placeholder="example@correo.com"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Contraseña
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            ¿Olvidaste la contraseña?</a>
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Ingresa la contraseña"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Tienes que registrarte primero antes de usar la aplicación
          </v-card-text>
        </v-card>
  
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
          Ingresa
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            REGISTRATE <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>
  


<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: "loginView",
  setup() {
    const router = useRouter()
    const irALogin = () => {
      router.push('/')
    }
    return { 
      irALogin,
    }
  }
}
</script>

<style scoped>
.contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
}

.info-registro {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 5px;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
}
.buttons{
    width:100%;
    display: flex;
    justify-content: space-around;
    
}
</style>
