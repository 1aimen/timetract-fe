'use client'
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "@/components/ui/button/Button";
import { PlusIcon, Settings } from "lucide-react";
import BasicTableOne from "@/components/tables/BasicTableOne";





export default function OrganizationPage() {

    const [teams,] = useState(["Billing","Preferences", "Policy" ,"Security","Others"]);

  return (
    <div>
      <PageBreadcrumb pageTitle="Manage Organization" />

      <div >
        <Tabs defaultValue={teams[0]} className="w-full">
          <TabsList>
            {teams.map((team) => (
              <TabsTrigger key={team} value={team}>
                {team}
              </TabsTrigger>
            ))}
          </TabsList>

          {teams.map((team) => (
            <TabsContent key={team} value={team}>
              <ComponentCard title={team}>
                <div className="flex justify-end">
                        <Button className="" variant="outline" >
                Assign
                <PlusIcon className="w-5 h-5" />
              </Button>
               <Button className="ml-2 " variant="outline" >
                <Settings className="w-5 h-5 " />
              </Button>
                  
                  </div>                       
                <BasicTableOne />
              </ComponentCard>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
