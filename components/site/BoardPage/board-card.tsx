"use client";

import { Calendar, User } from "lucide-react";
import type React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface Task {
  id: number;
  name: string;
  assignedTo: string;
  createdAt: string;
  completed?: boolean;
}

interface BoardCardProps {
  title: string;
  createdBy: string;
  createdAt: string;
  tasks: Task[];
}

const BoardCard: React.FC<BoardCardProps> = ({
  title,
  createdBy,
  createdAt,
  tasks,
}) => {
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set());

  const handleTaskComplete = (taskId: number) => {
    const newCompleted = new Set(completedTasks);
    if (completedTasks.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const completedCount = completedTasks.size;
  const totalTasks = tasks.length;

  return (
    <div className="w-[310px] flex flex-col h-fit border border-neutral-300 rounded-md px-2 py-1">
      <div className="flex items-center justify-between   px-1">
        <h3 className="font-semibold text-lg text-balance">{title}</h3>
        <p className="text-xs">
          {completedCount}/{totalTasks}
        </p>
      </div>

      <div className="flex-1 space-y-2 py-2">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p className="text-sm">No tasks yet</p>
            <p className="text-xs">Add your first task to get started</p>
          </div>
        ) : (
          tasks.map((task) => {
            const isCompleted = completedTasks.has(task.id) || task.completed;
            return (
              <div
                key={task.id}
                className={cn(
                  "group flex items-center justify-between px-2 py-1 border rounded-md transition-all duration-200 hover:shadow-sm border-neutral-200"
                )}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        "text-sm font-medium truncate",
                        isCompleted && "line-through text-muted-foreground"
                      )}
                    >
                      {task.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-400 justify-between">
                      <div className="flex items-center gap-1 ">
                        <User className="h-3 w-3" />
                        <span className="truncate max-w-20">
                          {task.assignedTo}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{task.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="pt-2 border-t bg-muted/20 px-1">
        <div className="flex items-center justify-between w-full text-xs text-neutral-500">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>
              Created by
              <span className="font-semibold "> {createdBy}</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
