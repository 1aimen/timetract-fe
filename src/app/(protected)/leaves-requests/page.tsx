"use client";

import { useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import LeavesDataCard from "@/components/leaves-requests/LeavesDataCard";
import { SunIcon, BriefcaseMedical, PersonStanding, PlusIcon } from "lucide-react";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Alert from "@/components/ui/alert/Alert";
import LeaveHistoryCard, { LeaveRequest } from "@/components/leaves-requests/LeaveHistory";

export default function Leave() {
  const [teams, setTeams] = useState(["Team 1", "Team 2"]);
  const [newTeam, setNewTeam] = useState("");

  const handleCreateTeam = () => {
    if (!newTeam.trim()) return;
    setTeams([...teams, newTeam]);
    setNewTeam("");
  };

  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: 1,
      type: "Vacation",
      from: "2025-11-01",
      to: "2025-11-05",
      days: 5,
      reason: "Family trip to Paris",
      color: "success",
      status: "approved",
      extraInfo: "Approved by HR. Remember to submit your travel receipts.",
    },
    {
      id: 2,
      type: "Sick Leave",
      from: "2025-11-07",
      to: "2025-11-08",
      days: 2,
      reason: "Medical checkup",
      color: "warning",
      status: "pending",
    },
    {
      id: 3,
      type: "Personal Leave",
      from: "2025-11-10",
      to: "2025-11-10",
      days: 1,
      reason: "Important personal matter",
      color: "error",
      status: "rejected",
      extraInfo: "Rejected due to insufficient leave balance.",
    },
  ]);

  const handleUpdateLeave = (updated: LeaveRequest) => {
    setLeaveRequests((prev) =>
      prev.map((req) => (req.id === updated.id ? updated : req))
    );
  };

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Leave request" />

      <Alert
        variant="info"
        title="Success Message"
        message="Be cautious when performing this action."
        showLink={true}
        linkHref="/"
        linkText="Learn more"
      />

      <div className="flex items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-auto">
              Request Leave
              <PlusIcon className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
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
        <LeavesDataCard title="Annual Leave" value={12} icon={<SunIcon className="w-6 h-6" />} />
        <LeavesDataCard title="Sick Leave" value={8} icon={<BriefcaseMedical className="w-6 h-6" />} />
        <LeavesDataCard title="Personal Leave" value={3} icon={<PersonStanding className="w-6 h-6" />} />
      </div>

      {/* Leave History */}
      <div>
        <div className="my-6">
          <div className="font-semibold text-lg">Leave History</div>
          <div className="text-gray-400 text-sm">
            View all your leave requests and their status
          </div>
        </div>
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Activity
        </h3>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto"></div>
        <div className="space-y-4">
          {leaveRequests.map((request) => (
            <LeaveHistoryCard key={request.id} request={request} onUpdate={handleUpdateLeave} />
          ))}
          
        </div>
      </div>      </div>
    </div>
  );
}
