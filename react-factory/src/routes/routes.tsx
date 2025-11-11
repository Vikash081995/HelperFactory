import { Suspense } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Playground from "../pages/Playground";

const Routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "playground",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Playground />
          </Suspense>
        ),
      },
    ],
  },
];

export default Routes;
