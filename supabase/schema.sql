-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query)
-- to create the table used to store contact form submissions.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  service text,
  budget text,
  message text not null,
  locale text
);

-- Lock the table down: only the service role (used server-side by the
-- /api/contact route) can read or write. No public policies are created.
alter table public.contact_submissions enable row level security;
