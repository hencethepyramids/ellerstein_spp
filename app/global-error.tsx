"use client"; // Marks this as a Client Component

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong</h1>
      <Error statusCode={500} />
    </div>
  );
}
