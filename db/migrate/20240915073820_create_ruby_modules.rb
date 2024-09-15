class CreateRubyModules < ActiveRecord::Migration[7.1]
  def change
    create_table :ruby_modules do |t|
      t.string :name

      t.timestamps
    end
  end
end
