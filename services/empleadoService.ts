import { useNuxtApp } from '#app';
import type { Empleado } from '@/models/empleado';

export const useEmpleadoService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea un nuevo empleado.
     * @param empleado - Objeto que representa el empleado a crear.
     * @returns El objeto Empleado creado.
     */
    const createEmpleado = async (empleado: Empleado): Promise<Empleado> => {
        const { data } = await $axiosService.post<Empleado>('/api/v1/empleados', empleado);
        return data;
    };

    /**
     * Obtiene un empleado por su ID.
     * @param id - ID del empleado a obtener.
     * @returns El objeto Empleado correspondiente al ID proporcionado.
     */
    const getEmpleadoByID = async (id: number): Promise<Empleado> => {
        const { data } = await $axiosService.get<Empleado>(`/api/v1/empleados/${id}`);
        return data;
    };

    /**
     * Obtiene todos los empleados.
     * @returns Una lista de todos los empleados.
     */
    const getAllEmpleados = async (): Promise<Empleado[]> => {
        const { data } = await $axiosService.get<Empleado[]>('/api/v1/empleados');
        return data;
    };

    /**
     * Actualiza un empleado por su ID.
     * @param id - ID del empleado a actualizar.
     * @param empleado - Objeto que contiene los datos actualizados del empleado.
     * @returns El objeto Empleado actualizado.
     */
    const updateEmpleado = async (id: number, empleado: Empleado): Promise<Empleado> => {
        const { data } = await $axiosService.put<Empleado>(`/api/v1/empleados/${id}`, empleado);
        return data;
    };

    /**
     * Elimina un empleado por su ID.
     * @param id - ID del empleado a eliminar.
     */
    const deleteEmpleado = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/empleados/${id}`);
    };

    return {
        createEmpleado,
        getEmpleadoByID,
        getAllEmpleados,
        updateEmpleado,
        deleteEmpleado
    };
};
