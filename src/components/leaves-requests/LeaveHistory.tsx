"use client";

import { Calendar as CalendarIcon, Edit2, Info } from "lucide-react";
import { useState } from "react";
import Badge from "@/components/ui/badge/Badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Input from "@/components/form/input/InputField";
import { BadgeColor } from "@/components/ui/badge/Badge";
import { Button } from "../ui/button";

export interface LeaveRequest {
  id: number;
  type: string;
  from: string;
  to: string;
  days: number;
  reason: string;
  color: BadgeColor;
  status: "approved" | "pending" | "rejected";
  extraInfo?: string; // Optional extra info for approved/rejected
}

interface LeaveHistoryCardProps {
  request: LeaveRequest;
  onUpdate?: (updated: LeaveRequest) => void; // optional callback for updating pending requests
}

export default function LeaveHistoryCard({ request, onUpdate }: LeaveHistoryCardProps) {
  const [newReason, setNewReason] = useState(request.reason);
  const [showDialog, setShowDialog] = useState(false);

  const handleSave = () => {
    if (onUpdate) {
      onUpdate({ ...request, reason: newReason });
    }
    setShowDialog(false);
  };

  return (
    
    <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <CalendarIcon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="font-semibold">{request.type}</div>
          <div className="text-sm text-muted-foreground mt-1">
            {request.from} to {request.to} ({request.days} {request.days === 1 ? "day" : "days"})
          </div>
          <div className="text-sm text-muted-foreground mt-1">{request.reason}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Badge color={request.color}>
          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
        </Badge>

        {request.status === "pending" && (
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
<Button
  className="bg-background hover:bg-background" // notice hover:bg-background keeps it the same
  size="icon"
>
  <Edit2 className="text-gray-400 w-4 h-4" />
</Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Modify Leave Request</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input value={newReason} onChange={(e) => setNewReason(e.target.value)} />
                <Button onClick={handleSave}>Save</Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {(request.status === "approved" || request.status === "rejected") && request.extraInfo && (
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>

              <Button   className="bg-background hover:bg-background" // notice hover:bg-background keeps it the same
  size="icon">
                <Info className="text-gray-400 w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{request.status === "approved" ? "Extra Info" : "Reason for Rejection"}</DialogTitle>
              </DialogHeader>
              <div className="mt-2 text-sm text-muted-foreground">{request.extraInfo}</div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
