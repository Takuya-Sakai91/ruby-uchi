FactoryBot.define do
  factory :game do
    user { nil }
    remaining_time { 1 }
    score { "9.99" }
    correct_count { 1 }
    wrong_count { 1 }
  end
end
