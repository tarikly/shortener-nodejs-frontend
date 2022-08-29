import baseAPI from "./api";

class ShortenerService {
    constructor() {
        this.api = baseAPI('https://api-tarikly-dev.apps.sandbox.x8i5.p1.openshiftapps.com/');
    }

    async getLink(code) {
        const result = await this.api.get(`links/${code}`);

        return result.data;
    }

    async getStats(code) {
        const result = await this.api.get(`links/${code}/stats`);

        return result.data;
    }

    async generate(model) {
        const result = await this.api.post(`links`, model);

        return result.data;
    }
}

export default ShortenerService;