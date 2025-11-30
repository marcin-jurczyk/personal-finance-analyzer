-- Enable pgcrypto for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- USERS TABLE (Supabase Auth handles primary auth)
CREATE TABLE IF NOT EXISTS profiles (
    id uuid PRIMARY KEY REFERENCES auth.users(id),
    name text,
    created_at timestamp DEFAULT now()
);

-- ACCOUNTS TABLE
CREATE TABLE IF NOT EXISTS accounts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES profiles(id),
    name text NOT NULL,
    balance numeric DEFAULT 0,
    created_at timestamp DEFAULT now()
);

-- CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    type text CHECK (type IN ('income', 'expense')) NOT NULL
);

-- TRANSACTIONS TABLE
CREATE TABLE IF NOT EXISTS transactions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id uuid REFERENCES accounts(id),
    category_id uuid REFERENCES categories(id),
    amount numeric NOT NULL,
    description text,
    date date NOT NULL,
    created_at timestamp DEFAULT now()
);

-- Optional: initial categories for seeding
INSERT INTO categories (name, type) VALUES
('Salary', 'income'),
('Food', 'expense'),
('Rent', 'expense'),
('Entertainment', 'expense');
