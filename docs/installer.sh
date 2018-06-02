#!/bin/sh

require_cmd() {
  if ! command -v "$1" > /dev/null 2>&1
  then
    case "$1" in
    brew)
      echo "$(/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)")"
      ;;
    node)
      if ! command -v nvm > /dev/null 2>&1
      then
          # update this curl url periodically from: https://github.com/creationix/nvm
          echo "$(curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash)"
          echo "$(nvm install node)" # will install npm by default
      fi
      ;;
    git)
      echo "$(brew install git)"
      ;;
    *)
      break
      ;;
    esac
  else say "$1 already installed"
  fi
}


main() {
  require_cmd brew
  require_cmd git
  require_cmd node

  exit 0;
}

main "$@" || exit 1

