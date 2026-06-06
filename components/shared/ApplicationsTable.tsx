"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useApplications } from "@/hooks/useApplications";
import type { ApplicationStatus, JobApplication } from "@/types";

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  APPLIED:   "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100",
  INTERVIEW: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100",
  OFFER:     "bg-green-100 text-green-700 border-green-200 hover:bg-green-100",
  REJECTED:  "bg-red-100 text-red-700 border-red-200 hover:bg-red-100",
};

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  APPLIED:   "Applied",
  INTERVIEW: "Interview",
  OFFER:     "Offer",
  REJECTED:  "Rejected",
};

function StatusBadge({ status }: { status: ApplicationStatus }) {
  return (
    <Badge className={STATUS_STYLES[status]} variant="outline">
      {STATUS_LABELS[status]}
    </Badge>
  );
}

function TableSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <TableRow key={i}>
          <TableCell><Skeleton className="h-4 w-32" /></TableCell>
          <TableCell><Skeleton className="h-4 w-48" /></TableCell>
          <TableCell><Skeleton className="h-5 w-20 rounded-full" /></TableCell>
          <TableCell><Skeleton className="h-4 w-24" /></TableCell>
        </TableRow>
      ))}
    </>
  );
}

function ApplicationRow({ app }: { app: JobApplication }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{app.company}</TableCell>
      <TableCell>{app.role}</TableCell>
      <TableCell>
        <StatusBadge status={app.status} />
      </TableCell>
      <TableCell className="text-muted-foreground">
        {app.appliedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </TableCell>
    </TableRow>
  );
}

function ApplicationsTableInner() {
  const { data, isLoading, error } = useApplications();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Applied Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <TableSkeleton />}

          {error && (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-destructive py-8">
                Failed to load applications.
              </TableCell>
            </TableRow>
          )}

          {!isLoading && !error && data?.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                No applications yet.
              </TableCell>
            </TableRow>
          )}

          {data?.map((app) => (
            <ApplicationRow key={app.id} app={app} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const ApplicationsTable = React.memo(ApplicationsTableInner);
