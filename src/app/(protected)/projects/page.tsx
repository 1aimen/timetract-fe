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

export default function ProjectsView() {
  const [Projects, setProjects] = useState(["Project 1", "Project 2"]);
  const [newProject, setNewProject] = useState("");

  const handleCreateProject = () => {
    if (!newProject.trim()) return;
    setProjects([...Projects, newProject]);
    setNewProject("");
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Manage Projects" />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
         

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Create Project
                <PlusIcon className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create a new Project</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input
                  placeholder="Project name"
                  value={newProject}
                  onChange={(e) => setNewProject(e.target.value)}
                />
                <Button onClick={handleCreateProject}>Create</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue={Projects[0]} className="w-full">
          <TabsList>
            {Projects.map((Project) => (
              <TabsTrigger key={Project} value={Project}>
                {Project}
              </TabsTrigger>
            ))}
          </TabsList>

          {Projects.map((Project) => (
            <TabsContent key={Project} value={Project}>
              <ComponentCard title={Project}>
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
