export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  const data = {
    toJSON() {
      return {
        item: {
          id,
        },
      };
    },
  };
  return data;
});
