import Values from "../Values";
import { getApi } from "../helpers/AxiosHelper";

class OtherRequests {

    async getPublicDestinations(): Promise<any> {        
        return await getApi(Values.baseBackendUrl).get(Values.publicBucketUrl, {});
    }

    async addPublicDestination(data: any): Promise<any> {
        return await getApi(Values.baseBackendUrl).post(Values.publicBucketUrl, data);
    }

    async getPrivateDestinations(): Promise<any> {
        return await getApi(Values.baseBackendUrl).get(Values.privateBucketUrl, {});
    }

    async addPrivateDestination(data: any): Promise<any> {
        return await getApi(Values.baseBackendUrl).post(Values.privateBucketUrl, data);
    }

    async getPendingDestinations(): Promise<any> {
        return await getApi(Values.baseBackendUrl).get(Values.pendingBucketUrl, {});
    }

    async approveDestination(id: number): Promise<any> {
        return await getApi(Values.baseBackendUrl).post(Values.approveDestinationUrl + id, {});
    }

    async getDestinationById(id: string): Promise<any> {
        return await getApi(Values.baseBackendUrl).get(Values.getDestinationUrl + id, {});
    }
}

let d = new OtherRequests();
export default d;