import { useNuxtApp } from '#app';
import type { Usuario } from '@/models/usuario';

export const useUsuarioService = () => {
    const { $axiosService } = useNuxtApp();

    /**
     * Crea un nuevo usuario.
     * @param usuario - Objeto que representa el usuario a crear.
     * @returns El objeto Usuario creado.
     */
    const createUsuario = async (usuario: Usuario): Promise<Usuario> => {
        const { data } = await $axiosService.post<Usuario>('/api/usuario/', usuario);
        return data;
    };

    /**
     * Obtiene un usuario por su id.
     * @param id - Id del usuario a obtener.
     * @returns El objeto Usuario correspondiente al id proporcionado.
     */
    const getUsuarioById = async (id: number): Promise<Usuario> => {
        const { data } = await $axiosService.get<Usuario>(`/api/usuario/id-usuario/${id}`);
        return data;
    }

    /**
     * Obtiene todos los usuarios.
     * @returns Una lista de todos los usuarios.
     */
    const getAllUsuarios = async (): Promise<Usuario[]> => {
        const { data } = await $axiosService.get<Usuario[]>('/api/usuario/');
        return data;
    };

    /**
     * Actualiza un usuario por su id.
     * @param id - Id del usuario a actualizar.
     * @param usuario - Objeto que contiene los datos actualizados del usuario.
     * @returns El objeto Usuario actualizado.
     */
    const updateUsuario = async (id: number, usuario: Usuario): Promise<Usuario> => {
        const { data } = await $axiosService.put<Usuario>(`/api/usuario/${id}`, usuario);
        return data;
    };

    /**
     * Elimina un usuario por su id.
     * @param id - Id del usuario a eliminar.
     */
    const deleteUsuario = async (id: number): Promise<void> => {
        await $axiosService.delete(`/api/usuario/delete-usuario/${id}`);
    };

    return {
        createUsuario,
        getUsuarioById,
        getAllUsuarios,
        updateUsuario,
        deleteUsuario
    };
}