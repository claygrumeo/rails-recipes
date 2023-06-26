class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :author_first
      t.string :author_last
      t.text :instructions
      t.boolean :public

      t.timestamps
    end
  end
end