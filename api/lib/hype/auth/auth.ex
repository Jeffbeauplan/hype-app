defmodule Hype.Auth do
  alias Comeonin.Pbkdf2, as: Comeonin
  alias Hype.{Accounts, Auth}

  def authenticate_user(email, password) do
    case Accounts.get_user_by_email(email) do
      nil ->
        Comeonin.dummy_checkpw()
        {:error, :invalid_credentials}

      user ->
        if Comeonin.checkpw(password, user.password) do
          Auth.Guardian.encode_and_sign(user)
        else
          {:error, :invalid_credentials}
        end
    end
  end
end
