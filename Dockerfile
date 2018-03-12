FROM node:alpine AS builder
MAINTAINER Maciej Łotysz <maciej.lotysz@intive.com>

RUN mkdir /build
WORKDIR /build

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn run build \
	&& ls -al build

VOLUME /build
