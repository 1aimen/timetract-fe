'use client'
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "@/components/ui/button/Button";
import {  Settings } from "lucide-react";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";





export default function ReportsPage() {

    const [teams,] = useState(["Organization","Project", "Team" ,"Personal","Timesheets"]);

  return (
    <div>
      <PageBreadcrumb pageTitle="Reports" />

      <div >
        <Tabs defaultValue={teams[0]}  className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
  <TabsList>            {teams.map((team) => (
              <TabsTrigger key={team} value={team}  className="flex-shrink-0">
                {team}
              </TabsTrigger>
            ))}
          </TabsList>

          {teams.map((team) => (
            <TabsContent key={team} value={team}>
              <ComponentCard title={team}>
                <div className="flex justify-end">
                        <Button className="" variant="outline" >
                Schedule
              </Button>
                                      <Button className="" variant="outline" >
                Export
              </Button>
               <Button className="ml-2 " variant="outline" >
                <Settings className="w-5 h-5 " />
              </Button>
                  
                  </div>                       
                    <div className="grid grid-cols-12 gap-4 md:gap-6">
                      <div className="col-span-12 space-y-6 xl:col-span-7">
                        <EcommerceMetrics />
                
                        <MonthlySalesChart />
                      </div>
                
                      <div className="col-span-12 xl:col-span-5">
                        <MonthlyTarget />
                      </div>
                
                      <div className="col-span-12">
                        <StatisticsChart />
                      </div>
 
                    </div>
              </ComponentCard>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
