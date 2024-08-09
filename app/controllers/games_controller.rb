# frozen_string_literal: true

class GamesController < ApplicationController
  before_action :authenticate_user!, only: %i[new create show finish post methods]

  def new; end

  def create; end

  def show; end

  def finish; end

  def post; end

  def methods; end
end
