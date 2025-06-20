-- 1. Delete table if it exists
drop table if exists subscriptions cascade;

-- 2. Create the subscriptions table
create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  location text,
  subscribed_at timestamp with time zone default now()
);

-- 3. Enable Row Level Security (RLS)
alter table subscriptions enable row level security;

-- 4. Allow inserts for anonymous (or authenticated) users
create policy "Allow insert for anyone"
  on subscriptions
  for insert
  with check (true);



  create table public.subscriptions (
  id uuid not null default gen_random_uuid (),
  name text not null,
  email text not null,
  location text null,
  subscribed_at timestamp with time zone null default now(),
  address jsonb null default '{}'::jsonb,
  district text not null default '''xxx''::text'::text,
  compound text not null default '''xxx''::text'::text,
  constraint subscriptions_pkey primary key (id)
) TABLESPACE pg_default;
