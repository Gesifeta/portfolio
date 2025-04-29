
CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL, -- never store plain text passwords!
    salt TEXT NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    profile_image TEXT,
    github_url TEXT,
    linkedin_url TEXT,
    twitter_url TEXT,
    instagram_url TEXT,
    facebook_url TEXT,
    website_url TEXT,
    location VARCHAR(100),
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
('c8948cde-249a-4dc7-b697-8dc174ae25b1', 'Tailwind CSS', 'Frontend', 'Utility-first CSS framework for rapidly building UI.', 'tailwind.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b2', 'Bootstrap', 'Frontend', 'Popular CSS framework for developing responsive websites.', 'bootstrap.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b4', 'Node.js', 'Backend', 'JavaScript runtime for building fast and scalable applications.', 'node.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b5', 'Express.js', 'Backend', 'Minimalist Node.js web framework.', 'express.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25b7', 'NestJS', 'Backend', 'Framework for building efficient, scalable Node.js server-side apps.', 'nestjs.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d3', 'REST API', 'Backend', 'Architectural style for designing networked applications.', 'restapi.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d4', 'GraphQL', 'Backend', 'Query language for your API, designed to fetch only needed data.', 'graphql.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d5', 'PostgreSQL', 'Database', 'Powerful, open-source object-relational database system.', 'postgres.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d6', 'MySQL', 'Database', 'Open-source relational database management system.', 'mysql.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25d7', 'MongoDB', 'Database', 'Document-oriented NoSQL database.', 'mongodb.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e1', 'Docker', 'DevOps', 'Platform for developing, shipping, and running applications in containers.', 'docker.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e2', 'Kubernetes', 'DevOps', 'System for automating deployment, scaling, and management of containerized applications.', 'kubernetes.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e3', 'AWS', 'DevOps', 'Amazon Web Services cloud platform for scalable infrastructure.', 'aws.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e5', 'Netlify', 'DevOps', 'Platform to build, deploy, and scale modern web projects.', 'netlify.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25e6', 'Nginx', 'DevOps', 'Web server that can also be used as a reverse proxy, load balancer, and HTTP cache.', 'nginx.png'),
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

('c8948cde-249a-4dc7-b697-8dc174ae25a5', 'JWT', 'Security', 'JSON Web Token for secure authentication and authorization.', 'jwt.png'),
('c8948cde-249a-4dc7-b697-8dc174ae25a6', 'HTTPS', 'Security', 'Secure version of HTTP using SSL/TLS.', 'https.png'),
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


