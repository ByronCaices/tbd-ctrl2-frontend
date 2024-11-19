<template>
    <div class="agregar-tarea">
        <h1>Agregar Tarea</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="nombre_notas">Nombre:</label>
                <input type="text" id="nombre_notas" v-model="nombre_notas" required>
            </div>
            <div>
                <label for="contenido_nota">Descripción:</label>
                <textarea id="contenido_nota" v-model="contenido_nota" required></textarea>
            </div>
            <div>
                <label for="fecha_nota">Fecha de Termino:</label>
                <input type="date" id="fecha_nota" v-model="fecha_nota" required>
            </div>
            
            <button type="submit">Agregar Tarea</button>
        </form>
    </div>
</template>

<script>
import { useNotaService } from '~/services/notaService';

export default {
    data() {
        return {
            nombre_notas: '',
            contenido_nota: '',
            fecha_nota: '',
            completa_check_nota: false
        };
    },
    methods: {
        async submitForm() {
            console.log('Nombre:', this.nombre_notas);
            console.log('Descripción:', this.contenido_nota);
            console.log('Fecha de Termino:', this.fecha_nota);

            const { createNota } = useNotaService();
            const nuevaNota = {
                id_usuario: localStorage.getItem("id_usuario"), // Obtener el id del usaurio logeado
                nombre_notas: this.nombre_notas,
                contenido_nota: this.contenido_nota,
                fecha_nota: this.fecha_nota,
                completa_check_nota: this.completa_check_nota
            };
            try {
                const notaCreada = await createNota(nuevaNota);
                console.log('Nota creada:', notaCreada);
            } catch (error) {
                console.error('Error al crear la nota:', error);
            }
        }
    }
};
</script>

<style scoped>
.agregar-tarea {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.agregar-tarea h1 {
    text-align: center;
}

.agregar-tarea form div {
    margin-bottom: 15px;
}

.agregar-tarea form label {
    display: block;
    margin-bottom: 5px;
}

.agregar-tarea form input,
.agregar-tarea form textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.agregar-tarea form button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.agregar-tarea form button:hover {
    background-color: #0056b3;
}
</style>