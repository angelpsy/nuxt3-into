export const useResponseHello = () => {
  const response = useFetch('/api/hello');

  return response.data;
};