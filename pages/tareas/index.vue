<template>
    <div class="background">
      <header>
        <nav class="d-flex align-center justify-end">
          <v-btn 
            class="mx-2"
            color="#E29818FF"
            size="small"
            outlined
          >
            <img class="img-notif" src="/assets/bell.png" alt="Notificaciones">
            Notificaciones
          </v-btn>
          <v-btn 
            class="mx-2"
            color="red darken-1"
            size="small"
            outlined
          >
          <img class="img-notif" src="/assets/logout.png" alt="Notificaciones">
            Cerrar sesión
          </v-btn>
        </nav>
      </header>
      <div class="boton-tareas">
        <v-btn 
          color="#e29818ff" 
          size="small" 
          variant="tonal" 
          class="boton-chico"
          @click="irAAñadir"
        >
          Añadir tareas
        </v-btn>
      </div>
      <div class="tareas">
        <h1>Tareas</h1>
        <v-list>
          <v-list-item
            v-for="(nota, index) in notas"
            :key="index"
            class="d-flex align-center justify-space-between"
          >
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
                  <v-chip
                    :color="nota.completa_check_nota ? 'green' : 'red'"
                    class="ma-2"
                    small
                  >
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
                <v-btn 
                  class="mx-2 px-4"
                  color="#E29818FF"
                  size="small"
                  outlined
                >
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
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useNotaService } from "~/services/notaService";

  
  export default {
    name: "Tareas",
    data() {
      return {
        notas: [
          {
            id: 1,
            nombre_notas: "Comprar pan",
            fecha_nota: "10/09/202X",
            contenido_nota: "Comprar pan integral en la panadería de la esquina.",
            completa_check_nota: false,
          },
          {
            id: 2,
            nombre_notas: "Ir al gimnasio",
            fecha_nota: "21/10/202X",
            contenido_nota: "Hacer una rutina de pesas y 30 minutos de cardio.",
            completa_check_nota: true,
          },
          {
            id: 3,
            nombre_notas: "Pagar la renta",
            fecha_nota: "20/12/202X",
            contenido_nota: "Transferir el dinero de la renta al propietario.",
            completa_check_nota: false,
          },
          {
            id: 4,
            nombre_notas: "Enviar email",
            fecha_nota: "01/05/202X",
            contenido_nota: "Enviar el informe mensual al jefe.",
            completa_check_nota: true,
          },
        ],
        token: 'your-token-here' // Add your token here
      };
    },
    setup() {
      const refreshToken = ref(localStorage.getItem('refreshToken'));
      const router = useRouter();
      const { updateNota, deleteNota } = useNotaService();
      
      const eliminarTarea = (index) => {
        deleteNota(this.notas[index].id, refreshToken);
      };

      const irAAñadir = () => {
        router.push("/tareas/nueva");
      };
  
      const completarTarea = (index) => {
        this.notas[index].completa_check_nota = true;
        updateNota(this.notas[index], refreshToken);

      };
  
      return {
        irAAñadir,
        completarTarea,
        eliminarTarea,
      };
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
  </style>
