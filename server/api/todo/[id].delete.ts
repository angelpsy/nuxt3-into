export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  console.log(`Deleting todo item ${id}`);
  setResponseStatus(event, 204);
});