CREATE TABLE user_skill_sets (
    id UUID PRIMARY KEY,
    skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
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


-- migrations/visitor_logs.sql
CREATE TABLE visitor_logs (
  id SERIAL PRIMARY KEY,
  session_id UUID NOT NULL,
  ip_address VARCHAR(45),
  path VARCHAR(255),
  referrer TEXT,
  user_agent TEXT,
  language VARCHAR(10),
  screen_resolution VARCHAR(20),
  timestamp TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for better query performance
CREATE INDEX idx_visitor_logs_session_id ON visitor_logs(session_id);
CREATE INDEX idx_visitor_logs_timestamp ON visitor_logs(timestamp);


(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25c1'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25c2'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25c3'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25c4'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25c5'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25b1'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25b2'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25b4'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25b5'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25b7'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25d3'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25d4'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25d5'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25d6'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25d7'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25e1'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25e2'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25e3'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25e5'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25e6'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25f3'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25f4'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25f5'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25f6'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25f7'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25f8'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25f9'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25a1'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25a2'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25a3'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25a5'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae25a6'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a1'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a2'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a3'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a4'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a5'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a6'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a7'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a8'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26a9'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26b1'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26b2'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26b3'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26b4'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26b5'),
(uuid_generate_v4(),'462a9ad7-4ea1-4111-ba99-c7b4e3bd0359','c8948cde-249a-4dc7-b697-8dc174ae26b6')


INSERT INTO certifications (
    id,
    user_id,
    title,
    description,
    awarded_date,
    awarded_by,
    badge_link,
    description,
    image_url,
    skills
) VALUES
(
    'b4ebc12f-2946-4591-abc8-4c5104177adf',
    '462a9ad7-4ea1-4111-ba99-c7b4e3bd0359',
    'AWC Certified Cloud Practitioner',
    '2024-02-01',
    'Amazon Web Services Training and Certification',
    'https://www.credly.com/badges/8baff95b-c9eb-44e4-a057-b53f06367686',
    'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.',
    'uploads/images/aws-certified-cloud-practitioner.png-1745425028521.png',
    ARRAY['Amazon Web Services (AWS)','AWS Cloud','AWS Compute','AWS Databases','AWS Networking','AWS Security','AWS storage']
),
(
    '1d9a992d-4898-408d-bf68-b0b2409c4bde',
    '462a9ad7-4ea1-4111-ba99-c7b4e3bd0359',
    'Front-end Development with React.js V2',
    '2024-01-01',
    'Coursera, authorized by IBM',
    'https://www.credly.com/earner/earned/badge/2d0f975b-a924-4027-afe2-55f9b3e32327',
    'Demonstrated how to use the React.js web framework to create robust user interfaces for front-end applications. They can manage data in an application with props, states, and hooks. The earner has shown an understanding of Redux concepts, such as using the Redux store, actions, and reducers to manage application states. They know the applications of middleware such as Thunk and Saga to handle asynchronous operations and concepts such as side effects and custom hooks.',
    'uploads/images/front-end-development-with-react-v2.1.png-1745425553309.png',
    ARRAY['Application State','Class Components','Component Composition','Component Lifecycles','Component States','CRA','Custom Hooks','Data Binding','Fetch','Forms','Front-end Development','Front-end Frameworks','Function Components','Hooks','JavaScript','JSX','Props','React.js ToolKit','Redux','Side Effects','Thunk','UseEffect Hook','User Interfaces','UseState Hook','Virtual Dom','Vite']
),
(
    '58a1dcdf-ad18-4bf4-9eca-0c0cbea6fe54',
    '462a9ad7-4ea1-4111-ba99-c7b4e3bd0359',
    'AWS Knowledge: Cloud Essentials',
    '2024-12-01',
    'Amazon Web Services Training and Certification',
    'https://www.credly.com/badges/8baff95b-c9eb-44e4-a057-b53f06367686',
    'Earners of this badge have developed knowledge of foundational AWS Cloud concepts with a focus on AWS Compute, Storage, Networking and Database services, security, architecture, pricing, and support.',
    'uploads/images/aws-cloud-essentials.png-1745426069684.png',
    ARRAY['Amazon Web Services (AWS)','AWS Cloud','AWS Compute','AWS Databases','AWS Networking','AWS Security','AWS storage']
),
(
    '20f4117f-0781-4690-bea2-ef3029ff1a4b',
    '462a9ad7-4ea1-4111-ba99-c7b4e3bd0359',
    'AWS Certified Solutions Architect – Associate',
    '2025-02-14',
    'Amazon Web Services Training and Certification',
    'https://www.credly.com/badges/d623e787-ae7f-44dc-85ec-a2435e726e3b/public_url',
    'Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.',
    'uploads/images/aws-sa.png-1745426921555.png',
    ARRAY['Amazon Web Services','AWS','AWS Certification','AWS Cloud','Cloud Architecture','Cloud Certification','Cloud Data','Cloud Infrastructure','Cloud Services']
),
(
    'ab330a47-d7f2-4f67-b3be-9295f5469513',
    '462a9ad7-4ea1-4111-ba99-c7b4e3bd0359',
    'AWS Knowledge: Cloud Essentials',
    '2024-07-31',
    'Amazon Web Services Training and Certification',
    'https://www.credly.com/badges/8baff95b-c9eb-44e4-a057-b53f06367686/public_url',
    'Earners of this badge have developed knowledge of foundational AWS Cloud concepts with a focus on AWS Compute, Storage, Networking and Database services, security, architecture, pricing, and support.',
    'uploads/images/aws-cloud-essentials.png-1745427240323.png',
    ARRAY['Amazon Web Services (AWS)','AWS','AWS Cloud','AWS Compute','AWS Databases','AWS Networking','AWS Security','AWS storage']
),
(
    'cebfba80-a8ba-46f4-9c0a-af2575e875de',
    '462a9ad7-4ea1-4111-ba99-c7b4e3bd0359',
    'AWS Knowledge: Architecting',
    '2025-01-15',
    'Amazon Web Services Training and Certification',
    'https://www.credly.com/badges/f2441ce6-a007-4503-9d7b-56c2c6ca9050/public_url',
    'Earners of this badge have developed technical skills and knowledge of AWS concepts and services with a focus on designing solutions on AWS using best practices.',
    'uploads/images/aws-knowledge-architecting.png-1745427420530.png',
    ARRAY['Amazon Web Services (AWS)','AWS','AWS Cloud','AWS Compute','AWS Core Services','AWS database','AWS Networking','AWS storage']
),
(
    '3d127d13-a8dc-4dda-b982-97531d0f7b4b',
    '462a9ad7-4ea1-4111-ba99-c7b4e3bd0359',
    'IBM Back-end JavaScript Developer Professional Certificate',
    '2024-10-18',
    'Coursera Authorized by IBM',
    'https://www.credly.com/badges/1551c8bd-b82f-4de4-8118-6f724a6c744b/public_url',
    'This badge earner understands many software engineering topics, such as SDLC and Python basics. They understand application architecture, web development, and IDEs, emphasizing version control using Git and GitHub. They also have a good grasp of server-side development with Node.js, asynchronous programming, and CI/CD methodologies. They have hands-on experience on various topics such as Docker, Kubernetes, microservices, and back-end development with Node.js, Express, and NoSQL databases.',
    'uploads/images/ibm-back-end-javascript-developer-professional-cert.png-1745427609827.png',
    ARRAY['Back-end Development','DevOps','Express','JavaScript','Node.js']
);
