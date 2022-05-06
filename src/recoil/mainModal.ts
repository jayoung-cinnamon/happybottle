import { atom } from "recoil";

export const modalRecoilStore = atom({
  key: "modalOpen",
  default: false,
});

export const alertRecoilStore = atom({
  key: "alertOpen",
  default: false,
});
