<template>
  <v-card>
    <v-toolbar color="#4CAF50">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title >Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>

      <v-btn class="mx-2" size="small" outlined>
        <img class="img-notif" src="/assets/bell.png" alt="Notificaciones">
        Notificaciones
      </v-btn>

      <v-btn class="mx-2" size="small" outlined>
        <img class="img-notif" src="/assets/logout.png" alt="Notificaciones">
        Cerrar sesión
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      searchActive: false,
      userMenuActive: false,
    };
  },
  methods: {
    toggleSearch() {
      this.searchActive = !this.searchActive;
      if (this.searchActive) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      }
    },
    toggleUserMenu() {
      this.userMenuActive = !this.userMenuActive;
    }
  }
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header h1 {
  margin-left: 20px;
  margin-top: 20px;
  font-size: 2.25rem;
  font-weight: bold;
  text-transform: uppercase;
}

nav {
  display: flex;
  height: 50px;
  gap: 10px;
  margin-top: 15px;
  margin-right: 20px;
}

.img-notif {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.boton-tareas {
  display: flex;
  justify-content: center;
  margin-right: 20px;
  margin-top: 20px;
}

.boton-chico {
  font-size: 14px;
  padding: 6px 12px;
  min-width: 100px;
  text-transform: uppercase;
}

.tareas {
  padding: 20px;
}

.tareas h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.COMPLETADO {
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
}

.PENDIENTE {
  background-color: #ffebee;
  border-left: 4px solid #f44336;
}

.boton-editar-eliminar {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.search-section {
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
}

.lexend-deca-title {
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
}
</style>
