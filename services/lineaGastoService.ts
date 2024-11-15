import { useNuxtApp } from '#app';
import type { LineaGasto } from '@/models/lineaGasto';

export const useLineaGastoService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea una nueva línea de gasto.
     * @param lineaGasto - Objeto que representa la línea de gasto a crear.
     * @returns El objeto LineaGasto creada.
     */
    const createLineaGasto = async (lineaGasto: LineaGasto): Promise<LineaGasto> => {
        const { data } = await $axiosService.post<LineaGasto>('/api/v1/lineas-gastos', lineaGasto);
        return data;
    };

    /**
     * Obtiene una línea de gasto por su ID.
     * @param id - ID de la línea de gasto a obtener.
     * @returns El objeto LineaGasto correspondiente al ID proporcionado.
     */
    const getLineaGastoById = async (id: number): Promise<LineaGasto> => {
        const { data } = await $axiosService.get<LineaGasto>(`/api/v1/lineas-gastos/${id}`);
        return data;
    };

    /**
     * Obtiene todas las líneas de gasto.
     * @returns Una lista de todas las líneas de gasto.
     */
    const getAllLineasGasto = async (): Promise<LineaGasto[]> => {
        const { data } = await $axiosService.get<LineaGasto[]>('/api/v1/lineas-gastos');
        return data;
    };

    /**
     * Actualiza una línea de gasto por su ID.
     * @param id - ID de la línea de gasto a actualizar.
     * @param lineaGasto - Objeto que contiene los datos actualizados de la línea de gasto.
     * @returns El objeto LineaGasto actualizado.
     */
    const updateLineaGasto = async (id: number, lineaGasto: LineaGasto): Promise<LineaGasto> => {
        const { data } = await $axiosService.put<LineaGasto>(`/api/v1/lineas-gastos/${id}`, lineaGasto);
        return data;
    };

    /**
     * Elimina una línea de gasto por su ID.
     * @param id - ID de la línea de gasto a eliminar.
     */
    const deleteLineaGasto = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/lineas-gastos/${id}`);
    };

    return {
        createLineaGasto,
        getLineaGastoById,
        getAllLineasGasto,
        updateLineaGasto,
        deleteLineaGasto
    };
};
