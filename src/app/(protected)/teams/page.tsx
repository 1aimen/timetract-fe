"use client";

import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { PlusIcon, Settings } from "lucide-react";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";

export default function TeamsView() {
  const [teams, setTeams] = useState(["Team 1", "Team 2"]);
  const [newTeam, setNewTeam] = useState("");

  const handleCreateTeam = () => {
    if (!newTeam.trim()) return;
    setTeams([...teams, newTeam]);
    setNewTeam("");
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Manage Teams" />
      <div className="space-y-6">
        <div className="flex items-center justify-between">

          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-auto">
                Create team
                <PlusIcon className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create a new team</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input
                  placeholder="Team name"
                  value={newTeam}
                  onChange={(e) => setNewTeam(e.target.value)}
                />
                <Button onClick={handleCreateTeam}>Create</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

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
