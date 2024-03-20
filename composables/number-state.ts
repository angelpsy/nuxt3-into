export const useNumberState = () => {
  const number = useState(() => Math.round(Math.random() * 1000))
  return number;
};