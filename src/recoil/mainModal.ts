import { atom } from "recoil";

export const modalRecoilStore = atom({
  key: "modalOpen",
  default: false,
});
