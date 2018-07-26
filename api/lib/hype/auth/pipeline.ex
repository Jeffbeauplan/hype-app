defmodule Hype.Auth.Pipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :hype,
    error_handler: Hype.Auth.ErrorHandler,
    module: Hype.Auth.Guardian

  # If there is a session token, restrict it to an access token and validate it
  plug(Guardian.Plug.VerifySession, claims: %{"typ" => "access"})

  # If there is an authorization header, restrict it to an access token and validate it
  plug(Guardian.Plug.VerifyHeader, claims: %{"typ" => "access"})

  # Make sure that the user is authenticated
  plug(Guardian.Plug.EnsureAuthenticated)

  # Load the user if either of the verifications worked
  plug(Guardian.Plug.LoadResource, allow_blank: true)
end
