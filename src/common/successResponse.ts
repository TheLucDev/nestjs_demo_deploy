export class SuccessResponse {
    public data
    public success
    public message
    constructor(data = null, message = "success", success = true) {
        this.data = data
        this.success = success
        this.message = message
    }
}