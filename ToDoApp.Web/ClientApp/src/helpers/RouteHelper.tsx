export class RouteHelper {
  static IsLogin = (path: string): boolean => {
    if (path.endsWith("login")) return true;
    return false;
  };

  static IsRegister = (path: string): boolean => {
    if (path.endsWith("register")) return true;
    return false;
  };
}
