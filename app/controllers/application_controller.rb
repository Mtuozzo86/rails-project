class ApplicationController < ActionController::API
  include ActionController::Cookies

  # private

  # def authorize(thing)
  #   return render json: { error: "Please login to post" }, status: :unauthorized unless session.include? :user_id
  # end
end
