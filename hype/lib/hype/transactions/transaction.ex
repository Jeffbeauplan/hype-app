defmodule Hype.Transactions.Transaction do
  use Ecto.Schema
  import Ecto.Changeset


  schema "transactions" do
    field :broker, :string
    field :payout_amount, :decimal
    field :purchase_date, :utc_datetime
    field :purchase_price, :decimal
    field :sell_date, :utc_datetime
    field :sell_price, :decimal
    field :status, :string
    field :vendor, :string
    field :user_id, :id
    field :item_id, :id

    timestamps()
  end

  @doc false
  def changeset(transaction, attrs) do
    transaction
    |> cast(attrs, [:user_id, :item_id, :vendor, :purchase_date, :purchase_price, :sell_date, :sell_price, :payout_amount, :broker, :status])
    |> validate_required([:user_id, :item_id, :vendor, :purchase_date, :purchase_price, :sell_date, :sell_price, :payout_amount, :broker, :status])
  end
end
