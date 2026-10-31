-- วางใน Supabase > SQL Editor แล้วกด Run (รันซ้ำได้ ไม่มีปัญหา)
create table if not exists app_state (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);
alter table app_state enable row level security;
drop policy if exists "open read" on app_state;
drop policy if exists "open insert" on app_state;
drop policy if exists "open update" on app_state;
create policy "open read"   on app_state for select to anon using (true);
create policy "open insert" on app_state for insert to anon with check (true);
create policy "open update" on app_state for update to anon using (true) with check (true);
