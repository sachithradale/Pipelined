"use client";

import { useQuery } from "@tanstack/react-query";
import { getApplicationsAction } from "@/actions/applications";

export function useApplications() {
  return useQuery({
    queryKey: ["applications"],
    queryFn: () => getApplicationsAction(),
  });
}
