import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Avatar from "../ui/avatar/Avatar";

interface Employee {
  id: number;
  name: string;
  role: string;
  currentTask: string;
  status: "On Shift" | "On Break" | "Offline";
  avatar: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Team Lead",
    currentTask: "Morning Shift",
    status: "On Shift",
    avatar: "/images/avatars/avatar-01.jpg",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Developer",
    currentTask: "Fixing Login Bug",
    status: "On Break",
    avatar: "/images/avatars/avatar-02.jpg",
  },
  {
    id: 3,
    name: "Sarah Kim",
    role: "Support Agent",
    currentTask: "Assisting Client",
    status: "On Shift",
    avatar: "/images/avatars/avatar-03.jpg",
  },
  {
    id: 4,
    name: "Lucas Meyer",
    role: "Designer",
    currentTask: "UI Revamp",
    status: "Offline",
    avatar: "/images/avatars/avatar-04.jpg",
  },
  {
    id: 5,
    name: "Sophia Rossi",
    role: "HR Specialist",
    currentTask: "Interview Reviews",
    status: "On Shift",
    avatar: "/images/avatars/avatar-05.jpg",
  },
];

export default function RecentActivity() {
  return (
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

      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Employee
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Role
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Current Schedule
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <Avatar alt={emp.name} />
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {emp.name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {emp.role}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {emp.currentTask}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      emp.status === "On Shift"
                        ? "success"
                        : emp.status === "On Break"
                        ? "warning"
                        : "error"
                    }
                  >
                    {emp.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
