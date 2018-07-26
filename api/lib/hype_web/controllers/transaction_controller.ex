defmodule HypeWeb.TransactionController do
  use HypeWeb, :controller

  alias Hype.Transactions
  alias Hype.Transactions.Transaction

  alias Hype.{Transactions, Transactions.Transaction}

  action_fallback(HypeWeb.FallbackController)

  def index(conn, _params) do
    transactions =
      conn
      |> get_current_user()
      |> Map.get(:id)
      |> Transactions.get_all_user_transactions()

    render(conn, "index.json", transactions: transactions)
  end

  def create(conn, %{"transaction" => transaction_params}) do
    updated_transaction_params = update_with_current_user(transaction_params, conn)

    with {:ok, %Transaction{} = transaction} <-
           Transactions.create_transaction(updated_transaction_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", transaction_path(conn, :show, transaction))
      |> render("show.json", transaction: transaction)
    end
  end

  defp update_with_current_user(transaction, conn) do
    user_id = get_current_user(conn)

    Map.put(transaction, "user_id", user_id)
  end

  def show(conn, %{"id" => id}) do
    user_id = get_current_user(conn).id

    with %Transaction{} = transaction <- Transactions.get_transaction_by_user(id, user_id) do
      render(conn, "show.json", transaction: transaction)
    end
  end

  def update(conn, %{"id" => id, "transaction" => transaction_params}) do
    user_id = get_current_user(conn).id

    with %Transaction{} = transaction <- Transactions.get_transaction_by_user(id, user_id),
         {:ok, %Transaction{} = new_transaction} <-
           Transactions.update_transaction(transaction, transaction_params) do
      render(conn, "show.json", transaction: new_transaction)
    end
  end

  def delete(conn, %{"id" => id}) do
    user_id = get_current_user(conn).id

    with %Transaction{} = transaction <- Transactions.get_transaction_by_user(id, user_id),
         {:ok, %Transaction{}} <- Transactions.delete_transaction(transaction) do
      send_resp(conn, :no_content, "")
    end
  end

  defp get_current_user(conn) do
    Hype.Auth.Guardian.Plug.current_resource(conn)
  end
end
