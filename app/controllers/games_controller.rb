# frozen_string_literal: true

class GamesController < ApplicationController
  before_action :authenticate_user!, only: %i[show finish post methods]

  def show
    @game = Game.find(params[:id])
  end

  def new
    @game = Game.new
  end

  def create
    @game = current_user.games.create(
      remaining_time: 60,
      score: 0,
      correct_count: 0,
      wrong_count: 0
    )
    if @game.persisted?
      redirect_to game_path(@game)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def finish; end

  def post; end

  def methods; end
end
