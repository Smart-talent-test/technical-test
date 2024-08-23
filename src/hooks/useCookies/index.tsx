import Cookies from "js-cookie";

const useCookies = () => {
  const setCookie = (
    cookieName: string,
    value: string,
    options?: Cookies.CookieAttributes,
  ) => {
    Cookies.set(cookieName, value, options);
  };

  const getCookie = (cookieName: string) => {
    return Cookies.get(cookieName);
  };

  const removeCookie = (cookieName: string) => {
    Cookies.remove(cookieName);
  };

  return { setCookie, getCookie, removeCookie };
};

export default useCookies;
