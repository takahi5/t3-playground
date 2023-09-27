"use client";

import { trpc } from "@/utils/trpc";
import React from "react";

export default function NotesContainer() {
  let { data: notes, isLoading, isFetching } = trpc.getNotes.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 20,
      }}
    >
      {notes?.map((note) => (
        <div
          key={note.id}
          style={{ border: "1px solid #ccc", textAlign: "center" }}
        >
          <h3>{note.content}</h3>
        </div>
      ))}
    </div>
  );
}
