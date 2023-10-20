-- TABLE FOR STORING USER INFORMATION
CREATE TABLE users 
(
        id              SERIAL PRIMARY KEY,
        email           TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
        full_name       TEXT NOT NULL,
        password        TEXT NOT NULL,
        gender          TEXT NOT NULL,
        status          TEXT NOT NULL,
        created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);