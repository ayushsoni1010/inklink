import { toast } from "react-toastify";

const helpers: any = {
  validEmail: (email: string): boolean => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const specials = /[*|\":<>[\]{}`\\()';&$]/;
    return pattern.test(email) && !specials.test(email);
  },
  alertToastHandling: ({
    message,
    transition,
    position = "top-right",
    ...props
  }: {
    message: string;
    transition: any;
    position: any;
    props: any;
  }): void => {
    toast(message, {
      position: position || "top-right",
      hideProgressBar: false,
      autoClose: 5000,
      transition: transition,
      ...props,
    });
  },
  apiURL:
    process.env.NODE_ENV !== "production"
      ? `http://localhost:3000`
      : `https://${window.location.host}`,
};

export { helpers };
