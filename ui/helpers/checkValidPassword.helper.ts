
interface Props { password: string }

export const checkValidPassword = ({ password }: Props) => {
  if (password.length < 6) return false;
  
  return true;
};
