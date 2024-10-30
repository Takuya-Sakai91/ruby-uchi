# frozen_string_literal: true

class GamesController < ApplicationController
  before_action :authenticate_user!, only: %i[finish post methods]

  def show
    @game = Game.find(params[:id])
  end

  def new
    @game = Game.new
  end

  def create
    @game = if current_user
              current_user.games.create(game_params)
            else
              Game.create(game_params.merge(user_id: nil))
            end

    if @game.persisted?
      render json: { id: @game.id }, status: :created
    else
      render json: { error: 'ゲームの作成に失敗しました' }, status: :unprocessable_entity
    end
  end

  def finish; end

  def post; end

  def methods; end

  private

  def game_params
    {
      remaining_time: 60,
      score: 0,
      correct_count: 0,
      wrong_count: 0
    }
  end
end
