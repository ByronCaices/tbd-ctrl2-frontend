import { useNuxtApp } from '#app';
import type { Factura } from '@/models/factura';

export const useFacturaService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea una nueva factura de venta.
     * @param factura - Objeto que representa la factura de venta a crear.
     * @returns El objeto Factura de Venta creada.
     */
    const createFactura = async (factura: Factura): Promise<Factura> => {
        const { data } = await $axiosService.post<Factura>('/api/v1/facturas', factura);
        return data;
    };

    /**
     * Obtiene una factura de venta por su ID.
     * @param id - ID de la factura de venta a obtener.
     * @returns El objeto Factura de Venta correspondiente al ID proporcionado.
     */
    const getFacturaById = async (id: number): Promise<Factura> => {
        const { data } = await $axiosService.get<Factura>(`/api/v1/facturas/${id}`);
        return data;
    };

    /**
     * Obtiene todas las facturas de venta.
     * @returns Una lista de todas las facturas de venta.
     */
    const getAllFacturas = async (): Promise<Factura[]> => {
        const { data } = await $axiosService.get<Factura[]>('/api/v1/facturas');
        return data;
    };

    /**
     * Actualiza una factura de venta por su ID.
     * @param id - ID de la factura de venta a actualizar.
     * @param factura - Objeto que contiene los datos actualizados de la factura de venta.
     * @returns El objeto Factura de Venta actualizado.
     */
    const updateFactura = async (id: number, factura: Factura): Promise<Factura> => {
        const { data } = await $axiosService.put<Factura>(`/api/v1/facturas/${id}`, factura);
        return data;
    };

    /**
     * Elimina una factura de venta por su ID.
     * @param id - ID de la factura de venta a eliminar.
     */
    const deleteFactura = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/facturas/${id}`);
    };

    return {
        createFactura,
        getFacturaById,
        getAllFacturas,
        updateFactura,
        deleteFactura
    };
};
