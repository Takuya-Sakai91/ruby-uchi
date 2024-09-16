class CreateRubyMethods < ActiveRecord::Migration[7.1]
  def change
    create_table :ruby_methods do |t|
      t.references :ruby_module, null: false, foreign_key: { to_table: :ruby_modules }
      t.string :name, null: false
      t.text :description
      t.string :official_url
      t.string :class_name, null: false

      t.timestamps
    end
  end
end
