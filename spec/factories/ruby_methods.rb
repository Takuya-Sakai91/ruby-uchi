# frozen_string_literal: true

FactoryBot.define do
  factory :ruby_method do
    ruby_module { nil }
    name { 'MyString' }
    description { 'MyText' }
    official_url { 'MyString' }
    class_name { 'MyString' }
  end
end
