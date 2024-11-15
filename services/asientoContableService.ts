import { useNuxtApp } from '#app';
import type { AsientoContable } from '@/models/asientoContable';

export const useAsientoContableService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea un nuevo Asiento Contable.
     * @param asientoContable - Objeto que representa el Asiento Contable a crear.
     * @returns El objeto Asiento Contable creado.
     */
    const createAsientoContable = async (asientoContable: AsientoContable): Promise<AsientoContable> => {
        const { data } = await $axiosService.post<AsientoContable>('/api/v1/asientocontable', asientoContable);
        return data;
    };

    /**
     * Obtiene un Asiento Contable por su ID.
     * @param id - ID del Asiento Contable a obtener.
     * @returns El objeto Asiento Contable correspondiente al ID proporcionado.
     */
    const getAsientoContableById = async (id: number): Promise<AsientoContable> => {
        const { data } = await $axiosService.get<AsientoContable>(`/api/v1/asientocontable/${id}`);
        return data;
    };

    /**
     * Obtiene todos los Asientos Contables.
     * @returns Una lista de todos los Asientos Contables.
     */
    const getAllAsientosContables = async (): Promise<AsientoContable[]> => {
        const { data } = await $axiosService.get<AsientoContable[]>('/api/v1/asientocontable/asientos');
        return data;
    };

    /**
     * Actualiza un Asiento Contable por su ID.
     * @param id - ID del Asiento Contable a actualizar.
     * @param asientoContable - Objeto que contiene los datos actualizados del Asiento Contable.
     * @returns El objeto Asiento Contable actualizado.
     */
    const updateAsientoContable = async (id: number, asientoContable: AsientoContable): Promise<AsientoContable> => {
        const { data } = await $axiosService.put<AsientoContable>(`/api/v1/asientocontable/${id}`, asientoContable);
        return data;
    };

    /**
     * Elimina un Asiento Contable por su ID.
     * @param id - ID del Asiento Contable a eliminar.
     */
    const deleteAsientoContable = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/asientocontable/${id}`);
    };

    return {
        createAsientoContable,
        getAsientoContableById,
        getAllAsientosContables,
        updateAsientoContable,
        deleteAsientoContable
    };
};
