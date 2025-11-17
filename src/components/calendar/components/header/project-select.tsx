
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCalendar } from "../../contexts/calendar-context";
import { AvatarGroup } from "@/components/ui/avatar-group";

export function ProjectSelect() {
  const { projects, selectedProjectId, setSelectedProjectId } = useCalendar();

  return (
    <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
      <SelectTrigger className="flex-1 md:w-48">
        <SelectValue />
      </SelectTrigger>

      <SelectContent align="end">
        <SelectItem value="all">
          <div className="flex items-center gap-1">
            <AvatarGroup max={2}>
              {projects.map(project => (
                <Avatar key={project.id} className="size-6 text-xxs">
                  <AvatarFallback className="text-xxs">{project.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            All
          </div>
        </SelectItem>

        {projects.map(project => (
          <SelectItem key={project.id} value={project.id} className="flex-1">
            <div className="flex items-center gap-2">
              <Avatar key={project.id} className="size-6">
                <AvatarFallback className="text-xxs">{project.name[0]}</AvatarFallback>
              </Avatar>

              <p className="truncate">{project.name}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
