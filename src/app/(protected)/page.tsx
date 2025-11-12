'use client'
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { DataCard } from "@/components/dashboard/DataCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TodaySchedule from "@/components/dashboard/TodaySchedule";
import React from "react";
import Alert from "@/components/ui/alert/Alert";



export default function BlankPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Home" />
    
          <Alert
            variant="info"
            title="Success Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />    
                <div className="col-span-12 mt-6 space-y-6 xl:col-span-7">
        <DataCard />



      </div>
      <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-1 md:gap-6">
        <TodaySchedule />
      </div>


      <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 md:gap-6">
        <RecentActivity />
        <QuickActions/>
      </div>
        </div>

  );
}
