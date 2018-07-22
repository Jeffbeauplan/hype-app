defmodule HypeWeb.ItemView do
  use HypeWeb, :view
  alias HypeWeb.ItemView

  def render("index.json", %{items: items}) do
    %{data: render_many(items, ItemView, "item.json")}
  end

  def render("show.json", %{item: item}) do
    %{data: render_one(item, ItemView, "item.json")}
  end

  def render("item.json", %{item: item}) do
    %{id: item.id, brand: item.brand, model: item.model, size: item.size}
  end
end
