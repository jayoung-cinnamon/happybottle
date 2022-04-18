import { format } from "date-fns";
export const getDateStringType = () => {
  const date = new Date();
  const formattedDate = format(date, "yyyyMMddHHmmss");
  return formattedDate;
};
