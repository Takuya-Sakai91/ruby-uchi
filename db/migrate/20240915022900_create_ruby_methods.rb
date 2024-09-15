class CreateRubyMethods < ActiveRecord::Migration[7.1]
  def change
    create_table :ruby_methods do |t|
      t.references :module_ref, null: false, foreign_key: { to_table: :ruby_modules }
      t.string :name
      t.text :description
      t.string :official_url
      t.string :class_name

      t.timestamps
    end
  end
end
