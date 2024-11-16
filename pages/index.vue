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
        density="compact"
        placeholder="ejemplo@corre.com"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Contraseña

        <a
          class="text-caption text-decoration-none custom-text-color"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Olvidaste la contraseña?</a
        >
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

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Recuerda: Tienes que registrarte primero antes de usar la aplicación
        </v-card-text>
      </v-card>

      <v-btn class="mb-8" color="#e29818ff" size="large" variant="tonal" block>
        Ingresar
      </v-btn>

      <v-card-text class="text-center">
        <nuxt-link
          class="register text-darken-1 text-decoration-none custom-text-color"
          to="/registro"
          rel="noopener noreferrer"
          target="_blank"
        >
          Registrate ahora <v-icon icon="mdi-chevron-right"></v-icon>
        </nuxt-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.large-icon {
  margin-topp: 1px;
  width: 35px;
  height: 35px;
}
.custom-text-color {
  color: #e29818ff;
}
.background {
  background-color: #fff1d95a; /* Cambia este color al que prefieras */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCircleOutline } from '@mdi/js';

  export default {
    name: "my-component",
    components: {
    SvgIcon
    },
    data: () => ({
      visible: false,
      path: mdiAccountCircleOutline,
    }),
  }
</script>