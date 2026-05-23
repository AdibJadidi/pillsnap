import AdminPanel from "@/features/pill/components/AdminPanel";
import PhonePreview from "@/features/pill/components/PhonePreview";
import React from "react";

const page = () => {
  return (
    <main className="flex w-full h-screen bg-blue-950 ">
      <section className="flex-1">
        <AdminPanel />
      </section>
      <section className="w-[500px] h-full bg-blue-900 flex justify-center items-center ">
        <PhonePreview />
      </section>
    </main>
  );
};

export default page;
