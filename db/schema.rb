# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_09_15_073820) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "game_methods", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.bigint "ruby_method_id", null: false
    t.integer "order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_game_methods_on_game_id"
    t.index ["ruby_method_id"], name: "index_game_methods_on_ruby_method_id"
  end

  create_table "games", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "remaining_time"
    t.decimal "score"
    t.integer "correct_count"
    t.integer "wrong_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "ruby_methods", force: :cascade do |t|
    t.bigint "module_ref_id", null: false
    t.string "name"
    t.text "description"
    t.string "official_url"
    t.string "class_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["module_ref_id"], name: "index_ruby_methods_on_module_ref_id"
  end

  create_table "ruby_modules", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.decimal "best_score"
    t.decimal "previous_score"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "game_methods", "games"
  add_foreign_key "game_methods", "ruby_methods"
  add_foreign_key "games", "users"
  add_foreign_key "ruby_methods", "ruby_modules", column: "module_ref_id"
end
