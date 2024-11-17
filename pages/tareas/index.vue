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
            v-for="(task, index) in tasks"
            :key="index"
            class="d-flex align-center justify-space-between"
          >
            <v-card
              class="mx-auto pa-4 mt-2 mb-3"
              elevation="8"
              rounded="lg"
              :color="task.status === 'COMPLETADO' ? '#e8f5e9' : '#ffebee'"
            >
              <div class="d-flex justify-between">
                <div>
                  <div class="font-weight-bold">{{ task.name }}</div>
                  <div class="text-caption">Fecha: {{ task.due }}</div>
                </div>
                <div class="d-flex align-center">
                  <v-chip
                    :color="task.status === 'COMPLETADO' ? 'green' : 'red'"
                    class="ma-2"
                    small
                  >
                    {{ task.status }}
                  </v-chip>
                </div>
              </div>
  
              <div class="boton-editar-eliminar d-flex justify-between mt-4">
                <v-btn 
                  class="mx-2 px-4"
                  color="#E29818FF"
                  size="small"
                  outlined
                  @click=""
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
  
  export default {
    name: "Tareas",
    data() {
      return {
        tasks: [
          {
            name: "Comprar pan",
            due: "10/09/202X",
            status: "PENDIENTE",
          },
          {
            name: "Ir al gimnasio",
            due: "21/10/202X",
            status: "COMPLETADO",
          },
          {
            name: "Pagar la renta",
            due: "20/12/202X",
            status: "PENDIENTE",
          },
          {
            name: "Enviar email",
            due: "01/05/202X",
            status: "COMPLETADO",
          },
        ],
      };
    },
    setup() {
      const router = useRouter();
      const irAAñadir = () => {
        router.push("/tareas/nueva");
      };
  
      const completarTarea = (index) => {
        this.tasks[index].status = "COMPLETADO";
      };
  
      return {
        irAAñadir,
        completarTarea,
      };
    },
  };
  </script>
  
  <style scoped>
  .background {
    background-color: #fff1d95a;
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
  