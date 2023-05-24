
class LocalStorageManager {
    static authTokenPrefix: string = "auth_token";
    static refreshTokenPrefix: string = "refresh_token";
    static rolePrefix: string = "role";
    static tablePrefix: string = "table";


    static setAuthToken(auth_token: string) {
        window.localStorage.setItem(LocalStorageManager.authTokenPrefix, auth_token);
    }

    static getAuthToken(): string | null {
        return window.localStorage.getItem(LocalStorageManager.authTokenPrefix);
    }

    static removeAuthToken() {
        window.localStorage.removeItem(LocalStorageManager.authTokenPrefix);
    }

    static setRefreshToken(refresh_token: string) {
        console.log("refresh_token", refresh_token);
        window.localStorage.setItem(LocalStorageManager.refreshTokenPrefix, refresh_token);
    }

    static setRole(role: string) {
        window.localStorage.setItem(LocalStorageManager.rolePrefix, role);
    }

    static getRole(): string | null {
        return window.localStorage.getItem(LocalStorageManager.rolePrefix);
    }

    static removeRole() {
        window.localStorage.removeItem(LocalStorageManager.rolePrefix);
    }

    static performLogoutCleaning() {
        window.localStorage.clear();
    }

}

export default LocalStorageManager;