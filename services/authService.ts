import { useNuxtApp } from "#app";

export const useAuthService = () => {
    const { $axiosService } = useNuxtApp();

    interface TokenResponse {
        accessToken: string;
        refreshToken: string;
    }

    /**
     * Autentica un usuario.
     * @param email - Correo del usuario.
     * @param password - Contraseña del usuario.
     * @returns El objeto con el token de autenticación y el refresh token.
     */
    const authenticate = async (email: string, password: string): Promise<TokenResponse> => {
        const { data } = await $axiosService.post<TokenResponse>("/api/auth/login", {
            email,
            password
        });
        return data;
    };

    return {
        authenticate
    };
}