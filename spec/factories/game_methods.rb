# frozen_string_literal: true

FactoryBot.define do
  factory :game_method do
    game { nil }
    method_ref { nil }
    order { 1 }
  end
end
