class CreateGameMethods < ActiveRecord::Migration[7.1]
  def change
    create_table :game_methods do |t|
      t.references :game, null: false, foreign_key: true
      t.references :ruby_method, null: false, foreign_key: { to_table: :ruby_methods }
      t.integer :order

      t.timestamps
    end
  end
end
