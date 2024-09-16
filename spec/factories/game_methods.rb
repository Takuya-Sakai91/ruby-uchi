# frozen_string_literal: true

FactoryBot.define do
  factory :game_method do
    game { nil }
    ruby_method { nil }
    order { 1 }
  end
end
