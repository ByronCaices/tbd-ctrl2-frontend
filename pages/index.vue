<template >
  <div class="background">
    <v-card
      class="mx-auto pa-12 pb-8 mt-16 position-relative"
      elevation="8"
      max-width="448"
      rounded="lg"
      color=""
    >
      <div class="text-center my-8">
        <v-card flat 
          class="elevation-6 pa-4" 
          color="#FAE5C4ff"
          max-width="500">
          <v-card-title class="text-h4 font-weight-bold text-uppercase">
            Login
            <svg-icon class="large-icon" type="mdi" :path="path"></svg-icon>
          </v-card-title>
        </v-card>
      </div>

      <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="ejemplo@corre.com"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Contraseña        
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Ingresa la contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Recuerda: Tienes que registrarte primero antes de usar la aplicación
        </v-card-text>
      </v-card>

      <v-btn class="mb-8" color="#e29818ff" size="large" variant="tonal" block @click="logueo">
        Ingresar
      </v-btn>

      <v-card-text class="text-center">
        <nuxt-link
          class="register text-darken-1 text-decoration-none custom-text-color"
          to="/registro"
          rel="noopener noreferrer"
        >
          Registrate ahora <v-icon icon="mdi-chevron-right"></v-icon>
        </nuxt-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.large-icon {
  margin-top: 1px;
  width: 35px;
  height: 35px;
}
.custom-text-color {
  color: #e29818ff;
}
.background {
  background-color: #fff1d95a;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCircleOutline } from '@mdi/js';
import { useAuthService } from '~/services/authService';
import { useRouter } from 'vue-router';
import { ref, onMounted} from 'vue';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data: () => ({
    visible: false,
    path: mdiAccountCircleOutline,
  }),

  setup() {
    const router = useRouter();
    const visible = ref(false);
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const { authenticate } = useAuthService();

    const logueo = async () => {
      try {
        const { accessToken, refreshToken, id_usuario } = await authenticate(email.value, password.value);
        onMounted(() => {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('id_usuario', id_usuario);
        });
        router.push('/tareas');
      } catch (error) {
        errorMessage.value = 'Credenciales incorrectas';
      }
    };

    return {
      email,
      password,
      visible,
      errorMessage,
      logueo
    };
  }
};
</script>