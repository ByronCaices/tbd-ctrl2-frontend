import { useNuxtApp } from '#app';
import type { Cuenta } from '@/models/cuenta';

export const useCuentaService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea una nueva cuenta.
     * @param cuenta - Objeto que representa la cuenta a crear.
     * @returns El objeto Cuenta creada.
     */
    const createCuenta = async (cuenta: Cuenta): Promise<Cuenta> => {
        const { data } = await $axiosService.post<Cuenta>('/api/v1/cuentas', cuenta);
        return data;
    };

    /**
     * Obtiene una cuenta por su código.
     * @param codigo - Código de la cuenta a obtener.
     * @returns El objeto Cuenta correspondiente al código proporcionado.
     */
    const getCuentaByCodigo = async (codigo: number): Promise<Cuenta> => {
        const { data } = await $axiosService.get<Cuenta>(`/api/v1/cuentas/${codigo}`);
        return data;
    };

    /**
     * Obtiene todas las cuentas.
     * @returns Una lista de todas las cuentas.
     */
    const getAllCuentas = async (): Promise<Cuenta[]> => {
        const { data } = await $axiosService.get<Cuenta[]>('/api/v1/cuentas');
        return data;
    };

    /**
     * Actualiza una cuenta por su código.
     * @param codigo - Código de la cuenta a actualizar.
     * @param cuenta - Objeto que contiene los datos actualizados de la cuenta.
     * @returns El objeto Cuenta actualizado.
     */
    const updateCuenta = async (codigo: number, cuenta: Cuenta): Promise<Cuenta> => {
        const { data } = await $axiosService.put<Cuenta>(`/api/v1/cuentas/${codigo}`, cuenta);
        return data;
    };

    /**
     * Elimina una cuenta por su código.
     * @param codigo - Código de la cuenta a eliminar.
     */
    const deleteCuenta = async (codigo: number): Promise<void> => {
        await $axiosService.delete(`/api/v1/cuentas/${codigo}`);
    };

    return {
        createCuenta,
        getCuentaByCodigo,
        getAllCuentas,
        updateCuenta,
        deleteCuenta
    };
};
