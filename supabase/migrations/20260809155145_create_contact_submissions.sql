/*
# Create contact_submissions table

1. Purpose
   Stores every contact form submission from the website. Acts as a durable
   backup so submissions are never lost, even when the email notification
   service is not yet configured.

2. New Tables
   - contact_submissions
     - id (uuid, primary key)
     - name (text, not null) — visitor full name
     - business (text) — visitor business name
     - email (text, not null) — visitor email
     - phone (text) — visitor phone
     - business_type (text) — selected business category
     - message (text, not null) — visitor message
     - email_sent (boolean, default false) — whether the notification email was sent
     - created_at (timestamptz, default now)

3. Security
   - RLS enabled.
   - INSERT allowed for anon + authenticated (public contact form, no sign-in).
   - No SELECT/UPDATE/DELETE for anon — only the edge function (service role)
     reads from this table. The public cannot list or read submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text,
  email text NOT NULL,
  phone text,
  business_type text,
  message text NOT NULL,
  email_sent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
