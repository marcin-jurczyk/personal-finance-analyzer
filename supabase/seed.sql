-- seed.example.sql
INSERT INTO categories (name, type)
SELECT * FROM (VALUES
  ('Salary','income'),
  ('Food','expense'),
  ('Rent','expense'),
  ('Entertainment','expense')
) AS t(name, type)
ON CONFLICT DO NOTHING;
