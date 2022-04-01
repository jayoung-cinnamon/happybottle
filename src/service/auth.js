import { emit } from "process";
import { authService } from "./firebase";

//회원가입
const signUp = (email, password) => {
  return authService.createUserWithEmailAndPassword(
    authService,
    email,
    password
  );
};

//로그인
export const signIn = (email, password) => {
  return authService.signInWithEmailAndPassword(authService, email, password);
};

export default signUp;
