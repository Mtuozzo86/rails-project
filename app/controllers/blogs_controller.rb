class BlogsController < ApplicationController
  def index
    blogs = Blog.all
    render json: blogs.order(created_at: :asc)
  end

  # POST NEW BLOG

  def create
    return render json: { errors: ["Please login to post"] }, status: :unauthorized unless session.include? :user_id
    user = User.find_by(id: session[:user_id])
    blog = Blog.create!(title: params[:title], thought: params[:thought], user_id: user.id, username: params[:username])
    render json: blog
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def update
    blog = Blog.find_by(id: params[:id])
    if blog
      blog.update(thought: params[:thought])
      render json: blog
    else
      render json: { error: "error updating thoughts" }, status: :unprocessable_entity
    end
  end

  def destroy
    blog = Blog.find_by(id: params[:id])
    blog.destroy
    head :no_content
  end

  private

  def blog_params
    params.permit(:title, :thought, :created_at)
  end
end
