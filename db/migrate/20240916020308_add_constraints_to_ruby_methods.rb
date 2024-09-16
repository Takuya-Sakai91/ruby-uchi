class AddConstraintsToRubyMethods < ActiveRecord::Migration[7.1]
  def change
    change_column_null :ruby_methods, :name, false
    change_column_null :ruby_methods, :class_name, false
  end
end
