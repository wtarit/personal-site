import { useEffect } from "react";
import { useLocation } from "@remix-run/react";
import { useGoogleAnalytics } from "~/lib/googleanalytics";

export function GoogleAnalytics() {
  const location = useLocation();
  const gaMeasurementId = "G-J9WDECZG70";

  const isGaInitialized = useGoogleAnalytics(gaMeasurementId);

  useEffect(() => {
    if (isGaInitialized && gaMeasurementId) {
      // @ts-ignore
      window.gtag("config", gaMeasurementId, {
        page_path: location.pathname,
      });
    }
  }, [isGaInitialized, location, gaMeasurementId]);
  return null;
}
