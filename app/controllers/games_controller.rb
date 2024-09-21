# frozen_string_literal: true

class GamesController < ApplicationController
  before_action :authenticate_user!, only: %i[ create show finish post methods]

  def show; end

  def new; end

  def create; end

  def finish; end

  def post; end

  def methods; end
end
