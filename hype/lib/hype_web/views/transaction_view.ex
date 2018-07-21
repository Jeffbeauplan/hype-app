defmodule HypeWeb.TransactionView do
  use HypeWeb, :view
  alias HypeWeb.TransactionView

  def render("index.json", %{transactions: transactions}) do
    %{data: render_many(transactions, TransactionView, "transaction.json")}
  end

  def render("show.json", %{transaction: transaction}) do
    %{data: render_one(transaction, TransactionView, "transaction.json")}
  end

  def render("transaction.json", %{transaction: transaction}) do
    %{id: transaction.id,
      vendor: transaction.vendor,
      purchase_date: transaction.purchase_date,
      purchase_price: transaction.purchase_price,
      sell_date: transaction.sell_date,
      sell_price: transaction.sell_price,
      payout_amount: transaction.payout_amount,
      broker: transaction.broker,
      status: transaction.status,
      user_id: transaction.user_id,
      item_id: transaction.item_id
    }
  end
end
