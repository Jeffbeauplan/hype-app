defmodule HypeWeb.TransactionControllerTest do
  use HypeWeb.ConnCase

  alias Hype.Transactions
  alias Hype.Transactions.Transaction

  @create_attrs %{broker: "some broker", payout_amount: "120.5", purchase_date: "2010-04-17 14:00:00.000000Z", purchase_price: "120.5", sell_date: "2010-04-17 14:00:00.000000Z", sell_price: "120.5", status: "some status", vendor: "some vendor"}
  @update_attrs %{broker: "some updated broker", payout_amount: "456.7", purchase_date: "2011-05-18 15:01:01.000000Z", purchase_price: "456.7", sell_date: "2011-05-18 15:01:01.000000Z", sell_price: "456.7", status: "some updated status", vendor: "some updated vendor"}
  @invalid_attrs %{broker: nil, payout_amount: nil, purchase_date: nil, purchase_price: nil, sell_date: nil, sell_price: nil, status: nil, vendor: nil}

  def fixture(:transaction) do
    {:ok, transaction} = Transactions.create_transaction(@create_attrs)
    transaction
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all transactions", %{conn: conn} do
      conn = get conn, transaction_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create transaction" do
    test "renders transaction when data is valid", %{conn: conn} do
      conn = post conn, transaction_path(conn, :create), transaction: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, transaction_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "broker" => "some broker",
        "payout_amount" => "120.5",
        "purchase_date" => "2010-04-17 14:00:00.000000Z",
        "purchase_price" => "120.5",
        "sell_date" => "2010-04-17 14:00:00.000000Z",
        "sell_price" => "120.5",
        "status" => "some status",
        "vendor" => "some vendor"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, transaction_path(conn, :create), transaction: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update transaction" do
    setup [:create_transaction]

    test "renders transaction when data is valid", %{conn: conn, transaction: %Transaction{id: id} = transaction} do
      conn = put conn, transaction_path(conn, :update, transaction), transaction: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, transaction_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "broker" => "some updated broker",
        "payout_amount" => "456.7",
        "purchase_date" => "2011-05-18 15:01:01.000000Z",
        "purchase_price" => "456.7",
        "sell_date" => "2011-05-18 15:01:01.000000Z",
        "sell_price" => "456.7",
        "status" => "some updated status",
        "vendor" => "some updated vendor"}
    end

    test "renders errors when data is invalid", %{conn: conn, transaction: transaction} do
      conn = put conn, transaction_path(conn, :update, transaction), transaction: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete transaction" do
    setup [:create_transaction]

    test "deletes chosen transaction", %{conn: conn, transaction: transaction} do
      conn = delete conn, transaction_path(conn, :delete, transaction)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, transaction_path(conn, :show, transaction)
      end
    end
  end

  defp create_transaction(_) do
    transaction = fixture(:transaction)
    {:ok, transaction: transaction}
  end
end
