Rails.application.routes.draw do

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :blogs, only: [:create, :destroy]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/content", to: "blogs#index"
  # post "/login", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  patch "/updateparagraph/:id", to: "blogs#update"
end
