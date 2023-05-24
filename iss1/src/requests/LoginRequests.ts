import Values from "../Values";
import { getApi } from "../helpers/AxiosHelper";

class LoginRequests {

    async login(username: string, password: string): Promise<any> {
        const hashedPassword = password;
        
        return await getApi(Values.baseBackendUrl).post(Values.loginUrl, {email: username, password: hashedPassword});
    }

    // async logout(): Promise<any> {
    //     return await request(
    //         "POST",
    //         Values.logoutUrl,
    //         {}
    //     )
    // }
}

let d = new LoginRequests();
export default d;