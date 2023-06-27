class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :numerator
      t.string :denominator
      t.string :whole
      t.string :unit
      t.string :item

      t.timestamps
    end
  end
end
