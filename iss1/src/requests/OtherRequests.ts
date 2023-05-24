import Values from "../Values";
import { getApi } from "../helpers/AxiosHelper";

class OtherRequests {

    async getPublicDestinations(): Promise<any> {        
        return await getApi(Values.baseBackendUrl).get(Values.publicBucketUrl, {});
    }
}

let d = new OtherRequests();
export default d;