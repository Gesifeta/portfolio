FROM node:latest

# Create working directory

WORKDIR /app

# To avert/ mitigate security risks, app need to run as non-root user.
# create user group called app
# and Add user called app
RUN addgroup --system app && adduser --system --group app


# To take advantage of caching, need to copy package json before any thing
USER app

COPY package*.json .

# Install necessary dependencies for the app
# But before that give necessary permissions for the app group and user
USER root
RUN npm install
RUN chown -R app:app /app
RUN chmod -R 755 /app
# RETURN TO USERhttps://youtu.be/ILPjPIFNsRA
USER app

# after installation copy all files to the WORKDIR
COPY . .
# expose ports
EXPOSE 5173
# FINALLY RUN THE CMD COMMAND
CMD [ "npm","run","dev" ]
