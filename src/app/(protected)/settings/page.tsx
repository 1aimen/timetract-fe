import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UserAddressCard from "@/components/user-profile/UserAddressCard";
import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Settings | TimeTract",
  description:
    "This is  Profile page for TimeTract -  Tailwind CSS Admin Dashboard Template",
};

export default function Profile() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Settings" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">

        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
          {/*add preferences here*/}
        </div>
      </div>
    </div>
  );
}
