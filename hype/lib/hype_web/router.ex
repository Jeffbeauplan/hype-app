defmodule HypeWeb.Router do
  use HypeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", HypeWeb do
    pipe_through :api
  end
end
