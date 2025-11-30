-- Create contacts table
DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT,
  user_agent TEXT
);

-- Create index on created_at for faster queries
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
