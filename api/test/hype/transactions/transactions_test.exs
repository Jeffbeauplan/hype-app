defmodule Hype.TransactionsTest do
  use Hype.DataCase

  alias Hype.Transactions

  describe "transactions" do
    alias Hype.Transactions.Transaction

    @valid_attrs %{broker: "some broker", payout_amount: "120.5", purchase_date: "2010-04-17 14:00:00.000000Z", purchase_price: "120.5", sell_date: "2010-04-17 14:00:00.000000Z", sell_price: "120.5", status: "some status", vendor: "some vendor"}
    @update_attrs %{broker: "some updated broker", payout_amount: "456.7", purchase_date: "2011-05-18 15:01:01.000000Z", purchase_price: "456.7", sell_date: "2011-05-18 15:01:01.000000Z", sell_price: "456.7", status: "some updated status", vendor: "some updated vendor"}
    @invalid_attrs %{broker: nil, payout_amount: nil, purchase_date: nil, purchase_price: nil, sell_date: nil, sell_price: nil, status: nil, vendor: nil}

    def transaction_fixture(attrs \\ %{}) do
      {:ok, transaction} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Transactions.create_transaction()

      transaction
    end

    test "list_transactions/0 returns all transactions" do
      transaction = transaction_fixture()
      assert Transactions.list_transactions() == [transaction]
    end

    test "get_transaction!/1 returns the transaction with given id" do
      transaction = transaction_fixture()
      assert Transactions.get_transaction!(transaction.id) == transaction
    end

    test "create_transaction/1 with valid data creates a transaction" do
      assert {:ok, %Transaction{} = transaction} = Transactions.create_transaction(@valid_attrs)
      assert transaction.broker == "some broker"
      assert transaction.payout_amount == Decimal.new("120.5")
      assert transaction.purchase_date == DateTime.from_naive!(~N[2010-04-17 14:00:00.000000Z], "Etc/UTC")
      assert transaction.purchase_price == Decimal.new("120.5")
      assert transaction.sell_date == DateTime.from_naive!(~N[2010-04-17 14:00:00.000000Z], "Etc/UTC")
      assert transaction.sell_price == Decimal.new("120.5")
      assert transaction.status == "some status"
      assert transaction.vendor == "some vendor"
    end

    test "create_transaction/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Transactions.create_transaction(@invalid_attrs)
    end

    test "update_transaction/2 with valid data updates the transaction" do
      transaction = transaction_fixture()
      assert {:ok, transaction} = Transactions.update_transaction(transaction, @update_attrs)
      assert %Transaction{} = transaction
      assert transaction.broker == "some updated broker"
      assert transaction.payout_amount == Decimal.new("456.7")
      assert transaction.purchase_date == DateTime.from_naive!(~N[2011-05-18 15:01:01.000000Z], "Etc/UTC")
      assert transaction.purchase_price == Decimal.new("456.7")
      assert transaction.sell_date == DateTime.from_naive!(~N[2011-05-18 15:01:01.000000Z], "Etc/UTC")
      assert transaction.sell_price == Decimal.new("456.7")
      assert transaction.status == "some updated status"
      assert transaction.vendor == "some updated vendor"
    end

    test "update_transaction/2 with invalid data returns error changeset" do
      transaction = transaction_fixture()
      assert {:error, %Ecto.Changeset{}} = Transactions.update_transaction(transaction, @invalid_attrs)
      assert transaction == Transactions.get_transaction!(transaction.id)
    end

    test "delete_transaction/1 deletes the transaction" do
      transaction = transaction_fixture()
      assert {:ok, %Transaction{}} = Transactions.delete_transaction(transaction)
      assert_raise Ecto.NoResultsError, fn -> Transactions.get_transaction!(transaction.id) end
    end

    test "change_transaction/1 returns a transaction changeset" do
      transaction = transaction_fixture()
      assert %Ecto.Changeset{} = Transactions.change_transaction(transaction)
    end
  end
end
