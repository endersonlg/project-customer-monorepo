FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY seed ./seed/

RUN npm install

COPY . .

RUN npm run build

FROM node:20

ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/seed ./seed

EXPOSE 3333

CMD [ "npm", "run", "start:migrate:prod"]

