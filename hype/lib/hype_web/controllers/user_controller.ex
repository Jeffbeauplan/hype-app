defmodule HypeWeb.UserController do
  use HypeWeb, :controller

  alias Hype.{Auth, Accounts, Accounts.User}

  action_fallback(HypeWeb.FallbackController)

  def create(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Accounts.create_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end

  def authenticate(conn, %{"email" => email, "password" => password}) do
    with {:ok, token, _claims} <- Auth.authenticate_user(email, password) do
      render(conn, "token.json", token: token)
    else
      _ ->
        render(conn, "token_error.json")
    end
  end

  def index(conn, _params) do
    render(conn, "show.json", user: conn.private.guardian_default_resource)
  end
end
