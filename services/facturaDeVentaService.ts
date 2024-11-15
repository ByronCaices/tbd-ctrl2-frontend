import { useNuxtApp } from '#app';
import type { FacturaDeVenta } from '@/models/facturaDeVenta';

export const useFacturaDeVentaService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea una nueva factura de venta.
     * @param facturaDeVenta - Objeto que representa la factura de venta a crear.
     * @returns El objeto Factura de Venta creada.
     */
    const createFacturaDeVenta = async (facturaDeVenta: FacturaDeVenta): Promise<FacturaDeVenta> => {
        const { data } = await $axiosService.post<FacturaDeVenta>('/api/v1/facturasDeVenta', facturaDeVenta);
        return data;
    };

    /**
     * Obtiene una factura de venta por su ID.
     * @param id - ID de la factura de venta a obtener.
     * @returns El objeto Factura de Venta correspondiente al ID proporcionado.
     */
    const getFacturaDeVentaById = async (id: number): Promise<FacturaDeVenta> => {
        const { data } = await $axiosService.get<FacturaDeVenta>(`/api/v1/facturasDeVenta/${id}`);
        return data;
    };

    /**
     * Obtiene todas las facturas de venta.
     * @returns Una lista de todas las facturas de venta.
     */
    const getAllFacturasDeVenta = async (): Promise<FacturaDeVenta[]> => {
        const { data } = await $axiosService.get<FacturaDeVenta[]>('/api/v1/facturasDeVenta');
        return data;
    };

    /**
     * Actualiza una factura de venta por su ID.
     * @param id - ID de la factura de venta a actualizar.
     * @param facturaDeVenta - Objeto que contiene los datos actualizados de la factura de venta.
     * @returns El objeto Factura de Venta actualizado.
     */
    const updateFacturaDeVenta = async (id: number, facturaDeVenta: FacturaDeVenta): Promise<FacturaDeVenta> => {
        const { data } = await $axiosService.put<FacturaDeVenta>(`/api/v1/facturasDeVenta/${id}`, facturaDeVenta);
        return data;
    };

    /**
     * Elimina una factura de venta por su ID.
     * @param id - ID de la factura de venta a eliminar.
     */
    const deleteFacturaDeVenta = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/facturasDeVenta/${id}`);
    };

    return {
        createFacturaDeVenta,
        getFacturaDeVentaById,
        getAllFacturasDeVenta,
        updateFacturaDeVenta,
        deleteFacturaDeVenta
    };
};
