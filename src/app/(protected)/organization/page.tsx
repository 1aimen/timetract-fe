"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BillingTab from "@/components/organization-tabs/BillingTab";
import OthersTab from "@/components/organization-tabs/OthersTab";
import PolicyTab from "@/components/organization-tabs/PolicyTab";
import PreferencesTab from "@/components/organization-tabs/PreferencesTab";
import SecurityTab from "@/components/organization-tabs/SecurityTab";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function OrganizationPage() {
  const tabs = [
    { name: "Billing", component: <BillingTab /> },
    { name: "Preferences", component: <PreferencesTab /> },
    { name: "Policy", component: <PolicyTab /> },
    { name: "Security", component: <SecurityTab /> },
    { name: "Others", component: <OthersTab /> },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Manage Organization" />
            <Tabs defaultValue={tabs[0].name} className="w-full mt-4">

<ScrollArea className="w-full whitespace-nowrap rounded-md">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.name} value={tab.name}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
    </ScrollArea>


        {tabs.map((tab) => (

          <TabsContent key={tab.name} value={tab.name}>
                            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">

        <div className="space-y-6">
            {tab.component}
                </div>
          </div>
          </TabsContent>
      
        ))}
      </Tabs>
    </div>
  );
}
