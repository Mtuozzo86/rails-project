Rails.application.routes.draw do

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :blogs, only: [:index, :create, :destroy]
  resources :users, only: [:create]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # get "/content", to: "blogs#index"
  patch "/updateparagraph/:id", to: "blogs#update"

  # SETTING SESSIONS
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
