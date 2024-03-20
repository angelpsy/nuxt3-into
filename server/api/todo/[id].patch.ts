import { todoServiceInstance } from './../../../utils/service/todo';

export default defineEventHandler(async(event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);

  if (!id) {
    throw new Error("id is required");
  }

  const items = await todoServiceInstance.update(id, body);
  const data = {
    toJSON() {
      return {
        ...items,
      }
    },
  }
  return data;
});
