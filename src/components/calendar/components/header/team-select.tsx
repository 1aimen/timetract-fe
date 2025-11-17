
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCalendar } from "../../contexts/calendar-context";
import { AvatarGroup } from "@/components/ui/avatar-group";

export function TeamSelect() {
  const { teams, selectedTeamId, setSelectedTeamId } = useCalendar();

  return (
    <Select value={selectedTeamId} onValueChange={setSelectedTeamId}>
      <SelectTrigger className="flex-1 md:w-48">
        <SelectValue />
      </SelectTrigger>

      <SelectContent align="end">
        <SelectItem value="all">
          <div className="flex items-center gap-1">
            <AvatarGroup max={2}>
              {teams.map(team => (
                <Avatar key={team.id} className="size-6 text-xxs">
                  <AvatarFallback className="text-xxs">{team.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            All
          </div>
        </SelectItem>

        {teams.map(team => (
          <SelectItem key={team.id} value={team.id} className="flex-1">
            <div className="flex items-center gap-2">
              <Avatar key={team.id} className="size-6">
                <AvatarFallback className="text-xxs">{team.name[0]}</AvatarFallback>
              </Avatar>

              <p className="truncate">{team.name}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
