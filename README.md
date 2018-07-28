# Hype

## API Setup guide

### Mac
  1. Install asdf version manager
  ```bash
  # https://github.com/asdf-vm/asdf
  git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.5.0
  echo -e '\n. $HOME/.asdf/asdf.sh' >> ~/.bash_profile
  echo -e '\n. $HOME/.asdf/completions/asdf.bash' >> ~/.bash_profile
  ```
  2. Open a new terminal to apply changes
  3. Install asdf dependencies
  ```bash
  # Make sure to have homebrew installed
  # https://github.com/asdf-vm/asdf
  brew install coreutils automake autoconf openssl libyaml readline libxslt libtool unixodbc
  ```
  4. Install erlang
  ```bash
  asdf plugin-add erlang
  asdf install erlang 21.0
  asdf global erlang 21.0
  ```
  5. Install elixir
  ```bash
  asdf plugin-add elixir
  asdf install elixir 1.7
  asdf global elixir 1.7
  ```
  6. Install postgres <br/>
  Go [here](https://www.postgresql.org/download/macosx) and download/run the installer <br/>
  If the installer asks about creating a postgres user make sure both the username and password are 'postgres'
  7. Install project packages <br/>
  In the api folder run
  ```bash
  mix deps.get
  ```
  8. Setup database <br/>
  In the api folder run
  ```bash
  mix ecto.setup
  ```
  9. Run server <br/>
  In the api folder run
  ```bash
  mix phx.server
  ```
  




