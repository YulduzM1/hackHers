\echo "Delete and recreate bugtracker db?"
\prompt "Return for yes or control-C to cancel > " answer

-- DROPPING AND RECREATING THE DATABASE
DROP DATABASE hackhers;
CREATE DATABASE hackhers;

--CONNECTING TO THE DATABASE AND SCHEMA
\connect hackhers
\i hackhers-schema.sql