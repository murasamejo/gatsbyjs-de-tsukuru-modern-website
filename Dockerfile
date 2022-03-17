FROM node:16.14.1

# $ docker image build -t us-west1-docker.pkg.dev/プロジェクトID/リポジトリ名/イメージ名:タグ . --build-arg CONTENTFUL_SPACE_ID="HOGE" CONTENTFUL_ACCESS_TOKEN="FUGA"
ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN /usr/local/bin/yarn install

COPY . /app
RUN CONTENTFUL_SPACE_ID=$CONTENTFUL_SPACE_ID CONTENTFUL_ACCESS_TOKEN=$CONTENTFUL_ACCESS_TOKEN /usr/local/bin/npx gatsby build

CMD ["/usr/local/bin/npx", "gatsby", "serve", "--port", "8080", "--host", "127.0.0.1", "-H", "0.0.0.0"]
