import { format } from "date-fns";
export const getDateStringType = () => {
  const date = new Date();
  const formattedDate = format(date, "yyyyMMddHHmmss");
  return formattedDate;
};

export const getDate = () => {
  const date = new Date();
  const formattedDate = format(date, "yyyy.MM.dd HH:mm:ss");
  return formattedDate;
};
