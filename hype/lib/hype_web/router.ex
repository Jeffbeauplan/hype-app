defmodule HypeWeb.Router do
  use HypeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :auth do
    plug Hype.Auth.Pipeline
  end

  scope "/api", HypeWeb do
    pipe_through :api

    post "/users/create", UserController, :create
    post "/users/authenticate", UserController, :authenticate
  end

  scope "/api", HypeWeb do
    pipe_through [:api, :auth]

    get "/users", UserController, :index
    resources "/items", ItemController, except: [:new, :edit]
    resources "/transactions", TransactionController, except: [:new, :edit]
  end
end
