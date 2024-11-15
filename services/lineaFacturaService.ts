import { useNuxtApp } from '#app';
import type { LineaFactura } from '@/models/lineaFactura';

export const useLineaFacturaService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea una nueva línea de factura.
     * @param lineaFactura - Objeto que representa la línea de factura a crear.
     * @returns El objeto LineaFactura creada.
     */
    const createLineaFactura = async (lineaFactura: LineaFactura): Promise<LineaFactura> => {
        const { data } = await $axiosService.post<LineaFactura>('/api/v1/lineas', lineaFactura);
        return data;
    };

    /**
     * Obtiene una línea de factura por su ID.
     * @param id - ID de la línea de factura a obtener.
     * @returns El objeto LineaFactura correspondiente al ID proporcionado.
     */
    const getLineaFacturaById = async (id: number): Promise<LineaFactura> => {
        const { data } = await $axiosService.get<LineaFactura>(`/api/v1/lineas/${id}`);
        return data;
    };

    /**
     * Obtiene todas las líneas de factura.
     * @returns Una lista de todas las líneas de factura.
     */
    const getAllLineasFactura = async (): Promise<LineaFactura[]> => {
        const { data } = await $axiosService.get<LineaFactura[]>('/api/v1/lineas');
        return data;
    };

    /**
     * Actualiza una línea de factura por su ID.
     * @param id - ID de la línea de factura a actualizar.
     * @param lineaFactura - Objeto que contiene los datos actualizados de la línea de factura.
     * @returns El objeto LineaFactura actualizado.
     */
    const updateLineaFactura = async (id: number, lineaFactura: LineaFactura): Promise<LineaFactura> => {
        const { data } = await $axiosService.put<LineaFactura>(`/api/v1/lineas/${id}`, lineaFactura);
        return data;
    };

    /**
     * Elimina una línea de factura por su ID.
     * @param id - ID de la línea de factura a eliminar.
     */
    const deleteLineaFactura = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/lineas/${id}`);
    };

    return {
        createLineaFactura,
        getLineaFacturaById,
        getAllLineasFactura,
        updateLineaFactura,
        deleteLineaFactura
    };
};
