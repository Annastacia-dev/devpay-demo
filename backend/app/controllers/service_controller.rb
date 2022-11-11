class ServiceController < Sinatra::Base

    set :default_content_type, 'application/json'

    get'/services' do 
        @services = Service.all
        @services.to_json
    end

    get '/services/:id' do
        @service = Service.find(params[:id])
        @service.to_json
    end

    post '/services' do
        @service = Service.create(
            name: params[:name],
            description: params[:description],
            rate_per_hour: params[:rate_per_hour],
            client_id: params[:client_id],
            developer_id: params[:developer_id],
        )
        @service.to_json
    end

    patch '/services/:id' do
        @service = Service.find(params[:id])
        @service.update(
            name: params[:name],
            description: params[:description],
            rate_per_hour: params[:rate_per_hour],
            client_id: params[:client_id],
            developer_id: params[:developer_id],
        )
        @service.to_json
    end

    delete '/services/:id' do
        @service = Service.find(params[:id])
        @service.destroy
        @service.to_json
    end



end
