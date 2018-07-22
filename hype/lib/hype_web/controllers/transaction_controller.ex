defmodule HypeWeb.TransactionController do
  use HypeWeb, :controller

  alias Hype.Transactions
  alias Hype.Transactions.Transaction

  action_fallback(HypeWeb.FallbackController)

  def index(conn, _params) do
    transactions = Transactions.list_transactions()
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
    current_user_id = conn.private.guardian_default_resource.id

    Map.put(transaction, "user_id", current_user_id)
  end

  def show(conn, %{"id" => id}) do
    transaction = Transactions.get_transaction!(id)
    render(conn, "show.json", transaction: transaction)
  end

  def update(conn, %{"id" => id, "transaction" => transaction_params}) do
    transaction = Transactions.get_transaction!(id)

    with {:ok, %Transaction{} = transaction} <-
           Transactions.update_transaction(transaction, transaction_params) do
      render(conn, "show.json", transaction: transaction)
    end
  end

  def delete(conn, %{"id" => id}) do
    transaction = Transactions.get_transaction!(id)

    with {:ok, %Transaction{}} <- Transactions.delete_transaction(transaction) do
      send_resp(conn, :no_content, "")
    end
  end
end
