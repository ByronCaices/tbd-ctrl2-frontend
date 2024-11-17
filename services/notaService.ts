import { useNuxtApp } from "#app";
import type { Nota } from "@/models/nota";

export const useNotaService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea una nueva nota.
     * @param nota - Objeto que representa la nota a crear.
     * @returns El objeto Nota creada.
     */
    const createNota = async (nota: Nota): Promise<Nota> => {
        const { data } = await $axiosService.post<Nota>("/api/notas/", nota);
        return data;
    };

    /**
     * Obtiene una nota por su id.
     * @param id - Id de la nota a obtener.
     * @returns El objeto Nota correspondiente al id proporcionado.
     */
    const getNotaById = async (id: number): Promise<Nota> => {
        const { data } = await $axiosService.get<Nota>(`/api/notas/id-usuario/${id}`);
        return data;
    };

    /**
     * Obtiene todas las notas.
     * @returns Una lista de todas las notas
     * */
    const getAllNotas = async (): Promise<Nota[]> => {
        const { data } = await $axiosService.get<Nota[]>("/api/notas/");
        return data;
    }
    
    /**
     * Actualiza una nota por su id.
     * @param id - Id de la nota a actualizar.
     * @param nota - Objeto que contiene los datos actualizados de la nota.
     * @returns El objeto Nota actualizado.
     */
    const updateNota = async (nota: Nota): Promise<Nota> => {
        const { data } = await $axiosService.put<Nota>(`/api/nota/`, nota);
        return data;
    };

    /**
     * Elimina una nota por su id.
     * @param id - Id de la nota a eliminar.
     */
    const deleteNota = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/notas/delete-nota/${id}`);
    };

    return {
        createNota,
        getNotaById,
        getAllNotas,
        updateNota,
        deleteNota
    };
}