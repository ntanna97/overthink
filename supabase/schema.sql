-- Run in Supabase SQL Editor. Never expose service_role to browsers.
create table if not exists public.overthink_rooms (
  code text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.overthink_rooms enable row level security;
-- No public read/write policy: only server-side service_role may access rooms.
create or replace function public.overthink_cas(room_code text, expected_version integer, next_data jsonb)
returns boolean language plpgsql security invoker as $$
begin
 update public.overthink_rooms set data=next_data,updated_at=now()
 where code=room_code and (data->>'version')::integer=expected_version;
 return found;
end $$;
create index if not exists overthink_rooms_last_activity on public.overthink_rooms(updated_at);
-- Optional cleanup using Supabase scheduled job: delete rows older than 2 hours.
