import Values from "../Values";
import { getApi } from "../helpers/AxiosHelper";

class OtherRequests {

    async getPublicDestinations(): Promise<any> {        
        return await getApi(Values.baseBackendUrl).get(Values.publicBucketUrl, {});
    }

    async getPrivateDestinations(): Promise<any> {
        return await getApi(Values.baseBackendUrl).get(Values.privateBucketUrl, {});
    }

    async getPendingDestinations(): Promise<any> {
        return await getApi(Values.baseBackendUrl).get(Values.pendingBucketUrl, {});
    }

    async approveDestination(id: number): Promise<any> {
        return await getApi(Values.baseBackendUrl).post(Values.approveDestinationUrl + id, {});
    }
}

let d = new OtherRequests();
export default d;