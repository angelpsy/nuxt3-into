import { todoServiceInstance } from '~/utils/service/todo';

export default defineEventHandler(async(event) => {
  const body = await readBody(event);
  const item = await todoServiceInstance.create(body);
  const data = {
    toJSON() {
      return {
        item,
      };
    },
  };
  return data;
})
