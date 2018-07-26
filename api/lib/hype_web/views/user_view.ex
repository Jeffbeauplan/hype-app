defmodule HypeWeb.UserView do
  use HypeWeb, :view

  alias HypeWeb.UserView

  def render("show.json", %{user: user}) do
    %{
      ok: true,
      data: render_one(user, UserView, "user.json")
    }
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    }
  end

  def render("token.json", %{token: token}) do
    %{
      ok: true,
      token: token
    }
  end

  def render("token_error.json", _params) do
    %{
      ok: false,
      message: "Error authenticating user"
    }
  end
end
