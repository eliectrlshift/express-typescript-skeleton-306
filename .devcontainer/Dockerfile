ARG VARIANT="18-buster"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl \
    git-core \
    gnupg \
    zsh \
    wget \
    tree \
    jq

ENV DEBIAN_FRONTEND=dialog
ENV SHELL=/bin/zsh

RUN yarn set version stable

ARG USER="node"
ARG GROUP="node"

USER ${USER}

ENV USER=${USER}
ENV GROUP=${GROUP}

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true