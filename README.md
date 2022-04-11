# BytesAlgo

## Technology Used
Database : Postgresql<br>
Back-end : Node JS, Express JS<br>
Front-end : React<br>

## Create database named as ```BytesAlgo```
```
CREATE DATABASE "BytesAlgo"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;
```
  
## Create 3 table as follows
  
### Table 1 : applications
```
CREATE TABLE public.applications
(
    application_id numeric NOT NULL,
    candidate_name text NOT NULL,
    candidate_email text NOT NULL,
    skills text NOT NULL,
    experience text NOT NULL,
    mobile_number text NOT NULL,
    job_id numeric NOT NULL,
    status text NOT NULL,
    PRIMARY KEY (application_id)
);

ALTER TABLE IF EXISTS public.applications
    OWNER to postgres;
```
 
### Table 2 : job_list
```
CREATE TABLE public.job_list
(
    job_id numeric NOT NULL,
    recruiter_email text NOT NULL,
    description text NOT NULL,
    job_title text NOT NULL,
    salary numeric NOT NULL,
    "numberOfPost" numeric NOT NULL,
    status text NOT NULL,
    PRIMARY KEY (job_id)
);

ALTER TABLE IF EXISTS public.job_list
    OWNER to postgres;
```
  
### Table 3 : users
```
CREATE TABLE public.users
(
    email text NOT NULL,
    name text NOT NULL,
    pass text NOT NULL,
    role text NOT NULL,
    PRIMARY KEY (email)
);

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;
```
  
## To Run The Applciation
 
### Clone the repo
```
git clone https://github.com/smitgor/BytesAlgo.git
cd BytesAlgo
```
  
### Run back-end server
```
npm start
```

### Run front-end server
open other terminal and go to client folder
```
  cd BytesAlgo
  cd client
  npm start
```
  
## Yeah!!! Your web app is running on ```http://localhost:3000/```
