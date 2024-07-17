class AddColumnsToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :username, :string
    add_column :users, :best_score, :decimal
    add_column :users, :previous_score, :decimal
  end
end
