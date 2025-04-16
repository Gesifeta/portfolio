
CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL, -- never store plain text passwords!
    salt TEXT NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    profile_image TEXT,
    bio TEXT,
    role VARCHAR(50) DEFAULT 'user', -- e.g. 'user', 'admin', 'instructor'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    id UUID PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    description TEXT,
    category VARCHAR(50) NOT NULL,
    technologies TEXT[],
    github_url TEXT,
    live_url TEXT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE skills (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    description TEXT,
    image TEXT
);
CREATE TABLE skill_sets (
    id UUID PRIMARY KEY,
    skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    image TEXT
);
-- Main badges table
CREATE TABLE badges (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    awarded_date DATE,
    awarded_by VARCHAR(255),
    badge_link TEXT,
    description TEXT,
    image TEXT
);

-- Badge skills table
CREATE TABLE badge_skills (
  id UUID PRIMARY KEY,
    badge_id UUID REFERENCES badges(id) ON DELETE CASCADE,
    skill_name VARCHAR(100) NOT NULL
);
CREATE TABLE certifications (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    awarded_by VARCHAR(255) NOT NULL,
    certification_number VARCHAR(100),
    certification_link TEXT,
    description TEXT,
    awarded_date DATE,
    expiration_date DATE,
    image TEXT,
    icon TEXT
);
CREATE TABLE educations (
    id UUID PRIMARY KEY,
    field_of_study VARCHAR(255),
    specialization VARCHAR(255),
    level VARCHAR(100),
    name_of_award VARCHAR(255),
    grade VARCHAR(50),
    awards TEXT[], -- optional: list of honors or awards
    institution VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    start_year INTEGER,
    end_year INTEGER,
    image TEXT
);
-- Main work experience table
CREATE TABLE experiences (
  id UUID PRIMARY KEY,
    position VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    country VARCHAR(100),
    start_year INTEGER,
    end_year INTEGER,
    is_current BOOLEAN DEFAULT FALSE,
    image TEXT
);

-- Separate table for role responsibilities (multiple per experience)
CREATE TABLE experience_responsibilities (
   id UUID PRIMARY KEY,
    experience_id INTEGER REFERENCES experience(id) ON DELETE CASCADE,
    responsibility TEXT NOT NULL
);
