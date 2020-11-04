class ApiError {
  constructor(code, message) {
    this.message = message;
    this.code = code;
  }
  static badRequest(message) {
    return new ApiError(400, message);
  }
}
module.exports = ApiError;
