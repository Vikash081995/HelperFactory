import { Suspense } from "react";

import Playground from "../pages/Playground";
import App from "../App";

const Routes = [
  {
    path: "/",
    element: <App />,
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
