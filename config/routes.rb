Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :movies
    end
  end

  get '*path', to: 'pages#index', via: :all
end
