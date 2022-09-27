import { useRouter } from "next/router";
import LoginLayout from "../layouts/LoginLayout";
import MainLayout from "../layouts/MainLayout";

const useLayout = () => {
  const router = useRouter();
  const pathData = router.asPath;
  let Layout = MainLayout;
  if (pathData === "/") {
    Layout = LoginLayout;
  } else {
    Layout = MainLayout;
  }
  return Layout;
};

export default useLayout;
