import { useNuxtApp } from '#app';
import type { ApunteContable } from '@/models/apunteContable';

export const useApunteContableService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea un nuevo Apunte Contable.
     * @param apunteContable - Objeto que representa el Apunte Contable a crear.
     * @returns El objeto Apunte Contable creado.
     */
    const createApunteContable = async (apunteContable: ApunteContable): Promise<ApunteContable> => {
        const { data } = await $axiosService.post<ApunteContable>('/api/v1/apuntecontable', apunteContable);
        return data;
    };

    /**
     * Obtiene un Apunte Contable por su ID.
     * @param id - ID del Apunte Contable a obtener.
     * @returns El objeto Apunte Contable correspondiente al ID proporcionado.
     */
    const getApunteContableById = async (id: number): Promise<ApunteContable> => {
        const { data } = await $axiosService.get<ApunteContable>(`/api/v1/apuntecontable/${id}`);
        return data;
    };

    /**
     * Obtiene todos los Apuntes Contables.
     * @returns Una lista de todos los Apuntes Contables.
     */
    const getAllApuntesContables = async (): Promise<ApunteContable[]> => {
        const { data } = await $axiosService.get<ApunteContable[]>('/api/v1/apuntecontable/apuntes');
        return data;
    };

    /**
     * Actualiza un Apunte Contable por su ID.
     * @param id - ID del Apunte Contable a actualizar.
     * @param apunteContable - Objeto que contiene los datos actualizados del Apunte Contable.
     * @returns El objeto Apunte Contable actualizado.
     */
    const updateApunteContable = async (id: number, apunteContable: ApunteContable): Promise<ApunteContable> => {
        const { data } = await $axiosService.put<ApunteContable>(`/api/v1/apuntecontable/${id}`, apunteContable);
        return data;
    };

    /**
     * Elimina un Apunte Contable por su ID.
     * @param id - ID del Apunte Contable a eliminar.
     */
    const deleteApunteContable = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/apuntecontable/${id}`);
    };

    return {
        createApunteContable,
        getApunteContableById,
        getAllApuntesContables,
        updateApunteContable,
        deleteApunteContable
    };
};
