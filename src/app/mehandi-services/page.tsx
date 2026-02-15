import { Suspense } from "react";
import ServiceClient from "./ServiceClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceClient />
    </Suspense>
  );
}
