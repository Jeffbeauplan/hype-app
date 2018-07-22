defmodule Hype.Transactions do
  @moduledoc """
  Queries for dealing with transactions
  """

  import Ecto.Query, warn: false
  alias Hype.Repo

  alias Hype.Transactions.Transaction

  def list_transactions do
    Repo.all(Transaction)
  end

  def get_transaction!(id), do: Repo.get!(Transaction, id)

  def get_all_user_transactions(user_id) do
    Transaction
    |> where([t], t.user_id == ^user_id)
    |> Repo.all()
  end

  def get_transaction_by_user(id, user_id) do
    Transaction
    |> where([t], t.user_id == ^user_id)
    |> Repo.get(id)
  end

  def create_transaction(attrs \\ %{}) do
    %Transaction{}
    |> Transaction.changeset(attrs)
    |> Repo.insert()
  end

  def update_transaction(%Transaction{} = transaction, attrs) do
    transaction
    |> Transaction.changeset(attrs)
    |> Repo.update()
  end

  def delete_transaction(%Transaction{} = transaction) do
    Repo.delete(transaction)
  end

  def change_transaction(%Transaction{} = transaction) do
    Transaction.changeset(transaction, %{})
  end
end
