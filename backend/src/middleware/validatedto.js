const ApiError = require("../errors/api-error");
function validatedto(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  };
}
module.exports = validatedto;
