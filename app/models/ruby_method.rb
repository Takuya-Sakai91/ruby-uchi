# frozen_string_literal: true

class RubyMethod < ApplicationRecord
  belongs_to :ruby_module
  has_many :game_methods, dependent: :destroy
end
