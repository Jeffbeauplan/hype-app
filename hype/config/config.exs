# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :hype,
  ecto_repos: [Hype.Repo]

# Configures the endpoint
config :hype, HypeWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Hq6gtoZrsiUtmYPZeziOR31w78ZEjZkDBi282NX6ftIEx2wqSEkcTZQWrkRcM7Fw",
  render_errors: [view: HypeWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Hype.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
