const helperTodoCreation = (req) => {
  if (!req.body || !req.body.text || req.body.test === "") {
    return false;
  }
  return true;
};

const helperTodoPatch = (req) => {
  if (
    !req.params ||
    !req.params.id ||
    req.params.test === "" ||
    typeof req.params.id !== "string"
  ) {
    return false;
  }
  return true;
};

module.exports = { helperTodoCreation, helperTodoPatch };
