defmodule HypeWeb.Router do
  use HypeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", HypeWeb do
    pipe_through :api

    resources "/items", ItemController, except: [:new, :edit]
    resources "/transactions", TransactionController, except: [:new, :edit]
  end
end
