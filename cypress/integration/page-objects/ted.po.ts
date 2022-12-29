import { HomePO } from "./pages/home.po";
import { LoginPO } from "./pages/login.po";
import { PasswordResetPO } from "./pages/password-reset.po";

class Ted {
  constructor() {}

  home() {
    return new HomePO();
  }

  login() {
    return new LoginPO();
  }

  resetPassword() {
    return new PasswordResetPO();
  }
}

export const TedPO = new Ted();
