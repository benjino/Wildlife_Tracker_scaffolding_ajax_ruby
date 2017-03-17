Rails.application.routes.draw do
  resources :sightings do
    get :get_sightings, on: :collection
  end
  resources :animals
  get "calendar" => "animals#calendar"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'animals#index'
end
