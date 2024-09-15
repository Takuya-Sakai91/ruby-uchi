# frozen_string_literal: true

class RubyMethod < ApplicationRecord
  belongs_to :module_ref, class_name: 'Module'
  has_many :game_methods, dependent: :destroy
end
