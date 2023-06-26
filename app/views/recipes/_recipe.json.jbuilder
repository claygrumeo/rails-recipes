json.extract! recipe, :id, :title, :author_first, :author_last, :instructions, :public, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
