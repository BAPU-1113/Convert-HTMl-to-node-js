const validateRequestData = (req, res, next) => {
  const payload = req.body;

  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).send("invalid request body.");
  }

  const expectedFields = ["ID", "Name", "Rating", "Description", "Genre", "Cast"];
  const providedFields = Object.keys(payload);

  if (
    providedFields.length !== expectedFields.length ||
    !expectedFields.every((field) => providedFields.includes(field))
  ) {
    return res.status(400).send("bad request,some data is incorrect");
  }

  if (typeof payload.ID !== "number") {
    return res.status(400).send("bad request,some data is incorrect");
  }

  if (typeof payload.Name !== "string") {
    return res.status(400).send("bad request. some data is incorrect.");
  }

  if (typeof payload.Rating !== "number") {
    return res.status(400).send("bad request. some data is incorrect.");
  }

  if (typeof payload.Description !== "string") {
    return res.status(400).send("bad request. some data is incorrect.");
  }

  if (typeof payload.Genre !== "string") {
    return res.status(400).send("bad request. some data is incorrect.");
  }

  if (!Array.isArray(payload.Cast)) {
    return res.status(400).send("bad request. some data is incorrect.");
  }

  let index = 0;
  while (index < payload.Cast.length) {
    if (typeof payload.Cast[index] !== "string") {
      return res.status(400).send("bad request. some data is incorrect.");
    }
    index++;
  }

  next();
};

module.exports = validateRequestData;