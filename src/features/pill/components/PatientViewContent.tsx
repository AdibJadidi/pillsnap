"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePillStore } from "../store/usePillStore";
import PhonePreview from "./PhonePreview";

const PatientViewContent = () => {
  const searchParams = useSearchParams();
  const loadScheduleFormUrl = usePillStore(
    (state) => state.loadScheduleFormUrl,
  );

  useEffect(() => {
    const encodedData = searchParams.get("data");
    if (encodedData) {
      loadScheduleFormUrl(encodedData);
    }
  }, [searchParams, loadScheduleFormUrl]);

  return <PhonePreview />;
};

export default PatientViewContent;
