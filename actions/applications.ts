"use server";

import { supabase } from "@/lib/supabase";
import type { JobApplication, ApplicationStatus } from "@/types";

function mapRow(row: {
  id: string;
  company: string;
  role: string;
  url: string;
  status: string;
  notes: string;
  applied_date: string;
}): JobApplication {
  return {
    id: row.id,
    company: row.company,
    role: row.role,
    url: row.url,
    status: row.status as ApplicationStatus,
    notes: row.notes,
    appliedDate: new Date(row.applied_date),
  };
}

export async function getApplicationsAction(): Promise<JobApplication[]> {
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .order("applied_date", { ascending: false });

  if (error) throw new Error(error.message);

  return (data ?? []).map(mapRow);
}
