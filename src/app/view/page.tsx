"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PhonePreview from "@/features/pill/components/PhonePreview";
import { usePillStore } from "@/features/pill/store/usePillStore";

const PatientViewPage = () => {
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

  return (
    <div className="min-h-screen bg-[#0d1e4c] flex items-center justify-center p-4">
      <div className="scale-105 md:scale-110 transition-transform">
        <PhonePreview />
      </div>
    </div>
  );
};

export default PatientViewPage;
