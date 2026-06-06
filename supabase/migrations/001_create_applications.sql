create table if not exists public.applications (
  id           uuid primary key default gen_random_uuid(),
  company      text not null,
  role         text not null,
  url          text not null default '',
  status       text not null check (status in ('APPLIED', 'INTERVIEW', 'OFFER', 'REJECTED')) default 'APPLIED',
  notes        text not null default '',
  applied_date date not null,
  created_at   timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.applications enable row level security;

-- Allow all operations for anon key (no auth yet — tighten when auth is added)
create policy "Allow all for anon"
  on public.applications
  for all
  using (true)
  with check (true);
