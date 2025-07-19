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
  .select("*")
  .eq("owner_id", data.user.id);

  console.log(rooms);
  console.log(rooms[0]?.room_name);

  return (
    <div>
      <p>{data.user.id}</p>
      <p>{data.user.email}</p>
      <RoomCard roomName={rooms[0]?.room_name} />
    </div>
  );
}
