
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
INSERT INTO skills (id, name, category, description, image) VALUES
('c8948cde-249a-4dc7-b697-8dc174ae25c1', 'HTML', 'Frontend', 'Markup language used to structure content on the web.', 'html.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25c2', 'CSS', 'Frontend', 'Style sheet language used for describing the look of a document.', 'css.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25c3', 'JavaScript', 'Frontend', 'Scripting language that enables interactive web pages.', 'javascript.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25c4', 'React', 'Frontend', 'JavaScript library for building user interfaces.', 'react.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25c5', 'Next.js', 'Frontend', 'React framework with server-side rendering and routing.', 'nextjs.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25c6', 'Vue.js', 'Frontend', 'Progressive JavaScript framework for building UIs.', 'vue.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25c7', 'Nuxt.js', 'Frontend', 'Vue framework for server-side rendering and static site generation.', 'nuxt.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25c8', 'Angular', 'Frontend', 'Web application framework developed by Google.', 'angular.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25c9', 'Svelte', 'Frontend', 'Compiler that generates minimal and efficient JavaScript code.', 'svelte.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b1', 'Tailwind CSS', 'Frontend', 'Utility-first CSS framework for rapidly building UI.', 'tailwind.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b2', 'Bootstrap', 'Frontend', 'Popular CSS framework for developing responsive websites.', 'bootstrap.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b4', 'Node.js', 'Backend', 'JavaScript runtime for building fast and scalable applications.', 'node.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b5', 'Express.js', 'Backend', 'Minimalist Node.js web framework.', 'express.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b7', 'NestJS', 'Backend', 'Framework for building efficient, scalable Node.js server-side apps.', 'nestjs.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b8', 'Django', 'Backend', 'Python web framework that encourages rapid development.', 'django.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b9', 'Flask', 'Backend', 'Lightweight WSGI web application framework in Python.', 'flask.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d1', 'Ruby on Rails', 'Backend', 'Full-stack web application framework in Ruby.', 'rails.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d2', 'Laravel', 'Backend', 'PHP web application framework with expressive syntax.', 'laravel.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d3', 'REST API', 'Backend', 'Architectural style for designing networked applications.', 'restapi.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d4', 'GraphQL', 'Backend', 'Query language for your API, designed to fetch only needed data.', 'graphql.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d5', 'PostgreSQL', 'Database', 'Powerful, open-source object-relational database system.', 'postgres.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d6', 'MySQL', 'Database', 'Open-source relational database management system.', 'mysql.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d7', 'MongoDB', 'Database', 'Document-oriented NoSQL database.', 'mongodb.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d8', 'SQLite', 'Database', 'Lightweight relational database management system.', 'sqlite.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d9', 'Redis', 'Database', 'In-memory data structure store used as a database and cache.', 'redis.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e1', 'Docker', 'DevOps', 'Platform for developing, shipping, and running applications in containers.', 'docker.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e2', 'Kubernetes', 'DevOps', 'System for automating deployment, scaling, and management of containerized applications.', 'kubernetes.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e3', 'AWS', 'DevOps', 'Amazon Web Services cloud platform for scalable infrastructure.', 'aws.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e4', 'Vercel', 'DevOps', 'Deployment and collaboration platform for frontend apps.', 'vercel.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e5', 'Netlify', 'DevOps', 'Platform to build, deploy, and scale modern web projects.', 'netlify.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e6', 'Nginx', 'DevOps', 'Web server that can also be used as a reverse proxy, load balancer, and HTTP cache.', 'nginx.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e7', 'Jest', 'Testing', 'Delightful JavaScript Testing Framework.', 'jest.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e8', 'Mocha', 'Testing', 'Feature-rich JavaScript test framework for Node.js.', 'mocha.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e9', 'Chai', 'Testing', 'Assertion library for behavior-driven development.', 'chai.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f1', 'Cypress', 'Testing', 'End-to-end testing framework for web applications.', 'cypress.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f2', 'React Testing Library', 'Testing', 'Simple and complete testing utilities for React apps.', 'rtl.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f3', 'Git', 'Tools', 'Version control system for tracking changes in source code.', 'git.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f4', 'GitHub', 'Tools', 'Platform for hosting and reviewing code, managing projects.', 'github.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f5', 'VS Code', 'Tools', 'Code editor redefined and optimized for building web apps.', 'vscode.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f6', 'ESLint', 'Tools', 'Tool for identifying and fixing problems in JavaScript code.', 'eslint.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f7', 'Prettier', 'Tools', 'Opinionated code formatter.', 'prettier.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f8', 'Webpack', 'Tools', 'Static module bundler for modern JavaScript apps.', 'webpack.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25f9', 'Vite', 'Tools', 'Next generation frontend tooling and dev server.', 'vite.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25a1', 'Figma', 'UI/UX', 'Collaborative interface design tool.', 'figma.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25a2', 'Adobe XD', 'UI/UX', 'Vector-based UX design tool for web and mobile apps.', 'xd.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25a3', 'Accessibility (a11y)', 'UI/UX', 'Design practices to make the web usable for everyone.', 'a11y.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25a4', 'OAuth 2.0', 'Security', 'Authorization framework that enables applications to obtain limited access to user accounts.', 'oauth.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25a5', 'JWT', 'Security', 'JSON Web Token for secure authentication and authorization.', 'jwt.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25a6', 'HTTPS', 'Security', 'Secure version of HTTP using SSL/TLS.', 'https.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25a7', 'Helmet.js', 'Security', 'Helps secure Express apps by setting HTTP headers.', 'helmet.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a1', 'Communication', 'Soft Skills', 'Ability to convey ideas clearly to team members, stakeholders, and users.', 'communication.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a2', 'Teamwork', 'Soft Skills', 'Working effectively with others toward a common goal.', 'teamwork.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a3', 'Problem Solving', 'Soft Skills', 'Finding efficient and innovative solutions to coding and system challenges.', 'problem-solving.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a4', 'Time Management', 'Soft Skills', 'Prioritizing tasks and managing deadlines effectively.', 'time-management.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a5', 'Adaptability', 'Soft Skills', 'Quickly adjusting to new tools, technologies, or project changes.', 'adaptability.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a6', 'Critical Thinking', 'Soft Skills', 'Analyzing information and making informed decisions.', 'critical-thinking.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a7', 'Attention to Detail', 'Soft Skills', 'Carefully reviewing code and UI for errors or inconsistencies.', 'attention-to-detail.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a8', 'Creativity', 'Soft Skills', 'Thinking outside the box to design better experiences or solve technical problems.', 'creativity.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26a9', 'Empathy', 'Soft Skills', 'Understanding user pain points and improving UX through human-centered design.', 'empathy.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26b1', 'Leadership', 'Soft Skills', 'Guiding teams, making strategic decisions, and mentoring others.', 'leadership.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26b2', 'Conflict Resolution', 'Soft Skills', 'Handling disagreements and maintaining healthy team dynamics.', 'conflict-resolution.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26b3', 'Presentation Skills', 'Soft Skills', 'Effectively sharing technical ideas with non-technical audiences.', 'presentation.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26b4', 'Curiosity', 'Soft Skills', 'Always eager to learn new tools, frameworks, and best practices.', 'curiosity.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26b5', 'Accountability', 'Soft Skills', 'Taking ownership of work and following through on commitments.', 'accountability.png'),
('c8948cde-249a-4dc7-b697-8dc174ae26b6', 'Resilience', 'Soft Skills', 'Staying motivated through challenges, bugs, and learning curves.', 'resilience.png');


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
     user_id UUID REFERENCES users(id) ON DELETE CASCADE,
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
    user_id UUID REFRENCES users(id) ON DELETE CASCADE
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
