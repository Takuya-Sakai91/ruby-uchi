class CreateGames < ActiveRecord::Migration[7.1]
  def change
    create_table :games do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :remaining_time
      t.decimal :score
      t.integer :correct_count
      t.integer :wrong_count

      t.timestamps
    end
  end
end
