export const formatPriceNumber = ({ value }: { value: string }) => {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(Number(value));
};
