# frozen_string_literal: true

class Game < ApplicationRecord
  belongs_to :user, optional: true
end
