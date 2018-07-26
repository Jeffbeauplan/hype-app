defmodule Hype.Repo.Migrations.CreateTransactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :vendor, :string
      add :purchase_date, :utc_datetime
      add :purchase_price, :decimal
      add :sell_date, :utc_datetime
      add :sell_price, :decimal
      add :payout_amount, :decimal
      add :broker, :string
      add :status, :string

      timestamps()
    end

  end
end
