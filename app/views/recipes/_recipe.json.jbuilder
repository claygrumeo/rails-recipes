json.extract! recipe, :id, :author_first, :author_last, :instructions, :title, :public, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
