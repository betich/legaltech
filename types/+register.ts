import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/search": {};
  "/claim": {};
  "/lawyer": {};
  "/case": {};
  "/case/:id": {
    "id": string;
  };
  "/evidence": {};
};