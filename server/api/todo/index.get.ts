import { todoServiceInstance } from './../../../utils/service/todo';

export default defineEventHandler(async (event) => {
  const items = await todoServiceInstance.findAll();
  const data = {
    toJSON() {
      return {
        items,
      };
    },
  };
  return data;
});
