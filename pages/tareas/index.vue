<template>
  <div>
    <Header />
  </div>
  <div class="background">
    <!-- Encabezado con botones de notificaciones y cerrar sesión -->
    <header>
      <nav class="d-flex align-center justify-end">
        <v-btn class="mx-2" color="#E29818FF" size="small" outlined>
          <img class="img-notif" src="/assets/bell.png" alt="Notificaciones">
          Notificaciones
        </v-btn>
        <v-btn class="mx-2" color="red darken-1" size="small" outlined>
          <img class="img-notif" src="/assets/logout.png" alt="Notificaciones">
          Cerrar sesión
        </v-btn>
      </nav>
    </header>

    <!-- Sección de búsqueda y filtros -->
    <div class="search-section pa-4">
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="searchParams.nombre_nota"
            label="Buscar por nombre"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="searchParams.contenido_nota"
            label="Buscar por contenido"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-select
            v-model="searchParams.completa_check_nota"
            :items="estadoOptions"
            label="Estado"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex align-center">
          <v-btn color="#e29818ff" @click="realizarBusqueda" class="mx-2">
            Buscar
          </v-btn>
          <v-btn color="grey" @click="limpiarFiltros" class="mx-2">
            Limpiar
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <!-- Botón para añadir tareas -->
    <div class="boton-tareas">
      <v-btn color="#e29818ff" size="small" variant="tonal" class="boton-chico" @click="irAAñadir">
        Añadir tareas
      </v-btn>
    </div>

    <!-- Lista de tareas -->
    <div class="tareas">
      <h1>Tareas</h1>
      <v-list>
        <v-list-item v-for="(nota, index) in notas" :key="index" class="d-flex align-center justify-space-between">
          <v-card
            class="mx-auto pa-4 mt-2 mb-3"
            elevation="8"
            rounded="lg"
            :color="nota.completa_check_nota ? '#e8f5e9' : '#ffebee'"
          >
            <div class="d-flex justify-between">
              <div>
                <div class="font-weight-bold">{{ nota.nombre_notas }}</div>
                <div class="text-caption">Fecha: {{ nota.fecha_nota }}</div>
                <div class="text-body-1">{{ nota.contenido_nota }}</div>
              </div>
              <div class="d-flex align-center">
                <v-chip :color="nota.completa_check_nota ? 'green' : 'red'" class="ma-2" small>
                  {{ nota.completa_check_nota ? 'COMPLETADO' : 'PENDIENTE' }}
                </v-chip>
              </div>
            </div>
            <v-spacer></v-spacer>
            <div class="boton-editar-eliminar d-flex justify-between mt-4">
              <v-btn
                class="mx-2 px-4"
                color="#E29818FF"
                size="small"
                outlined
                @click="completarTarea(index)"
              >
                Completar tarea
              </v-btn>
              <v-btn class="mx-2 px-4" color="#E29818FF" size="small" outlined @click="editarTarea(index)">
                Editar tarea
              </v-btn>
              <v-btn
                class="mx-2"
                color="red darken-1"
                size="small"
                outlined
                @click="eliminarTarea(index)"
              >
                Eliminar tarea
              </v-btn>
            </div>
          </v-card>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useNotaService } from "~/services/notaService";
import Header from "@/components/Header.vue"; // Ajusta la ruta según tu estructura de archivos

export default {
  name: "Tareas",
  components: {
    Header,
  },
  data() {
    return {
      notas: [],
      token: "your-token-here", // Puedes obtenerlo de localStorage si es necesario
      searchParams: {
        nombre_nota: "",
        contenido_nota: "",
        completa_check_nota: null,
        id_usuario: null, // Se asignará en mounted()
      },
      estadoOptions: [
        { text: "Todos", value: null },
        { text: "Completadas", value: true },
        { text: "Pendientes", value: false },
      ],
      refreshToken: null,
      id_usuario: null,
    };
  },
  mounted() {
    // Obtener valores del localStorage al montar el componente
    this.refreshToken = localStorage.getItem("refreshToken") || localStorage.getItem("refresh_token");
    this.id_usuario = localStorage.getItem("id_usuario");
    this.searchParams.id_usuario = this.id_usuario;
    
    this.refreshToken = localStorage.getItem('refresh_token');
    this.userId = parseInt(localStorage.getItem('id_usuario'), 10);

    if (!this.refreshToken || !this.id_usuario) {
      console.error("Token de refresco o ID de usuario no disponibles");
      // Maneja el error, por ejemplo, redirigiendo al login
      return;
    }

    this.fetchTareasByUser(); // Cargar tareas del usuario

    this.realizarBusqueda(); // Cargar tareas iniciales
  },
  methods: {
    async realizarBusqueda() {
      try {
        const { buscarTareas } = useNotaService();
        const results = await buscarTareas(this.searchParams, this.refreshToken);
        this.notas = results;
      } catch (error) {
        console.error("Error al buscar tareas:", error);
      }
    },

    async fetchTareasByUser() {
      try {
        const { getNotasByUserId } = useNotaService();
        console.log('fetchTareasByUser', this.userId, this.refreshToken);
        const response = await getNotasByUserId(this.userId, this.refreshToken);

        console.log('Response from API:', response);

        this.tareas = response;
      } catch (error) {
        console.error('Error al obtener las notas:', error);
      }
      console.log('Tareas:', this.tareas);
    },

    limpiarFiltros() {
      this.searchParams = {
        nombre_nota: "",
        contenido_nota: "",
        completa_check_nota: null,
        id_usuario: this.id_usuario,
      };
      this.realizarBusqueda();
    },
    eliminarTarea(index) {
      const { deleteNota } = useNotaService();
      deleteNota(this.notas[index].id, this.refreshToken)
        .then(() => {
          // Elimina la nota de la lista local
          this.notas.splice(index, 1);
        })
        .catch((error) => {
          console.error("Error al eliminar la tarea:", error);
        });
    },
    irAAñadir() {
      this.$router.push("/tareas/nueva");
    },
    completarTarea(index) {
      this.notas[index].completa_check_nota = true;
      const { updateNota } = useNotaService();
      updateNota(this.notas[index], this.refreshToken)
        .then(() => {
          // Opcional: actualizar la lista o mostrar una notificación
        })
        .catch((error) => {
          console.error("Error al completar la tarea:", error);
        });
    },
    editarTarea(index) {
      // Implementa la lógica para editar la tarea, por ejemplo, navegando a una ruta de edición
      const notaId = this.notas[index].id;
      this.$router.push(`/tareas/editar/${notaId}`);
    },
  },
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
  </style>
