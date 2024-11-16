<template>
    <div class="container my-8">
      <v-card flat>
        <v-card-title class="text-h4 font-weight-bold">Task List</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            v-for="(task, index) in tasks"
            :key="index"
            class="d-flex align-center justify-space-between"
            :class="task.status"
          >
            <div>
              <div class="font-weight-bold">{{ task.name }}</div>
              <div class="text-caption">Due: {{ task.due }}</div>
            </div>
            <div class="d-flex align-center">
              <v-chip
                :color="task.color"
                class="ma-2"
                small
              >
                {{ task.status }}
              </v-chip>
              <span>{{ task.amount }} EUR</span>
            </div>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="addTask" color="primary" block>
            Add New Task
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          {
            name: "Jenny Wilson",
            due: "10/09/202X",
            status: "PENDING",
            color: "yellow",
            amount: 120,
          },
          {
            name: "Dianne Russell",
            due: "21/10/202X",
            status: "PAID",
            color: "green",
            amount: 82.5,
          },
          {
            name: "Jerome Bell",
            due: "20/12/202X",
            status: "PAID",
            color: "green",
            amount: 250,
          },
          {
            name: "Courtney Henry",
            due: "01/05/202X",
            status: "UNPAID",
            color: "pink",
            amount: 60,
          },
        ],
      };
    },
    methods: {
      addTask() {
        const newTask = {
          name: "New Task",
          due: "DD/MM/YYYY",
          status: "PENDING",
          color: "yellow",
          amount: 0,
        };
        this.tasks.push(newTask);
      },
    },
  };
  </script>
  
  <style scoped>
  .PAID {
    background-color: #e8f5e9;
    border-left: 4px solid #4caf50;
  }
  .PENDING {
    background-color: #fff9c4;
    border-left: 4px solid #ffc107;
  }
  .UNPAID {
    background-color: #fce4ec;
    border-left: 4px solid #e91e63;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  