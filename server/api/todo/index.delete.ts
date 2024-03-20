import { todoServiceInstance } from './../../../utils/service/todo';

export default defineEventHandler(async (event) => {
  const items = await todoServiceInstance.deleteAll();
  setResponseStatus(event, 204);
});
