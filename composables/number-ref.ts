export const useNumberRef = () => {
  const number = ref(Math.random());
  return number;
}