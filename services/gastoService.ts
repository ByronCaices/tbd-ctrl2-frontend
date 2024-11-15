import { useNuxtApp } from '#app';
import type { Gasto } from '@/models/gasto';

export const useGastoService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea un nuevo gasto.
     * @param gasto - Objeto que representa el gasto a crear.
     * @returns El objeto Gasto creado.
     */
    const createGasto = async (gasto: Gasto): Promise<Gasto> => {
        const { data } = await $axiosService.post<Gasto>('/api/v1/gasto', gasto);
        return data;
    };

    /**
     * Obtiene un gasto por su ID.
     * @param id - ID del gasto a obtener.
     * @returns El objeto Gasto correspondiente al ID proporcionado.
     */
    const getGastoById = async (id: number): Promise<Gasto> => {
        const { data } = await $axiosService.get<Gasto>(`/api/v1/gasto/${id}`);
        return data;
    };

    /**
     * Obtiene todos los gasto.
     * @returns Una lista de todos los gasto.
     */
    const getAllGastos = async (): Promise<Gasto[]> => {
        const { data } = await $axiosService.get<Gasto[]>('/api/v1/gasto');
        return data;
    };

    /**
     * Actualiza un gasto por su ID.
     * @param id - ID del gasto a actualizar.
     * @param gasto - Objeto que contiene los datos actualizados del gasto.
     * @returns El objeto Gasto actualizado.
     */
    const updateGasto = async (id: number, gasto: Gasto): Promise<Gasto> => {
        const { data } = await $axiosService.put<Gasto>(`/api/v1/gasto/${id}`, gasto);
        return data;
    };

    /**
     * Elimina un gasto por su ID.
     * @param id - ID del gasto a eliminar.
     */
    const deleteGasto = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/gasto/${id}`);
    };

    return {
        createGasto,
        getGastoById,
        getAllGastos,
        updateGasto,
        deleteGasto
    };
};
