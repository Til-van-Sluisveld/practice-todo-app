class HomeController < ApplicationController
  def index
    @todo = Todo.all
    render json: @todo
  end
end
