FROM node:alpine AS builder
MAINTAINER Maciej Łotysz <maciej.lotysz@intive.com>
RUN mkdir /build
ADD .env jsconfig.json package.json yarn.lock /build/
WORKDIR /build
RUN yarn install
ADD .eslintrc /build/
ADD src /build/src/
ADD public /build/public/
RUN yarn run build

FROM scratch
COPY --from=builder /build/ /www/
