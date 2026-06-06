import { ApplicationsTable } from "@/components/shared/ApplicationsTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Pipelined</h1>
          <p className="mt-1 text-muted-foreground">Your hiring pipeline, streamlined.</p>
        </div>
        <ApplicationsTable />
      </div>
    </main>
  );
}
