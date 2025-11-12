import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { toast } from "sonner";
import { MoreVertical } from "lucide-react";

// Define the TypeScript interface for the schedule rows
interface Schedule {
  id: number;
  task: string;       // Name of the shift/task
  category: string;   // Type of task/shift
  time: string;       // Time of the task
  status: "Confirmed" | "Pending" | "Canceled"; // Status of the task
}

// Example schedule data for today
const todaySchedule: Schedule[] = [
  { id: 1, task: "Morning Shift", category: "Shift", time: "08:00 - 12:00", status: "Confirmed" },
  { id: 2, task: "Team Meeting", category: "Meeting", time: "09:30 - 10:30", status: "Pending" },
  { id: 3, task: "Code Review", category: "Work", time: "11:00 - 12:30", status: "Confirmed" },
  { id: 4, task: "Lunch Break", category: "Break", time: "12:30 - 13:30", status: "Confirmed" },
  { id: 5, task: "Afternoon Shift", category: "Shift", time: "13:30 - 17:30", status: "Pending" },
];

export default function TodaySchedule() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Today Schedule
        </h3>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            Filter
          </button>
          <button
            onClick={() => toast.success("Viewing all tasks")}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            See all
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-y border-gray-100 dark:border-gray-800">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-sm dark:text-gray-400">
                Task
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-sm dark:text-gray-400">
                Category
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-sm dark:text-gray-400">
                Time
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-sm dark:text-gray-400">
                Status
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-sm dark:text-gray-400">
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {todaySchedule.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="py-3 text-gray-800 text-sm dark:text-white/90">
                  {item.task}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400">
                  {item.category}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400">
                  {item.time}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      item.status === "Confirmed"
                        ? "success"
                        : item.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="py-3 pl-auto ml-auto">
                  <button className="" onClick={() => toast(`Action on ${item.task}`)}>
                    <MoreVertical className="text-gray-600 dark:text-gray-400" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
