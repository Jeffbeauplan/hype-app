defmodule Hype.Repo.Migrations.ChangeDatesToDateType do
  use Ecto.Migration

  def change do
    alter table("transactions") do
      modify :purchase_date, :date
      modify :sell_date, :date
    end
  end
end
