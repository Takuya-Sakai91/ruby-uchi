class RenameModuleRefIdToRubyModuleId < ActiveRecord::Migration[7.1]
  def change
    rename_column :ruby_methods, :module_ref_id, :ruby_module_id
  end
end
