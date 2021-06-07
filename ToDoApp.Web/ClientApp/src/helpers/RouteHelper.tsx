export class RouteHelper {
  static IsLogin = (path: string): boolean => {
    if (path.endsWith("login")) return true;
    return false;
  };

  static IsRegister = (path: string): boolean => {
    if (path.endsWith("register/1")) return true;
    return false;
  };

  static IsHomepage = (path: string): boolean => {
    if (path == "/") return true;
    return false;
  };

  static GetServiceId = (path: string): string => {
    var parsedPath = path.split("/");
    return parsedPath[2];
  };

  static GetServiceProviderId = (path: string): string => {
    var parsedPath = path.split("/");
    return parsedPath[2];
  };
}
