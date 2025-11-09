"use client";

import { Calendar as CalendarIcon, Plus } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/button/Button";
import Badge from "@/components/ui/badge/Badge";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { BadgeColor } from "@/components/ui/badge/Badge";
import Input from "@/components/form/input/InputField";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export default function Leave() {
  const [teams, setTeams] = useState(["Team 1", "Team 2"]);
  const [newTeam, setNewTeam] = useState("");

  const handleCreateTeam = () => {
    if (!newTeam.trim()) return;
    setTeams([...teams, newTeam]);
    setNewTeam("");
  };
  // Mock data for leave requests
const leaveRequests: {
  id: number;
  type: string;
  from: string;
  to: string;
  days: number;
  reason: string;
  color: BadgeColor; // 👈 use the type here
  status: string;
}[] = [
    {
      id: 1,
      type: "Vacation",
      from: "2024-03-15",
      to: "2024-03-20",
      days: 5,
      reason: "Family trip",
      color: "success",
      status: "approved",
    },
    {
      id: 2,
      type: "Sick Leave",
      from: "2024-03-10",
      to: "2024-03-11",
      days: 2,
      reason: "Medical appointment",
      color: "warning",
      status: "pending",
    },
    {
      id: 3,
      type: "Personal",
      from: "2024-02-28",
      to: "2024-02-28",
      days: 1,
      reason: "Personal matter",
      color: "error",
      status: "rejected",
    },
  ];

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Leave request" />

      <div className="flex items-center justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-auto" >
           <Plus className="h-4 w-4" />
          Request Leave
        </Button>
            </DialogTrigger>
            <DialogContent className="z-1000 sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create a new team</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input
                  placeholder="Reason"
                  value={newTeam}
                  onChange={(e) => setNewTeam(e.target.value)}
                />
                <Button onClick={handleCreateTeam}>Create</Button>
              </div>
            </DialogContent>
          </Dialog>

      </div>

      {/* Leave Balance Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Annual Leave", value: 12 },
          { title: "Sick Leave", value: 8 },
          { title: "Personal Leave", value: 3 },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
          >
            <div className="pb-3 text-sm font-medium">{item.title}</div>
            <div>
              <div className="text-2xl font-bold">{item.value} days</div>
              <p className="text-xs text-muted-foreground mt-1">Available</p>
            </div>
          </div>
        ))}
      </div>

      {/* Leave History */}
      <div>
        <div className="my-6">
          <div className="font-semibold text-lg">Leave History</div>
          <div className="text-gray-400 text-sm">
            View all your leave requests and their status
          </div>
        </div>

        <div className="space-y-4">
          {leaveRequests.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{request.type}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {request.from} to {request.to} ({request.days}{" "}
                    {request.days === 1 ? "day" : "days"})
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {request.reason}
                  </div>
                </div>
              </div>

              <Badge color={request.color}>
                {request.status.charAt(0).toUpperCase() +
                  request.status.slice(1)}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
