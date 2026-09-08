"use client";

import { useState } from "react";
import { updateJobApplication } from "../actions/job-applications";
import { Board, Column } from "../models/models.types";

export function useBoard(initialBoard?: Board | null) {
  const [board, setBoard] = useState<Board | null>(initialBoard ?? null);
  const [columns, setColumns] = useState<Column[]>(
    initialBoard?.columns ?? [],
  );
  const [error, setError] = useState<string | null>(null);
  const [syncedBoard, setSyncedBoard] = useState(initialBoard);

  // Re-sync local state when the server sends a fresh board after revalidation.
  if (initialBoard !== syncedBoard) {
    setSyncedBoard(initialBoard);
    setBoard(initialBoard ?? null);
    setColumns(initialBoard?.columns ?? []);
  }

  async function moveJob(
    jobApplicationId: string,
    newColumnId: string,
    newOrder: number,
  ) {
    const result = await updateJobApplication(jobApplicationId, {
      columnId: newColumnId,
      order: newOrder,
    });

    if (result.error) {
      setError(result.error);
    }

    return result;
  }

  return { board, columns, error, moveJob };
}
