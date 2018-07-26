defmodule Hype.Auth do
  alias Comeonin.Bcrypt
  alias Hype.{Accounts, Auth}

  def authenticate_user(email, password) do
    case Accounts.get_user_by_email(email) do
      nil ->
        Bcrypt.dummy_checkpw()
        {:error, :invalid_credentials}

      user ->
        if Bcrypt.checkpw(password, user.password) do
          Auth.Guardian.encode_and_sign(user)
        else
          {:error, :invalid_credentials}
        end
    end
  end
end
