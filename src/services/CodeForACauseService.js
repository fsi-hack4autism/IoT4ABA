import http from "../http-common";

class CodeForACauseService {

    getTherapist() {
        return http.get('/therapist');
    }

    getDevices() {
        return http.get('/devices');
    }

    getTherapist(id) {
        return http.get('/therapist${id}');
    }

    getDevices(id) {
        return http.get('/devices');
    }

    saveDeviceConfig(data) {
        console.log(data);
        return http.post('/devices/${data.DeviceId}', data);
    }

    getTherapistSessions(id) {
        return http.get('/therapist/${id}/sessions');
    }
}

export default new CodeForACauseService();