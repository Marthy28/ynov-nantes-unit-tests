module.exports = {
  get: {
    description: "Get todos",
    operationId: "getTodos",
    parameters: [],
    responses: {
      200: {
        description: "Todos were obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Todo",
            },
          },
        },
      },
    },
  },
};
