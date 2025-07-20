import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

import RoomCard from "@/components/RoomCard";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  let { data: rooms } = await supabase
  .from("rooms")
  .select("room_id, room_name, created_at")
  .eq("owner_id", data.user.id)
  .order("created_at", { ascending: false });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-8">
      {rooms.map((room) => (
        <RoomCard key={room.room_id} room={room} />
      ))}
    </div>
  );
}
