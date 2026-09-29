import { RouterProvider } from "@tanstack/react-router";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { router } from "./router";

export function App() {
  return (
    <LocaleProvider>
      <RouterProvider router={router} />
    </LocaleProvider>
  );
}
