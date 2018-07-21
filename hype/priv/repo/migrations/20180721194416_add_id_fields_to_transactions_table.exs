defmodule Hype.Repo.Migrations.AddIdFieldsToTransactionsTable do
  use Ecto.Migration

  def change do
    alter table("transactions") do
      add :user_id, :id
      add :item_id, :id
    end
  end
end
