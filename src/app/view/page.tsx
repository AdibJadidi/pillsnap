import PatientViewContent from "@/features/pill/components/PatientViewContent";
import React, { Suspense } from "react";

const PatientViewPage = () => {
  return (
    <div className="min-h-screen bg-[#0d1e4c] flex items-center justify-center p-4">
      <div className="scale-105 md:scale-110 transition-transform">
        <Suspense
          fallback={
            <div className="text-sm font-medium text-zinc-400 animate-pulse">
              Loading Pill Schedule...
            </div>
          }
        >
          <PatientViewContent />
        </Suspense>
      </div>
    </div>
  );
};

export default PatientViewPage;
