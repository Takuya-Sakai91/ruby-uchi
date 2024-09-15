# frozen_string_literal: true

class GameMethod < ApplicationRecord
  belongs_to :game
  belongs_to :method_ref, class_name: 'Method'
end
