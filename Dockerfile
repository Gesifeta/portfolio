# GET THE BASE IMAGE
FROM node:22.14-slim

WORKDIR /app


# TO take advantage of Docker caching copy all json files before any copy.

COPY package*.json .

# every time we build , the application need not download dependencies again and again but only where there is new ones. We need to cache 
# leads to faster build time
RUN --mount=type=cache,target=/app/.npm \
    npm set cache /app/.npm && \
     npm ci --only=production
# To mitigate security risk, give appropriate permission to a user to run an app, than leaving to root user.
RUN addgroup app 
# add the user to a group
RUN useradd -g app app
# change to the user
RUN chown -R app:app .
USER app
# Now during installation the non-root user may be limited and throw EACCESS:permission error Need to change the ownership of the app files

COPY --chown=app:app . .

# HEALTHCHECK --interval=5m --timeout=3s --retries=3 CMD curl --fail http://localhost:8080/health || exit 1

EXPOSE 5173

CMD [ "npm","run","dev" ]
