import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "../components/layouts/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => {
          <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>

      <Route path="/*" element={<h1>404 not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
