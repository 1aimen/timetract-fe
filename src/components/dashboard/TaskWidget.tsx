"use client"

import React, { useState, useEffect } from "react"
import { Play, Pause, StopCircle, Clock, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const initialTasks = [
  { label: "Morning Shift", type: "shift" },
  { label: "Afternoon Shift", type: "shift" },
  { label: "Evening Shift", type: "shift" },
  { label: "Break", type: "general" },
  { label: "Meeting", type: "general" },
]

const TaskWidget = () => {
  const [tasks, setTasks] = useState(initialTasks)
  const [selectedTask, setSelectedTask] = useState<string>(tasks[0].label)
  const [isRunning, setIsRunning] = useState(false)
  const [isEnded, setIsEnded] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [newTask, setNewTask] = useState("")

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isRunning) {
      interval = setInterval(() => {
        setElapsed((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning])

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h > 0 ? `${h}h ` : ""}${m}m ${s}s`
  }

  const handleStart = () => {
    setIsRunning(true)
    setIsEnded(false)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleEnd = () => {
    setIsRunning(false)
    setIsEnded(true)
    setElapsed(0)
  }

  const handleAddTask = () => {
    if (newTask.trim() === "") return
    const newEntry = { label: newTask.trim(), type: "custom" }
    setTasks((prev) => [...prev, newEntry])
    setSelectedTask(newEntry.label)
    setNewTask("")
    setShowCustomInput(false)
  }

  return (
    <div
      className={cn(
        "flex flex-col my-4 sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4",
        "rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]",
        "px-4 py-2 w-full max-w-2xl mx-auto"
      )}
    >
      {/* Left side: Clock + Task select */}
{/* Left side: Clock + Task select + Timer */}
<div className="flex items-center gap-3 min-w-0 flex-1 flex-wrap sm:flex-nowrap">
  <Clock className="w-4 h-4 text-gray-500 shrink-0" />

  {/* Task Select / Input */}
  {!showCustomInput ? (
    <Select
      value={selectedTask}
      onValueChange={(val) => {
        if (val === "custom") {
          setShowCustomInput(true)
        } else {
          setSelectedTask(val)
        }
      }}
    >
      <SelectTrigger className="w-[160px] sm:w-[180px] h-8 text-sm">
        <SelectValue placeholder="Select task" />
      </SelectTrigger>
      <SelectContent>
        {tasks.map((task) => (
          <SelectItem key={task.label} value={task.label}>
            {task.label}
          </SelectItem>
        ))}
        <SelectItem value="custom">
          <div className="flex items-center gap-1 text-blue-600">
            <Plus className="w-3 h-3" /> Add Custom Task
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ) : (
    <div className="flex items-center gap-2">
      <Input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task..."
        className="h-8 w-[140px] sm:w-[150px] text-sm"
      />
      <Button size="sm" onClick={handleAddTask}>
        Add
      </Button>
    </div>
  )}

  {/* Timer — stays right next to select */}
  <div
    className={cn(
      "text-sm font-medium text-center ml-2 shrink-0",
      isRunning
        ? "text-green-600 dark:text-green-400"
        : "text-gray-600 dark:text-gray-300"
    )}
  >
    {isEnded ? "Ended" : formatTime(elapsed)}
  </div>
</div>


      {/* Controls */}
      <div className="flex justify-center sm:justify-end gap-2 sm:gap-3 flex-wrap sm:flex-nowrap w-full sm:w-auto">
        {!isRunning ? (
          <Button
            size="sm"
            onClick={handleStart}
            className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto"
          >
            <Play className="w-4 h-4 mr-1" /> Start
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={handlePause}
            className="bg-yellow-500 hover:bg-yellow-600 text-white w-full sm:w-auto"
          >
            <Pause className="w-4 h-4 mr-1" /> Pause
          </Button>
        )}
        <Button
          size="sm"
          onClick={handleEnd}
          className="bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto"
        >
          <StopCircle className="w-4 h-4 mr-1" /> End
        </Button>
      </div>
    </div>
  )
}

export default TaskWidget
